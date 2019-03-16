import * as Fs from 'fs';

const exclude = [
    /(run-all|mocks|types-test)\.js/,
    /.*\.(ts|map)/,
];

Fs.readdirSync(__dirname)
    .filter (fileName => exclude.every(pattern => !pattern.test(fileName)))
    .forEach(fileName => void require(`./${fileName}`));
    
