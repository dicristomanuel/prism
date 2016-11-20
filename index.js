import Prism from './prism';
import config from './states/config';

console.log('in index.js');
const prism = new Prism();
debugger;
prism.create(config);

prism.next({state: 'init'});
