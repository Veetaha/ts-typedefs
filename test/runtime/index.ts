import * as Fs from 'fs';

const exclude = [
    /(index)\.js/,
    /.*\.(ts|map)/,
];

Fs.readdirSync(__dirname)
    .filter (fileName => exclude.every(pattern => !pattern.test(fileName)))
    .forEach(fileName => void require(`./${fileName}`));
