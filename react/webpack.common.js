/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require("path");

const paths = {
    source: resolve(__dirname, "src", "components")
};

module.exports = {
    entry: {
        button: resolve(paths.source, "button.tsx"),
        textfield: resolve(paths.source, "textfield.tsx"),
        dropdown: resolve(paths.source, "dropdown.tsx"),
        checkbox: resolve(paths.source, "checkbox.tsx"),
        slider: resolve(paths.source, "slider.tsx"),
        autocomplete: resolve(paths.source, "autocomplete.tsx"),
        carousel: resolve(paths.source, "carousel.tsx"),
        datepicker: resolve(paths.source, "datepicker.tsx"),
        maskfield: resolve(paths.source, "maskfield.tsx"),
        navbar: resolve(paths.source, "navbar.tsx"),
        typography: resolve(paths.source, "typography.tsx"),
        wizard: resolve(paths.source, "wizard.tsx"),
        card: resolve(paths.source, "card.tsx"),
        modal: resolve(paths.source, "modal.tsx"),
        toggle: resolve(paths.source, "toggle.tsx"),
        accordion: resolve(paths.source, "accordion.tsx"),
        skeleton: resolve(paths.source, "skeleton.tsx"),
        search: resolve(paths.source, "search.tsx"),
        index: resolve(__dirname, "index.tsx")
    },
    output: {
        filename: "[name].js",
        publicPath: "/",
        path: resolve(__dirname, "dist"),
        libraryTarget: "umd"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".scss", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                use: ["ts-loader"],
                exclude: [/node_modules/]
            },
            {
                test: /\.svg?$/,
                use: ["@svgr/webpack"],
                exclude: [/node_modules/]
            }
        ]
    }
};
