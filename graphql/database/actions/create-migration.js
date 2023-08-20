const fs = require('fs');
const path = require('path');

let tableName;

try {
    const tableNameArg = process.argv.find((arg) => arg.includes('--tableName'));
    if (!tableNameArg) {
        throw new Error('--tableName parameter not found. Please specify a table name.');
    }
    tableName = tableNameArg.split('=')[1];
} catch (err) {
    return console.error(err.message);
}

const fileName = new Date().getTime() + `_${tableName}.sql`;

fs.writeFile(path.resolve(__dirname, `../migrations/${fileName}`), '', (err) => {
    if (err) throw new Error(err);
    console.log('Created new migration file in migrations folder.');
});
