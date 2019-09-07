module.exports = {
    globals: {
        'ts-jest': {
            diagnostics: {
                ignoreCodes: [
                    6133,// is declared but its value is never read
                    6196 // is declared but never used
                ] 
            }
        }
    },
    preset: "ts-jest",
    moduleFileExtensions: [ "ts", "js" ],
    testRegex: "test/.*\\.test\\.ts$",
    testEnvironment: "node"
};
