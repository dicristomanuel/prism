import { OnInit, OnBot, OffBot, OnMs, OffMs } from './all';

const onUpdate = (data) => {
    console.log('onUpdate >> ', data);
    return data;
}

export default [
  { from: 'init', to: 'init', on: OnInit, off: null },
  { from: 'bot',  to: 'bot',  on: OnBot,  off: OffBot },
  { from: 'ms',   to: 'ms',   on: OnMs,   off: OffMs },
  { onUpdate }
];
