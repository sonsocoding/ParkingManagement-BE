import { VNPay, ignoreLogger, dateFormat } from "vnpay";
import { HashAlgorithm, ProductCode, VnpLocale } from "vnpay/enums";

const DEFAULT_EXPIRE_MINUTES = 15;
const DEFAULT_RETURN_PATH = "/api/payments/vnpay-return";

const getRequiredEnv = (name) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is required for VNPay integration`);
  }
  return value;
};

const getBaseUrl = (req) => {
  const configured = process.env.BACKEND_URL;
  if (configured) {
    return configured.replace(/\/+$/, "");
  }

  const protocol =
    req.headers["x-forwarded-proto"]?.split(",")[0]?.trim() ||
    req.protocol ||
    "http";
  const host = req.headers["x-forwarded-host"] || req.get("host");

  if (!host) {
    throw new Error(
      "BACKEND_URL is required when host headers are unavailable",
    );
  }

  return `${protocol}://${host}`;
};

const getReturnUrl = (req) => {
  const configured = process.env.VNPAY_RETURN_URL;
  if (configured) {
    return configured;
  }

  return `${getBaseUrl(req)}${DEFAULT_RETURN_PATH}`;
};

const getExpireMinutes = () => {
  const parsed = Number(process.env.VNPAY_PAYMENT_EXPIRE_MINUTES);
  return Number.isFinite(parsed) && parsed > 0
    ? parsed
    : DEFAULT_EXPIRE_MINUTES;
};

const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }

  return req.ip || req.socket?.remoteAddress || "127.0.0.1";
};

let cachedClient = null;

const getVnpayClient = () => {
  if (cachedClient) {
    return cachedClient;
  }

  cachedClient = new VNPay({
    tmnCode: getRequiredEnv("VNPAY_TMN_CODE"),
    secureSecret: getRequiredEnv("VNPAY_SECURE_SECRET"),
    testMode: true,
    hashAlgorithm: HashAlgorithm.SHA512,
    enableLog: false,
    loggerFn: ignoreLogger,
  });

  return cachedClient;
};

const buildVnpayPaymentUrl = ({
  req,
  paymentId,
  amount,
  orderInfo,
  orderType = ProductCode.Other,
}) => {
  const expiresAt = new Date(Date.now() + getExpireMinutes() * 60 * 1000);
  const paymentUrl = getVnpayClient().buildPaymentUrl({
    vnp_TxnRef: paymentId, // this is how vnpay later point back to exact payment in db
    vnp_Amount: Number(amount),
    vnp_IpAddr: getClientIp(req),
    vnp_ReturnUrl: getReturnUrl(req),
    vnp_OrderInfo: orderInfo,
    vnp_OrderType: orderType,
    vnp_Locale:
      process.env.VNPAY_LOCALE === VnpLocale.EN ? VnpLocale.EN : VnpLocale.VN,
    vnp_ExpireDate: dateFormat(expiresAt, "yyyyMMddHHmmss"),
  });

  return {
    paymentUrl,
    expiresAt,
  };
};

// check vnpay secure hash, if checksum wrong, be reject it
const verifyVnpayResponse = (query) => {
  return getVnpayClient().verifyIpnCall(query);
};

export { buildVnpayPaymentUrl, verifyVnpayResponse, getExpireMinutes };
