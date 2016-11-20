import Prism from '../prism';
import config from './states/config';

const prism = new Prism();

prism.create(config);

prism.next({state: 'init'});
