
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model ParkingLot
 * 
 */
export type ParkingLot = $Result.DefaultSelection<Prisma.$ParkingLotPayload>
/**
 * Model ParkingSlot
 * 
 */
export type ParkingSlot = $Result.DefaultSelection<Prisma.$ParkingSlotPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model ParkingRecord
 * 
 */
export type ParkingRecord = $Result.DefaultSelection<Prisma.$ParkingRecordPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model MonthlyPass
 * 
 */
export type MonthlyPass = $Result.DefaultSelection<Prisma.$MonthlyPassPayload>
/**
 * Model AdminLog
 * 
 */
export type AdminLog = $Result.DefaultSelection<Prisma.$AdminLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const VehicleType: {
  CAR: 'CAR',
  MOTORBIKE: 'MOTORBIKE'
};

export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType]


export const SlotStatus: {
  AVAILABLE: 'AVAILABLE',
  OCCUPIED: 'OCCUPIED',
  RESERVED: 'RESERVED',
  MAINTENANCE: 'MAINTENANCE'
};

export type SlotStatus = (typeof SlotStatus)[keyof typeof SlotStatus]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const PaymentMethod: {
  CASH: 'CASH',
  CARD: 'CARD',
  MOMO: 'MOMO',
  VNPAY: 'VNPAY'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PassStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED'
};

