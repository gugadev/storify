module.exports = {
    preset: "ts-jest",
    coverageReporters: ["html"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFilesAfterEnv: ["./setupTests.js"],
    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
    }
};
