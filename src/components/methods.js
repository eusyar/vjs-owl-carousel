export default {
  next (speed = 100) {
    this.instance.trigger('next.owl.carousel', speed)
  },
  prev (speed = 100) {
    this.instance.trigger('prev.owl.carousel', speed)
  },
  to (position, speed = 100) {
    this.instance.trigger('to.owl.carousel', position, speed)
  },
  destory () {
    this.instance.trigger('destroy.owl.carousel')
  },
  replace (data) {
    this.instance.trigger('replace.owl.carousel', data) 
  },
  add (data, position) {
    this.instance.trigger('add.owl.carousel', data, position) 
  },
  remove (data, position) {
    this.instance.trigger('remove.owl.carousel', position) 
  },
  play (timeout, speed = 100) {
    this.instance.trigger('play.owl.carousel', timeout, speed) 
  },
  stop () {
    this.instance.trigger('stop.owl.carousel') 
  }
}
