import { listFiles } from 'list-files-in-dir';

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

export function loadSpread(spreadName) {
    console.log('Not yet implemented.');
}
