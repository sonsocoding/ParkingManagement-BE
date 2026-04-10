export const formatSuccess = (data, message = null) => {
  const response = { status: "success", data };
  if (message) {
    response.message = message;
  }
  return response;
};

export const formatError = (message) => {
  return { status: "error", message };
};
