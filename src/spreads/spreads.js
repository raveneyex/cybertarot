import { listFiles } from 'list-files-in-dir';
import path from 'path';

function get(spreadName) {
    const { spread } = require(`../spreads/${spreadName}.json`);
    return spread;
}

async function list() {
    try {
        const files = await listFiles(__dirname);
        return files
                .filter(item => item.includes('.json'))
                .map(item => item.substring(0, item.indexOf('.json')));
    } catch(err) {
        console.error('Could not load spreads', err);
    }
}

function load(spreadName) {
    console.log('Not yet implemented.');
}

export default { get, load, list };
