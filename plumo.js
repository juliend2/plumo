const PLUMO_LISTENING = document.getElementById('plumo-listening').innerHTML;
const PLUMO_EATING = document.getElementById('plumo-eating').innerHTML;
const PLUMO_LEFT = document.getElementById('plumo-left').innerHTML;
const PLUMO_LEAVING = document.getElementById('plumo-leaving').innerHTML;

const Plumo = {
  init: function(container) {
    this.container = container
    this.fsm = new StateMachine({
      init: 'none',
      transitions: [
        { name: 'wait', from: ['none', 'listening', 'eating'], to: 'waiting' },
        { name: 'eat', from: ['listening', 'waiting'], to: 'eating' },
        { name: 'listen', from: ['none', 'eating', 'waiting'], to: 'listening' },
        { name: 'quit', from: ['listening', 'waiting', 'eating'], to: 'quitting' }
      ],
      methods: {
        onEat: ()=>{
          this.container.innerHTML = PLUMO_EATING
        },
        onListen: ()=>{
          this.container.innerHTML = PLUMO_LISTENING
        },
        onWait: ()=>{
          this.container.innerHTML = PLUMO_LEFT
        },
        onQuit: ()=>{
          this.container.innerHTML = PLUMO_LEAVING
        }
      }
    });
    this.wait()
  },
  listen: function () {
    this.fsm.listen();
  },
  eat: function() {
    this.fsm.eat();
  },
  wait: function() {
    this.fsm.wait();
  },
  leave: function() {
    this.fsm.quit();
  }
}
