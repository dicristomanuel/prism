import Prism from './prism';
import config from './states/config';

console.log('in index.js');

Prism.create(config);

Prism.next({state: 'init'});
