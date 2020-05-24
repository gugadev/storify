import {Config} from "@stencil/core";
import {sass} from "@stencil/sass";

export const config: Config = {
    namespace: "storify",
    taskQueue: "async",
    plugins: [sass()],
    outputTargets: [
        {
            type: "dist",
            esmLoaderPath: "../loader",
        },
        {
            type: "docs-readme",
        },
        {
            type: "www",
            copy: [{src: "images"}],
        },
        {
            type: "www",
            serviceWorker: null, // disable service workers
        },
    ],
};
