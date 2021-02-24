const PLUMO_LISTENING = document.getElementById('plumo-listening').innerHTML;
const PLUMO_EATING = document.getElementById('plumo-eating').innerHTML;
const PLUMO_LEFT = document.getElementById('plumo-left').innerHTML;
const PLUMO_LEAVING = document.getElementById('plumo-leaving').innerHTML;

const DEUX_SECONDES = 2000

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const Plumo = {
  init: function(container, buttons) {

    this.container = container
    this.btns = buttons

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
          this.btns.eatBtn.setAttribute('disabled', true)
          delay(DEUX_SECONDES).then(()=>{
            this.wait()
            this.btns.eatBtn.removeAttribute('disabled')
          })
        },
        onListen: ()=>{
          this.container.innerHTML = PLUMO_LISTENING
          this.btns.listenBtn.setAttribute('disabled', true)
          delay(DEUX_SECONDES).then(()=>{
            this.wait()
            this.btns.listenBtn.removeAttribute('disabled')
          })
        },
        onWait: ()=>{
          this.container.innerHTML = PLUMO_LEFT
        },
        onQuit: ()=>{
          this.container.innerHTML = PLUMO_LEAVING
          this.btns.leaveBtn.setAttribute('disabled', true)
          this.btns.eatBtn.setAttribute('disabled', true)
          this.btns.listenBtn.setAttribute('disabled', true)
        }
      }
    });

    this.btns.leaveBtn.addEventListener('click', ()=> { this.leave(); })
    this.btns.eatBtn.addEventListener('click', ()=> { this.eat(); })
    //this.btns.waitBtn.addEventListener('click', ()=> { this.wait(); })
    this.btns.listenBtn.addEventListener('click', ()=> { this.listen(); })

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
