/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16}}>
 *  <p>Official <a href="https://kysely.dev/">Kysely</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://kysely.dev/">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/adapters/kysely.svg" width="30" />
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install @auth/kysely-adapter kysely
 * ```
 *
 * @module @auth/kysely-adapter
 */
import { Kysely } from "kysely";
import { type Adapter, type AdapterUser, type AdapterAccount, type AdapterSession, type VerificationToken } from "@auth/core/adapters";
export interface Database {
    User: AdapterUser;
    Account: AdapterAccount;
    Session: AdapterSession;
    VerificationToken: VerificationToken;
}
export declare const format: {
    from<T>(object?: Record<string, any>): T;
    to<T_1>(object: Record<string, any>): T_1;
};
export declare function KyselyAdapter(db: Kysely<Database>): Adapter;
/**
 * Wrapper over the original `Kysely` class in order to validate the passed in
 * database interface. A regular Kysely instance may also be used, but wrapping
 * it ensures the database interface implements the fields that Auth.js
 * requires. When used with `kysely-codegen`, the `Codegen` type can be passed as
 * the second generic argument. The generated types will be used, and
 * `KyselyAuth` will only verify that the correct fields exist.
 * @noInheritDoc
 */
export declare class KyselyAuth<DB extends T, T = Database> extends Kysely<DB> {
}
export type Codegen = {
    [K in keyof Database]: {
        [J in keyof Database[K]]: unknown;
    };
};
//# sourceMappingURL=index.d.ts.map