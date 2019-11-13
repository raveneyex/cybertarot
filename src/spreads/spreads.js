import { listFiles } from 'list-files-in-dir';
import { promisify } from 'util';
import { writeFile } from 'fs';

const validateImportedSpread = (importedSpread) => {
    const { structure } = importedSpread;
    
    if (!structure || (Object.keys(structure).length === 0)) {
        throw {
            ...new Error('The imported spread does not have the proper format'),
            code: 'INVALID_FORMAT'
        };
    }

    return importedSpread;
}

export function getSpread(spreadName) {
    try {
        return require(`../spreads/${spreadName}.json`);
    }
    catch (err) {
        if (err.code === 'MODULE_NOT_FOUND') {
            console.error(`Error: Could not load spread with name ${spreadName}`);
        }
    }
}

export async function listSpreads() {
    try {
        const files = await listFiles(__dirname);
        return files
                .filter(item => item.includes('.json'))
                .map(item => item.substring(0, item.indexOf('.json')));
    } catch(err) {
        console.error('Error: could not load spreads', err);
    }
}

export async function loadSpread(spreadPath) {
    try {
        const fileWriter = promisify(writeFile);
        const data = validateImportedSpread(require(spreadPath));
        const name = spreadPath.split('/').pop();
        await fileWriter(`${__dirname}/${name}`, JSON.stringify(data));
        return data;
    }
    catch (err) {
        if (err.code === 'MODULE_NOT_FOUND') {
            console.error(`Error: Could not load spread from ${spreadPath}`);
        }
        else if (err.code === 'INVALID_FORMAT') {
            console.error(`Error: The spread from ${spreadPath} has an invalid format`);
        }
        else {
            console.log('Unexpected error:', err);
        }
    }
}
