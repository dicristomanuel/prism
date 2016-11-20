import { OnInit, OnBot, OffBot, OnMs, OffMs } from './all';

const onUpdate = (data) => {
    console.log('onUpdate >> ', data);
    return data;
}

export default [
  { from: 'init', to: 'init', on: OnInit, off: null },
  { from: 'bot',  to: 'bot',  on: OnBot,  off: OffBot },
  { from: 'ms',   to: 'ms',   on: OnMs,   off: OffMs },
  { onUpdate },
];

const first =  [ 'init', 'init', OnInit, null ];
const second = [ 'bot', 'bot', OnBot, OffBot ];
const third =  [ 'ms', 'ms', OnMs, OffMs ];

const buildStates = (args) => {
  console.log(args.length);
  let states = [];

  for(let i = 0; i <= 3; i++) {
    let state = {

    };
    states.push(state);
  }
}

buildStates(first, second, third);
