const PLUMO_ATTENTIVE = document.getElementById('plumo-attentive').innerHTML;
const PLUMO_EATING = document.getElementById('plumo-eating').innerHTML;
const PLUMO_LEFT = document.getElementById('plumo-left').innerHTML;
const PLUMO_LEAVING = document.getElementById('plumo-leaving').innerHTML;

const Plumo = {
  init: function(container) {
    this.container = container
    this.wait()
  },
  wait: function () {
    this.container.innerHTML = PLUMO_ATTENTIVE
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