export type PassStatus = (typeof PassStatus)[keyof typeof PassStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type VehicleType = $Enums.VehicleType

export const VehicleType: typeof $Enums.VehicleType

export type SlotStatus = $Enums.SlotStatus

export const SlotStatus: typeof $Enums.SlotStatus

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PassStatus = $Enums.PassStatus

export const PassStatus: typeof $Enums.PassStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingLot`: Exposes CRUD operations for the **ParkingLot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingLots
    * const parkingLots = await prisma.parkingLot.findMany()
    * ```
    */
  get parkingLot(): Prisma.ParkingLotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingSlot`: Exposes CRUD operations for the **ParkingSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingSlots
    * const parkingSlots = await prisma.parkingSlot.findMany()
    * ```
    */
  get parkingSlot(): Prisma.ParkingSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingRecord`: Exposes CRUD operations for the **ParkingRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingRecords
    * const parkingRecords = await prisma.parkingRecord.findMany()
    * ```
    */
  get parkingRecord(): Prisma.ParkingRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthlyPass`: Exposes CRUD operations for the **MonthlyPass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyPasses
    * const monthlyPasses = await prisma.monthlyPass.findMany()
    * ```
    */
  get monthlyPass(): Prisma.MonthlyPassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminLog`: Exposes CRUD operations for the **AdminLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminLogs
    * const adminLogs = await prisma.adminLog.findMany()
    * ```
    */
  get adminLog(): Prisma.AdminLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Vehicle: 'Vehicle',
    ParkingLot: 'ParkingLot',
    ParkingSlot: 'ParkingSlot',
    Booking: 'Booking',
    ParkingRecord: 'ParkingRecord',
    Payment: 'Payment',
    MonthlyPass: 'MonthlyPass',
    AdminLog: 'AdminLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vehicle" | "parkingLot" | "parkingSlot" | "booking" | "parkingRecord" | "payment" | "monthlyPass" | "adminLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      ParkingLot: {
        payload: Prisma.$ParkingLotPayload<ExtArgs>
        fields: Prisma.ParkingLotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingLotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingLotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          findFirst: {
            args: Prisma.ParkingLotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingLotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          findMany: {
            args: Prisma.ParkingLotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>[]
          }
          create: {
            args: Prisma.ParkingLotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          createMany: {
            args: Prisma.ParkingLotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingLotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>[]
          }
          delete: {
            args: Prisma.ParkingLotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          update: {
            args: Prisma.ParkingLotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          deleteMany: {
            args: Prisma.ParkingLotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingLotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingLotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>[]
          }
          upsert: {
            args: Prisma.ParkingLotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          aggregate: {
            args: Prisma.ParkingLotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingLot>
          }
          groupBy: {
            args: Prisma.ParkingLotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingLotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingLotCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingLotCountAggregateOutputType> | number
          }
        }
      }
      ParkingSlot: {
        payload: Prisma.$ParkingSlotPayload<ExtArgs>
        fields: Prisma.ParkingSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          findFirst: {
            args: Prisma.ParkingSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          findMany: {
            args: Prisma.ParkingSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>[]
          }
          create: {
            args: Prisma.ParkingSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          createMany: {
            args: Prisma.ParkingSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>[]
          }
          delete: {
            args: Prisma.ParkingSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          update: {
            args: Prisma.ParkingSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          deleteMany: {
            args: Prisma.ParkingSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>[]
          }
          upsert: {
            args: Prisma.ParkingSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          aggregate: {
            args: Prisma.ParkingSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingSlot>
          }
          groupBy: {
            args: Prisma.ParkingSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingSlotCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingSlotCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      ParkingRecord: {
        payload: Prisma.$ParkingRecordPayload<ExtArgs>
        fields: Prisma.ParkingRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          findFirst: {
            args: Prisma.ParkingRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          findMany: {
            args: Prisma.ParkingRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>[]
          }
          create: {
            args: Prisma.ParkingRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          createMany: {
            args: Prisma.ParkingRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>[]
          }
          delete: {
            args: Prisma.ParkingRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          update: {
            args: Prisma.ParkingRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          deleteMany: {
            args: Prisma.ParkingRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>[]
          }
          upsert: {
            args: Prisma.ParkingRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingRecordPayload>
          }
          aggregate: {
            args: Prisma.ParkingRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingRecord>
          }
          groupBy: {
            args: Prisma.ParkingRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingRecordCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      MonthlyPass: {
        payload: Prisma.$MonthlyPassPayload<ExtArgs>
        fields: Prisma.MonthlyPassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyPassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyPassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyPassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyPassPayload>
          }
          findFirst: {
            args: Prisma.MonthlyPassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyPassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyPassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyPassPayload>
          }
          findMany: {
            args: Prisma.MonthlyPassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyPassPayload>[]
          }
          create: {
            args: Prisma.MonthlyPassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyPassPayload>
          }
          createMany: {
            args: Prisma.MonthlyPassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthlyPassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyPassPayload>[]
          }
          delete: {
            args: Prisma.MonthlyPassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyPassPayload>
          }
          update: {
            args: Prisma.MonthlyPassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyPassPayload>
          }
          deleteMany: {
            args: Prisma.MonthlyPassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyPassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonthlyPassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyPassPayload>[]
          }
          upsert: {
            args: Prisma.MonthlyPassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyPassPayload>
          }
          aggregate: {
            args: Prisma.MonthlyPassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyPass>
          }
          groupBy: {
            args: Prisma.MonthlyPassGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyPassGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyPassCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyPassCountAggregateOutputType> | number
          }
        }
      }
      AdminLog: {
        payload: Prisma.$AdminLogPayload<ExtArgs>
        fields: Prisma.AdminLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          findFirst: {
            args: Prisma.AdminLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          findMany: {
            args: Prisma.AdminLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>[]
          }
          create: {
            args: Prisma.AdminLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          createMany: {
            args: Prisma.AdminLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>[]
          }
          delete: {
            args: Prisma.AdminLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          update: {
            args: Prisma.AdminLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          deleteMany: {
            args: Prisma.AdminLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>[]
          }
          upsert: {
            args: Prisma.AdminLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          aggregate: {
            args: Prisma.AdminLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminLog>
          }
          groupBy: {
            args: Prisma.AdminLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminLogCountArgs<ExtArgs>
            result: $Utils.Optional<AdminLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vehicle?: VehicleOmit
    parkingLot?: ParkingLotOmit
    parkingSlot?: ParkingSlotOmit
    booking?: BookingOmit
    parkingRecord?: ParkingRecordOmit
    payment?: PaymentOmit
    monthlyPass?: MonthlyPassOmit
    adminLog?: AdminLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    vehicles: number
    bookings: number
    payments: number
    monthlyPasses: number
    adminLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | UserCountOutputTypeCountVehiclesArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    monthlyPasses?: boolean | UserCountOutputTypeCountMonthlyPassesArgs
    adminLogs?: boolean | UserCountOutputTypeCountAdminLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMonthlyPassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyPassWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdminLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminLogWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    bookings: number
    parkingRecords: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | VehicleCountOutputTypeCountBookingsArgs
    parkingRecords?: boolean | VehicleCountOutputTypeCountParkingRecordsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountParkingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingRecordWhereInput
  }


  /**
   * Count Type ParkingLotCountOutputType
   */

  export type ParkingLotCountOutputType = {
    slots: number
    bookings: number
    parkingRecords: number
    monthlyPasses: number
  }

  export type ParkingLotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slots?: boolean | ParkingLotCountOutputTypeCountSlotsArgs
    bookings?: boolean | ParkingLotCountOutputTypeCountBookingsArgs
    parkingRecords?: boolean | ParkingLotCountOutputTypeCountParkingRecordsArgs
    monthlyPasses?: boolean | ParkingLotCountOutputTypeCountMonthlyPassesArgs
  }

  // Custom InputTypes
  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotCountOutputType
     */
    select?: ParkingLotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSlotWhereInput
  }

  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeCountParkingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingRecordWhereInput
  }

  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeCountMonthlyPassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyPassWhereInput
  }


  /**
   * Count Type ParkingSlotCountOutputType
   */

  export type ParkingSlotCountOutputType = {
    bookings: number
    parkingRecords: number
  }

  export type ParkingSlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ParkingSlotCountOutputTypeCountBookingsArgs
    parkingRecords?: boolean | ParkingSlotCountOutputTypeCountParkingRecordsArgs
  }

  // Custom InputTypes
  /**
   * ParkingSlotCountOutputType without action
   */
  export type ParkingSlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotCountOutputType
     */
    select?: ParkingSlotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingSlotCountOutputType without action
   */
  export type ParkingSlotCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * ParkingSlotCountOutputType without action
   */
  export type ParkingSlotCountOutputTypeCountParkingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingRecordWhereInput
  }


  /**
   * Count Type ParkingRecordCountOutputType
   */

  export type ParkingRecordCountOutputType = {
    bookings: number
  }

  export type ParkingRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ParkingRecordCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ParkingRecordCountOutputType without action
   */
  export type ParkingRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecordCountOutputType
     */
    select?: ParkingRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingRecordCountOutputType without action
   */
  export type ParkingRecordCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    phone: string | null
    fullName: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    phone: string | null
    fullName: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    phone: number
    fullName: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phone?: true
    fullName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phone?: true
    fullName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phone?: true
    fullName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    phone: string | null
    fullName: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    fullName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    monthlyPasses?: boolean | User$monthlyPassesArgs<ExtArgs>
    adminLogs?: boolean | User$adminLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    fullName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    fullName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    fullName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "phone" | "fullName" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    monthlyPasses?: boolean | User$monthlyPassesArgs<ExtArgs>
    adminLogs?: boolean | User$adminLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      monthlyPasses: Prisma.$MonthlyPassPayload<ExtArgs>[]
      adminLogs: Prisma.$AdminLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      phone: string | null
      fullName: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends User$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, User$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthlyPasses<T extends User$monthlyPassesArgs<ExtArgs> = {}>(args?: Subset<T, User$monthlyPassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyPassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adminLogs<T extends User$adminLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$adminLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.vehicles
   */
  export type User$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.monthlyPasses
   */
  export type User$monthlyPassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyPass
     */
    select?: MonthlyPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyPass
     */
    omit?: MonthlyPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyPassInclude<ExtArgs> | null
    where?: MonthlyPassWhereInput
    orderBy?: MonthlyPassOrderByWithRelationInput | MonthlyPassOrderByWithRelationInput[]
    cursor?: MonthlyPassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyPassScalarFieldEnum | MonthlyPassScalarFieldEnum[]
  }

  /**
   * User.adminLogs
   */
  export type User$adminLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    where?: AdminLogWhereInput
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    cursor?: AdminLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminLogScalarFieldEnum | AdminLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    plateNumber: string | null
    vehicleType: $Enums.VehicleType | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    plateNumber: string | null
    vehicleType: $Enums.VehicleType | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    userId: number
    plateNumber: number
    vehicleType: number
    color: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleMinAggregateInputType = {
    id?: true
    userId?: true
    plateNumber?: true
    vehicleType?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    userId?: true
    plateNumber?: true
    vehicleType?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    userId?: true
    plateNumber?: true
    vehicleType?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    userId: string
    plateNumber: string
    vehicleType: $Enums.VehicleType
    color: string | null
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plateNumber?: boolean
    vehicleType?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Vehicle$bookingsArgs<ExtArgs>
    parkingRecords?: boolean | Vehicle$parkingRecordsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plateNumber?: boolean
    vehicleType?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plateNumber?: boolean
    vehicleType?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    userId?: boolean
    plateNumber?: boolean
    vehicleType?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "plateNumber" | "vehicleType" | "color" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Vehicle$bookingsArgs<ExtArgs>
    parkingRecords?: boolean | Vehicle$parkingRecordsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      parkingRecords: Prisma.$ParkingRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      plateNumber: string
      vehicleType: $Enums.VehicleType
      color: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Vehicle$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parkingRecords<T extends Vehicle$parkingRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$parkingRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly userId: FieldRef<"Vehicle", 'String'>
    readonly plateNumber: FieldRef<"Vehicle", 'String'>
    readonly vehicleType: FieldRef<"Vehicle", 'VehicleType'>
    readonly color: FieldRef<"Vehicle", 'String'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.bookings
   */
  export type Vehicle$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Vehicle.parkingRecords
   */
  export type Vehicle$parkingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    where?: ParkingRecordWhereInput
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    cursor?: ParkingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model ParkingLot
   */

  export type AggregateParkingLot = {
    _count: ParkingLotCountAggregateOutputType | null
    _avg: ParkingLotAvgAggregateOutputType | null
    _sum: ParkingLotSumAggregateOutputType | null
    _min: ParkingLotMinAggregateOutputType | null
    _max: ParkingLotMaxAggregateOutputType | null
  }

  export type ParkingLotAvgAggregateOutputType = {
    totalSlots: number | null
    hourlyRate: Decimal | null
  }

  export type ParkingLotSumAggregateOutputType = {
    totalSlots: number | null
    hourlyRate: Decimal | null
  }

  export type ParkingLotMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    totalSlots: number | null
    hourlyRate: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingLotMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    totalSlots: number | null
    hourlyRate: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingLotCountAggregateOutputType = {
    id: number
    name: number
    address: number
    totalSlots: number
    zones: number
    hourlyRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkingLotAvgAggregateInputType = {
    totalSlots?: true
    hourlyRate?: true
  }

  export type ParkingLotSumAggregateInputType = {
    totalSlots?: true
    hourlyRate?: true
  }

  export type ParkingLotMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    totalSlots?: true
    hourlyRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingLotMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    totalSlots?: true
    hourlyRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingLotCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    totalSlots?: true
    zones?: true
    hourlyRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkingLotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLot to aggregate.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingLots
    **/
    _count?: true | ParkingLotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingLotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingLotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingLotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingLotMaxAggregateInputType
  }

  export type GetParkingLotAggregateType<T extends ParkingLotAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingLot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingLot[P]>
      : GetScalarType<T[P], AggregateParkingLot[P]>
  }




  export type ParkingLotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingLotWhereInput
    orderBy?: ParkingLotOrderByWithAggregationInput | ParkingLotOrderByWithAggregationInput[]
    by: ParkingLotScalarFieldEnum[] | ParkingLotScalarFieldEnum
    having?: ParkingLotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingLotCountAggregateInputType | true
    _avg?: ParkingLotAvgAggregateInputType
    _sum?: ParkingLotSumAggregateInputType
    _min?: ParkingLotMinAggregateInputType
    _max?: ParkingLotMaxAggregateInputType
  }

  export type ParkingLotGroupByOutputType = {
    id: string
    name: string
    address: string
    totalSlots: number
    zones: JsonValue | null
    hourlyRate: Decimal
    createdAt: Date
    updatedAt: Date
    _count: ParkingLotCountAggregateOutputType | null
    _avg: ParkingLotAvgAggregateOutputType | null
    _sum: ParkingLotSumAggregateOutputType | null
    _min: ParkingLotMinAggregateOutputType | null
    _max: ParkingLotMaxAggregateOutputType | null
  }

  type GetParkingLotGroupByPayload<T extends ParkingLotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingLotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingLotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingLotGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingLotGroupByOutputType[P]>
        }
      >
    >


  export type ParkingLotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    totalSlots?: boolean
    zones?: boolean
    hourlyRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slots?: boolean | ParkingLot$slotsArgs<ExtArgs>
    bookings?: boolean | ParkingLot$bookingsArgs<ExtArgs>
    parkingRecords?: boolean | ParkingLot$parkingRecordsArgs<ExtArgs>
    monthlyPasses?: boolean | ParkingLot$monthlyPassesArgs<ExtArgs>
    _count?: boolean | ParkingLotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingLot"]>

  export type ParkingLotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    totalSlots?: boolean
    zones?: boolean
    hourlyRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parkingLot"]>

  export type ParkingLotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    totalSlots?: boolean
    zones?: boolean
    hourlyRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parkingLot"]>

  export type ParkingLotSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    totalSlots?: boolean
    zones?: boolean
    hourlyRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkingLotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "totalSlots" | "zones" | "hourlyRate" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingLot"]>
  export type ParkingLotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slots?: boolean | ParkingLot$slotsArgs<ExtArgs>
    bookings?: boolean | ParkingLot$bookingsArgs<ExtArgs>
    parkingRecords?: boolean | ParkingLot$parkingRecordsArgs<ExtArgs>
    monthlyPasses?: boolean | ParkingLot$monthlyPassesArgs<ExtArgs>
    _count?: boolean | ParkingLotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingLotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParkingLotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParkingLotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingLot"
    objects: {
      slots: Prisma.$ParkingSlotPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      parkingRecords: Prisma.$ParkingRecordPayload<ExtArgs>[]
      monthlyPasses: Prisma.$MonthlyPassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      totalSlots: number
      zones: Prisma.JsonValue | null
      hourlyRate: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parkingLot"]>
    composites: {}
  }

  type ParkingLotGetPayload<S extends boolean | null | undefined | ParkingLotDefaultArgs> = $Result.GetResult<Prisma.$ParkingLotPayload, S>

  type ParkingLotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingLotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingLotCountAggregateInputType | true
    }

  export interface ParkingLotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingLot'], meta: { name: 'ParkingLot' } }
    /**
     * Find zero or one ParkingLot that matches the filter.
     * @param {ParkingLotFindUniqueArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingLotFindUniqueArgs>(args: SelectSubset<T, ParkingLotFindUniqueArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingLot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingLotFindUniqueOrThrowArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingLotFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingLotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingLot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotFindFirstArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingLotFindFirstArgs>(args?: SelectSubset<T, ParkingLotFindFirstArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingLot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotFindFirstOrThrowArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingLotFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingLotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingLots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingLots
     * const parkingLots = await prisma.parkingLot.findMany()
     * 
     * // Get first 10 ParkingLots
     * const parkingLots = await prisma.parkingLot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingLotWithIdOnly = await prisma.parkingLot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingLotFindManyArgs>(args?: SelectSubset<T, ParkingLotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingLot.
     * @param {ParkingLotCreateArgs} args - Arguments to create a ParkingLot.
     * @example
     * // Create one ParkingLot
     * const ParkingLot = await prisma.parkingLot.create({
     *   data: {
     *     // ... data to create a ParkingLot
     *   }
     * })
     * 
     */
    create<T extends ParkingLotCreateArgs>(args: SelectSubset<T, ParkingLotCreateArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingLots.
     * @param {ParkingLotCreateManyArgs} args - Arguments to create many ParkingLots.
     * @example
     * // Create many ParkingLots
     * const parkingLot = await prisma.parkingLot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingLotCreateManyArgs>(args?: SelectSubset<T, ParkingLotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingLots and returns the data saved in the database.
     * @param {ParkingLotCreateManyAndReturnArgs} args - Arguments to create many ParkingLots.
     * @example
     * // Create many ParkingLots
     * const parkingLot = await prisma.parkingLot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingLots and only return the `id`
     * const parkingLotWithIdOnly = await prisma.parkingLot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingLotCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingLotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingLot.
     * @param {ParkingLotDeleteArgs} args - Arguments to delete one ParkingLot.
     * @example
     * // Delete one ParkingLot
     * const ParkingLot = await prisma.parkingLot.delete({
     *   where: {
     *     // ... filter to delete one ParkingLot
     *   }
     * })
     * 
     */
    delete<T extends ParkingLotDeleteArgs>(args: SelectSubset<T, ParkingLotDeleteArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingLot.
     * @param {ParkingLotUpdateArgs} args - Arguments to update one ParkingLot.
     * @example
     * // Update one ParkingLot
     * const parkingLot = await prisma.parkingLot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingLotUpdateArgs>(args: SelectSubset<T, ParkingLotUpdateArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingLots.
     * @param {ParkingLotDeleteManyArgs} args - Arguments to filter ParkingLots to delete.
     * @example
     * // Delete a few ParkingLots
     * const { count } = await prisma.parkingLot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingLotDeleteManyArgs>(args?: SelectSubset<T, ParkingLotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingLots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingLots
     * const parkingLot = await prisma.parkingLot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingLotUpdateManyArgs>(args: SelectSubset<T, ParkingLotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingLots and returns the data updated in the database.
     * @param {ParkingLotUpdateManyAndReturnArgs} args - Arguments to update many ParkingLots.
     * @example
     * // Update many ParkingLots
     * const parkingLot = await prisma.parkingLot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingLots and only return the `id`
     * const parkingLotWithIdOnly = await prisma.parkingLot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkingLotUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingLotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingLot.
     * @param {ParkingLotUpsertArgs} args - Arguments to update or create a ParkingLot.
     * @example
     * // Update or create a ParkingLot
     * const parkingLot = await prisma.parkingLot.upsert({
     *   create: {
     *     // ... data to create a ParkingLot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingLot we want to update
     *   }
     * })
     */
    upsert<T extends ParkingLotUpsertArgs>(args: SelectSubset<T, ParkingLotUpsertArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingLots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotCountArgs} args - Arguments to filter ParkingLots to count.
     * @example
     * // Count the number of ParkingLots
     * const count = await prisma.parkingLot.count({
     *   where: {
     *     // ... the filter for the ParkingLots we want to count
     *   }
     * })
    **/
    count<T extends ParkingLotCountArgs>(
      args?: Subset<T, ParkingLotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingLotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingLot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingLotAggregateArgs>(args: Subset<T, ParkingLotAggregateArgs>): Prisma.PrismaPromise<GetParkingLotAggregateType<T>>

    /**
     * Group by ParkingLot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingLotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingLotGroupByArgs['orderBy'] }
        : { orderBy?: ParkingLotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingLotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingLotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingLot model
   */
  readonly fields: ParkingLotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingLot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingLotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    slots<T extends ParkingLot$slotsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLot$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends ParkingLot$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLot$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parkingRecords<T extends ParkingLot$parkingRecordsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLot$parkingRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthlyPasses<T extends ParkingLot$monthlyPassesArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLot$monthlyPassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyPassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingLot model
   */
  interface ParkingLotFieldRefs {
    readonly id: FieldRef<"ParkingLot", 'String'>
    readonly name: FieldRef<"ParkingLot", 'String'>
    readonly address: FieldRef<"ParkingLot", 'String'>
    readonly totalSlots: FieldRef<"ParkingLot", 'Int'>
    readonly zones: FieldRef<"ParkingLot", 'Json'>
    readonly hourlyRate: FieldRef<"ParkingLot", 'Decimal'>
    readonly createdAt: FieldRef<"ParkingLot", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingLot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkingLot findUnique
   */
  export type ParkingLotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot findUniqueOrThrow
   */
  export type ParkingLotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot findFirst
   */
  export type ParkingLotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLots.
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLots.
     */
    distinct?: ParkingLotScalarFieldEnum | ParkingLotScalarFieldEnum[]
  }

  /**
   * ParkingLot findFirstOrThrow
   */
  export type ParkingLotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLots.
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLots.
     */
    distinct?: ParkingLotScalarFieldEnum | ParkingLotScalarFieldEnum[]
  }

  /**
   * ParkingLot findMany
   */
  export type ParkingLotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLots to fetch.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingLots.
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    distinct?: ParkingLotScalarFieldEnum | ParkingLotScalarFieldEnum[]
  }

  /**
   * ParkingLot create
   */
  export type ParkingLotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingLot.
     */
    data: XOR<ParkingLotCreateInput, ParkingLotUncheckedCreateInput>
  }

  /**
   * ParkingLot createMany
   */
  export type ParkingLotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingLots.
     */
    data: ParkingLotCreateManyInput | ParkingLotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingLot createManyAndReturn
   */
  export type ParkingLotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingLots.
     */
    data: ParkingLotCreateManyInput | ParkingLotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingLot update
   */
  export type ParkingLotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingLot.
     */
    data: XOR<ParkingLotUpdateInput, ParkingLotUncheckedUpdateInput>
    /**
     * Choose, which ParkingLot to update.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot updateMany
   */
  export type ParkingLotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingLots.
     */
    data: XOR<ParkingLotUpdateManyMutationInput, ParkingLotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingLots to update
     */
    where?: ParkingLotWhereInput
    /**
     * Limit how many ParkingLots to update.
     */
    limit?: number
  }

  /**
   * ParkingLot updateManyAndReturn
   */
  export type ParkingLotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * The data used to update ParkingLots.
     */
    data: XOR<ParkingLotUpdateManyMutationInput, ParkingLotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingLots to update
     */
    where?: ParkingLotWhereInput
    /**
     * Limit how many ParkingLots to update.
     */
    limit?: number
  }

  /**
   * ParkingLot upsert
   */
  export type ParkingLotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingLot to update in case it exists.
     */
    where: ParkingLotWhereUniqueInput
    /**
     * In case the ParkingLot found by the `where` argument doesn't exist, create a new ParkingLot with this data.
     */
    create: XOR<ParkingLotCreateInput, ParkingLotUncheckedCreateInput>
    /**
     * In case the ParkingLot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingLotUpdateInput, ParkingLotUncheckedUpdateInput>
  }

  /**
   * ParkingLot delete
   */
  export type ParkingLotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter which ParkingLot to delete.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot deleteMany
   */
  export type ParkingLotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLots to delete
     */
    where?: ParkingLotWhereInput
    /**
     * Limit how many ParkingLots to delete.
     */
    limit?: number
  }

  /**
   * ParkingLot.slots
   */
  export type ParkingLot$slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    where?: ParkingSlotWhereInput
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    cursor?: ParkingSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingLot.bookings
   */
  export type ParkingLot$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * ParkingLot.parkingRecords
   */
  export type ParkingLot$parkingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    where?: ParkingRecordWhereInput
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    cursor?: ParkingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * ParkingLot.monthlyPasses
   */
  export type ParkingLot$monthlyPassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyPass
     */
    select?: MonthlyPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyPass
     */
    omit?: MonthlyPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyPassInclude<ExtArgs> | null
    where?: MonthlyPassWhereInput
    orderBy?: MonthlyPassOrderByWithRelationInput | MonthlyPassOrderByWithRelationInput[]
    cursor?: MonthlyPassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyPassScalarFieldEnum | MonthlyPassScalarFieldEnum[]
  }

  /**
   * ParkingLot without action
   */
  export type ParkingLotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
  }


  /**
   * Model ParkingSlot
   */

  export type AggregateParkingSlot = {
    _count: ParkingSlotCountAggregateOutputType | null
    _min: ParkingSlotMinAggregateOutputType | null
    _max: ParkingSlotMaxAggregateOutputType | null
  }

  export type ParkingSlotMinAggregateOutputType = {
    id: string | null
    parkingLotId: string | null
    zoneId: string | null
    slotNumber: string | null
    vehicleType: $Enums.VehicleType | null
    status: $Enums.SlotStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingSlotMaxAggregateOutputType = {
    id: string | null
    parkingLotId: string | null
    zoneId: string | null
    slotNumber: string | null
    vehicleType: $Enums.VehicleType | null
    status: $Enums.SlotStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingSlotCountAggregateOutputType = {
    id: number
    parkingLotId: number
    zoneId: number
    slotNumber: number
    vehicleType: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkingSlotMinAggregateInputType = {
    id?: true
    parkingLotId?: true
    zoneId?: true
    slotNumber?: true
    vehicleType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingSlotMaxAggregateInputType = {
    id?: true
    parkingLotId?: true
    zoneId?: true
    slotNumber?: true
    vehicleType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingSlotCountAggregateInputType = {
    id?: true
    parkingLotId?: true
    zoneId?: true
    slotNumber?: true
    vehicleType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkingSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSlot to aggregate.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingSlots
    **/
    _count?: true | ParkingSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingSlotMaxAggregateInputType
  }

  export type GetParkingSlotAggregateType<T extends ParkingSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingSlot[P]>
      : GetScalarType<T[P], AggregateParkingSlot[P]>
  }




  export type ParkingSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSlotWhereInput
    orderBy?: ParkingSlotOrderByWithAggregationInput | ParkingSlotOrderByWithAggregationInput[]
    by: ParkingSlotScalarFieldEnum[] | ParkingSlotScalarFieldEnum
    having?: ParkingSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingSlotCountAggregateInputType | true
    _min?: ParkingSlotMinAggregateInputType
    _max?: ParkingSlotMaxAggregateInputType
  }

  export type ParkingSlotGroupByOutputType = {
    id: string
    parkingLotId: string
    zoneId: string
    slotNumber: string
    vehicleType: $Enums.VehicleType
    status: $Enums.SlotStatus
    createdAt: Date
    updatedAt: Date
    _count: ParkingSlotCountAggregateOutputType | null
    _min: ParkingSlotMinAggregateOutputType | null
    _max: ParkingSlotMaxAggregateOutputType | null
  }

  type GetParkingSlotGroupByPayload<T extends ParkingSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingSlotGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingSlotGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parkingLotId?: boolean
    zoneId?: boolean
    slotNumber?: boolean
    vehicleType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    bookings?: boolean | ParkingSlot$bookingsArgs<ExtArgs>
    parkingRecords?: boolean | ParkingSlot$parkingRecordsArgs<ExtArgs>
    _count?: boolean | ParkingSlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSlot"]>

  export type ParkingSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parkingLotId?: boolean
    zoneId?: boolean
    slotNumber?: boolean
    vehicleType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSlot"]>

  export type ParkingSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parkingLotId?: boolean
    zoneId?: boolean
    slotNumber?: boolean
    vehicleType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSlot"]>

  export type ParkingSlotSelectScalar = {
    id?: boolean
    parkingLotId?: boolean
    zoneId?: boolean
    slotNumber?: boolean
    vehicleType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkingSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parkingLotId" | "zoneId" | "slotNumber" | "vehicleType" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingSlot"]>
  export type ParkingSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    bookings?: boolean | ParkingSlot$bookingsArgs<ExtArgs>
    parkingRecords?: boolean | ParkingSlot$parkingRecordsArgs<ExtArgs>
    _count?: boolean | ParkingSlotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }
  export type ParkingSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }

  export type $ParkingSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingSlot"
    objects: {
      parkingLot: Prisma.$ParkingLotPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      parkingRecords: Prisma.$ParkingRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parkingLotId: string
      zoneId: string
      slotNumber: string
      vehicleType: $Enums.VehicleType
      status: $Enums.SlotStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parkingSlot"]>
    composites: {}
  }

  type ParkingSlotGetPayload<S extends boolean | null | undefined | ParkingSlotDefaultArgs> = $Result.GetResult<Prisma.$ParkingSlotPayload, S>

  type ParkingSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingSlotCountAggregateInputType | true
    }

  export interface ParkingSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingSlot'], meta: { name: 'ParkingSlot' } }
    /**
     * Find zero or one ParkingSlot that matches the filter.
     * @param {ParkingSlotFindUniqueArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingSlotFindUniqueArgs>(args: SelectSubset<T, ParkingSlotFindUniqueArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingSlotFindUniqueOrThrowArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotFindFirstArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingSlotFindFirstArgs>(args?: SelectSubset<T, ParkingSlotFindFirstArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotFindFirstOrThrowArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingSlots
     * const parkingSlots = await prisma.parkingSlot.findMany()
     * 
     * // Get first 10 ParkingSlots
     * const parkingSlots = await prisma.parkingSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingSlotWithIdOnly = await prisma.parkingSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingSlotFindManyArgs>(args?: SelectSubset<T, ParkingSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingSlot.
     * @param {ParkingSlotCreateArgs} args - Arguments to create a ParkingSlot.
     * @example
     * // Create one ParkingSlot
     * const ParkingSlot = await prisma.parkingSlot.create({
     *   data: {
     *     // ... data to create a ParkingSlot
     *   }
     * })
     * 
     */
    create<T extends ParkingSlotCreateArgs>(args: SelectSubset<T, ParkingSlotCreateArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingSlots.
     * @param {ParkingSlotCreateManyArgs} args - Arguments to create many ParkingSlots.
     * @example
     * // Create many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingSlotCreateManyArgs>(args?: SelectSubset<T, ParkingSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingSlots and returns the data saved in the database.
     * @param {ParkingSlotCreateManyAndReturnArgs} args - Arguments to create many ParkingSlots.
     * @example
     * // Create many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingSlots and only return the `id`
     * const parkingSlotWithIdOnly = await prisma.parkingSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingSlot.
     * @param {ParkingSlotDeleteArgs} args - Arguments to delete one ParkingSlot.
     * @example
     * // Delete one ParkingSlot
     * const ParkingSlot = await prisma.parkingSlot.delete({
     *   where: {
     *     // ... filter to delete one ParkingSlot
     *   }
     * })
     * 
     */
    delete<T extends ParkingSlotDeleteArgs>(args: SelectSubset<T, ParkingSlotDeleteArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingSlot.
     * @param {ParkingSlotUpdateArgs} args - Arguments to update one ParkingSlot.
     * @example
     * // Update one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingSlotUpdateArgs>(args: SelectSubset<T, ParkingSlotUpdateArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingSlots.
     * @param {ParkingSlotDeleteManyArgs} args - Arguments to filter ParkingSlots to delete.
     * @example
     * // Delete a few ParkingSlots
     * const { count } = await prisma.parkingSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingSlotDeleteManyArgs>(args?: SelectSubset<T, ParkingSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingSlotUpdateManyArgs>(args: SelectSubset<T, ParkingSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSlots and returns the data updated in the database.
     * @param {ParkingSlotUpdateManyAndReturnArgs} args - Arguments to update many ParkingSlots.
     * @example
     * // Update many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingSlots and only return the `id`
     * const parkingSlotWithIdOnly = await prisma.parkingSlot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkingSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingSlot.
     * @param {ParkingSlotUpsertArgs} args - Arguments to update or create a ParkingSlot.
     * @example
     * // Update or create a ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.upsert({
     *   create: {
     *     // ... data to create a ParkingSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingSlot we want to update
     *   }
     * })
     */
    upsert<T extends ParkingSlotUpsertArgs>(args: SelectSubset<T, ParkingSlotUpsertArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotCountArgs} args - Arguments to filter ParkingSlots to count.
     * @example
     * // Count the number of ParkingSlots
     * const count = await prisma.parkingSlot.count({
     *   where: {
     *     // ... the filter for the ParkingSlots we want to count
     *   }
     * })
    **/
    count<T extends ParkingSlotCountArgs>(
      args?: Subset<T, ParkingSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingSlotAggregateArgs>(args: Subset<T, ParkingSlotAggregateArgs>): Prisma.PrismaPromise<GetParkingSlotAggregateType<T>>

    /**
     * Group by ParkingSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingSlotGroupByArgs['orderBy'] }
        : { orderBy?: ParkingSlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingSlot model
   */
  readonly fields: ParkingSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingLot<T extends ParkingLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLotDefaultArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends ParkingSlot$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlot$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parkingRecords<T extends ParkingSlot$parkingRecordsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlot$parkingRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingSlot model
   */
  interface ParkingSlotFieldRefs {
    readonly id: FieldRef<"ParkingSlot", 'String'>
    readonly parkingLotId: FieldRef<"ParkingSlot", 'String'>
    readonly zoneId: FieldRef<"ParkingSlot", 'String'>
    readonly slotNumber: FieldRef<"ParkingSlot", 'String'>
    readonly vehicleType: FieldRef<"ParkingSlot", 'VehicleType'>
    readonly status: FieldRef<"ParkingSlot", 'SlotStatus'>
    readonly createdAt: FieldRef<"ParkingSlot", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingSlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkingSlot findUnique
   */
  export type ParkingSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot findUniqueOrThrow
   */
  export type ParkingSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot findFirst
   */
  export type ParkingSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSlots.
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSlots.
     */
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingSlot findFirstOrThrow
   */
  export type ParkingSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSlots.
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSlots.
     */
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingSlot findMany
   */
  export type ParkingSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlots to fetch.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingSlots.
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingSlot create
   */
  export type ParkingSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingSlot.
     */
    data: XOR<ParkingSlotCreateInput, ParkingSlotUncheckedCreateInput>
  }

  /**
   * ParkingSlot createMany
   */
  export type ParkingSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingSlots.
     */
    data: ParkingSlotCreateManyInput | ParkingSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingSlot createManyAndReturn
   */
  export type ParkingSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingSlots.
     */
    data: ParkingSlotCreateManyInput | ParkingSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSlot update
   */
  export type ParkingSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingSlot.
     */
    data: XOR<ParkingSlotUpdateInput, ParkingSlotUncheckedUpdateInput>
    /**
     * Choose, which ParkingSlot to update.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot updateMany
   */
  export type ParkingSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingSlots.
     */
    data: XOR<ParkingSlotUpdateManyMutationInput, ParkingSlotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSlots to update
     */
    where?: ParkingSlotWhereInput
    /**
     * Limit how many ParkingSlots to update.
     */
    limit?: number
  }

  /**
   * ParkingSlot updateManyAndReturn
   */
  export type ParkingSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * The data used to update ParkingSlots.
     */
    data: XOR<ParkingSlotUpdateManyMutationInput, ParkingSlotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSlots to update
     */
    where?: ParkingSlotWhereInput
    /**
     * Limit how many ParkingSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSlot upsert
   */
  export type ParkingSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingSlot to update in case it exists.
     */
    where: ParkingSlotWhereUniqueInput
    /**
     * In case the ParkingSlot found by the `where` argument doesn't exist, create a new ParkingSlot with this data.
     */
    create: XOR<ParkingSlotCreateInput, ParkingSlotUncheckedCreateInput>
    /**
     * In case the ParkingSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingSlotUpdateInput, ParkingSlotUncheckedUpdateInput>
  }

  /**
   * ParkingSlot delete
   */
  export type ParkingSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter which ParkingSlot to delete.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot deleteMany
   */
  export type ParkingSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSlots to delete
     */
    where?: ParkingSlotWhereInput
    /**
     * Limit how many ParkingSlots to delete.
     */
    limit?: number
  }

  /**
   * ParkingSlot.bookings
   */
  export type ParkingSlot$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * ParkingSlot.parkingRecords
   */
  export type ParkingSlot$parkingRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    where?: ParkingRecordWhereInput
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    cursor?: ParkingRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * ParkingSlot without action
   */
  export type ParkingSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    estimatedCost: Decimal | null
  }

  export type BookingSumAggregateOutputType = {
    estimatedCost: Decimal | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    vehicleId: string | null
    parkingSlotId: string | null
    parkingLotId: string | null
    startTime: Date | null
    endTime: Date | null
    estimatedCost: Decimal | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    parkingRecordId: string | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    vehicleId: string | null
    parkingSlotId: string | null
    parkingLotId: string | null
    startTime: Date | null
    endTime: Date | null
    estimatedCost: Decimal | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    parkingRecordId: string | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    vehicleId: number
    parkingSlotId: number
    parkingLotId: number
    startTime: number
    endTime: number
    estimatedCost: number
    status: number
    createdAt: number
    updatedAt: number
    parkingRecordId: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    estimatedCost?: true
  }

  export type BookingSumAggregateInputType = {
    estimatedCost?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    vehicleId?: true
    parkingSlotId?: true
    parkingLotId?: true
    startTime?: true
    endTime?: true
    estimatedCost?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    parkingRecordId?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    vehicleId?: true
    parkingSlotId?: true
    parkingLotId?: true
    startTime?: true
    endTime?: true
    estimatedCost?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    parkingRecordId?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    vehicleId?: true
    parkingSlotId?: true
    parkingLotId?: true
    startTime?: true
    endTime?: true
    estimatedCost?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    parkingRecordId?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userId: string
    vehicleId: string
    parkingSlotId: string
    parkingLotId: string
    startTime: Date
    endTime: Date | null
    estimatedCost: Decimal
    status: $Enums.BookingStatus
    createdAt: Date
    updatedAt: Date
    parkingRecordId: string | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
    parkingSlotId?: boolean
    parkingLotId?: boolean
    startTime?: boolean
    endTime?: boolean
    estimatedCost?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingRecordId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
    parkingRecord?: boolean | Booking$parkingRecordArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
    parkingSlotId?: boolean
    parkingLotId?: boolean
    startTime?: boolean
    endTime?: boolean
    estimatedCost?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingRecordId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    parkingRecord?: boolean | Booking$parkingRecordArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
    parkingSlotId?: boolean
    parkingLotId?: boolean
    startTime?: boolean
    endTime?: boolean
    estimatedCost?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingRecordId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    parkingRecord?: boolean | Booking$parkingRecordArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
    parkingSlotId?: boolean
    parkingLotId?: boolean
    startTime?: boolean
    endTime?: boolean
    estimatedCost?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingRecordId?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "vehicleId" | "parkingSlotId" | "parkingLotId" | "startTime" | "endTime" | "estimatedCost" | "status" | "createdAt" | "updatedAt" | "parkingRecordId", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
    parkingRecord?: boolean | Booking$parkingRecordArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    parkingRecord?: boolean | Booking$parkingRecordArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    parkingRecord?: boolean | Booking$parkingRecordArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      parkingSlot: Prisma.$ParkingSlotPayload<ExtArgs>
      parkingLot: Prisma.$ParkingLotPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs> | null
      parkingRecord: Prisma.$ParkingRecordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      vehicleId: string
      parkingSlotId: string
      parkingLotId: string
      startTime: Date
      endTime: Date | null
      estimatedCost: Prisma.Decimal
      status: $Enums.BookingStatus
      createdAt: Date
      updatedAt: Date
      parkingRecordId: string | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parkingSlot<T extends ParkingSlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlotDefaultArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parkingLot<T extends ParkingLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLotDefaultArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends Booking$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parkingRecord<T extends Booking$parkingRecordArgs<ExtArgs> = {}>(args?: Subset<T, Booking$parkingRecordArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly vehicleId: FieldRef<"Booking", 'String'>
    readonly parkingSlotId: FieldRef<"Booking", 'String'>
    readonly parkingLotId: FieldRef<"Booking", 'String'>
    readonly startTime: FieldRef<"Booking", 'DateTime'>
    readonly endTime: FieldRef<"Booking", 'DateTime'>
    readonly estimatedCost: FieldRef<"Booking", 'Decimal'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
    readonly parkingRecordId: FieldRef<"Booking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.payment
   */
  export type Booking$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Booking.parkingRecord
   */
  export type Booking$parkingRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    where?: ParkingRecordWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model ParkingRecord
   */

  export type AggregateParkingRecord = {
    _count: ParkingRecordCountAggregateOutputType | null
    _avg: ParkingRecordAvgAggregateOutputType | null
    _sum: ParkingRecordSumAggregateOutputType | null
    _min: ParkingRecordMinAggregateOutputType | null
    _max: ParkingRecordMaxAggregateOutputType | null
  }

  export type ParkingRecordAvgAggregateOutputType = {
    actualCost: Decimal | null
  }

  export type ParkingRecordSumAggregateOutputType = {
    actualCost: Decimal | null
  }

  export type ParkingRecordMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    parkingLotId: string | null
    parkingSlotId: string | null
    bookingId: string | null
    checkIn: Date | null
    checkOut: Date | null
    actualCost: Decimal | null
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingRecordMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    parkingLotId: string | null
    parkingSlotId: string | null
    bookingId: string | null
    checkIn: Date | null
    checkOut: Date | null
    actualCost: Decimal | null
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingRecordCountAggregateOutputType = {
    id: number
    vehicleId: number
    parkingLotId: number
    parkingSlotId: number
    bookingId: number
    checkIn: number
    checkOut: number
    actualCost: number
    paymentStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkingRecordAvgAggregateInputType = {
    actualCost?: true
  }

  export type ParkingRecordSumAggregateInputType = {
    actualCost?: true
  }

  export type ParkingRecordMinAggregateInputType = {
    id?: true
    vehicleId?: true
    parkingLotId?: true
    parkingSlotId?: true
    bookingId?: true
    checkIn?: true
    checkOut?: true
    actualCost?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingRecordMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    parkingLotId?: true
    parkingSlotId?: true
    bookingId?: true
    checkIn?: true
    checkOut?: true
    actualCost?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingRecordCountAggregateInputType = {
    id?: true
    vehicleId?: true
    parkingLotId?: true
    parkingSlotId?: true
    bookingId?: true
    checkIn?: true
    checkOut?: true
    actualCost?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkingRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingRecord to aggregate.
     */
    where?: ParkingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingRecords to fetch.
     */
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingRecords
    **/
    _count?: true | ParkingRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingRecordMaxAggregateInputType
  }

  export type GetParkingRecordAggregateType<T extends ParkingRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingRecord[P]>
      : GetScalarType<T[P], AggregateParkingRecord[P]>
  }




  export type ParkingRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingRecordWhereInput
    orderBy?: ParkingRecordOrderByWithAggregationInput | ParkingRecordOrderByWithAggregationInput[]
    by: ParkingRecordScalarFieldEnum[] | ParkingRecordScalarFieldEnum
    having?: ParkingRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingRecordCountAggregateInputType | true
    _avg?: ParkingRecordAvgAggregateInputType
    _sum?: ParkingRecordSumAggregateInputType
    _min?: ParkingRecordMinAggregateInputType
    _max?: ParkingRecordMaxAggregateInputType
  }

  export type ParkingRecordGroupByOutputType = {
    id: string
    vehicleId: string
    parkingLotId: string
    parkingSlotId: string
    bookingId: string | null
    checkIn: Date
    checkOut: Date | null
    actualCost: Decimal
    paymentStatus: $Enums.PaymentStatus
    createdAt: Date
    updatedAt: Date
    _count: ParkingRecordCountAggregateOutputType | null
    _avg: ParkingRecordAvgAggregateOutputType | null
    _sum: ParkingRecordSumAggregateOutputType | null
    _min: ParkingRecordMinAggregateOutputType | null
    _max: ParkingRecordMaxAggregateOutputType | null
  }

  type GetParkingRecordGroupByPayload<T extends ParkingRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingRecordGroupByOutputType[P]>
        }
      >
    >


  export type ParkingRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    parkingLotId?: boolean
    parkingSlotId?: boolean
    bookingId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    actualCost?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    bookings?: boolean | ParkingRecord$bookingsArgs<ExtArgs>
    _count?: boolean | ParkingRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingRecord"]>

  export type ParkingRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    parkingLotId?: boolean
    parkingSlotId?: boolean
    bookingId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    actualCost?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingRecord"]>

  export type ParkingRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    parkingLotId?: boolean
    parkingSlotId?: boolean
    bookingId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    actualCost?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingRecord"]>

  export type ParkingRecordSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    parkingLotId?: boolean
    parkingSlotId?: boolean
    bookingId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    actualCost?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkingRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "parkingLotId" | "parkingSlotId" | "bookingId" | "checkIn" | "checkOut" | "actualCost" | "paymentStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingRecord"]>
  export type ParkingRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    bookings?: boolean | ParkingRecord$bookingsArgs<ExtArgs>
    _count?: boolean | ParkingRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
  }
  export type ParkingRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    parkingSlot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
  }

  export type $ParkingRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingRecord"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      parkingLot: Prisma.$ParkingLotPayload<ExtArgs>
      parkingSlot: Prisma.$ParkingSlotPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      parkingLotId: string
      parkingSlotId: string
      bookingId: string | null
      checkIn: Date
      checkOut: Date | null
      actualCost: Prisma.Decimal
      paymentStatus: $Enums.PaymentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parkingRecord"]>
    composites: {}
  }

  type ParkingRecordGetPayload<S extends boolean | null | undefined | ParkingRecordDefaultArgs> = $Result.GetResult<Prisma.$ParkingRecordPayload, S>

  type ParkingRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingRecordCountAggregateInputType | true
    }

  export interface ParkingRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingRecord'], meta: { name: 'ParkingRecord' } }
    /**
     * Find zero or one ParkingRecord that matches the filter.
     * @param {ParkingRecordFindUniqueArgs} args - Arguments to find a ParkingRecord
     * @example
     * // Get one ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingRecordFindUniqueArgs>(args: SelectSubset<T, ParkingRecordFindUniqueArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingRecordFindUniqueOrThrowArgs} args - Arguments to find a ParkingRecord
     * @example
     * // Get one ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordFindFirstArgs} args - Arguments to find a ParkingRecord
     * @example
     * // Get one ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingRecordFindFirstArgs>(args?: SelectSubset<T, ParkingRecordFindFirstArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordFindFirstOrThrowArgs} args - Arguments to find a ParkingRecord
     * @example
     * // Get one ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingRecords
     * const parkingRecords = await prisma.parkingRecord.findMany()
     * 
     * // Get first 10 ParkingRecords
     * const parkingRecords = await prisma.parkingRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingRecordWithIdOnly = await prisma.parkingRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingRecordFindManyArgs>(args?: SelectSubset<T, ParkingRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingRecord.
     * @param {ParkingRecordCreateArgs} args - Arguments to create a ParkingRecord.
     * @example
     * // Create one ParkingRecord
     * const ParkingRecord = await prisma.parkingRecord.create({
     *   data: {
     *     // ... data to create a ParkingRecord
     *   }
     * })
     * 
     */
    create<T extends ParkingRecordCreateArgs>(args: SelectSubset<T, ParkingRecordCreateArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingRecords.
     * @param {ParkingRecordCreateManyArgs} args - Arguments to create many ParkingRecords.
     * @example
     * // Create many ParkingRecords
     * const parkingRecord = await prisma.parkingRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingRecordCreateManyArgs>(args?: SelectSubset<T, ParkingRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingRecords and returns the data saved in the database.
     * @param {ParkingRecordCreateManyAndReturnArgs} args - Arguments to create many ParkingRecords.
     * @example
     * // Create many ParkingRecords
     * const parkingRecord = await prisma.parkingRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingRecords and only return the `id`
     * const parkingRecordWithIdOnly = await prisma.parkingRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingRecord.
     * @param {ParkingRecordDeleteArgs} args - Arguments to delete one ParkingRecord.
     * @example
     * // Delete one ParkingRecord
     * const ParkingRecord = await prisma.parkingRecord.delete({
     *   where: {
     *     // ... filter to delete one ParkingRecord
     *   }
     * })
     * 
     */
    delete<T extends ParkingRecordDeleteArgs>(args: SelectSubset<T, ParkingRecordDeleteArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingRecord.
     * @param {ParkingRecordUpdateArgs} args - Arguments to update one ParkingRecord.
     * @example
     * // Update one ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingRecordUpdateArgs>(args: SelectSubset<T, ParkingRecordUpdateArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingRecords.
     * @param {ParkingRecordDeleteManyArgs} args - Arguments to filter ParkingRecords to delete.
     * @example
     * // Delete a few ParkingRecords
     * const { count } = await prisma.parkingRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingRecordDeleteManyArgs>(args?: SelectSubset<T, ParkingRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingRecords
     * const parkingRecord = await prisma.parkingRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingRecordUpdateManyArgs>(args: SelectSubset<T, ParkingRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingRecords and returns the data updated in the database.
     * @param {ParkingRecordUpdateManyAndReturnArgs} args - Arguments to update many ParkingRecords.
     * @example
     * // Update many ParkingRecords
     * const parkingRecord = await prisma.parkingRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingRecords and only return the `id`
     * const parkingRecordWithIdOnly = await prisma.parkingRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkingRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingRecord.
     * @param {ParkingRecordUpsertArgs} args - Arguments to update or create a ParkingRecord.
     * @example
     * // Update or create a ParkingRecord
     * const parkingRecord = await prisma.parkingRecord.upsert({
     *   create: {
     *     // ... data to create a ParkingRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingRecord we want to update
     *   }
     * })
     */
    upsert<T extends ParkingRecordUpsertArgs>(args: SelectSubset<T, ParkingRecordUpsertArgs<ExtArgs>>): Prisma__ParkingRecordClient<$Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordCountArgs} args - Arguments to filter ParkingRecords to count.
     * @example
     * // Count the number of ParkingRecords
     * const count = await prisma.parkingRecord.count({
     *   where: {
     *     // ... the filter for the ParkingRecords we want to count
     *   }
     * })
    **/
    count<T extends ParkingRecordCountArgs>(
      args?: Subset<T, ParkingRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingRecordAggregateArgs>(args: Subset<T, ParkingRecordAggregateArgs>): Prisma.PrismaPromise<GetParkingRecordAggregateType<T>>

    /**
     * Group by ParkingRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingRecordGroupByArgs['orderBy'] }
        : { orderBy?: ParkingRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingRecord model
   */
  readonly fields: ParkingRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parkingLot<T extends ParkingLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLotDefaultArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parkingSlot<T extends ParkingSlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlotDefaultArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends ParkingRecord$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingRecord$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingRecord model
   */
  interface ParkingRecordFieldRefs {
    readonly id: FieldRef<"ParkingRecord", 'String'>
    readonly vehicleId: FieldRef<"ParkingRecord", 'String'>
    readonly parkingLotId: FieldRef<"ParkingRecord", 'String'>
    readonly parkingSlotId: FieldRef<"ParkingRecord", 'String'>
    readonly bookingId: FieldRef<"ParkingRecord", 'String'>
    readonly checkIn: FieldRef<"ParkingRecord", 'DateTime'>
    readonly checkOut: FieldRef<"ParkingRecord", 'DateTime'>
    readonly actualCost: FieldRef<"ParkingRecord", 'Decimal'>
    readonly paymentStatus: FieldRef<"ParkingRecord", 'PaymentStatus'>
    readonly createdAt: FieldRef<"ParkingRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkingRecord findUnique
   */
  export type ParkingRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ParkingRecord to fetch.
     */
    where: ParkingRecordWhereUniqueInput
  }

  /**
   * ParkingRecord findUniqueOrThrow
   */
  export type ParkingRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ParkingRecord to fetch.
     */
    where: ParkingRecordWhereUniqueInput
  }

  /**
   * ParkingRecord findFirst
   */
  export type ParkingRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ParkingRecord to fetch.
     */
    where?: ParkingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingRecords to fetch.
     */
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingRecords.
     */
    cursor?: ParkingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingRecords.
     */
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * ParkingRecord findFirstOrThrow
   */
  export type ParkingRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ParkingRecord to fetch.
     */
    where?: ParkingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingRecords to fetch.
     */
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingRecords.
     */
    cursor?: ParkingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingRecords.
     */
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * ParkingRecord findMany
   */
  export type ParkingRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter, which ParkingRecords to fetch.
     */
    where?: ParkingRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingRecords to fetch.
     */
    orderBy?: ParkingRecordOrderByWithRelationInput | ParkingRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingRecords.
     */
    cursor?: ParkingRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingRecords.
     */
    skip?: number
    distinct?: ParkingRecordScalarFieldEnum | ParkingRecordScalarFieldEnum[]
  }

  /**
   * ParkingRecord create
   */
  export type ParkingRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingRecord.
     */
    data: XOR<ParkingRecordCreateInput, ParkingRecordUncheckedCreateInput>
  }

  /**
   * ParkingRecord createMany
   */
  export type ParkingRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingRecords.
     */
    data: ParkingRecordCreateManyInput | ParkingRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingRecord createManyAndReturn
   */
  export type ParkingRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingRecords.
     */
    data: ParkingRecordCreateManyInput | ParkingRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingRecord update
   */
  export type ParkingRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingRecord.
     */
    data: XOR<ParkingRecordUpdateInput, ParkingRecordUncheckedUpdateInput>
    /**
     * Choose, which ParkingRecord to update.
     */
    where: ParkingRecordWhereUniqueInput
  }

  /**
   * ParkingRecord updateMany
   */
  export type ParkingRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingRecords.
     */
    data: XOR<ParkingRecordUpdateManyMutationInput, ParkingRecordUncheckedUpdateManyInput>
    /**
     * Filter which ParkingRecords to update
     */
    where?: ParkingRecordWhereInput
    /**
     * Limit how many ParkingRecords to update.
     */
    limit?: number
  }

  /**
   * ParkingRecord updateManyAndReturn
   */
  export type ParkingRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * The data used to update ParkingRecords.
     */
    data: XOR<ParkingRecordUpdateManyMutationInput, ParkingRecordUncheckedUpdateManyInput>
    /**
     * Filter which ParkingRecords to update
     */
    where?: ParkingRecordWhereInput
    /**
     * Limit how many ParkingRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingRecord upsert
   */
  export type ParkingRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingRecord to update in case it exists.
     */
    where: ParkingRecordWhereUniqueInput
    /**
     * In case the ParkingRecord found by the `where` argument doesn't exist, create a new ParkingRecord with this data.
     */
    create: XOR<ParkingRecordCreateInput, ParkingRecordUncheckedCreateInput>
    /**
     * In case the ParkingRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingRecordUpdateInput, ParkingRecordUncheckedUpdateInput>
  }

  /**
   * ParkingRecord delete
   */
  export type ParkingRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
    /**
     * Filter which ParkingRecord to delete.
     */
    where: ParkingRecordWhereUniqueInput
  }

  /**
   * ParkingRecord deleteMany
   */
  export type ParkingRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingRecords to delete
     */
    where?: ParkingRecordWhereInput
    /**
     * Limit how many ParkingRecords to delete.
     */
    limit?: number
  }

  /**
   * ParkingRecord.bookings
   */
  export type ParkingRecord$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * ParkingRecord without action
   */
  export type ParkingRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingRecord
     */
    select?: ParkingRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingRecord
     */
    omit?: ParkingRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingRecordInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bookingId: string | null
    monthlyPassId: string | null
    amount: Decimal | null
    method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    referenceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bookingId: string | null
    monthlyPassId: string | null
    amount: Decimal | null
    method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    referenceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    bookingId: number
    monthlyPassId: number
    amount: number
    method: number
    status: number
    referenceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    bookingId?: true
    monthlyPassId?: true
    amount?: true
    method?: true
    status?: true
    referenceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    bookingId?: true
    monthlyPassId?: true
    amount?: true
    method?: true
    status?: true
    referenceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    bookingId?: true
    monthlyPassId?: true
    amount?: true
    method?: true
    status?: true
    referenceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    bookingId: string | null
    monthlyPassId: string | null
    amount: Decimal
    method: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    referenceId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookingId?: boolean
    monthlyPassId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    referenceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | Payment$bookingArgs<ExtArgs>
    monthlyPass?: boolean | Payment$monthlyPassArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookingId?: boolean
    monthlyPassId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    referenceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | Payment$bookingArgs<ExtArgs>
    monthlyPass?: boolean | Payment$monthlyPassArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookingId?: boolean
    monthlyPassId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    referenceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | Payment$bookingArgs<ExtArgs>
    monthlyPass?: boolean | Payment$monthlyPassArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    bookingId?: boolean
    monthlyPassId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    referenceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bookingId" | "monthlyPassId" | "amount" | "method" | "status" | "referenceId" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | Payment$bookingArgs<ExtArgs>
    monthlyPass?: boolean | Payment$monthlyPassArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | Payment$bookingArgs<ExtArgs>
    monthlyPass?: boolean | Payment$monthlyPassArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | Payment$bookingArgs<ExtArgs>
    monthlyPass?: boolean | Payment$monthlyPassArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs> | null
      monthlyPass: Prisma.$MonthlyPassPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bookingId: string | null
      monthlyPassId: string | null
      amount: Prisma.Decimal
      method: $Enums.PaymentMethod
      status: $Enums.PaymentStatus
      referenceId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends Payment$bookingArgs<ExtArgs> = {}>(args?: Subset<T, Payment$bookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    monthlyPass<T extends Payment$monthlyPassArgs<ExtArgs> = {}>(args?: Subset<T, Payment$monthlyPassArgs<ExtArgs>>): Prisma__MonthlyPassClient<$Result.GetResult<Prisma.$MonthlyPassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly bookingId: FieldRef<"Payment", 'String'>
    readonly monthlyPassId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly referenceId: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.booking
   */
  export type Payment$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * Payment.monthlyPass
   */
  export type Payment$monthlyPassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyPass
     */
    select?: MonthlyPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyPass
     */
    omit?: MonthlyPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyPassInclude<ExtArgs> | null
    where?: MonthlyPassWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model MonthlyPass
   */

  export type AggregateMonthlyPass = {
    _count: MonthlyPassCountAggregateOutputType | null
    _avg: MonthlyPassAvgAggregateOutputType | null
    _sum: MonthlyPassSumAggregateOutputType | null
    _min: MonthlyPassMinAggregateOutputType | null
    _max: MonthlyPassMaxAggregateOutputType | null
  }

  export type MonthlyPassAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type MonthlyPassSumAggregateOutputType = {
    price: Decimal | null
  }

  export type MonthlyPassMinAggregateOutputType = {
    id: string | null
    userId: string | null
    parkingLotId: string | null
    vehicleType: $Enums.VehicleType | null
    startDate: Date | null
    endDate: Date | null
    price: Decimal | null
    status: $Enums.PassStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyPassMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    parkingLotId: string | null
    vehicleType: $Enums.VehicleType | null
    startDate: Date | null
    endDate: Date | null
    price: Decimal | null
    status: $Enums.PassStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyPassCountAggregateOutputType = {
    id: number
    userId: number
    parkingLotId: number
    vehicleType: number
    startDate: number
    endDate: number
    price: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MonthlyPassAvgAggregateInputType = {
    price?: true
  }

  export type MonthlyPassSumAggregateInputType = {
    price?: true
  }

  export type MonthlyPassMinAggregateInputType = {
    id?: true
    userId?: true
    parkingLotId?: true
    vehicleType?: true
    startDate?: true
    endDate?: true
    price?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonthlyPassMaxAggregateInputType = {
    id?: true
    userId?: true
    parkingLotId?: true
    vehicleType?: true
    startDate?: true
    endDate?: true
    price?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonthlyPassCountAggregateInputType = {
    id?: true
    userId?: true
    parkingLotId?: true
    vehicleType?: true
    startDate?: true
    endDate?: true
    price?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MonthlyPassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyPass to aggregate.
     */
    where?: MonthlyPassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyPasses to fetch.
     */
    orderBy?: MonthlyPassOrderByWithRelationInput | MonthlyPassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyPassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyPasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyPasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyPasses
    **/
    _count?: true | MonthlyPassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyPassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyPassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyPassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyPassMaxAggregateInputType
  }

  export type GetMonthlyPassAggregateType<T extends MonthlyPassAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyPass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyPass[P]>
      : GetScalarType<T[P], AggregateMonthlyPass[P]>
  }




  export type MonthlyPassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyPassWhereInput
    orderBy?: MonthlyPassOrderByWithAggregationInput | MonthlyPassOrderByWithAggregationInput[]
    by: MonthlyPassScalarFieldEnum[] | MonthlyPassScalarFieldEnum
    having?: MonthlyPassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyPassCountAggregateInputType | true
    _avg?: MonthlyPassAvgAggregateInputType
    _sum?: MonthlyPassSumAggregateInputType
    _min?: MonthlyPassMinAggregateInputType
    _max?: MonthlyPassMaxAggregateInputType
  }

  export type MonthlyPassGroupByOutputType = {
    id: string
    userId: string
    parkingLotId: string
    vehicleType: $Enums.VehicleType
    startDate: Date
    endDate: Date
    price: Decimal
    status: $Enums.PassStatus
    createdAt: Date
    updatedAt: Date
    _count: MonthlyPassCountAggregateOutputType | null
    _avg: MonthlyPassAvgAggregateOutputType | null
    _sum: MonthlyPassSumAggregateOutputType | null
    _min: MonthlyPassMinAggregateOutputType | null
    _max: MonthlyPassMaxAggregateOutputType | null
  }

  type GetMonthlyPassGroupByPayload<T extends MonthlyPassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyPassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyPassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyPassGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyPassGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyPassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    parkingLotId?: boolean
    vehicleType?: boolean
    startDate?: boolean
    endDate?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    payment?: boolean | MonthlyPass$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyPass"]>

  export type MonthlyPassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    parkingLotId?: boolean
    vehicleType?: boolean
    startDate?: boolean
    endDate?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyPass"]>

  export type MonthlyPassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    parkingLotId?: boolean
    vehicleType?: boolean
    startDate?: boolean
    endDate?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyPass"]>

  export type MonthlyPassSelectScalar = {
    id?: boolean
    userId?: boolean
    parkingLotId?: boolean
    vehicleType?: boolean
    startDate?: boolean
    endDate?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MonthlyPassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "parkingLotId" | "vehicleType" | "startDate" | "endDate" | "price" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["monthlyPass"]>
  export type MonthlyPassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    payment?: boolean | MonthlyPass$paymentArgs<ExtArgs>
  }
  export type MonthlyPassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }
  export type MonthlyPassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
  }

  export type $MonthlyPassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyPass"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      parkingLot: Prisma.$ParkingLotPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      parkingLotId: string
      vehicleType: $Enums.VehicleType
      startDate: Date
      endDate: Date
      price: Prisma.Decimal
      status: $Enums.PassStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["monthlyPass"]>
    composites: {}
  }

  type MonthlyPassGetPayload<S extends boolean | null | undefined | MonthlyPassDefaultArgs> = $Result.GetResult<Prisma.$MonthlyPassPayload, S>

  type MonthlyPassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthlyPassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthlyPassCountAggregateInputType | true
    }

  export interface MonthlyPassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyPass'], meta: { name: 'MonthlyPass' } }
    /**
     * Find zero or one MonthlyPass that matches the filter.
     * @param {MonthlyPassFindUniqueArgs} args - Arguments to find a MonthlyPass
     * @example
     * // Get one MonthlyPass
     * const monthlyPass = await prisma.monthlyPass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyPassFindUniqueArgs>(args: SelectSubset<T, MonthlyPassFindUniqueArgs<ExtArgs>>): Prisma__MonthlyPassClient<$Result.GetResult<Prisma.$MonthlyPassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthlyPass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlyPassFindUniqueOrThrowArgs} args - Arguments to find a MonthlyPass
     * @example
     * // Get one MonthlyPass
     * const monthlyPass = await prisma.monthlyPass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyPassFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyPassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyPassClient<$Result.GetResult<Prisma.$MonthlyPassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyPass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyPassFindFirstArgs} args - Arguments to find a MonthlyPass
     * @example
     * // Get one MonthlyPass
     * const monthlyPass = await prisma.monthlyPass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyPassFindFirstArgs>(args?: SelectSubset<T, MonthlyPassFindFirstArgs<ExtArgs>>): Prisma__MonthlyPassClient<$Result.GetResult<Prisma.$MonthlyPassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyPass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyPassFindFirstOrThrowArgs} args - Arguments to find a MonthlyPass
     * @example
     * // Get one MonthlyPass
     * const monthlyPass = await prisma.monthlyPass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyPassFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyPassFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyPassClient<$Result.GetResult<Prisma.$MonthlyPassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthlyPasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyPassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyPasses
     * const monthlyPasses = await prisma.monthlyPass.findMany()
     * 
     * // Get first 10 MonthlyPasses
     * const monthlyPasses = await prisma.monthlyPass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyPassWithIdOnly = await prisma.monthlyPass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlyPassFindManyArgs>(args?: SelectSubset<T, MonthlyPassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyPassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthlyPass.
     * @param {MonthlyPassCreateArgs} args - Arguments to create a MonthlyPass.
     * @example
     * // Create one MonthlyPass
     * const MonthlyPass = await prisma.monthlyPass.create({
     *   data: {
     *     // ... data to create a MonthlyPass
     *   }
     * })
     * 
     */
    create<T extends MonthlyPassCreateArgs>(args: SelectSubset<T, MonthlyPassCreateArgs<ExtArgs>>): Prisma__MonthlyPassClient<$Result.GetResult<Prisma.$MonthlyPassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthlyPasses.
     * @param {MonthlyPassCreateManyArgs} args - Arguments to create many MonthlyPasses.
     * @example
     * // Create many MonthlyPasses
     * const monthlyPass = await prisma.monthlyPass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyPassCreateManyArgs>(args?: SelectSubset<T, MonthlyPassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonthlyPasses and returns the data saved in the database.
     * @param {MonthlyPassCreateManyAndReturnArgs} args - Arguments to create many MonthlyPasses.
     * @example
     * // Create many MonthlyPasses
     * const monthlyPass = await prisma.monthlyPass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonthlyPasses and only return the `id`
     * const monthlyPassWithIdOnly = await prisma.monthlyPass.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthlyPassCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthlyPassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyPassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonthlyPass.
     * @param {MonthlyPassDeleteArgs} args - Arguments to delete one MonthlyPass.
     * @example
     * // Delete one MonthlyPass
     * const MonthlyPass = await prisma.monthlyPass.delete({
     *   where: {
     *     // ... filter to delete one MonthlyPass
     *   }
     * })
     * 
     */
    delete<T extends MonthlyPassDeleteArgs>(args: SelectSubset<T, MonthlyPassDeleteArgs<ExtArgs>>): Prisma__MonthlyPassClient<$Result.GetResult<Prisma.$MonthlyPassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthlyPass.
     * @param {MonthlyPassUpdateArgs} args - Arguments to update one MonthlyPass.
     * @example
     * // Update one MonthlyPass
     * const monthlyPass = await prisma.monthlyPass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyPassUpdateArgs>(args: SelectSubset<T, MonthlyPassUpdateArgs<ExtArgs>>): Prisma__MonthlyPassClient<$Result.GetResult<Prisma.$MonthlyPassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthlyPasses.
     * @param {MonthlyPassDeleteManyArgs} args - Arguments to filter MonthlyPasses to delete.
     * @example
     * // Delete a few MonthlyPasses
     * const { count } = await prisma.monthlyPass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyPassDeleteManyArgs>(args?: SelectSubset<T, MonthlyPassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyPasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyPassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyPasses
     * const monthlyPass = await prisma.monthlyPass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyPassUpdateManyArgs>(args: SelectSubset<T, MonthlyPassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyPasses and returns the data updated in the database.
     * @param {MonthlyPassUpdateManyAndReturnArgs} args - Arguments to update many MonthlyPasses.
     * @example
     * // Update many MonthlyPasses
     * const monthlyPass = await prisma.monthlyPass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonthlyPasses and only return the `id`
     * const monthlyPassWithIdOnly = await prisma.monthlyPass.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonthlyPassUpdateManyAndReturnArgs>(args: SelectSubset<T, MonthlyPassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyPassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonthlyPass.
     * @param {MonthlyPassUpsertArgs} args - Arguments to update or create a MonthlyPass.
     * @example
     * // Update or create a MonthlyPass
     * const monthlyPass = await prisma.monthlyPass.upsert({
     *   create: {
     *     // ... data to create a MonthlyPass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyPass we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyPassUpsertArgs>(args: SelectSubset<T, MonthlyPassUpsertArgs<ExtArgs>>): Prisma__MonthlyPassClient<$Result.GetResult<Prisma.$MonthlyPassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthlyPasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyPassCountArgs} args - Arguments to filter MonthlyPasses to count.
     * @example
     * // Count the number of MonthlyPasses
     * const count = await prisma.monthlyPass.count({
     *   where: {
     *     // ... the filter for the MonthlyPasses we want to count
     *   }
     * })
    **/
    count<T extends MonthlyPassCountArgs>(
      args?: Subset<T, MonthlyPassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyPassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyPass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyPassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthlyPassAggregateArgs>(args: Subset<T, MonthlyPassAggregateArgs>): Prisma.PrismaPromise<GetMonthlyPassAggregateType<T>>

    /**
     * Group by MonthlyPass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyPassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthlyPassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyPassGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyPassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthlyPassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyPassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyPass model
   */
  readonly fields: MonthlyPassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyPass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyPassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parkingLot<T extends ParkingLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLotDefaultArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends MonthlyPass$paymentArgs<ExtArgs> = {}>(args?: Subset<T, MonthlyPass$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonthlyPass model
   */
  interface MonthlyPassFieldRefs {
    readonly id: FieldRef<"MonthlyPass", 'String'>
    readonly userId: FieldRef<"MonthlyPass", 'String'>
    readonly parkingLotId: FieldRef<"MonthlyPass", 'String'>
    readonly vehicleType: FieldRef<"MonthlyPass", 'VehicleType'>
    readonly startDate: FieldRef<"MonthlyPass", 'DateTime'>
    readonly endDate: FieldRef<"MonthlyPass", 'DateTime'>
    readonly price: FieldRef<"MonthlyPass", 'Decimal'>
    readonly status: FieldRef<"MonthlyPass", 'PassStatus'>
    readonly createdAt: FieldRef<"MonthlyPass", 'DateTime'>
    readonly updatedAt: FieldRef<"MonthlyPass", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyPass findUnique
   */
  export type MonthlyPassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyPass
     */
    select?: MonthlyPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyPass
     */
    omit?: MonthlyPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyPassInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyPass to fetch.
     */
    where: MonthlyPassWhereUniqueInput
  }

  /**
   * MonthlyPass findUniqueOrThrow
   */
  export type MonthlyPassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyPass
     */
    select?: MonthlyPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyPass
     */
    omit?: MonthlyPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyPassInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyPass to fetch.
     */
    where: MonthlyPassWhereUniqueInput
  }

  /**
   * MonthlyPass findFirst
   */
  export type MonthlyPassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyPass
     */
    select?: MonthlyPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyPass
     */
    omit?: MonthlyPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyPassInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyPass to fetch.
     */
    where?: MonthlyPassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyPasses to fetch.
     */
    orderBy?: MonthlyPassOrderByWithRelationInput | MonthlyPassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyPasses.
     */
    cursor?: MonthlyPassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyPasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyPasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyPasses.
     */
    distinct?: MonthlyPassScalarFieldEnum | MonthlyPassScalarFieldEnum[]
  }

  /**
   * MonthlyPass findFirstOrThrow
   */
  export type MonthlyPassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyPass
     */
    select?: MonthlyPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyPass
     */
    omit?: MonthlyPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyPassInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyPass to fetch.
     */
    where?: MonthlyPassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyPasses to fetch.
     */
    orderBy?: MonthlyPassOrderByWithRelationInput | MonthlyPassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyPasses.
     */
    cursor?: MonthlyPassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyPasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyPasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyPasses.
     */
    distinct?: MonthlyPassScalarFieldEnum | MonthlyPassScalarFieldEnum[]
  }

  /**
   * MonthlyPass findMany
   */
  export type MonthlyPassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyPass
     */
    select?: MonthlyPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyPass
     */
    omit?: MonthlyPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyPassInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyPasses to fetch.
     */
    where?: MonthlyPassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyPasses to fetch.
     */
    orderBy?: MonthlyPassOrderByWithRelationInput | MonthlyPassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyPasses.
     */
    cursor?: MonthlyPassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyPasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyPasses.
     */
    skip?: number
    distinct?: MonthlyPassScalarFieldEnum | MonthlyPassScalarFieldEnum[]
  }

  /**
   * MonthlyPass create
   */
  export type MonthlyPassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyPass
     */
    select?: MonthlyPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyPass
     */
    omit?: MonthlyPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyPassInclude<ExtArgs> | null
    /**
     * The data needed to create a MonthlyPass.
     */
    data: XOR<MonthlyPassCreateInput, MonthlyPassUncheckedCreateInput>
  }

  /**
   * MonthlyPass createMany
   */
  export type MonthlyPassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyPasses.
     */
    data: MonthlyPassCreateManyInput | MonthlyPassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyPass createManyAndReturn
   */
  export type MonthlyPassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyPass
     */
    select?: MonthlyPassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyPass
     */
    omit?: MonthlyPassOmit<ExtArgs> | null
    /**
     * The data used to create many MonthlyPasses.
     */
    data: MonthlyPassCreateManyInput | MonthlyPassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyPassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonthlyPass update
   */
  export type MonthlyPassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyPass
     */
    select?: MonthlyPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyPass
     */
    omit?: MonthlyPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyPassInclude<ExtArgs> | null
    /**
     * The data needed to update a MonthlyPass.
     */
    data: XOR<MonthlyPassUpdateInput, MonthlyPassUncheckedUpdateInput>
    /**
     * Choose, which MonthlyPass to update.
     */
    where: MonthlyPassWhereUniqueInput
  }

  /**
   * MonthlyPass updateMany
   */
  export type MonthlyPassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyPasses.
     */
    data: XOR<MonthlyPassUpdateManyMutationInput, MonthlyPassUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyPasses to update
     */
    where?: MonthlyPassWhereInput
    /**
     * Limit how many MonthlyPasses to update.
     */
    limit?: number
  }

  /**
   * MonthlyPass updateManyAndReturn
   */
  export type MonthlyPassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyPass
     */
    select?: MonthlyPassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyPass
     */
    omit?: MonthlyPassOmit<ExtArgs> | null
    /**
     * The data used to update MonthlyPasses.
     */
    data: XOR<MonthlyPassUpdateManyMutationInput, MonthlyPassUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyPasses to update
     */
    where?: MonthlyPassWhereInput
    /**
     * Limit how many MonthlyPasses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyPassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonthlyPass upsert
   */
  export type MonthlyPassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyPass
     */
    select?: MonthlyPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyPass
     */
    omit?: MonthlyPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyPassInclude<ExtArgs> | null
    /**
     * The filter to search for the MonthlyPass to update in case it exists.
     */
    where: MonthlyPassWhereUniqueInput
    /**
     * In case the MonthlyPass found by the `where` argument doesn't exist, create a new MonthlyPass with this data.
     */
    create: XOR<MonthlyPassCreateInput, MonthlyPassUncheckedCreateInput>
    /**
     * In case the MonthlyPass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyPassUpdateInput, MonthlyPassUncheckedUpdateInput>
  }

  /**
   * MonthlyPass delete
   */
  export type MonthlyPassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyPass
     */
    select?: MonthlyPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyPass
     */
    omit?: MonthlyPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyPassInclude<ExtArgs> | null
    /**
     * Filter which MonthlyPass to delete.
     */
    where: MonthlyPassWhereUniqueInput
  }

  /**
   * MonthlyPass deleteMany
   */
  export type MonthlyPassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyPasses to delete
     */
    where?: MonthlyPassWhereInput
    /**
     * Limit how many MonthlyPasses to delete.
     */
    limit?: number
  }

  /**
   * MonthlyPass.payment
   */
  export type MonthlyPass$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * MonthlyPass without action
   */
  export type MonthlyPassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyPass
     */
    select?: MonthlyPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyPass
     */
    omit?: MonthlyPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyPassInclude<ExtArgs> | null
  }


  /**
   * Model AdminLog
   */

  export type AggregateAdminLog = {
    _count: AdminLogCountAggregateOutputType | null
    _min: AdminLogMinAggregateOutputType | null
    _max: AdminLogMaxAggregateOutputType | null
  }

  export type AdminLogMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    action: string | null
    resourceType: string | null
    resourceId: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type AdminLogMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    action: string | null
    resourceType: string | null
    resourceId: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type AdminLogCountAggregateOutputType = {
    id: number
    adminId: number
    action: number
    resourceType: number
    resourceId: number
    changes: number
    ipAddress: number
    createdAt: number
    _all: number
  }


  export type AdminLogMinAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    resourceType?: true
    resourceId?: true
    ipAddress?: true
    createdAt?: true
  }

  export type AdminLogMaxAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    resourceType?: true
    resourceId?: true
    ipAddress?: true
    createdAt?: true
  }

  export type AdminLogCountAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    resourceType?: true
    resourceId?: true
    changes?: true
    ipAddress?: true
    createdAt?: true
    _all?: true
  }

  export type AdminLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminLog to aggregate.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminLogs
    **/
    _count?: true | AdminLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminLogMaxAggregateInputType
  }

  export type GetAdminLogAggregateType<T extends AdminLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminLog[P]>
      : GetScalarType<T[P], AggregateAdminLog[P]>
  }




  export type AdminLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminLogWhereInput
    orderBy?: AdminLogOrderByWithAggregationInput | AdminLogOrderByWithAggregationInput[]
    by: AdminLogScalarFieldEnum[] | AdminLogScalarFieldEnum
    having?: AdminLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminLogCountAggregateInputType | true
    _min?: AdminLogMinAggregateInputType
    _max?: AdminLogMaxAggregateInputType
  }

  export type AdminLogGroupByOutputType = {
    id: string
    adminId: string
    action: string
    resourceType: string
    resourceId: string | null
    changes: JsonValue | null
    ipAddress: string | null
    createdAt: Date
    _count: AdminLogCountAggregateOutputType | null
    _min: AdminLogMinAggregateOutputType | null
    _max: AdminLogMaxAggregateOutputType | null
  }

  type GetAdminLogGroupByPayload<T extends AdminLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminLogGroupByOutputType[P]>
            : GetScalarType<T[P], AdminLogGroupByOutputType[P]>
        }
      >
    >


  export type AdminLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    changes?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminLog"]>

  export type AdminLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    changes?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminLog"]>

  export type AdminLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    changes?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminLog"]>

  export type AdminLogSelectScalar = {
    id?: boolean
    adminId?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    changes?: boolean
    ipAddress?: boolean
    createdAt?: boolean
  }

  export type AdminLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "action" | "resourceType" | "resourceId" | "changes" | "ipAddress" | "createdAt", ExtArgs["result"]["adminLog"]>
  export type AdminLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminLog"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      action: string
      resourceType: string
      resourceId: string | null
      changes: Prisma.JsonValue | null
      ipAddress: string | null
      createdAt: Date
    }, ExtArgs["result"]["adminLog"]>
    composites: {}
  }

  type AdminLogGetPayload<S extends boolean | null | undefined | AdminLogDefaultArgs> = $Result.GetResult<Prisma.$AdminLogPayload, S>

  type AdminLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminLogCountAggregateInputType | true
    }

  export interface AdminLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminLog'], meta: { name: 'AdminLog' } }
    /**
     * Find zero or one AdminLog that matches the filter.
     * @param {AdminLogFindUniqueArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminLogFindUniqueArgs>(args: SelectSubset<T, AdminLogFindUniqueArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminLogFindUniqueOrThrowArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogFindFirstArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminLogFindFirstArgs>(args?: SelectSubset<T, AdminLogFindFirstArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogFindFirstOrThrowArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminLogs
     * const adminLogs = await prisma.adminLog.findMany()
     * 
     * // Get first 10 AdminLogs
     * const adminLogs = await prisma.adminLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminLogWithIdOnly = await prisma.adminLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminLogFindManyArgs>(args?: SelectSubset<T, AdminLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminLog.
     * @param {AdminLogCreateArgs} args - Arguments to create a AdminLog.
     * @example
     * // Create one AdminLog
     * const AdminLog = await prisma.adminLog.create({
     *   data: {
     *     // ... data to create a AdminLog
     *   }
     * })
     * 
     */
    create<T extends AdminLogCreateArgs>(args: SelectSubset<T, AdminLogCreateArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminLogs.
     * @param {AdminLogCreateManyArgs} args - Arguments to create many AdminLogs.
     * @example
     * // Create many AdminLogs
     * const adminLog = await prisma.adminLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminLogCreateManyArgs>(args?: SelectSubset<T, AdminLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminLogs and returns the data saved in the database.
     * @param {AdminLogCreateManyAndReturnArgs} args - Arguments to create many AdminLogs.
     * @example
     * // Create many AdminLogs
     * const adminLog = await prisma.adminLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminLogs and only return the `id`
     * const adminLogWithIdOnly = await prisma.adminLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminLog.
     * @param {AdminLogDeleteArgs} args - Arguments to delete one AdminLog.
     * @example
     * // Delete one AdminLog
     * const AdminLog = await prisma.adminLog.delete({
     *   where: {
     *     // ... filter to delete one AdminLog
     *   }
     * })
     * 
     */
    delete<T extends AdminLogDeleteArgs>(args: SelectSubset<T, AdminLogDeleteArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminLog.
     * @param {AdminLogUpdateArgs} args - Arguments to update one AdminLog.
     * @example
     * // Update one AdminLog
     * const adminLog = await prisma.adminLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminLogUpdateArgs>(args: SelectSubset<T, AdminLogUpdateArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminLogs.
     * @param {AdminLogDeleteManyArgs} args - Arguments to filter AdminLogs to delete.
     * @example
     * // Delete a few AdminLogs
     * const { count } = await prisma.adminLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminLogDeleteManyArgs>(args?: SelectSubset<T, AdminLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminLogs
     * const adminLog = await prisma.adminLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminLogUpdateManyArgs>(args: SelectSubset<T, AdminLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminLogs and returns the data updated in the database.
     * @param {AdminLogUpdateManyAndReturnArgs} args - Arguments to update many AdminLogs.
     * @example
     * // Update many AdminLogs
     * const adminLog = await prisma.adminLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminLogs and only return the `id`
     * const adminLogWithIdOnly = await prisma.adminLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminLog.
     * @param {AdminLogUpsertArgs} args - Arguments to update or create a AdminLog.
     * @example
     * // Update or create a AdminLog
     * const adminLog = await prisma.adminLog.upsert({
     *   create: {
     *     // ... data to create a AdminLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminLog we want to update
     *   }
     * })
     */
    upsert<T extends AdminLogUpsertArgs>(args: SelectSubset<T, AdminLogUpsertArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogCountArgs} args - Arguments to filter AdminLogs to count.
     * @example
     * // Count the number of AdminLogs
     * const count = await prisma.adminLog.count({
     *   where: {
     *     // ... the filter for the AdminLogs we want to count
     *   }
     * })
    **/
    count<T extends AdminLogCountArgs>(
      args?: Subset<T, AdminLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminLogAggregateArgs>(args: Subset<T, AdminLogAggregateArgs>): Prisma.PrismaPromise<GetAdminLogAggregateType<T>>

    /**
     * Group by AdminLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminLogGroupByArgs['orderBy'] }
        : { orderBy?: AdminLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminLog model
   */
  readonly fields: AdminLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminLog model
   */
  interface AdminLogFieldRefs {
    readonly id: FieldRef<"AdminLog", 'String'>
    readonly adminId: FieldRef<"AdminLog", 'String'>
    readonly action: FieldRef<"AdminLog", 'String'>
    readonly resourceType: FieldRef<"AdminLog", 'String'>
    readonly resourceId: FieldRef<"AdminLog", 'String'>
    readonly changes: FieldRef<"AdminLog", 'Json'>
    readonly ipAddress: FieldRef<"AdminLog", 'String'>
    readonly createdAt: FieldRef<"AdminLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminLog findUnique
   */
  export type AdminLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog findUniqueOrThrow
   */
  export type AdminLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog findFirst
   */
  export type AdminLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminLogs.
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminLogs.
     */
    distinct?: AdminLogScalarFieldEnum | AdminLogScalarFieldEnum[]
  }

  /**
   * AdminLog findFirstOrThrow
   */
  export type AdminLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminLogs.
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminLogs.
     */
    distinct?: AdminLogScalarFieldEnum | AdminLogScalarFieldEnum[]
  }

  /**
   * AdminLog findMany
   */
  export type AdminLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminLogs to fetch.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminLogs.
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    distinct?: AdminLogScalarFieldEnum | AdminLogScalarFieldEnum[]
  }

  /**
   * AdminLog create
   */
  export type AdminLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminLog.
     */
    data: XOR<AdminLogCreateInput, AdminLogUncheckedCreateInput>
  }

  /**
   * AdminLog createMany
   */
  export type AdminLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminLogs.
     */
    data: AdminLogCreateManyInput | AdminLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminLog createManyAndReturn
   */
  export type AdminLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * The data used to create many AdminLogs.
     */
    data: AdminLogCreateManyInput | AdminLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminLog update
   */
  export type AdminLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminLog.
     */
    data: XOR<AdminLogUpdateInput, AdminLogUncheckedUpdateInput>
    /**
     * Choose, which AdminLog to update.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog updateMany
   */
  export type AdminLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminLogs.
     */
    data: XOR<AdminLogUpdateManyMutationInput, AdminLogUncheckedUpdateManyInput>
    /**
     * Filter which AdminLogs to update
     */
    where?: AdminLogWhereInput
    /**
     * Limit how many AdminLogs to update.
     */
    limit?: number
  }

  /**
   * AdminLog updateManyAndReturn
   */
  export type AdminLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * The data used to update AdminLogs.
     */
    data: XOR<AdminLogUpdateManyMutationInput, AdminLogUncheckedUpdateManyInput>
    /**
     * Filter which AdminLogs to update
     */
    where?: AdminLogWhereInput
    /**
     * Limit how many AdminLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminLog upsert
   */
  export type AdminLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminLog to update in case it exists.
     */
    where: AdminLogWhereUniqueInput
    /**
     * In case the AdminLog found by the `where` argument doesn't exist, create a new AdminLog with this data.
     */
    create: XOR<AdminLogCreateInput, AdminLogUncheckedCreateInput>
    /**
     * In case the AdminLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminLogUpdateInput, AdminLogUncheckedUpdateInput>
  }

  /**
   * AdminLog delete
   */
  export type AdminLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter which AdminLog to delete.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog deleteMany
   */
  export type AdminLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminLogs to delete
     */
    where?: AdminLogWhereInput
    /**
     * Limit how many AdminLogs to delete.
     */
    limit?: number
  }

  /**
   * AdminLog without action
   */
  export type AdminLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    phone: 'phone',
    fullName: 'fullName',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plateNumber: 'plateNumber',
    vehicleType: 'vehicleType',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const ParkingLotScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    totalSlots: 'totalSlots',
    zones: 'zones',
    hourlyRate: 'hourlyRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParkingLotScalarFieldEnum = (typeof ParkingLotScalarFieldEnum)[keyof typeof ParkingLotScalarFieldEnum]


  export const ParkingSlotScalarFieldEnum: {
    id: 'id',
    parkingLotId: 'parkingLotId',
    zoneId: 'zoneId',
    slotNumber: 'slotNumber',
    vehicleType: 'vehicleType',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParkingSlotScalarFieldEnum = (typeof ParkingSlotScalarFieldEnum)[keyof typeof ParkingSlotScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    vehicleId: 'vehicleId',
    parkingSlotId: 'parkingSlotId',
    parkingLotId: 'parkingLotId',
    startTime: 'startTime',
    endTime: 'endTime',
    estimatedCost: 'estimatedCost',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parkingRecordId: 'parkingRecordId'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const ParkingRecordScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    parkingLotId: 'parkingLotId',
    parkingSlotId: 'parkingSlotId',
    bookingId: 'bookingId',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    actualCost: 'actualCost',
    paymentStatus: 'paymentStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParkingRecordScalarFieldEnum = (typeof ParkingRecordScalarFieldEnum)[keyof typeof ParkingRecordScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bookingId: 'bookingId',
    monthlyPassId: 'monthlyPassId',
    amount: 'amount',
    method: 'method',
    status: 'status',
    referenceId: 'referenceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const MonthlyPassScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    parkingLotId: 'parkingLotId',
    vehicleType: 'vehicleType',
    startDate: 'startDate',
    endDate: 'endDate',
    price: 'price',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MonthlyPassScalarFieldEnum = (typeof MonthlyPassScalarFieldEnum)[keyof typeof MonthlyPassScalarFieldEnum]


  export const AdminLogScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    action: 'action',
    resourceType: 'resourceType',
    resourceId: 'resourceId',
    changes: 'changes',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
  };

  export type AdminLogScalarFieldEnum = (typeof AdminLogScalarFieldEnum)[keyof typeof AdminLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'VehicleType'
   */
  export type EnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType'>
    


  /**
   * Reference to a field of type 'VehicleType[]'
   */
  export type ListEnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'SlotStatus'
   */
  export type EnumSlotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotStatus'>
    


  /**
   * Reference to a field of type 'SlotStatus[]'
   */
  export type ListEnumSlotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotStatus[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PassStatus'
   */
  export type EnumPassStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PassStatus'>
    


  /**
   * Reference to a field of type 'PassStatus[]'
   */
  export type ListEnumPassStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PassStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    fullName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehicleListRelationFilter
    bookings?: BookingListRelationFilter
    payments?: PaymentListRelationFilter
    monthlyPasses?: MonthlyPassListRelationFilter
    adminLogs?: AdminLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    fullName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicles?: VehicleOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    monthlyPasses?: MonthlyPassOrderByRelationAggregateInput
    adminLogs?: AdminLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    fullName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehicleListRelationFilter
    bookings?: BookingListRelationFilter
    payments?: PaymentListRelationFilter
    monthlyPasses?: MonthlyPassListRelationFilter
    adminLogs?: AdminLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    fullName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    fullName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    userId?: StringFilter<"Vehicle"> | string
    plateNumber?: StringFilter<"Vehicle"> | string
    vehicleType?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    color?: StringNullableFilter<"Vehicle"> | string | null
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
    parkingRecords?: ParkingRecordListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    vehicleType?: SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    parkingRecords?: ParkingRecordOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plateNumber?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    userId?: StringFilter<"Vehicle"> | string
    vehicleType?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    color?: StringNullableFilter<"Vehicle"> | string | null
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
    parkingRecords?: ParkingRecordListRelationFilter
  }, "id" | "plateNumber">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    vehicleType?: SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    userId?: StringWithAggregatesFilter<"Vehicle"> | string
    plateNumber?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleType?: EnumVehicleTypeWithAggregatesFilter<"Vehicle"> | $Enums.VehicleType
    color?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type ParkingLotWhereInput = {
    AND?: ParkingLotWhereInput | ParkingLotWhereInput[]
    OR?: ParkingLotWhereInput[]
    NOT?: ParkingLotWhereInput | ParkingLotWhereInput[]
    id?: StringFilter<"ParkingLot"> | string
    name?: StringFilter<"ParkingLot"> | string
    address?: StringFilter<"ParkingLot"> | string
    totalSlots?: IntFilter<"ParkingLot"> | number
    zones?: JsonNullableFilter<"ParkingLot">
    hourlyRate?: DecimalFilter<"ParkingLot"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ParkingLot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingLot"> | Date | string
    slots?: ParkingSlotListRelationFilter
    bookings?: BookingListRelationFilter
    parkingRecords?: ParkingRecordListRelationFilter
    monthlyPasses?: MonthlyPassListRelationFilter
  }

  export type ParkingLotOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    totalSlots?: SortOrder
    zones?: SortOrderInput | SortOrder
    hourlyRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slots?: ParkingSlotOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    parkingRecords?: ParkingRecordOrderByRelationAggregateInput
    monthlyPasses?: MonthlyPassOrderByRelationAggregateInput
  }

  export type ParkingLotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParkingLotWhereInput | ParkingLotWhereInput[]
    OR?: ParkingLotWhereInput[]
    NOT?: ParkingLotWhereInput | ParkingLotWhereInput[]
    name?: StringFilter<"ParkingLot"> | string
    address?: StringFilter<"ParkingLot"> | string
    totalSlots?: IntFilter<"ParkingLot"> | number
    zones?: JsonNullableFilter<"ParkingLot">
    hourlyRate?: DecimalFilter<"ParkingLot"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ParkingLot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingLot"> | Date | string
    slots?: ParkingSlotListRelationFilter
    bookings?: BookingListRelationFilter
    parkingRecords?: ParkingRecordListRelationFilter
    monthlyPasses?: MonthlyPassListRelationFilter
  }, "id">

  export type ParkingLotOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    totalSlots?: SortOrder
    zones?: SortOrderInput | SortOrder
    hourlyRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkingLotCountOrderByAggregateInput
    _avg?: ParkingLotAvgOrderByAggregateInput
    _max?: ParkingLotMaxOrderByAggregateInput
    _min?: ParkingLotMinOrderByAggregateInput
    _sum?: ParkingLotSumOrderByAggregateInput
  }

  export type ParkingLotScalarWhereWithAggregatesInput = {
    AND?: ParkingLotScalarWhereWithAggregatesInput | ParkingLotScalarWhereWithAggregatesInput[]
    OR?: ParkingLotScalarWhereWithAggregatesInput[]
    NOT?: ParkingLotScalarWhereWithAggregatesInput | ParkingLotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParkingLot"> | string
    name?: StringWithAggregatesFilter<"ParkingLot"> | string
    address?: StringWithAggregatesFilter<"ParkingLot"> | string
    totalSlots?: IntWithAggregatesFilter<"ParkingLot"> | number
    zones?: JsonNullableWithAggregatesFilter<"ParkingLot">
    hourlyRate?: DecimalWithAggregatesFilter<"ParkingLot"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"ParkingLot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingLot"> | Date | string
  }

  export type ParkingSlotWhereInput = {
    AND?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    OR?: ParkingSlotWhereInput[]
    NOT?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    id?: StringFilter<"ParkingSlot"> | string
    parkingLotId?: StringFilter<"ParkingSlot"> | string
    zoneId?: StringFilter<"ParkingSlot"> | string
    slotNumber?: StringFilter<"ParkingSlot"> | string
    vehicleType?: EnumVehicleTypeFilter<"ParkingSlot"> | $Enums.VehicleType
    status?: EnumSlotStatusFilter<"ParkingSlot"> | $Enums.SlotStatus
    createdAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    parkingLot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    bookings?: BookingListRelationFilter
    parkingRecords?: ParkingRecordListRelationFilter
  }

  export type ParkingSlotOrderByWithRelationInput = {
    id?: SortOrder
    parkingLotId?: SortOrder
    zoneId?: SortOrder
    slotNumber?: SortOrder
    vehicleType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLot?: ParkingLotOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    parkingRecords?: ParkingRecordOrderByRelationAggregateInput
  }

  export type ParkingSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    parkingLotId_slotNumber?: ParkingSlotParkingLotIdSlotNumberCompoundUniqueInput
    AND?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    OR?: ParkingSlotWhereInput[]
    NOT?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    parkingLotId?: StringFilter<"ParkingSlot"> | string
    zoneId?: StringFilter<"ParkingSlot"> | string
    slotNumber?: StringFilter<"ParkingSlot"> | string
    vehicleType?: EnumVehicleTypeFilter<"ParkingSlot"> | $Enums.VehicleType
    status?: EnumSlotStatusFilter<"ParkingSlot"> | $Enums.SlotStatus
    createdAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    parkingLot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    bookings?: BookingListRelationFilter
    parkingRecords?: ParkingRecordListRelationFilter
  }, "id" | "parkingLotId_slotNumber">

  export type ParkingSlotOrderByWithAggregationInput = {
    id?: SortOrder
    parkingLotId?: SortOrder
    zoneId?: SortOrder
    slotNumber?: SortOrder
    vehicleType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkingSlotCountOrderByAggregateInput
    _max?: ParkingSlotMaxOrderByAggregateInput
    _min?: ParkingSlotMinOrderByAggregateInput
  }

  export type ParkingSlotScalarWhereWithAggregatesInput = {
    AND?: ParkingSlotScalarWhereWithAggregatesInput | ParkingSlotScalarWhereWithAggregatesInput[]
    OR?: ParkingSlotScalarWhereWithAggregatesInput[]
    NOT?: ParkingSlotScalarWhereWithAggregatesInput | ParkingSlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParkingSlot"> | string
    parkingLotId?: StringWithAggregatesFilter<"ParkingSlot"> | string
    zoneId?: StringWithAggregatesFilter<"ParkingSlot"> | string
    slotNumber?: StringWithAggregatesFilter<"ParkingSlot"> | string
    vehicleType?: EnumVehicleTypeWithAggregatesFilter<"ParkingSlot"> | $Enums.VehicleType
    status?: EnumSlotStatusWithAggregatesFilter<"ParkingSlot"> | $Enums.SlotStatus
    createdAt?: DateTimeWithAggregatesFilter<"ParkingSlot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingSlot"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    vehicleId?: StringFilter<"Booking"> | string
    parkingSlotId?: StringFilter<"Booking"> | string
    parkingLotId?: StringFilter<"Booking"> | string
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeNullableFilter<"Booking"> | Date | string | null
    estimatedCost?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    parkingRecordId?: StringNullableFilter<"Booking"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    parkingSlot?: XOR<ParkingSlotScalarRelationFilter, ParkingSlotWhereInput>
    parkingLot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    parkingRecord?: XOR<ParkingRecordNullableScalarRelationFilter, ParkingRecordWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    parkingSlotId?: SortOrder
    parkingLotId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    estimatedCost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingRecordId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    parkingSlot?: ParkingSlotOrderByWithRelationInput
    parkingLot?: ParkingLotOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    parkingRecord?: ParkingRecordOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: StringFilter<"Booking"> | string
    vehicleId?: StringFilter<"Booking"> | string
    parkingSlotId?: StringFilter<"Booking"> | string
    parkingLotId?: StringFilter<"Booking"> | string
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeNullableFilter<"Booking"> | Date | string | null
    estimatedCost?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    parkingRecordId?: StringNullableFilter<"Booking"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    parkingSlot?: XOR<ParkingSlotScalarRelationFilter, ParkingSlotWhereInput>
    parkingLot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    parkingRecord?: XOR<ParkingRecordNullableScalarRelationFilter, ParkingRecordWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    parkingSlotId?: SortOrder
    parkingLotId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    estimatedCost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingRecordId?: SortOrderInput | SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    userId?: StringWithAggregatesFilter<"Booking"> | string
    vehicleId?: StringWithAggregatesFilter<"Booking"> | string
    parkingSlotId?: StringWithAggregatesFilter<"Booking"> | string
    parkingLotId?: StringWithAggregatesFilter<"Booking"> | string
    startTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    estimatedCost?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    parkingRecordId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
  }

  export type ParkingRecordWhereInput = {
    AND?: ParkingRecordWhereInput | ParkingRecordWhereInput[]
    OR?: ParkingRecordWhereInput[]
    NOT?: ParkingRecordWhereInput | ParkingRecordWhereInput[]
    id?: StringFilter<"ParkingRecord"> | string
    vehicleId?: StringFilter<"ParkingRecord"> | string
    parkingLotId?: StringFilter<"ParkingRecord"> | string
    parkingSlotId?: StringFilter<"ParkingRecord"> | string
    bookingId?: StringNullableFilter<"ParkingRecord"> | string | null
    checkIn?: DateTimeFilter<"ParkingRecord"> | Date | string
    checkOut?: DateTimeNullableFilter<"ParkingRecord"> | Date | string | null
    actualCost?: DecimalFilter<"ParkingRecord"> | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFilter<"ParkingRecord"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    parkingLot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    parkingSlot?: XOR<ParkingSlotScalarRelationFilter, ParkingSlotWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type ParkingRecordOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    parkingLotId?: SortOrder
    parkingSlotId?: SortOrder
    bookingId?: SortOrderInput | SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrderInput | SortOrder
    actualCost?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    parkingLot?: ParkingLotOrderByWithRelationInput
    parkingSlot?: ParkingSlotOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ParkingRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParkingRecordWhereInput | ParkingRecordWhereInput[]
    OR?: ParkingRecordWhereInput[]
    NOT?: ParkingRecordWhereInput | ParkingRecordWhereInput[]
    vehicleId?: StringFilter<"ParkingRecord"> | string
    parkingLotId?: StringFilter<"ParkingRecord"> | string
    parkingSlotId?: StringFilter<"ParkingRecord"> | string
    bookingId?: StringNullableFilter<"ParkingRecord"> | string | null
    checkIn?: DateTimeFilter<"ParkingRecord"> | Date | string
    checkOut?: DateTimeNullableFilter<"ParkingRecord"> | Date | string | null
    actualCost?: DecimalFilter<"ParkingRecord"> | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFilter<"ParkingRecord"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    parkingLot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    parkingSlot?: XOR<ParkingSlotScalarRelationFilter, ParkingSlotWhereInput>
    bookings?: BookingListRelationFilter
  }, "id">

  export type ParkingRecordOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    parkingLotId?: SortOrder
    parkingSlotId?: SortOrder
    bookingId?: SortOrderInput | SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrderInput | SortOrder
    actualCost?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkingRecordCountOrderByAggregateInput
    _avg?: ParkingRecordAvgOrderByAggregateInput
    _max?: ParkingRecordMaxOrderByAggregateInput
    _min?: ParkingRecordMinOrderByAggregateInput
    _sum?: ParkingRecordSumOrderByAggregateInput
  }

  export type ParkingRecordScalarWhereWithAggregatesInput = {
    AND?: ParkingRecordScalarWhereWithAggregatesInput | ParkingRecordScalarWhereWithAggregatesInput[]
    OR?: ParkingRecordScalarWhereWithAggregatesInput[]
    NOT?: ParkingRecordScalarWhereWithAggregatesInput | ParkingRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParkingRecord"> | string
    vehicleId?: StringWithAggregatesFilter<"ParkingRecord"> | string
    parkingLotId?: StringWithAggregatesFilter<"ParkingRecord"> | string
    parkingSlotId?: StringWithAggregatesFilter<"ParkingRecord"> | string
    bookingId?: StringNullableWithAggregatesFilter<"ParkingRecord"> | string | null
    checkIn?: DateTimeWithAggregatesFilter<"ParkingRecord"> | Date | string
    checkOut?: DateTimeNullableWithAggregatesFilter<"ParkingRecord"> | Date | string | null
    actualCost?: DecimalWithAggregatesFilter<"ParkingRecord"> | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"ParkingRecord"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"ParkingRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingRecord"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    bookingId?: StringNullableFilter<"Payment"> | string | null
    monthlyPassId?: StringNullableFilter<"Payment"> | string | null
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    referenceId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
    monthlyPass?: XOR<MonthlyPassNullableScalarRelationFilter, MonthlyPassWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrderInput | SortOrder
    monthlyPassId?: SortOrderInput | SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
    monthlyPass?: MonthlyPassOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    monthlyPassId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    referenceId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
    monthlyPass?: XOR<MonthlyPassNullableScalarRelationFilter, MonthlyPassWhereInput> | null
  }, "id" | "bookingId" | "monthlyPassId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrderInput | SortOrder
    monthlyPassId?: SortOrderInput | SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    bookingId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    monthlyPassId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    referenceId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type MonthlyPassWhereInput = {
    AND?: MonthlyPassWhereInput | MonthlyPassWhereInput[]
    OR?: MonthlyPassWhereInput[]
    NOT?: MonthlyPassWhereInput | MonthlyPassWhereInput[]
    id?: StringFilter<"MonthlyPass"> | string
    userId?: StringFilter<"MonthlyPass"> | string
    parkingLotId?: StringFilter<"MonthlyPass"> | string
    vehicleType?: EnumVehicleTypeFilter<"MonthlyPass"> | $Enums.VehicleType
    startDate?: DateTimeFilter<"MonthlyPass"> | Date | string
    endDate?: DateTimeFilter<"MonthlyPass"> | Date | string
    price?: DecimalFilter<"MonthlyPass"> | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusFilter<"MonthlyPass"> | $Enums.PassStatus
    createdAt?: DateTimeFilter<"MonthlyPass"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyPass"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parkingLot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type MonthlyPassOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    parkingLotId?: SortOrder
    vehicleType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    parkingLot?: ParkingLotOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type MonthlyPassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonthlyPassWhereInput | MonthlyPassWhereInput[]
    OR?: MonthlyPassWhereInput[]
    NOT?: MonthlyPassWhereInput | MonthlyPassWhereInput[]
    userId?: StringFilter<"MonthlyPass"> | string
    parkingLotId?: StringFilter<"MonthlyPass"> | string
    vehicleType?: EnumVehicleTypeFilter<"MonthlyPass"> | $Enums.VehicleType
    startDate?: DateTimeFilter<"MonthlyPass"> | Date | string
    endDate?: DateTimeFilter<"MonthlyPass"> | Date | string
    price?: DecimalFilter<"MonthlyPass"> | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusFilter<"MonthlyPass"> | $Enums.PassStatus
    createdAt?: DateTimeFilter<"MonthlyPass"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyPass"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parkingLot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id">

  export type MonthlyPassOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    parkingLotId?: SortOrder
    vehicleType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MonthlyPassCountOrderByAggregateInput
    _avg?: MonthlyPassAvgOrderByAggregateInput
    _max?: MonthlyPassMaxOrderByAggregateInput
    _min?: MonthlyPassMinOrderByAggregateInput
    _sum?: MonthlyPassSumOrderByAggregateInput
  }

  export type MonthlyPassScalarWhereWithAggregatesInput = {
    AND?: MonthlyPassScalarWhereWithAggregatesInput | MonthlyPassScalarWhereWithAggregatesInput[]
    OR?: MonthlyPassScalarWhereWithAggregatesInput[]
    NOT?: MonthlyPassScalarWhereWithAggregatesInput | MonthlyPassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonthlyPass"> | string
    userId?: StringWithAggregatesFilter<"MonthlyPass"> | string
    parkingLotId?: StringWithAggregatesFilter<"MonthlyPass"> | string
    vehicleType?: EnumVehicleTypeWithAggregatesFilter<"MonthlyPass"> | $Enums.VehicleType
    startDate?: DateTimeWithAggregatesFilter<"MonthlyPass"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"MonthlyPass"> | Date | string
    price?: DecimalWithAggregatesFilter<"MonthlyPass"> | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusWithAggregatesFilter<"MonthlyPass"> | $Enums.PassStatus
    createdAt?: DateTimeWithAggregatesFilter<"MonthlyPass"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MonthlyPass"> | Date | string
  }

  export type AdminLogWhereInput = {
    AND?: AdminLogWhereInput | AdminLogWhereInput[]
    OR?: AdminLogWhereInput[]
    NOT?: AdminLogWhereInput | AdminLogWhereInput[]
    id?: StringFilter<"AdminLog"> | string
    adminId?: StringFilter<"AdminLog"> | string
    action?: StringFilter<"AdminLog"> | string
    resourceType?: StringFilter<"AdminLog"> | string
    resourceId?: StringNullableFilter<"AdminLog"> | string | null
    changes?: JsonNullableFilter<"AdminLog">
    ipAddress?: StringNullableFilter<"AdminLog"> | string | null
    createdAt?: DateTimeFilter<"AdminLog"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminLogOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    changes?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    admin?: UserOrderByWithRelationInput
  }

  export type AdminLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminLogWhereInput | AdminLogWhereInput[]
    OR?: AdminLogWhereInput[]
    NOT?: AdminLogWhereInput | AdminLogWhereInput[]
    adminId?: StringFilter<"AdminLog"> | string
    action?: StringFilter<"AdminLog"> | string
    resourceType?: StringFilter<"AdminLog"> | string
    resourceId?: StringNullableFilter<"AdminLog"> | string | null
    changes?: JsonNullableFilter<"AdminLog">
    ipAddress?: StringNullableFilter<"AdminLog"> | string | null
    createdAt?: DateTimeFilter<"AdminLog"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AdminLogOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    changes?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AdminLogCountOrderByAggregateInput
    _max?: AdminLogMaxOrderByAggregateInput
    _min?: AdminLogMinOrderByAggregateInput
  }

  export type AdminLogScalarWhereWithAggregatesInput = {
    AND?: AdminLogScalarWhereWithAggregatesInput | AdminLogScalarWhereWithAggregatesInput[]
    OR?: AdminLogScalarWhereWithAggregatesInput[]
    NOT?: AdminLogScalarWhereWithAggregatesInput | AdminLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminLog"> | string
    adminId?: StringWithAggregatesFilter<"AdminLog"> | string
    action?: StringWithAggregatesFilter<"AdminLog"> | string
    resourceType?: StringWithAggregatesFilter<"AdminLog"> | string
    resourceId?: StringNullableWithAggregatesFilter<"AdminLog"> | string | null
    changes?: JsonNullableWithAggregatesFilter<"AdminLog">
    ipAddress?: StringNullableWithAggregatesFilter<"AdminLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdminLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    monthlyPasses?: MonthlyPassCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    monthlyPasses?: MonthlyPassUncheckedCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    monthlyPasses?: MonthlyPassUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    monthlyPasses?: MonthlyPassUncheckedUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    id?: string
    plateNumber: string
    vehicleType: $Enums.VehicleType
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVehiclesInput
    bookings?: BookingCreateNestedManyWithoutVehicleInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    userId: string
    plateNumber: string
    vehicleType: $Enums.VehicleType
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutVehicleInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    bookings?: BookingUpdateManyWithoutVehicleNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutVehicleNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    userId: string
    plateNumber: string
    vehicleType: $Enums.VehicleType
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotCreateInput = {
    id?: string
    name: string
    address: string
    totalSlots: number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotCreateNestedManyWithoutParkingLotInput
    bookings?: BookingCreateNestedManyWithoutParkingLotInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutParkingLotInput
    monthlyPasses?: MonthlyPassCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    totalSlots: number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotUncheckedCreateNestedManyWithoutParkingLotInput
    bookings?: BookingUncheckedCreateNestedManyWithoutParkingLotInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutParkingLotInput
    monthlyPasses?: MonthlyPassUncheckedCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUpdateManyWithoutParkingLotNestedInput
    bookings?: BookingUpdateManyWithoutParkingLotNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutParkingLotNestedInput
    monthlyPasses?: MonthlyPassUpdateManyWithoutParkingLotNestedInput
  }

  export type ParkingLotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUncheckedUpdateManyWithoutParkingLotNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutParkingLotNestedInput
    monthlyPasses?: MonthlyPassUncheckedUpdateManyWithoutParkingLotNestedInput
  }

  export type ParkingLotCreateManyInput = {
    id?: string
    name: string
    address: string
    totalSlots: number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingLotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSlotCreateInput = {
    id?: string
    zoneId: string
    slotNumber: string
    vehicleType: $Enums.VehicleType
    status?: $Enums.SlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLot: ParkingLotCreateNestedOneWithoutSlotsInput
    bookings?: BookingCreateNestedManyWithoutParkingSlotInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutParkingSlotInput
  }

  export type ParkingSlotUncheckedCreateInput = {
    id?: string
    parkingLotId: string
    zoneId: string
    slotNumber: string
    vehicleType: $Enums.VehicleType
    status?: $Enums.SlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutParkingSlotInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutParkingSlotInput
  }

  export type ParkingSlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLot?: ParkingLotUpdateOneRequiredWithoutSlotsNestedInput
    bookings?: BookingUpdateManyWithoutParkingSlotNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutParkingSlotNestedInput
  }

  export type ParkingSlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutParkingSlotNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutParkingSlotNestedInput
  }

  export type ParkingSlotCreateManyInput = {
    id?: string
    parkingLotId: string
    zoneId: string
    slotNumber: string
    vehicleType: $Enums.VehicleType
    status?: $Enums.SlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingSlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    vehicle: VehicleCreateNestedOneWithoutBookingsInput
    parkingSlot: ParkingSlotCreateNestedOneWithoutBookingsInput
    parkingLot: ParkingLotCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    parkingRecord?: ParkingRecordCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    userId: string
    vehicleId: string
    parkingSlotId: string
    parkingLotId: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecordId?: string | null
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutBookingsNestedInput
    parkingSlot?: ParkingSlotUpdateOneRequiredWithoutBookingsNestedInput
    parkingLot?: ParkingLotUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    parkingRecord?: ParkingRecordUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    userId: string
    vehicleId: string
    parkingSlotId: string
    parkingLotId: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecordId?: string | null
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecordId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingRecordCreateInput = {
    id?: string
    bookingId?: string | null
    checkIn: Date | string
    checkOut?: Date | string | null
    actualCost?: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutParkingRecordsInput
    parkingLot: ParkingLotCreateNestedOneWithoutParkingRecordsInput
    parkingSlot: ParkingSlotCreateNestedOneWithoutParkingRecordsInput
    bookings?: BookingCreateNestedManyWithoutParkingRecordInput
  }

  export type ParkingRecordUncheckedCreateInput = {
    id?: string
    vehicleId: string
    parkingLotId: string
    parkingSlotId: string
    bookingId?: string | null
    checkIn: Date | string
    checkOut?: Date | string | null
    actualCost?: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutParkingRecordInput
  }

  export type ParkingRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutParkingRecordsNestedInput
    parkingLot?: ParkingLotUpdateOneRequiredWithoutParkingRecordsNestedInput
    parkingSlot?: ParkingSlotUpdateOneRequiredWithoutParkingRecordsNestedInput
    bookings?: BookingUpdateManyWithoutParkingRecordNestedInput
  }

  export type ParkingRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutParkingRecordNestedInput
  }

  export type ParkingRecordCreateManyInput = {
    id?: string
    vehicleId: string
    parkingLotId: string
    parkingSlotId: string
    bookingId?: string | null
    checkIn: Date | string
    checkOut?: Date | string | null
    actualCost?: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    referenceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
    booking?: BookingCreateNestedOneWithoutPaymentInput
    monthlyPass?: MonthlyPassCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    bookingId?: string | null
    monthlyPassId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    referenceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    booking?: BookingUpdateOneWithoutPaymentNestedInput
    monthlyPass?: MonthlyPassUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPassId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    bookingId?: string | null
    monthlyPassId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    referenceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPassId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyPassCreateInput = {
    id?: string
    vehicleType: $Enums.VehicleType
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.PassStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMonthlyPassesInput
    parkingLot: ParkingLotCreateNestedOneWithoutMonthlyPassesInput
    payment?: PaymentCreateNestedOneWithoutMonthlyPassInput
  }

  export type MonthlyPassUncheckedCreateInput = {
    id?: string
    userId: string
    parkingLotId: string
    vehicleType: $Enums.VehicleType
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.PassStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutMonthlyPassInput
  }

  export type MonthlyPassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMonthlyPassesNestedInput
    parkingLot?: ParkingLotUpdateOneRequiredWithoutMonthlyPassesNestedInput
    payment?: PaymentUpdateOneWithoutMonthlyPassNestedInput
  }

  export type MonthlyPassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutMonthlyPassNestedInput
  }

  export type MonthlyPassCreateManyInput = {
    id?: string
    userId: string
    parkingLotId: string
    vehicleType: $Enums.VehicleType
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.PassStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyPassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyPassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogCreateInput = {
    id?: string
    action: string
    resourceType: string
    resourceId?: string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutAdminLogsInput
  }

  export type AdminLogUncheckedCreateInput = {
    id?: string
    adminId: string
    action: string
    resourceType: string
    resourceId?: string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AdminLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutAdminLogsNestedInput
  }

  export type AdminLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogCreateManyInput = {
    id?: string
    adminId: string
    action: string
    resourceType: string
    resourceId?: string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AdminLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type MonthlyPassListRelationFilter = {
    every?: MonthlyPassWhereInput
    some?: MonthlyPassWhereInput
    none?: MonthlyPassWhereInput
  }

  export type AdminLogListRelationFilter = {
    every?: AdminLogWhereInput
    some?: AdminLogWhereInput
    none?: AdminLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonthlyPassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ParkingRecordListRelationFilter = {
    every?: ParkingRecordWhereInput
    some?: ParkingRecordWhereInput
    none?: ParkingRecordWhereInput
  }

  export type ParkingRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    vehicleType?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    vehicleType?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plateNumber?: SortOrder
    vehicleType?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ParkingSlotListRelationFilter = {
    every?: ParkingSlotWhereInput
    some?: ParkingSlotWhereInput
    none?: ParkingSlotWhereInput
  }

  export type ParkingSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingLotCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    totalSlots?: SortOrder
    zones?: SortOrder
    hourlyRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingLotAvgOrderByAggregateInput = {
    totalSlots?: SortOrder
    hourlyRate?: SortOrder
  }

  export type ParkingLotMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    totalSlots?: SortOrder
    hourlyRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingLotMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    totalSlots?: SortOrder
    hourlyRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingLotSumOrderByAggregateInput = {
    totalSlots?: SortOrder
    hourlyRate?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumSlotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusFilter<$PrismaModel> | $Enums.SlotStatus
  }

  export type ParkingLotScalarRelationFilter = {
    is?: ParkingLotWhereInput
    isNot?: ParkingLotWhereInput
  }

  export type ParkingSlotParkingLotIdSlotNumberCompoundUniqueInput = {
    parkingLotId: string
    slotNumber: string
  }

  export type ParkingSlotCountOrderByAggregateInput = {
    id?: SortOrder
    parkingLotId?: SortOrder
    zoneId?: SortOrder
    slotNumber?: SortOrder
    vehicleType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    parkingLotId?: SortOrder
    zoneId?: SortOrder
    slotNumber?: SortOrder
    vehicleType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingSlotMinOrderByAggregateInput = {
    id?: SortOrder
    parkingLotId?: SortOrder
    zoneId?: SortOrder
    slotNumber?: SortOrder
    vehicleType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSlotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusWithAggregatesFilter<$PrismaModel> | $Enums.SlotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotStatusFilter<$PrismaModel>
    _max?: NestedEnumSlotStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type ParkingSlotScalarRelationFilter = {
    is?: ParkingSlotWhereInput
    isNot?: ParkingSlotWhereInput
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type ParkingRecordNullableScalarRelationFilter = {
    is?: ParkingRecordWhereInput | null
    isNot?: ParkingRecordWhereInput | null
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    parkingSlotId?: SortOrder
    parkingLotId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    estimatedCost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingRecordId?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    estimatedCost?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    parkingSlotId?: SortOrder
    parkingLotId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    estimatedCost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingRecordId?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    parkingSlotId?: SortOrder
    parkingLotId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    estimatedCost?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingRecordId?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    estimatedCost?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type ParkingRecordCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    parkingLotId?: SortOrder
    parkingSlotId?: SortOrder
    bookingId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    actualCost?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingRecordAvgOrderByAggregateInput = {
    actualCost?: SortOrder
  }

  export type ParkingRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    parkingLotId?: SortOrder
    parkingSlotId?: SortOrder
    bookingId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    actualCost?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingRecordMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    parkingLotId?: SortOrder
    parkingSlotId?: SortOrder
    bookingId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    actualCost?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingRecordSumOrderByAggregateInput = {
    actualCost?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type BookingNullableScalarRelationFilter = {
    is?: BookingWhereInput | null
    isNot?: BookingWhereInput | null
  }

  export type MonthlyPassNullableScalarRelationFilter = {
    is?: MonthlyPassWhereInput | null
    isNot?: MonthlyPassWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    monthlyPassId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    referenceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    monthlyPassId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    referenceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    monthlyPassId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    referenceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPassStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PassStatus | EnumPassStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PassStatus[] | ListEnumPassStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PassStatus[] | ListEnumPassStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPassStatusFilter<$PrismaModel> | $Enums.PassStatus
  }

  export type MonthlyPassCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parkingLotId?: SortOrder
    vehicleType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyPassAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type MonthlyPassMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parkingLotId?: SortOrder
    vehicleType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyPassMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parkingLotId?: SortOrder
    vehicleType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyPassSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumPassStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PassStatus | EnumPassStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PassStatus[] | ListEnumPassStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PassStatus[] | ListEnumPassStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPassStatusWithAggregatesFilter<$PrismaModel> | $Enums.PassStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPassStatusFilter<$PrismaModel>
    _max?: NestedEnumPassStatusFilter<$PrismaModel>
  }

  export type AdminLogCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    changes?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminLogMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminLogMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleCreateNestedManyWithoutUserInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type MonthlyPassCreateNestedManyWithoutUserInput = {
    create?: XOR<MonthlyPassCreateWithoutUserInput, MonthlyPassUncheckedCreateWithoutUserInput> | MonthlyPassCreateWithoutUserInput[] | MonthlyPassUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonthlyPassCreateOrConnectWithoutUserInput | MonthlyPassCreateOrConnectWithoutUserInput[]
    createMany?: MonthlyPassCreateManyUserInputEnvelope
    connect?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
  }

  export type AdminLogCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminLogCreateWithoutAdminInput, AdminLogUncheckedCreateWithoutAdminInput> | AdminLogCreateWithoutAdminInput[] | AdminLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminLogCreateOrConnectWithoutAdminInput | AdminLogCreateOrConnectWithoutAdminInput[]
    createMany?: AdminLogCreateManyAdminInputEnvelope
    connect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type MonthlyPassUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MonthlyPassCreateWithoutUserInput, MonthlyPassUncheckedCreateWithoutUserInput> | MonthlyPassCreateWithoutUserInput[] | MonthlyPassUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonthlyPassCreateOrConnectWithoutUserInput | MonthlyPassCreateOrConnectWithoutUserInput[]
    createMany?: MonthlyPassCreateManyUserInputEnvelope
    connect?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
  }

  export type AdminLogUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminLogCreateWithoutAdminInput, AdminLogUncheckedCreateWithoutAdminInput> | AdminLogCreateWithoutAdminInput[] | AdminLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminLogCreateOrConnectWithoutAdminInput | AdminLogCreateOrConnectWithoutAdminInput[]
    createMany?: AdminLogCreateManyAdminInputEnvelope
    connect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VehicleUpdateManyWithoutUserNestedInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutUserInput | VehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutUserInput | VehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutUserInput | VehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MonthlyPassUpdateManyWithoutUserNestedInput = {
    create?: XOR<MonthlyPassCreateWithoutUserInput, MonthlyPassUncheckedCreateWithoutUserInput> | MonthlyPassCreateWithoutUserInput[] | MonthlyPassUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonthlyPassCreateOrConnectWithoutUserInput | MonthlyPassCreateOrConnectWithoutUserInput[]
    upsert?: MonthlyPassUpsertWithWhereUniqueWithoutUserInput | MonthlyPassUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MonthlyPassCreateManyUserInputEnvelope
    set?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    disconnect?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    delete?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    connect?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    update?: MonthlyPassUpdateWithWhereUniqueWithoutUserInput | MonthlyPassUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MonthlyPassUpdateManyWithWhereWithoutUserInput | MonthlyPassUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MonthlyPassScalarWhereInput | MonthlyPassScalarWhereInput[]
  }

  export type AdminLogUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminLogCreateWithoutAdminInput, AdminLogUncheckedCreateWithoutAdminInput> | AdminLogCreateWithoutAdminInput[] | AdminLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminLogCreateOrConnectWithoutAdminInput | AdminLogCreateOrConnectWithoutAdminInput[]
    upsert?: AdminLogUpsertWithWhereUniqueWithoutAdminInput | AdminLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminLogCreateManyAdminInputEnvelope
    set?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    disconnect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    delete?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    connect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    update?: AdminLogUpdateWithWhereUniqueWithoutAdminInput | AdminLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminLogUpdateManyWithWhereWithoutAdminInput | AdminLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminLogScalarWhereInput | AdminLogScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutUserInput | VehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutUserInput | VehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutUserInput | VehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MonthlyPassUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MonthlyPassCreateWithoutUserInput, MonthlyPassUncheckedCreateWithoutUserInput> | MonthlyPassCreateWithoutUserInput[] | MonthlyPassUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonthlyPassCreateOrConnectWithoutUserInput | MonthlyPassCreateOrConnectWithoutUserInput[]
    upsert?: MonthlyPassUpsertWithWhereUniqueWithoutUserInput | MonthlyPassUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MonthlyPassCreateManyUserInputEnvelope
    set?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    disconnect?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    delete?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    connect?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    update?: MonthlyPassUpdateWithWhereUniqueWithoutUserInput | MonthlyPassUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MonthlyPassUpdateManyWithWhereWithoutUserInput | MonthlyPassUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MonthlyPassScalarWhereInput | MonthlyPassScalarWhereInput[]
  }

  export type AdminLogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminLogCreateWithoutAdminInput, AdminLogUncheckedCreateWithoutAdminInput> | AdminLogCreateWithoutAdminInput[] | AdminLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminLogCreateOrConnectWithoutAdminInput | AdminLogCreateOrConnectWithoutAdminInput[]
    upsert?: AdminLogUpsertWithWhereUniqueWithoutAdminInput | AdminLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminLogCreateManyAdminInputEnvelope
    set?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    disconnect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    delete?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    connect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    update?: AdminLogUpdateWithWhereUniqueWithoutAdminInput | AdminLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminLogUpdateManyWithWhereWithoutAdminInput | AdminLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminLogScalarWhereInput | AdminLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutVehicleInput = {
    create?: XOR<BookingCreateWithoutVehicleInput, BookingUncheckedCreateWithoutVehicleInput> | BookingCreateWithoutVehicleInput[] | BookingUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVehicleInput | BookingCreateOrConnectWithoutVehicleInput[]
    createMany?: BookingCreateManyVehicleInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ParkingRecordCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput> | ParkingRecordCreateWithoutVehicleInput[] | ParkingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutVehicleInput | ParkingRecordCreateOrConnectWithoutVehicleInput[]
    createMany?: ParkingRecordCreateManyVehicleInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<BookingCreateWithoutVehicleInput, BookingUncheckedCreateWithoutVehicleInput> | BookingCreateWithoutVehicleInput[] | BookingUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVehicleInput | BookingCreateOrConnectWithoutVehicleInput[]
    createMany?: BookingCreateManyVehicleInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ParkingRecordUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput> | ParkingRecordCreateWithoutVehicleInput[] | ParkingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutVehicleInput | ParkingRecordCreateOrConnectWithoutVehicleInput[]
    createMany?: ParkingRecordCreateManyVehicleInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type EnumVehicleTypeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleType
  }

  export type UserUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    upsert?: UserUpsertWithoutVehiclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehiclesInput, UserUpdateWithoutVehiclesInput>, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type BookingUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<BookingCreateWithoutVehicleInput, BookingUncheckedCreateWithoutVehicleInput> | BookingCreateWithoutVehicleInput[] | BookingUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVehicleInput | BookingCreateOrConnectWithoutVehicleInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutVehicleInput | BookingUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: BookingCreateManyVehicleInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutVehicleInput | BookingUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutVehicleInput | BookingUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ParkingRecordUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput> | ParkingRecordCreateWithoutVehicleInput[] | ParkingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutVehicleInput | ParkingRecordCreateOrConnectWithoutVehicleInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutVehicleInput | ParkingRecordUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ParkingRecordCreateManyVehicleInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutVehicleInput | ParkingRecordUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutVehicleInput | ParkingRecordUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<BookingCreateWithoutVehicleInput, BookingUncheckedCreateWithoutVehicleInput> | BookingCreateWithoutVehicleInput[] | BookingUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVehicleInput | BookingCreateOrConnectWithoutVehicleInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutVehicleInput | BookingUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: BookingCreateManyVehicleInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutVehicleInput | BookingUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutVehicleInput | BookingUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ParkingRecordUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput> | ParkingRecordCreateWithoutVehicleInput[] | ParkingRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutVehicleInput | ParkingRecordCreateOrConnectWithoutVehicleInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutVehicleInput | ParkingRecordUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ParkingRecordCreateManyVehicleInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutVehicleInput | ParkingRecordUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutVehicleInput | ParkingRecordUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type ParkingSlotCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingLotInput, ParkingSlotUncheckedCreateWithoutParkingLotInput> | ParkingSlotCreateWithoutParkingLotInput[] | ParkingSlotUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingLotInput | ParkingSlotCreateOrConnectWithoutParkingLotInput[]
    createMany?: ParkingSlotCreateManyParkingLotInputEnvelope
    connect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<BookingCreateWithoutParkingLotInput, BookingUncheckedCreateWithoutParkingLotInput> | BookingCreateWithoutParkingLotInput[] | BookingUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingLotInput | BookingCreateOrConnectWithoutParkingLotInput[]
    createMany?: BookingCreateManyParkingLotInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ParkingRecordCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingLotInput, ParkingRecordUncheckedCreateWithoutParkingLotInput> | ParkingRecordCreateWithoutParkingLotInput[] | ParkingRecordUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingLotInput | ParkingRecordCreateOrConnectWithoutParkingLotInput[]
    createMany?: ParkingRecordCreateManyParkingLotInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type MonthlyPassCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<MonthlyPassCreateWithoutParkingLotInput, MonthlyPassUncheckedCreateWithoutParkingLotInput> | MonthlyPassCreateWithoutParkingLotInput[] | MonthlyPassUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: MonthlyPassCreateOrConnectWithoutParkingLotInput | MonthlyPassCreateOrConnectWithoutParkingLotInput[]
    createMany?: MonthlyPassCreateManyParkingLotInputEnvelope
    connect?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
  }

  export type ParkingSlotUncheckedCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingLotInput, ParkingSlotUncheckedCreateWithoutParkingLotInput> | ParkingSlotCreateWithoutParkingLotInput[] | ParkingSlotUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingLotInput | ParkingSlotCreateOrConnectWithoutParkingLotInput[]
    createMany?: ParkingSlotCreateManyParkingLotInputEnvelope
    connect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<BookingCreateWithoutParkingLotInput, BookingUncheckedCreateWithoutParkingLotInput> | BookingCreateWithoutParkingLotInput[] | BookingUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingLotInput | BookingCreateOrConnectWithoutParkingLotInput[]
    createMany?: BookingCreateManyParkingLotInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ParkingRecordUncheckedCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingLotInput, ParkingRecordUncheckedCreateWithoutParkingLotInput> | ParkingRecordCreateWithoutParkingLotInput[] | ParkingRecordUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingLotInput | ParkingRecordCreateOrConnectWithoutParkingLotInput[]
    createMany?: ParkingRecordCreateManyParkingLotInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type MonthlyPassUncheckedCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<MonthlyPassCreateWithoutParkingLotInput, MonthlyPassUncheckedCreateWithoutParkingLotInput> | MonthlyPassCreateWithoutParkingLotInput[] | MonthlyPassUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: MonthlyPassCreateOrConnectWithoutParkingLotInput | MonthlyPassCreateOrConnectWithoutParkingLotInput[]
    createMany?: MonthlyPassCreateManyParkingLotInputEnvelope
    connect?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ParkingSlotUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingLotInput, ParkingSlotUncheckedCreateWithoutParkingLotInput> | ParkingSlotCreateWithoutParkingLotInput[] | ParkingSlotUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingLotInput | ParkingSlotCreateOrConnectWithoutParkingLotInput[]
    upsert?: ParkingSlotUpsertWithWhereUniqueWithoutParkingLotInput | ParkingSlotUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: ParkingSlotCreateManyParkingLotInputEnvelope
    set?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    disconnect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    delete?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    connect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    update?: ParkingSlotUpdateWithWhereUniqueWithoutParkingLotInput | ParkingSlotUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: ParkingSlotUpdateManyWithWhereWithoutParkingLotInput | ParkingSlotUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: ParkingSlotScalarWhereInput | ParkingSlotScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<BookingCreateWithoutParkingLotInput, BookingUncheckedCreateWithoutParkingLotInput> | BookingCreateWithoutParkingLotInput[] | BookingUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingLotInput | BookingCreateOrConnectWithoutParkingLotInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutParkingLotInput | BookingUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: BookingCreateManyParkingLotInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutParkingLotInput | BookingUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutParkingLotInput | BookingUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ParkingRecordUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingLotInput, ParkingRecordUncheckedCreateWithoutParkingLotInput> | ParkingRecordCreateWithoutParkingLotInput[] | ParkingRecordUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingLotInput | ParkingRecordCreateOrConnectWithoutParkingLotInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutParkingLotInput | ParkingRecordUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: ParkingRecordCreateManyParkingLotInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutParkingLotInput | ParkingRecordUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutParkingLotInput | ParkingRecordUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type MonthlyPassUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<MonthlyPassCreateWithoutParkingLotInput, MonthlyPassUncheckedCreateWithoutParkingLotInput> | MonthlyPassCreateWithoutParkingLotInput[] | MonthlyPassUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: MonthlyPassCreateOrConnectWithoutParkingLotInput | MonthlyPassCreateOrConnectWithoutParkingLotInput[]
    upsert?: MonthlyPassUpsertWithWhereUniqueWithoutParkingLotInput | MonthlyPassUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: MonthlyPassCreateManyParkingLotInputEnvelope
    set?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    disconnect?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    delete?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    connect?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    update?: MonthlyPassUpdateWithWhereUniqueWithoutParkingLotInput | MonthlyPassUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: MonthlyPassUpdateManyWithWhereWithoutParkingLotInput | MonthlyPassUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: MonthlyPassScalarWhereInput | MonthlyPassScalarWhereInput[]
  }

  export type ParkingSlotUncheckedUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingLotInput, ParkingSlotUncheckedCreateWithoutParkingLotInput> | ParkingSlotCreateWithoutParkingLotInput[] | ParkingSlotUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingLotInput | ParkingSlotCreateOrConnectWithoutParkingLotInput[]
    upsert?: ParkingSlotUpsertWithWhereUniqueWithoutParkingLotInput | ParkingSlotUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: ParkingSlotCreateManyParkingLotInputEnvelope
    set?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    disconnect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    delete?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    connect?: ParkingSlotWhereUniqueInput | ParkingSlotWhereUniqueInput[]
    update?: ParkingSlotUpdateWithWhereUniqueWithoutParkingLotInput | ParkingSlotUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: ParkingSlotUpdateManyWithWhereWithoutParkingLotInput | ParkingSlotUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: ParkingSlotScalarWhereInput | ParkingSlotScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<BookingCreateWithoutParkingLotInput, BookingUncheckedCreateWithoutParkingLotInput> | BookingCreateWithoutParkingLotInput[] | BookingUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingLotInput | BookingCreateOrConnectWithoutParkingLotInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutParkingLotInput | BookingUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: BookingCreateManyParkingLotInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutParkingLotInput | BookingUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutParkingLotInput | BookingUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ParkingRecordUncheckedUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingLotInput, ParkingRecordUncheckedCreateWithoutParkingLotInput> | ParkingRecordCreateWithoutParkingLotInput[] | ParkingRecordUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingLotInput | ParkingRecordCreateOrConnectWithoutParkingLotInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutParkingLotInput | ParkingRecordUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: ParkingRecordCreateManyParkingLotInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutParkingLotInput | ParkingRecordUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutParkingLotInput | ParkingRecordUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type MonthlyPassUncheckedUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<MonthlyPassCreateWithoutParkingLotInput, MonthlyPassUncheckedCreateWithoutParkingLotInput> | MonthlyPassCreateWithoutParkingLotInput[] | MonthlyPassUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: MonthlyPassCreateOrConnectWithoutParkingLotInput | MonthlyPassCreateOrConnectWithoutParkingLotInput[]
    upsert?: MonthlyPassUpsertWithWhereUniqueWithoutParkingLotInput | MonthlyPassUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: MonthlyPassCreateManyParkingLotInputEnvelope
    set?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    disconnect?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    delete?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    connect?: MonthlyPassWhereUniqueInput | MonthlyPassWhereUniqueInput[]
    update?: MonthlyPassUpdateWithWhereUniqueWithoutParkingLotInput | MonthlyPassUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: MonthlyPassUpdateManyWithWhereWithoutParkingLotInput | MonthlyPassUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: MonthlyPassScalarWhereInput | MonthlyPassScalarWhereInput[]
  }

  export type ParkingLotCreateNestedOneWithoutSlotsInput = {
    create?: XOR<ParkingLotCreateWithoutSlotsInput, ParkingLotUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutSlotsInput
    connect?: ParkingLotWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutParkingSlotInput = {
    create?: XOR<BookingCreateWithoutParkingSlotInput, BookingUncheckedCreateWithoutParkingSlotInput> | BookingCreateWithoutParkingSlotInput[] | BookingUncheckedCreateWithoutParkingSlotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingSlotInput | BookingCreateOrConnectWithoutParkingSlotInput[]
    createMany?: BookingCreateManyParkingSlotInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ParkingRecordCreateNestedManyWithoutParkingSlotInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingSlotInput, ParkingRecordUncheckedCreateWithoutParkingSlotInput> | ParkingRecordCreateWithoutParkingSlotInput[] | ParkingRecordUncheckedCreateWithoutParkingSlotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingSlotInput | ParkingRecordCreateOrConnectWithoutParkingSlotInput[]
    createMany?: ParkingRecordCreateManyParkingSlotInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutParkingSlotInput = {
    create?: XOR<BookingCreateWithoutParkingSlotInput, BookingUncheckedCreateWithoutParkingSlotInput> | BookingCreateWithoutParkingSlotInput[] | BookingUncheckedCreateWithoutParkingSlotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingSlotInput | BookingCreateOrConnectWithoutParkingSlotInput[]
    createMany?: BookingCreateManyParkingSlotInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ParkingRecordUncheckedCreateNestedManyWithoutParkingSlotInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingSlotInput, ParkingRecordUncheckedCreateWithoutParkingSlotInput> | ParkingRecordCreateWithoutParkingSlotInput[] | ParkingRecordUncheckedCreateWithoutParkingSlotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingSlotInput | ParkingRecordCreateOrConnectWithoutParkingSlotInput[]
    createMany?: ParkingRecordCreateManyParkingSlotInputEnvelope
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
  }

  export type EnumSlotStatusFieldUpdateOperationsInput = {
    set?: $Enums.SlotStatus
  }

  export type ParkingLotUpdateOneRequiredWithoutSlotsNestedInput = {
    create?: XOR<ParkingLotCreateWithoutSlotsInput, ParkingLotUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutSlotsInput
    upsert?: ParkingLotUpsertWithoutSlotsInput
    connect?: ParkingLotWhereUniqueInput
    update?: XOR<XOR<ParkingLotUpdateToOneWithWhereWithoutSlotsInput, ParkingLotUpdateWithoutSlotsInput>, ParkingLotUncheckedUpdateWithoutSlotsInput>
  }

  export type BookingUpdateManyWithoutParkingSlotNestedInput = {
    create?: XOR<BookingCreateWithoutParkingSlotInput, BookingUncheckedCreateWithoutParkingSlotInput> | BookingCreateWithoutParkingSlotInput[] | BookingUncheckedCreateWithoutParkingSlotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingSlotInput | BookingCreateOrConnectWithoutParkingSlotInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutParkingSlotInput | BookingUpsertWithWhereUniqueWithoutParkingSlotInput[]
    createMany?: BookingCreateManyParkingSlotInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutParkingSlotInput | BookingUpdateWithWhereUniqueWithoutParkingSlotInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutParkingSlotInput | BookingUpdateManyWithWhereWithoutParkingSlotInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ParkingRecordUpdateManyWithoutParkingSlotNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingSlotInput, ParkingRecordUncheckedCreateWithoutParkingSlotInput> | ParkingRecordCreateWithoutParkingSlotInput[] | ParkingRecordUncheckedCreateWithoutParkingSlotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingSlotInput | ParkingRecordCreateOrConnectWithoutParkingSlotInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutParkingSlotInput | ParkingRecordUpsertWithWhereUniqueWithoutParkingSlotInput[]
    createMany?: ParkingRecordCreateManyParkingSlotInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutParkingSlotInput | ParkingRecordUpdateWithWhereUniqueWithoutParkingSlotInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutParkingSlotInput | ParkingRecordUpdateManyWithWhereWithoutParkingSlotInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutParkingSlotNestedInput = {
    create?: XOR<BookingCreateWithoutParkingSlotInput, BookingUncheckedCreateWithoutParkingSlotInput> | BookingCreateWithoutParkingSlotInput[] | BookingUncheckedCreateWithoutParkingSlotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingSlotInput | BookingCreateOrConnectWithoutParkingSlotInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutParkingSlotInput | BookingUpsertWithWhereUniqueWithoutParkingSlotInput[]
    createMany?: BookingCreateManyParkingSlotInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutParkingSlotInput | BookingUpdateWithWhereUniqueWithoutParkingSlotInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutParkingSlotInput | BookingUpdateManyWithWhereWithoutParkingSlotInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ParkingRecordUncheckedUpdateManyWithoutParkingSlotNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutParkingSlotInput, ParkingRecordUncheckedCreateWithoutParkingSlotInput> | ParkingRecordCreateWithoutParkingSlotInput[] | ParkingRecordUncheckedCreateWithoutParkingSlotInput[]
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutParkingSlotInput | ParkingRecordCreateOrConnectWithoutParkingSlotInput[]
    upsert?: ParkingRecordUpsertWithWhereUniqueWithoutParkingSlotInput | ParkingRecordUpsertWithWhereUniqueWithoutParkingSlotInput[]
    createMany?: ParkingRecordCreateManyParkingSlotInputEnvelope
    set?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    disconnect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    delete?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    connect?: ParkingRecordWhereUniqueInput | ParkingRecordWhereUniqueInput[]
    update?: ParkingRecordUpdateWithWhereUniqueWithoutParkingSlotInput | ParkingRecordUpdateWithWhereUniqueWithoutParkingSlotInput[]
    updateMany?: ParkingRecordUpdateManyWithWhereWithoutParkingSlotInput | ParkingRecordUpdateManyWithWhereWithoutParkingSlotInput[]
    deleteMany?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutBookingsInput = {
    create?: XOR<VehicleCreateWithoutBookingsInput, VehicleUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutBookingsInput
    connect?: VehicleWhereUniqueInput
  }

  export type ParkingSlotCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ParkingSlotCreateWithoutBookingsInput, ParkingSlotUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutBookingsInput
    connect?: ParkingSlotWhereUniqueInput
  }

  export type ParkingLotCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ParkingLotCreateWithoutBookingsInput, ParkingLotUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutBookingsInput
    connect?: ParkingLotWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type ParkingRecordCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ParkingRecordCreateWithoutBookingsInput, ParkingRecordUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutBookingsInput
    connect?: ParkingRecordWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type VehicleUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<VehicleCreateWithoutBookingsInput, VehicleUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutBookingsInput
    upsert?: VehicleUpsertWithoutBookingsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutBookingsInput, VehicleUpdateWithoutBookingsInput>, VehicleUncheckedUpdateWithoutBookingsInput>
  }

  export type ParkingSlotUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ParkingSlotCreateWithoutBookingsInput, ParkingSlotUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutBookingsInput
    upsert?: ParkingSlotUpsertWithoutBookingsInput
    connect?: ParkingSlotWhereUniqueInput
    update?: XOR<XOR<ParkingSlotUpdateToOneWithWhereWithoutBookingsInput, ParkingSlotUpdateWithoutBookingsInput>, ParkingSlotUncheckedUpdateWithoutBookingsInput>
  }

  export type ParkingLotUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ParkingLotCreateWithoutBookingsInput, ParkingLotUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutBookingsInput
    upsert?: ParkingLotUpsertWithoutBookingsInput
    connect?: ParkingLotWhereUniqueInput
    update?: XOR<XOR<ParkingLotUpdateToOneWithWhereWithoutBookingsInput, ParkingLotUpdateWithoutBookingsInput>, ParkingLotUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type ParkingRecordUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<ParkingRecordCreateWithoutBookingsInput, ParkingRecordUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParkingRecordCreateOrConnectWithoutBookingsInput
    upsert?: ParkingRecordUpsertWithoutBookingsInput
    disconnect?: ParkingRecordWhereInput | boolean
    delete?: ParkingRecordWhereInput | boolean
    connect?: ParkingRecordWhereUniqueInput
    update?: XOR<XOR<ParkingRecordUpdateToOneWithWhereWithoutBookingsInput, ParkingRecordUpdateWithoutBookingsInput>, ParkingRecordUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type VehicleCreateNestedOneWithoutParkingRecordsInput = {
    create?: XOR<VehicleCreateWithoutParkingRecordsInput, VehicleUncheckedCreateWithoutParkingRecordsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutParkingRecordsInput
    connect?: VehicleWhereUniqueInput
  }

  export type ParkingLotCreateNestedOneWithoutParkingRecordsInput = {
    create?: XOR<ParkingLotCreateWithoutParkingRecordsInput, ParkingLotUncheckedCreateWithoutParkingRecordsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutParkingRecordsInput
    connect?: ParkingLotWhereUniqueInput
  }

  export type ParkingSlotCreateNestedOneWithoutParkingRecordsInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingRecordsInput, ParkingSlotUncheckedCreateWithoutParkingRecordsInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingRecordsInput
    connect?: ParkingSlotWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutParkingRecordInput = {
    create?: XOR<BookingCreateWithoutParkingRecordInput, BookingUncheckedCreateWithoutParkingRecordInput> | BookingCreateWithoutParkingRecordInput[] | BookingUncheckedCreateWithoutParkingRecordInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingRecordInput | BookingCreateOrConnectWithoutParkingRecordInput[]
    createMany?: BookingCreateManyParkingRecordInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutParkingRecordInput = {
    create?: XOR<BookingCreateWithoutParkingRecordInput, BookingUncheckedCreateWithoutParkingRecordInput> | BookingCreateWithoutParkingRecordInput[] | BookingUncheckedCreateWithoutParkingRecordInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingRecordInput | BookingCreateOrConnectWithoutParkingRecordInput[]
    createMany?: BookingCreateManyParkingRecordInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type VehicleUpdateOneRequiredWithoutParkingRecordsNestedInput = {
    create?: XOR<VehicleCreateWithoutParkingRecordsInput, VehicleUncheckedCreateWithoutParkingRecordsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutParkingRecordsInput
    upsert?: VehicleUpsertWithoutParkingRecordsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutParkingRecordsInput, VehicleUpdateWithoutParkingRecordsInput>, VehicleUncheckedUpdateWithoutParkingRecordsInput>
  }

  export type ParkingLotUpdateOneRequiredWithoutParkingRecordsNestedInput = {
    create?: XOR<ParkingLotCreateWithoutParkingRecordsInput, ParkingLotUncheckedCreateWithoutParkingRecordsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutParkingRecordsInput
    upsert?: ParkingLotUpsertWithoutParkingRecordsInput
    connect?: ParkingLotWhereUniqueInput
    update?: XOR<XOR<ParkingLotUpdateToOneWithWhereWithoutParkingRecordsInput, ParkingLotUpdateWithoutParkingRecordsInput>, ParkingLotUncheckedUpdateWithoutParkingRecordsInput>
  }

  export type ParkingSlotUpdateOneRequiredWithoutParkingRecordsNestedInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingRecordsInput, ParkingSlotUncheckedCreateWithoutParkingRecordsInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingRecordsInput
    upsert?: ParkingSlotUpsertWithoutParkingRecordsInput
    connect?: ParkingSlotWhereUniqueInput
    update?: XOR<XOR<ParkingSlotUpdateToOneWithWhereWithoutParkingRecordsInput, ParkingSlotUpdateWithoutParkingRecordsInput>, ParkingSlotUncheckedUpdateWithoutParkingRecordsInput>
  }

  export type BookingUpdateManyWithoutParkingRecordNestedInput = {
    create?: XOR<BookingCreateWithoutParkingRecordInput, BookingUncheckedCreateWithoutParkingRecordInput> | BookingCreateWithoutParkingRecordInput[] | BookingUncheckedCreateWithoutParkingRecordInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingRecordInput | BookingCreateOrConnectWithoutParkingRecordInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutParkingRecordInput | BookingUpsertWithWhereUniqueWithoutParkingRecordInput[]
    createMany?: BookingCreateManyParkingRecordInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutParkingRecordInput | BookingUpdateWithWhereUniqueWithoutParkingRecordInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutParkingRecordInput | BookingUpdateManyWithWhereWithoutParkingRecordInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutParkingRecordNestedInput = {
    create?: XOR<BookingCreateWithoutParkingRecordInput, BookingUncheckedCreateWithoutParkingRecordInput> | BookingCreateWithoutParkingRecordInput[] | BookingUncheckedCreateWithoutParkingRecordInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutParkingRecordInput | BookingCreateOrConnectWithoutParkingRecordInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutParkingRecordInput | BookingUpsertWithWhereUniqueWithoutParkingRecordInput[]
    createMany?: BookingCreateManyParkingRecordInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutParkingRecordInput | BookingUpdateWithWhereUniqueWithoutParkingRecordInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutParkingRecordInput | BookingUpdateManyWithWhereWithoutParkingRecordInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    connect?: BookingWhereUniqueInput
  }

  export type MonthlyPassCreateNestedOneWithoutPaymentInput = {
    create?: XOR<MonthlyPassCreateWithoutPaymentInput, MonthlyPassUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: MonthlyPassCreateOrConnectWithoutPaymentInput
    connect?: MonthlyPassWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type BookingUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    upsert?: BookingUpsertWithoutPaymentInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentInput, BookingUpdateWithoutPaymentInput>, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type MonthlyPassUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<MonthlyPassCreateWithoutPaymentInput, MonthlyPassUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: MonthlyPassCreateOrConnectWithoutPaymentInput
    upsert?: MonthlyPassUpsertWithoutPaymentInput
    disconnect?: MonthlyPassWhereInput | boolean
    delete?: MonthlyPassWhereInput | boolean
    connect?: MonthlyPassWhereUniqueInput
    update?: XOR<XOR<MonthlyPassUpdateToOneWithWhereWithoutPaymentInput, MonthlyPassUpdateWithoutPaymentInput>, MonthlyPassUncheckedUpdateWithoutPaymentInput>
  }

  export type UserCreateNestedOneWithoutMonthlyPassesInput = {
    create?: XOR<UserCreateWithoutMonthlyPassesInput, UserUncheckedCreateWithoutMonthlyPassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonthlyPassesInput
    connect?: UserWhereUniqueInput
  }

  export type ParkingLotCreateNestedOneWithoutMonthlyPassesInput = {
    create?: XOR<ParkingLotCreateWithoutMonthlyPassesInput, ParkingLotUncheckedCreateWithoutMonthlyPassesInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutMonthlyPassesInput
    connect?: ParkingLotWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutMonthlyPassInput = {
    create?: XOR<PaymentCreateWithoutMonthlyPassInput, PaymentUncheckedCreateWithoutMonthlyPassInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutMonthlyPassInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutMonthlyPassInput = {
    create?: XOR<PaymentCreateWithoutMonthlyPassInput, PaymentUncheckedCreateWithoutMonthlyPassInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutMonthlyPassInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumPassStatusFieldUpdateOperationsInput = {
    set?: $Enums.PassStatus
  }

  export type UserUpdateOneRequiredWithoutMonthlyPassesNestedInput = {
    create?: XOR<UserCreateWithoutMonthlyPassesInput, UserUncheckedCreateWithoutMonthlyPassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonthlyPassesInput
    upsert?: UserUpsertWithoutMonthlyPassesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMonthlyPassesInput, UserUpdateWithoutMonthlyPassesInput>, UserUncheckedUpdateWithoutMonthlyPassesInput>
  }

  export type ParkingLotUpdateOneRequiredWithoutMonthlyPassesNestedInput = {
    create?: XOR<ParkingLotCreateWithoutMonthlyPassesInput, ParkingLotUncheckedCreateWithoutMonthlyPassesInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutMonthlyPassesInput
    upsert?: ParkingLotUpsertWithoutMonthlyPassesInput
    connect?: ParkingLotWhereUniqueInput
    update?: XOR<XOR<ParkingLotUpdateToOneWithWhereWithoutMonthlyPassesInput, ParkingLotUpdateWithoutMonthlyPassesInput>, ParkingLotUncheckedUpdateWithoutMonthlyPassesInput>
  }

  export type PaymentUpdateOneWithoutMonthlyPassNestedInput = {
    create?: XOR<PaymentCreateWithoutMonthlyPassInput, PaymentUncheckedCreateWithoutMonthlyPassInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutMonthlyPassInput
    upsert?: PaymentUpsertWithoutMonthlyPassInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutMonthlyPassInput, PaymentUpdateWithoutMonthlyPassInput>, PaymentUncheckedUpdateWithoutMonthlyPassInput>
  }

  export type PaymentUncheckedUpdateOneWithoutMonthlyPassNestedInput = {
    create?: XOR<PaymentCreateWithoutMonthlyPassInput, PaymentUncheckedCreateWithoutMonthlyPassInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutMonthlyPassInput
    upsert?: PaymentUpsertWithoutMonthlyPassInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutMonthlyPassInput, PaymentUpdateWithoutMonthlyPassInput>, PaymentUncheckedUpdateWithoutMonthlyPassInput>
  }

  export type UserCreateNestedOneWithoutAdminLogsInput = {
    create?: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminLogsNestedInput = {
    create?: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminLogsInput
    upsert?: UserUpsertWithoutAdminLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminLogsInput, UserUpdateWithoutAdminLogsInput>, UserUncheckedUpdateWithoutAdminLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumSlotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusFilter<$PrismaModel> | $Enums.SlotStatus
  }

  export type NestedEnumSlotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusWithAggregatesFilter<$PrismaModel> | $Enums.SlotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotStatusFilter<$PrismaModel>
    _max?: NestedEnumSlotStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPassStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PassStatus | EnumPassStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PassStatus[] | ListEnumPassStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PassStatus[] | ListEnumPassStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPassStatusFilter<$PrismaModel> | $Enums.PassStatus
  }

  export type NestedEnumPassStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PassStatus | EnumPassStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PassStatus[] | ListEnumPassStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PassStatus[] | ListEnumPassStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPassStatusWithAggregatesFilter<$PrismaModel> | $Enums.PassStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPassStatusFilter<$PrismaModel>
    _max?: NestedEnumPassStatusFilter<$PrismaModel>
  }

  export type VehicleCreateWithoutUserInput = {
    id?: string
    plateNumber: string
    vehicleType: $Enums.VehicleType
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutVehicleInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutUserInput = {
    id?: string
    plateNumber: string
    vehicleType: $Enums.VehicleType
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutVehicleInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutUserInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
  }

  export type VehicleCreateManyUserInputEnvelope = {
    data: VehicleCreateManyUserInput | VehicleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutUserInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutBookingsInput
    parkingSlot: ParkingSlotCreateNestedOneWithoutBookingsInput
    parkingLot: ParkingLotCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    parkingRecord?: ParkingRecordCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    vehicleId: string
    parkingSlotId: string
    parkingLotId: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecordId?: string | null
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    referenceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingCreateNestedOneWithoutPaymentInput
    monthlyPass?: MonthlyPassCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    bookingId?: string | null
    monthlyPassId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    referenceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyPassCreateWithoutUserInput = {
    id?: string
    vehicleType: $Enums.VehicleType
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.PassStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLot: ParkingLotCreateNestedOneWithoutMonthlyPassesInput
    payment?: PaymentCreateNestedOneWithoutMonthlyPassInput
  }

  export type MonthlyPassUncheckedCreateWithoutUserInput = {
    id?: string
    parkingLotId: string
    vehicleType: $Enums.VehicleType
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.PassStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutMonthlyPassInput
  }

  export type MonthlyPassCreateOrConnectWithoutUserInput = {
    where: MonthlyPassWhereUniqueInput
    create: XOR<MonthlyPassCreateWithoutUserInput, MonthlyPassUncheckedCreateWithoutUserInput>
  }

  export type MonthlyPassCreateManyUserInputEnvelope = {
    data: MonthlyPassCreateManyUserInput | MonthlyPassCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdminLogCreateWithoutAdminInput = {
    id?: string
    action: string
    resourceType: string
    resourceId?: string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AdminLogUncheckedCreateWithoutAdminInput = {
    id?: string
    action: string
    resourceType: string
    resourceId?: string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AdminLogCreateOrConnectWithoutAdminInput = {
    where: AdminLogWhereUniqueInput
    create: XOR<AdminLogCreateWithoutAdminInput, AdminLogUncheckedCreateWithoutAdminInput>
  }

  export type AdminLogCreateManyAdminInputEnvelope = {
    data: AdminLogCreateManyAdminInput | AdminLogCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithWhereUniqueWithoutUserInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutUserInput, VehicleUncheckedUpdateWithoutUserInput>
    create: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutUserInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutUserInput, VehicleUncheckedUpdateWithoutUserInput>
  }

  export type VehicleUpdateManyWithWhereWithoutUserInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutUserInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    userId?: StringFilter<"Vehicle"> | string
    plateNumber?: StringFilter<"Vehicle"> | string
    vehicleType?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    color?: StringNullableFilter<"Vehicle"> | string | null
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    vehicleId?: StringFilter<"Booking"> | string
    parkingSlotId?: StringFilter<"Booking"> | string
    parkingLotId?: StringFilter<"Booking"> | string
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeNullableFilter<"Booking"> | Date | string | null
    estimatedCost?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    parkingRecordId?: StringNullableFilter<"Booking"> | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    bookingId?: StringNullableFilter<"Payment"> | string | null
    monthlyPassId?: StringNullableFilter<"Payment"> | string | null
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    referenceId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type MonthlyPassUpsertWithWhereUniqueWithoutUserInput = {
    where: MonthlyPassWhereUniqueInput
    update: XOR<MonthlyPassUpdateWithoutUserInput, MonthlyPassUncheckedUpdateWithoutUserInput>
    create: XOR<MonthlyPassCreateWithoutUserInput, MonthlyPassUncheckedCreateWithoutUserInput>
  }

  export type MonthlyPassUpdateWithWhereUniqueWithoutUserInput = {
    where: MonthlyPassWhereUniqueInput
    data: XOR<MonthlyPassUpdateWithoutUserInput, MonthlyPassUncheckedUpdateWithoutUserInput>
  }

  export type MonthlyPassUpdateManyWithWhereWithoutUserInput = {
    where: MonthlyPassScalarWhereInput
    data: XOR<MonthlyPassUpdateManyMutationInput, MonthlyPassUncheckedUpdateManyWithoutUserInput>
  }

  export type MonthlyPassScalarWhereInput = {
    AND?: MonthlyPassScalarWhereInput | MonthlyPassScalarWhereInput[]
    OR?: MonthlyPassScalarWhereInput[]
    NOT?: MonthlyPassScalarWhereInput | MonthlyPassScalarWhereInput[]
    id?: StringFilter<"MonthlyPass"> | string
    userId?: StringFilter<"MonthlyPass"> | string
    parkingLotId?: StringFilter<"MonthlyPass"> | string
    vehicleType?: EnumVehicleTypeFilter<"MonthlyPass"> | $Enums.VehicleType
    startDate?: DateTimeFilter<"MonthlyPass"> | Date | string
    endDate?: DateTimeFilter<"MonthlyPass"> | Date | string
    price?: DecimalFilter<"MonthlyPass"> | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusFilter<"MonthlyPass"> | $Enums.PassStatus
    createdAt?: DateTimeFilter<"MonthlyPass"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyPass"> | Date | string
  }

  export type AdminLogUpsertWithWhereUniqueWithoutAdminInput = {
    where: AdminLogWhereUniqueInput
    update: XOR<AdminLogUpdateWithoutAdminInput, AdminLogUncheckedUpdateWithoutAdminInput>
    create: XOR<AdminLogCreateWithoutAdminInput, AdminLogUncheckedCreateWithoutAdminInput>
  }

  export type AdminLogUpdateWithWhereUniqueWithoutAdminInput = {
    where: AdminLogWhereUniqueInput
    data: XOR<AdminLogUpdateWithoutAdminInput, AdminLogUncheckedUpdateWithoutAdminInput>
  }

  export type AdminLogUpdateManyWithWhereWithoutAdminInput = {
    where: AdminLogScalarWhereInput
    data: XOR<AdminLogUpdateManyMutationInput, AdminLogUncheckedUpdateManyWithoutAdminInput>
  }

  export type AdminLogScalarWhereInput = {
    AND?: AdminLogScalarWhereInput | AdminLogScalarWhereInput[]
    OR?: AdminLogScalarWhereInput[]
    NOT?: AdminLogScalarWhereInput | AdminLogScalarWhereInput[]
    id?: StringFilter<"AdminLog"> | string
    adminId?: StringFilter<"AdminLog"> | string
    action?: StringFilter<"AdminLog"> | string
    resourceType?: StringFilter<"AdminLog"> | string
    resourceId?: StringNullableFilter<"AdminLog"> | string | null
    changes?: JsonNullableFilter<"AdminLog">
    ipAddress?: StringNullableFilter<"AdminLog"> | string | null
    createdAt?: DateTimeFilter<"AdminLog"> | Date | string
  }

  export type UserCreateWithoutVehiclesInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    monthlyPasses?: MonthlyPassCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutVehiclesInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    monthlyPasses?: MonthlyPassUncheckedCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutVehiclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
  }

  export type BookingCreateWithoutVehicleInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    parkingSlot: ParkingSlotCreateNestedOneWithoutBookingsInput
    parkingLot: ParkingLotCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    parkingRecord?: ParkingRecordCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutVehicleInput = {
    id?: string
    userId: string
    parkingSlotId: string
    parkingLotId: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecordId?: string | null
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutVehicleInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutVehicleInput, BookingUncheckedCreateWithoutVehicleInput>
  }

  export type BookingCreateManyVehicleInputEnvelope = {
    data: BookingCreateManyVehicleInput | BookingCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type ParkingRecordCreateWithoutVehicleInput = {
    id?: string
    bookingId?: string | null
    checkIn: Date | string
    checkOut?: Date | string | null
    actualCost?: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLot: ParkingLotCreateNestedOneWithoutParkingRecordsInput
    parkingSlot: ParkingSlotCreateNestedOneWithoutParkingRecordsInput
    bookings?: BookingCreateNestedManyWithoutParkingRecordInput
  }

  export type ParkingRecordUncheckedCreateWithoutVehicleInput = {
    id?: string
    parkingLotId: string
    parkingSlotId: string
    bookingId?: string | null
    checkIn: Date | string
    checkOut?: Date | string | null
    actualCost?: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutParkingRecordInput
  }

  export type ParkingRecordCreateOrConnectWithoutVehicleInput = {
    where: ParkingRecordWhereUniqueInput
    create: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput>
  }

  export type ParkingRecordCreateManyVehicleInputEnvelope = {
    data: ParkingRecordCreateManyVehicleInput | ParkingRecordCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVehiclesInput = {
    update: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type UserUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    monthlyPasses?: MonthlyPassUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    monthlyPasses?: MonthlyPassUncheckedUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutVehicleInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutVehicleInput, BookingUncheckedUpdateWithoutVehicleInput>
    create: XOR<BookingCreateWithoutVehicleInput, BookingUncheckedCreateWithoutVehicleInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutVehicleInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutVehicleInput, BookingUncheckedUpdateWithoutVehicleInput>
  }

  export type BookingUpdateManyWithWhereWithoutVehicleInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutVehicleInput>
  }

  export type ParkingRecordUpsertWithWhereUniqueWithoutVehicleInput = {
    where: ParkingRecordWhereUniqueInput
    update: XOR<ParkingRecordUpdateWithoutVehicleInput, ParkingRecordUncheckedUpdateWithoutVehicleInput>
    create: XOR<ParkingRecordCreateWithoutVehicleInput, ParkingRecordUncheckedCreateWithoutVehicleInput>
  }

  export type ParkingRecordUpdateWithWhereUniqueWithoutVehicleInput = {
    where: ParkingRecordWhereUniqueInput
    data: XOR<ParkingRecordUpdateWithoutVehicleInput, ParkingRecordUncheckedUpdateWithoutVehicleInput>
  }

  export type ParkingRecordUpdateManyWithWhereWithoutVehicleInput = {
    where: ParkingRecordScalarWhereInput
    data: XOR<ParkingRecordUpdateManyMutationInput, ParkingRecordUncheckedUpdateManyWithoutVehicleInput>
  }

  export type ParkingRecordScalarWhereInput = {
    AND?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
    OR?: ParkingRecordScalarWhereInput[]
    NOT?: ParkingRecordScalarWhereInput | ParkingRecordScalarWhereInput[]
    id?: StringFilter<"ParkingRecord"> | string
    vehicleId?: StringFilter<"ParkingRecord"> | string
    parkingLotId?: StringFilter<"ParkingRecord"> | string
    parkingSlotId?: StringFilter<"ParkingRecord"> | string
    bookingId?: StringNullableFilter<"ParkingRecord"> | string | null
    checkIn?: DateTimeFilter<"ParkingRecord"> | Date | string
    checkOut?: DateTimeNullableFilter<"ParkingRecord"> | Date | string | null
    actualCost?: DecimalFilter<"ParkingRecord"> | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFilter<"ParkingRecord"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"ParkingRecord"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingRecord"> | Date | string
  }

  export type ParkingSlotCreateWithoutParkingLotInput = {
    id?: string
    zoneId: string
    slotNumber: string
    vehicleType: $Enums.VehicleType
    status?: $Enums.SlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutParkingSlotInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutParkingSlotInput
  }

  export type ParkingSlotUncheckedCreateWithoutParkingLotInput = {
    id?: string
    zoneId: string
    slotNumber: string
    vehicleType: $Enums.VehicleType
    status?: $Enums.SlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutParkingSlotInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutParkingSlotInput
  }

  export type ParkingSlotCreateOrConnectWithoutParkingLotInput = {
    where: ParkingSlotWhereUniqueInput
    create: XOR<ParkingSlotCreateWithoutParkingLotInput, ParkingSlotUncheckedCreateWithoutParkingLotInput>
  }

  export type ParkingSlotCreateManyParkingLotInputEnvelope = {
    data: ParkingSlotCreateManyParkingLotInput | ParkingSlotCreateManyParkingLotInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutParkingLotInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    vehicle: VehicleCreateNestedOneWithoutBookingsInput
    parkingSlot: ParkingSlotCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    parkingRecord?: ParkingRecordCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutParkingLotInput = {
    id?: string
    userId: string
    vehicleId: string
    parkingSlotId: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecordId?: string | null
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutParkingLotInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutParkingLotInput, BookingUncheckedCreateWithoutParkingLotInput>
  }

  export type BookingCreateManyParkingLotInputEnvelope = {
    data: BookingCreateManyParkingLotInput | BookingCreateManyParkingLotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingRecordCreateWithoutParkingLotInput = {
    id?: string
    bookingId?: string | null
    checkIn: Date | string
    checkOut?: Date | string | null
    actualCost?: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutParkingRecordsInput
    parkingSlot: ParkingSlotCreateNestedOneWithoutParkingRecordsInput
    bookings?: BookingCreateNestedManyWithoutParkingRecordInput
  }

  export type ParkingRecordUncheckedCreateWithoutParkingLotInput = {
    id?: string
    vehicleId: string
    parkingSlotId: string
    bookingId?: string | null
    checkIn: Date | string
    checkOut?: Date | string | null
    actualCost?: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutParkingRecordInput
  }

  export type ParkingRecordCreateOrConnectWithoutParkingLotInput = {
    where: ParkingRecordWhereUniqueInput
    create: XOR<ParkingRecordCreateWithoutParkingLotInput, ParkingRecordUncheckedCreateWithoutParkingLotInput>
  }

  export type ParkingRecordCreateManyParkingLotInputEnvelope = {
    data: ParkingRecordCreateManyParkingLotInput | ParkingRecordCreateManyParkingLotInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyPassCreateWithoutParkingLotInput = {
    id?: string
    vehicleType: $Enums.VehicleType
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.PassStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMonthlyPassesInput
    payment?: PaymentCreateNestedOneWithoutMonthlyPassInput
  }

  export type MonthlyPassUncheckedCreateWithoutParkingLotInput = {
    id?: string
    userId: string
    vehicleType: $Enums.VehicleType
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.PassStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutMonthlyPassInput
  }

  export type MonthlyPassCreateOrConnectWithoutParkingLotInput = {
    where: MonthlyPassWhereUniqueInput
    create: XOR<MonthlyPassCreateWithoutParkingLotInput, MonthlyPassUncheckedCreateWithoutParkingLotInput>
  }

  export type MonthlyPassCreateManyParkingLotInputEnvelope = {
    data: MonthlyPassCreateManyParkingLotInput | MonthlyPassCreateManyParkingLotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingSlotUpsertWithWhereUniqueWithoutParkingLotInput = {
    where: ParkingSlotWhereUniqueInput
    update: XOR<ParkingSlotUpdateWithoutParkingLotInput, ParkingSlotUncheckedUpdateWithoutParkingLotInput>
    create: XOR<ParkingSlotCreateWithoutParkingLotInput, ParkingSlotUncheckedCreateWithoutParkingLotInput>
  }

  export type ParkingSlotUpdateWithWhereUniqueWithoutParkingLotInput = {
    where: ParkingSlotWhereUniqueInput
    data: XOR<ParkingSlotUpdateWithoutParkingLotInput, ParkingSlotUncheckedUpdateWithoutParkingLotInput>
  }

  export type ParkingSlotUpdateManyWithWhereWithoutParkingLotInput = {
    where: ParkingSlotScalarWhereInput
    data: XOR<ParkingSlotUpdateManyMutationInput, ParkingSlotUncheckedUpdateManyWithoutParkingLotInput>
  }

  export type ParkingSlotScalarWhereInput = {
    AND?: ParkingSlotScalarWhereInput | ParkingSlotScalarWhereInput[]
    OR?: ParkingSlotScalarWhereInput[]
    NOT?: ParkingSlotScalarWhereInput | ParkingSlotScalarWhereInput[]
    id?: StringFilter<"ParkingSlot"> | string
    parkingLotId?: StringFilter<"ParkingSlot"> | string
    zoneId?: StringFilter<"ParkingSlot"> | string
    slotNumber?: StringFilter<"ParkingSlot"> | string
    vehicleType?: EnumVehicleTypeFilter<"ParkingSlot"> | $Enums.VehicleType
    status?: EnumSlotStatusFilter<"ParkingSlot"> | $Enums.SlotStatus
    createdAt?: DateTimeFilter<"ParkingSlot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingSlot"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutParkingLotInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutParkingLotInput, BookingUncheckedUpdateWithoutParkingLotInput>
    create: XOR<BookingCreateWithoutParkingLotInput, BookingUncheckedCreateWithoutParkingLotInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutParkingLotInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutParkingLotInput, BookingUncheckedUpdateWithoutParkingLotInput>
  }

  export type BookingUpdateManyWithWhereWithoutParkingLotInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutParkingLotInput>
  }

  export type ParkingRecordUpsertWithWhereUniqueWithoutParkingLotInput = {
    where: ParkingRecordWhereUniqueInput
    update: XOR<ParkingRecordUpdateWithoutParkingLotInput, ParkingRecordUncheckedUpdateWithoutParkingLotInput>
    create: XOR<ParkingRecordCreateWithoutParkingLotInput, ParkingRecordUncheckedCreateWithoutParkingLotInput>
  }

  export type ParkingRecordUpdateWithWhereUniqueWithoutParkingLotInput = {
    where: ParkingRecordWhereUniqueInput
    data: XOR<ParkingRecordUpdateWithoutParkingLotInput, ParkingRecordUncheckedUpdateWithoutParkingLotInput>
  }

  export type ParkingRecordUpdateManyWithWhereWithoutParkingLotInput = {
    where: ParkingRecordScalarWhereInput
    data: XOR<ParkingRecordUpdateManyMutationInput, ParkingRecordUncheckedUpdateManyWithoutParkingLotInput>
  }

  export type MonthlyPassUpsertWithWhereUniqueWithoutParkingLotInput = {
    where: MonthlyPassWhereUniqueInput
    update: XOR<MonthlyPassUpdateWithoutParkingLotInput, MonthlyPassUncheckedUpdateWithoutParkingLotInput>
    create: XOR<MonthlyPassCreateWithoutParkingLotInput, MonthlyPassUncheckedCreateWithoutParkingLotInput>
  }

  export type MonthlyPassUpdateWithWhereUniqueWithoutParkingLotInput = {
    where: MonthlyPassWhereUniqueInput
    data: XOR<MonthlyPassUpdateWithoutParkingLotInput, MonthlyPassUncheckedUpdateWithoutParkingLotInput>
  }

  export type MonthlyPassUpdateManyWithWhereWithoutParkingLotInput = {
    where: MonthlyPassScalarWhereInput
    data: XOR<MonthlyPassUpdateManyMutationInput, MonthlyPassUncheckedUpdateManyWithoutParkingLotInput>
  }

  export type ParkingLotCreateWithoutSlotsInput = {
    id?: string
    name: string
    address: string
    totalSlots: number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutParkingLotInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutParkingLotInput
    monthlyPasses?: MonthlyPassCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotUncheckedCreateWithoutSlotsInput = {
    id?: string
    name: string
    address: string
    totalSlots: number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutParkingLotInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutParkingLotInput
    monthlyPasses?: MonthlyPassUncheckedCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotCreateOrConnectWithoutSlotsInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutSlotsInput, ParkingLotUncheckedCreateWithoutSlotsInput>
  }

  export type BookingCreateWithoutParkingSlotInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    vehicle: VehicleCreateNestedOneWithoutBookingsInput
    parkingLot: ParkingLotCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    parkingRecord?: ParkingRecordCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutParkingSlotInput = {
    id?: string
    userId: string
    vehicleId: string
    parkingLotId: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecordId?: string | null
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutParkingSlotInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutParkingSlotInput, BookingUncheckedCreateWithoutParkingSlotInput>
  }

  export type BookingCreateManyParkingSlotInputEnvelope = {
    data: BookingCreateManyParkingSlotInput | BookingCreateManyParkingSlotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingRecordCreateWithoutParkingSlotInput = {
    id?: string
    bookingId?: string | null
    checkIn: Date | string
    checkOut?: Date | string | null
    actualCost?: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutParkingRecordsInput
    parkingLot: ParkingLotCreateNestedOneWithoutParkingRecordsInput
    bookings?: BookingCreateNestedManyWithoutParkingRecordInput
  }

  export type ParkingRecordUncheckedCreateWithoutParkingSlotInput = {
    id?: string
    vehicleId: string
    parkingLotId: string
    bookingId?: string | null
    checkIn: Date | string
    checkOut?: Date | string | null
    actualCost?: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutParkingRecordInput
  }

  export type ParkingRecordCreateOrConnectWithoutParkingSlotInput = {
    where: ParkingRecordWhereUniqueInput
    create: XOR<ParkingRecordCreateWithoutParkingSlotInput, ParkingRecordUncheckedCreateWithoutParkingSlotInput>
  }

  export type ParkingRecordCreateManyParkingSlotInputEnvelope = {
    data: ParkingRecordCreateManyParkingSlotInput | ParkingRecordCreateManyParkingSlotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingLotUpsertWithoutSlotsInput = {
    update: XOR<ParkingLotUpdateWithoutSlotsInput, ParkingLotUncheckedUpdateWithoutSlotsInput>
    create: XOR<ParkingLotCreateWithoutSlotsInput, ParkingLotUncheckedCreateWithoutSlotsInput>
    where?: ParkingLotWhereInput
  }

  export type ParkingLotUpdateToOneWithWhereWithoutSlotsInput = {
    where?: ParkingLotWhereInput
    data: XOR<ParkingLotUpdateWithoutSlotsInput, ParkingLotUncheckedUpdateWithoutSlotsInput>
  }

  export type ParkingLotUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutParkingLotNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutParkingLotNestedInput
    monthlyPasses?: MonthlyPassUpdateManyWithoutParkingLotNestedInput
  }

  export type ParkingLotUncheckedUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutParkingLotNestedInput
    monthlyPasses?: MonthlyPassUncheckedUpdateManyWithoutParkingLotNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutParkingSlotInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutParkingSlotInput, BookingUncheckedUpdateWithoutParkingSlotInput>
    create: XOR<BookingCreateWithoutParkingSlotInput, BookingUncheckedCreateWithoutParkingSlotInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutParkingSlotInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutParkingSlotInput, BookingUncheckedUpdateWithoutParkingSlotInput>
  }

  export type BookingUpdateManyWithWhereWithoutParkingSlotInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutParkingSlotInput>
  }

  export type ParkingRecordUpsertWithWhereUniqueWithoutParkingSlotInput = {
    where: ParkingRecordWhereUniqueInput
    update: XOR<ParkingRecordUpdateWithoutParkingSlotInput, ParkingRecordUncheckedUpdateWithoutParkingSlotInput>
    create: XOR<ParkingRecordCreateWithoutParkingSlotInput, ParkingRecordUncheckedCreateWithoutParkingSlotInput>
  }

  export type ParkingRecordUpdateWithWhereUniqueWithoutParkingSlotInput = {
    where: ParkingRecordWhereUniqueInput
    data: XOR<ParkingRecordUpdateWithoutParkingSlotInput, ParkingRecordUncheckedUpdateWithoutParkingSlotInput>
  }

  export type ParkingRecordUpdateManyWithWhereWithoutParkingSlotInput = {
    where: ParkingRecordScalarWhereInput
    data: XOR<ParkingRecordUpdateManyMutationInput, ParkingRecordUncheckedUpdateManyWithoutParkingSlotInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    monthlyPasses?: MonthlyPassCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    monthlyPasses?: MonthlyPassUncheckedCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type VehicleCreateWithoutBookingsInput = {
    id?: string
    plateNumber: string
    vehicleType: $Enums.VehicleType
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVehiclesInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutBookingsInput = {
    id?: string
    userId: string
    plateNumber: string
    vehicleType: $Enums.VehicleType
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutBookingsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutBookingsInput, VehicleUncheckedCreateWithoutBookingsInput>
  }

  export type ParkingSlotCreateWithoutBookingsInput = {
    id?: string
    zoneId: string
    slotNumber: string
    vehicleType: $Enums.VehicleType
    status?: $Enums.SlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLot: ParkingLotCreateNestedOneWithoutSlotsInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutParkingSlotInput
  }

  export type ParkingSlotUncheckedCreateWithoutBookingsInput = {
    id?: string
    parkingLotId: string
    zoneId: string
    slotNumber: string
    vehicleType: $Enums.VehicleType
    status?: $Enums.SlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutParkingSlotInput
  }

  export type ParkingSlotCreateOrConnectWithoutBookingsInput = {
    where: ParkingSlotWhereUniqueInput
    create: XOR<ParkingSlotCreateWithoutBookingsInput, ParkingSlotUncheckedCreateWithoutBookingsInput>
  }

  export type ParkingLotCreateWithoutBookingsInput = {
    id?: string
    name: string
    address: string
    totalSlots: number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotCreateNestedManyWithoutParkingLotInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutParkingLotInput
    monthlyPasses?: MonthlyPassCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    address: string
    totalSlots: number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotUncheckedCreateNestedManyWithoutParkingLotInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutParkingLotInput
    monthlyPasses?: MonthlyPassUncheckedCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotCreateOrConnectWithoutBookingsInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutBookingsInput, ParkingLotUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentCreateWithoutBookingInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    referenceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
    monthlyPass?: MonthlyPassCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: string
    userId: string
    monthlyPassId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    referenceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type ParkingRecordCreateWithoutBookingsInput = {
    id?: string
    bookingId?: string | null
    checkIn: Date | string
    checkOut?: Date | string | null
    actualCost?: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutParkingRecordsInput
    parkingLot: ParkingLotCreateNestedOneWithoutParkingRecordsInput
    parkingSlot: ParkingSlotCreateNestedOneWithoutParkingRecordsInput
  }

  export type ParkingRecordUncheckedCreateWithoutBookingsInput = {
    id?: string
    vehicleId: string
    parkingLotId: string
    parkingSlotId: string
    bookingId?: string | null
    checkIn: Date | string
    checkOut?: Date | string | null
    actualCost?: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingRecordCreateOrConnectWithoutBookingsInput = {
    where: ParkingRecordWhereUniqueInput
    create: XOR<ParkingRecordCreateWithoutBookingsInput, ParkingRecordUncheckedCreateWithoutBookingsInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    monthlyPasses?: MonthlyPassUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    monthlyPasses?: MonthlyPassUncheckedUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type VehicleUpsertWithoutBookingsInput = {
    update: XOR<VehicleUpdateWithoutBookingsInput, VehicleUncheckedUpdateWithoutBookingsInput>
    create: XOR<VehicleCreateWithoutBookingsInput, VehicleUncheckedCreateWithoutBookingsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutBookingsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutBookingsInput, VehicleUncheckedUpdateWithoutBookingsInput>
  }

  export type VehicleUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type ParkingSlotUpsertWithoutBookingsInput = {
    update: XOR<ParkingSlotUpdateWithoutBookingsInput, ParkingSlotUncheckedUpdateWithoutBookingsInput>
    create: XOR<ParkingSlotCreateWithoutBookingsInput, ParkingSlotUncheckedCreateWithoutBookingsInput>
    where?: ParkingSlotWhereInput
  }

  export type ParkingSlotUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ParkingSlotWhereInput
    data: XOR<ParkingSlotUpdateWithoutBookingsInput, ParkingSlotUncheckedUpdateWithoutBookingsInput>
  }

  export type ParkingSlotUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLot?: ParkingLotUpdateOneRequiredWithoutSlotsNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutParkingSlotNestedInput
  }

  export type ParkingSlotUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutParkingSlotNestedInput
  }

  export type ParkingLotUpsertWithoutBookingsInput = {
    update: XOR<ParkingLotUpdateWithoutBookingsInput, ParkingLotUncheckedUpdateWithoutBookingsInput>
    create: XOR<ParkingLotCreateWithoutBookingsInput, ParkingLotUncheckedCreateWithoutBookingsInput>
    where?: ParkingLotWhereInput
  }

  export type ParkingLotUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ParkingLotWhereInput
    data: XOR<ParkingLotUpdateWithoutBookingsInput, ParkingLotUncheckedUpdateWithoutBookingsInput>
  }

  export type ParkingLotUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUpdateManyWithoutParkingLotNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutParkingLotNestedInput
    monthlyPasses?: MonthlyPassUpdateManyWithoutParkingLotNestedInput
  }

  export type ParkingLotUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutParkingLotNestedInput
    monthlyPasses?: MonthlyPassUncheckedUpdateManyWithoutParkingLotNestedInput
  }

  export type PaymentUpsertWithoutBookingInput = {
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutBookingInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    monthlyPass?: MonthlyPassUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    monthlyPassId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingRecordUpsertWithoutBookingsInput = {
    update: XOR<ParkingRecordUpdateWithoutBookingsInput, ParkingRecordUncheckedUpdateWithoutBookingsInput>
    create: XOR<ParkingRecordCreateWithoutBookingsInput, ParkingRecordUncheckedCreateWithoutBookingsInput>
    where?: ParkingRecordWhereInput
  }

  export type ParkingRecordUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ParkingRecordWhereInput
    data: XOR<ParkingRecordUpdateWithoutBookingsInput, ParkingRecordUncheckedUpdateWithoutBookingsInput>
  }

  export type ParkingRecordUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutParkingRecordsNestedInput
    parkingLot?: ParkingLotUpdateOneRequiredWithoutParkingRecordsNestedInput
    parkingSlot?: ParkingSlotUpdateOneRequiredWithoutParkingRecordsNestedInput
  }

  export type ParkingRecordUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateWithoutParkingRecordsInput = {
    id?: string
    plateNumber: string
    vehicleType: $Enums.VehicleType
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVehiclesInput
    bookings?: BookingCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutParkingRecordsInput = {
    id?: string
    userId: string
    plateNumber: string
    vehicleType: $Enums.VehicleType
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutParkingRecordsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutParkingRecordsInput, VehicleUncheckedCreateWithoutParkingRecordsInput>
  }

  export type ParkingLotCreateWithoutParkingRecordsInput = {
    id?: string
    name: string
    address: string
    totalSlots: number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotCreateNestedManyWithoutParkingLotInput
    bookings?: BookingCreateNestedManyWithoutParkingLotInput
    monthlyPasses?: MonthlyPassCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotUncheckedCreateWithoutParkingRecordsInput = {
    id?: string
    name: string
    address: string
    totalSlots: number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotUncheckedCreateNestedManyWithoutParkingLotInput
    bookings?: BookingUncheckedCreateNestedManyWithoutParkingLotInput
    monthlyPasses?: MonthlyPassUncheckedCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotCreateOrConnectWithoutParkingRecordsInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutParkingRecordsInput, ParkingLotUncheckedCreateWithoutParkingRecordsInput>
  }

  export type ParkingSlotCreateWithoutParkingRecordsInput = {
    id?: string
    zoneId: string
    slotNumber: string
    vehicleType: $Enums.VehicleType
    status?: $Enums.SlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLot: ParkingLotCreateNestedOneWithoutSlotsInput
    bookings?: BookingCreateNestedManyWithoutParkingSlotInput
  }

  export type ParkingSlotUncheckedCreateWithoutParkingRecordsInput = {
    id?: string
    parkingLotId: string
    zoneId: string
    slotNumber: string
    vehicleType: $Enums.VehicleType
    status?: $Enums.SlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutParkingSlotInput
  }

  export type ParkingSlotCreateOrConnectWithoutParkingRecordsInput = {
    where: ParkingSlotWhereUniqueInput
    create: XOR<ParkingSlotCreateWithoutParkingRecordsInput, ParkingSlotUncheckedCreateWithoutParkingRecordsInput>
  }

  export type BookingCreateWithoutParkingRecordInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    vehicle: VehicleCreateNestedOneWithoutBookingsInput
    parkingSlot: ParkingSlotCreateNestedOneWithoutBookingsInput
    parkingLot: ParkingLotCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutParkingRecordInput = {
    id?: string
    userId: string
    vehicleId: string
    parkingSlotId: string
    parkingLotId: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutParkingRecordInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutParkingRecordInput, BookingUncheckedCreateWithoutParkingRecordInput>
  }

  export type BookingCreateManyParkingRecordInputEnvelope = {
    data: BookingCreateManyParkingRecordInput | BookingCreateManyParkingRecordInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithoutParkingRecordsInput = {
    update: XOR<VehicleUpdateWithoutParkingRecordsInput, VehicleUncheckedUpdateWithoutParkingRecordsInput>
    create: XOR<VehicleCreateWithoutParkingRecordsInput, VehicleUncheckedCreateWithoutParkingRecordsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutParkingRecordsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutParkingRecordsInput, VehicleUncheckedUpdateWithoutParkingRecordsInput>
  }

  export type VehicleUpdateWithoutParkingRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    bookings?: BookingUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutParkingRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type ParkingLotUpsertWithoutParkingRecordsInput = {
    update: XOR<ParkingLotUpdateWithoutParkingRecordsInput, ParkingLotUncheckedUpdateWithoutParkingRecordsInput>
    create: XOR<ParkingLotCreateWithoutParkingRecordsInput, ParkingLotUncheckedCreateWithoutParkingRecordsInput>
    where?: ParkingLotWhereInput
  }

  export type ParkingLotUpdateToOneWithWhereWithoutParkingRecordsInput = {
    where?: ParkingLotWhereInput
    data: XOR<ParkingLotUpdateWithoutParkingRecordsInput, ParkingLotUncheckedUpdateWithoutParkingRecordsInput>
  }

  export type ParkingLotUpdateWithoutParkingRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUpdateManyWithoutParkingLotNestedInput
    bookings?: BookingUpdateManyWithoutParkingLotNestedInput
    monthlyPasses?: MonthlyPassUpdateManyWithoutParkingLotNestedInput
  }

  export type ParkingLotUncheckedUpdateWithoutParkingRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUncheckedUpdateManyWithoutParkingLotNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutParkingLotNestedInput
    monthlyPasses?: MonthlyPassUncheckedUpdateManyWithoutParkingLotNestedInput
  }

  export type ParkingSlotUpsertWithoutParkingRecordsInput = {
    update: XOR<ParkingSlotUpdateWithoutParkingRecordsInput, ParkingSlotUncheckedUpdateWithoutParkingRecordsInput>
    create: XOR<ParkingSlotCreateWithoutParkingRecordsInput, ParkingSlotUncheckedCreateWithoutParkingRecordsInput>
    where?: ParkingSlotWhereInput
  }

  export type ParkingSlotUpdateToOneWithWhereWithoutParkingRecordsInput = {
    where?: ParkingSlotWhereInput
    data: XOR<ParkingSlotUpdateWithoutParkingRecordsInput, ParkingSlotUncheckedUpdateWithoutParkingRecordsInput>
  }

  export type ParkingSlotUpdateWithoutParkingRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLot?: ParkingLotUpdateOneRequiredWithoutSlotsNestedInput
    bookings?: BookingUpdateManyWithoutParkingSlotNestedInput
  }

  export type ParkingSlotUncheckedUpdateWithoutParkingRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutParkingSlotNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutParkingRecordInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutParkingRecordInput, BookingUncheckedUpdateWithoutParkingRecordInput>
    create: XOR<BookingCreateWithoutParkingRecordInput, BookingUncheckedCreateWithoutParkingRecordInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutParkingRecordInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutParkingRecordInput, BookingUncheckedUpdateWithoutParkingRecordInput>
  }

  export type BookingUpdateManyWithWhereWithoutParkingRecordInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutParkingRecordInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    monthlyPasses?: MonthlyPassCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    monthlyPasses?: MonthlyPassUncheckedCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type BookingCreateWithoutPaymentInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    vehicle: VehicleCreateNestedOneWithoutBookingsInput
    parkingSlot: ParkingSlotCreateNestedOneWithoutBookingsInput
    parkingLot: ParkingLotCreateNestedOneWithoutBookingsInput
    parkingRecord?: ParkingRecordCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutPaymentInput = {
    id?: string
    userId: string
    vehicleId: string
    parkingSlotId: string
    parkingLotId: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecordId?: string | null
  }

  export type BookingCreateOrConnectWithoutPaymentInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
  }

  export type MonthlyPassCreateWithoutPaymentInput = {
    id?: string
    vehicleType: $Enums.VehicleType
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.PassStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMonthlyPassesInput
    parkingLot: ParkingLotCreateNestedOneWithoutMonthlyPassesInput
  }

  export type MonthlyPassUncheckedCreateWithoutPaymentInput = {
    id?: string
    userId: string
    parkingLotId: string
    vehicleType: $Enums.VehicleType
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.PassStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyPassCreateOrConnectWithoutPaymentInput = {
    where: MonthlyPassWhereUniqueInput
    create: XOR<MonthlyPassCreateWithoutPaymentInput, MonthlyPassUncheckedCreateWithoutPaymentInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    monthlyPasses?: MonthlyPassUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    monthlyPasses?: MonthlyPassUncheckedUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type BookingUpsertWithoutPaymentInput = {
    update: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type BookingUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutBookingsNestedInput
    parkingSlot?: ParkingSlotUpdateOneRequiredWithoutBookingsNestedInput
    parkingLot?: ParkingLotUpdateOneRequiredWithoutBookingsNestedInput
    parkingRecord?: ParkingRecordUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecordId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyPassUpsertWithoutPaymentInput = {
    update: XOR<MonthlyPassUpdateWithoutPaymentInput, MonthlyPassUncheckedUpdateWithoutPaymentInput>
    create: XOR<MonthlyPassCreateWithoutPaymentInput, MonthlyPassUncheckedCreateWithoutPaymentInput>
    where?: MonthlyPassWhereInput
  }

  export type MonthlyPassUpdateToOneWithWhereWithoutPaymentInput = {
    where?: MonthlyPassWhereInput
    data: XOR<MonthlyPassUpdateWithoutPaymentInput, MonthlyPassUncheckedUpdateWithoutPaymentInput>
  }

  export type MonthlyPassUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMonthlyPassesNestedInput
    parkingLot?: ParkingLotUpdateOneRequiredWithoutMonthlyPassesNestedInput
  }

  export type MonthlyPassUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutMonthlyPassesInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutMonthlyPassesInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutMonthlyPassesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMonthlyPassesInput, UserUncheckedCreateWithoutMonthlyPassesInput>
  }

  export type ParkingLotCreateWithoutMonthlyPassesInput = {
    id?: string
    name: string
    address: string
    totalSlots: number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotCreateNestedManyWithoutParkingLotInput
    bookings?: BookingCreateNestedManyWithoutParkingLotInput
    parkingRecords?: ParkingRecordCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotUncheckedCreateWithoutMonthlyPassesInput = {
    id?: string
    name: string
    address: string
    totalSlots: number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: ParkingSlotUncheckedCreateNestedManyWithoutParkingLotInput
    bookings?: BookingUncheckedCreateNestedManyWithoutParkingLotInput
    parkingRecords?: ParkingRecordUncheckedCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotCreateOrConnectWithoutMonthlyPassesInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutMonthlyPassesInput, ParkingLotUncheckedCreateWithoutMonthlyPassesInput>
  }

  export type PaymentCreateWithoutMonthlyPassInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    referenceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
    booking?: BookingCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutMonthlyPassInput = {
    id?: string
    userId: string
    bookingId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    referenceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutMonthlyPassInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutMonthlyPassInput, PaymentUncheckedCreateWithoutMonthlyPassInput>
  }

  export type UserUpsertWithoutMonthlyPassesInput = {
    update: XOR<UserUpdateWithoutMonthlyPassesInput, UserUncheckedUpdateWithoutMonthlyPassesInput>
    create: XOR<UserCreateWithoutMonthlyPassesInput, UserUncheckedCreateWithoutMonthlyPassesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMonthlyPassesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMonthlyPassesInput, UserUncheckedUpdateWithoutMonthlyPassesInput>
  }

  export type UserUpdateWithoutMonthlyPassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutMonthlyPassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ParkingLotUpsertWithoutMonthlyPassesInput = {
    update: XOR<ParkingLotUpdateWithoutMonthlyPassesInput, ParkingLotUncheckedUpdateWithoutMonthlyPassesInput>
    create: XOR<ParkingLotCreateWithoutMonthlyPassesInput, ParkingLotUncheckedCreateWithoutMonthlyPassesInput>
    where?: ParkingLotWhereInput
  }

  export type ParkingLotUpdateToOneWithWhereWithoutMonthlyPassesInput = {
    where?: ParkingLotWhereInput
    data: XOR<ParkingLotUpdateWithoutMonthlyPassesInput, ParkingLotUncheckedUpdateWithoutMonthlyPassesInput>
  }

  export type ParkingLotUpdateWithoutMonthlyPassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUpdateManyWithoutParkingLotNestedInput
    bookings?: BookingUpdateManyWithoutParkingLotNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutParkingLotNestedInput
  }

  export type ParkingLotUncheckedUpdateWithoutMonthlyPassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    totalSlots?: IntFieldUpdateOperationsInput | number
    zones?: NullableJsonNullValueInput | InputJsonValue
    hourlyRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: ParkingSlotUncheckedUpdateManyWithoutParkingLotNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutParkingLotNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutParkingLotNestedInput
  }

  export type PaymentUpsertWithoutMonthlyPassInput = {
    update: XOR<PaymentUpdateWithoutMonthlyPassInput, PaymentUncheckedUpdateWithoutMonthlyPassInput>
    create: XOR<PaymentCreateWithoutMonthlyPassInput, PaymentUncheckedCreateWithoutMonthlyPassInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutMonthlyPassInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutMonthlyPassInput, PaymentUncheckedUpdateWithoutMonthlyPassInput>
  }

  export type PaymentUpdateWithoutMonthlyPassInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    booking?: BookingUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutMonthlyPassInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAdminLogsInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    monthlyPasses?: MonthlyPassCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminLogsInput = {
    id?: string
    email: string
    password: string
    phone?: string | null
    fullName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    monthlyPasses?: MonthlyPassUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
  }

  export type UserUpsertWithoutAdminLogsInput = {
    update: XOR<UserUpdateWithoutAdminLogsInput, UserUncheckedUpdateWithoutAdminLogsInput>
    create: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminLogsInput, UserUncheckedUpdateWithoutAdminLogsInput>
  }

  export type UserUpdateWithoutAdminLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    monthlyPasses?: MonthlyPassUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    monthlyPasses?: MonthlyPassUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VehicleCreateManyUserInput = {
    id?: string
    plateNumber: string
    vehicleType: $Enums.VehicleType
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyUserInput = {
    id?: string
    vehicleId: string
    parkingSlotId: string
    parkingLotId: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecordId?: string | null
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    bookingId?: string | null
    monthlyPassId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    referenceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyPassCreateManyUserInput = {
    id?: string
    parkingLotId: string
    vehicleType: $Enums.VehicleType
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.PassStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminLogCreateManyAdminInput = {
    id?: string
    action: string
    resourceType: string
    resourceId?: string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type VehicleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutVehicleNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutVehicleNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutBookingsNestedInput
    parkingSlot?: ParkingSlotUpdateOneRequiredWithoutBookingsNestedInput
    parkingLot?: ParkingLotUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    parkingRecord?: ParkingRecordUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecordId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneWithoutPaymentNestedInput
    monthlyPass?: MonthlyPassUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPassId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyPassId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyPassUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLot?: ParkingLotUpdateOneRequiredWithoutMonthlyPassesNestedInput
    payment?: PaymentUpdateOneWithoutMonthlyPassNestedInput
  }

  export type MonthlyPassUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutMonthlyPassNestedInput
  }

  export type MonthlyPassUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyVehicleInput = {
    id?: string
    userId: string
    parkingSlotId: string
    parkingLotId: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecordId?: string | null
  }

  export type ParkingRecordCreateManyVehicleInput = {
    id?: string
    parkingLotId: string
    parkingSlotId: string
    bookingId?: string | null
    checkIn: Date | string
    checkOut?: Date | string | null
    actualCost?: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    parkingSlot?: ParkingSlotUpdateOneRequiredWithoutBookingsNestedInput
    parkingLot?: ParkingLotUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    parkingRecord?: ParkingRecordUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecordId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingRecordUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLot?: ParkingLotUpdateOneRequiredWithoutParkingRecordsNestedInput
    parkingSlot?: ParkingSlotUpdateOneRequiredWithoutParkingRecordsNestedInput
    bookings?: BookingUpdateManyWithoutParkingRecordNestedInput
  }

  export type ParkingRecordUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutParkingRecordNestedInput
  }

  export type ParkingRecordUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSlotCreateManyParkingLotInput = {
    id?: string
    zoneId: string
    slotNumber: string
    vehicleType: $Enums.VehicleType
    status?: $Enums.SlotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyParkingLotInput = {
    id?: string
    userId: string
    vehicleId: string
    parkingSlotId: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecordId?: string | null
  }

  export type ParkingRecordCreateManyParkingLotInput = {
    id?: string
    vehicleId: string
    parkingSlotId: string
    bookingId?: string | null
    checkIn: Date | string
    checkOut?: Date | string | null
    actualCost?: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyPassCreateManyParkingLotInput = {
    id?: string
    userId: string
    vehicleType: $Enums.VehicleType
    startDate: Date | string
    endDate: Date | string
    price: Decimal | DecimalJsLike | number | string
    status?: $Enums.PassStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingSlotUpdateWithoutParkingLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutParkingSlotNestedInput
    parkingRecords?: ParkingRecordUpdateManyWithoutParkingSlotNestedInput
  }

  export type ParkingSlotUncheckedUpdateWithoutParkingLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutParkingSlotNestedInput
    parkingRecords?: ParkingRecordUncheckedUpdateManyWithoutParkingSlotNestedInput
  }

  export type ParkingSlotUncheckedUpdateManyWithoutParkingLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    zoneId?: StringFieldUpdateOperationsInput | string
    slotNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutParkingLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutBookingsNestedInput
    parkingSlot?: ParkingSlotUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    parkingRecord?: ParkingRecordUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutParkingLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutParkingLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecordId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingRecordUpdateWithoutParkingLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutParkingRecordsNestedInput
    parkingSlot?: ParkingSlotUpdateOneRequiredWithoutParkingRecordsNestedInput
    bookings?: BookingUpdateManyWithoutParkingRecordNestedInput
  }

  export type ParkingRecordUncheckedUpdateWithoutParkingLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutParkingRecordNestedInput
  }

  export type ParkingRecordUncheckedUpdateManyWithoutParkingLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyPassUpdateWithoutParkingLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMonthlyPassesNestedInput
    payment?: PaymentUpdateOneWithoutMonthlyPassNestedInput
  }

  export type MonthlyPassUncheckedUpdateWithoutParkingLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutMonthlyPassNestedInput
  }

  export type MonthlyPassUncheckedUpdateManyWithoutParkingLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPassStatusFieldUpdateOperationsInput | $Enums.PassStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyParkingSlotInput = {
    id?: string
    userId: string
    vehicleId: string
    parkingLotId: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingRecordId?: string | null
  }

  export type ParkingRecordCreateManyParkingSlotInput = {
    id?: string
    vehicleId: string
    parkingLotId: string
    bookingId?: string | null
    checkIn: Date | string
    checkOut?: Date | string | null
    actualCost?: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutParkingSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutBookingsNestedInput
    parkingLot?: ParkingLotUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    parkingRecord?: ParkingRecordUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutParkingSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutParkingSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingRecordId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingRecordUpdateWithoutParkingSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutParkingRecordsNestedInput
    parkingLot?: ParkingLotUpdateOneRequiredWithoutParkingRecordsNestedInput
    bookings?: BookingUpdateManyWithoutParkingRecordNestedInput
  }

  export type ParkingRecordUncheckedUpdateWithoutParkingSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutParkingRecordNestedInput
  }

  export type ParkingRecordUncheckedUpdateManyWithoutParkingSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyParkingRecordInput = {
    id?: string
    userId: string
    vehicleId: string
    parkingSlotId: string
    parkingLotId: string
    startTime: Date | string
    endTime?: Date | string | null
    estimatedCost: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutParkingRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutBookingsNestedInput
    parkingSlot?: ParkingSlotUpdateOneRequiredWithoutBookingsNestedInput
    parkingLot?: ParkingLotUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutParkingRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutParkingRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    parkingSlotId?: StringFieldUpdateOperationsInput | string
    parkingLotId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}