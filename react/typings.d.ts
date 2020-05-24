declare module "*.svg" {
    const content: any;
    export default content;
}

declare namespace NodeJS {
    // Merge the existing `ProcessEnv` definition with ours
    // https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
    export interface ProcessEnv {
        NODE_ENV: "development" | "production" | "test";
        MY_API_KEY: string;
        DB_USER?: string;
    }
}
