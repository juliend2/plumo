const PLUMO_LISTENING = document.getElementById('plumo-listening').innerHTML;
const PLUMO_EATING = document.getElementById('plumo-eating').innerHTML;
const PLUMO_LEFT = document.getElementById('plumo-left').innerHTML;
const PLUMO_LEAVING = document.getElementById('plumo-leaving').innerHTML;

const Plumo = {
  init: function(container) {
    this.container = container
    this.left()
  },
  listen: function () {
    this.container.innerHTML = PLUMO_LISTENING
  },
  eat: function() {
    this.container.innerHTML = PLUMO_EATING
  },
  left: function() {
    this.container.innerHTML = PLUMO_LEFT
  },
  leave: function() {
    this.container.innerHTML = PLUMO_LEAVING
  }
}
