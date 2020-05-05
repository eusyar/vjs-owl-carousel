export default {
  items: {
    type: Number,
    default: 3
  },
  margin: {
    type: Number,
    default: 0
  },
  loop: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  mouseDrag: {
    type: Boolean,
    default: true
  },
  touchDrag: {
    type: Boolean,
    default: true
  },
  pullDrag: {
    type: Boolean,
    default: true
  },
  freeDrag: {
    type: Boolean,
    default: false
  },
  stagePadding: {
    type: Number,
    default: 0
  },
  merge: {
    type: Boolean,
    default: false
  },
  mergeFit: {
    type: Boolean,
    default: false
  },
  autoWidth: {
    type: Boolean,
    default: false
  },
  startPosition: {
    type: Number,
    default: 0
  },
  uRLhashListener: {
    type: Boolean,
    default: false
  },
  nav: {
    type: Boolean,
    default: true
  },
  rewind: {
    type: Boolean,
    default: true
  },
  navText: {
    type: Array,
    default: () => ['next', 'prev']
  },
  navElement: {
    type: String,
    default: 'div'
  },
  slideBy: {
    type: [Number, String],
    default: 1
  },
  slideTransition: {
    type: String,
    default: ''
  },
  dots: {
    type: Boolean,
    default: true
  },
  dotsEach: {
    type: [Number, Boolean],
    default: false
  },
  dotsData: {
    type: Boolean,
    default: false
  },
  lazyLoad: {
    type: Boolean,
    default: false
  },
  lazyLoadEager: {
    type: Number,
    default: 0
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  autoplaySpeed: {
    type: Boolean,
    default: false
  },
  autoplayTimeout: {
    type: Number,
    default: 5000
  },
  autoplayHoverPause: {
    type: Boolean,
    default: false
  },
  smartSpeed: {
    type: Number,
    default: 250
  },
  fluidSpeed: {
    type: [Number, Boolean],
    default: false
  },
  navSpeed: {
    type: [Number, Boolean],
    default: false
  },
  dragEndSpeed: {
    type: [Number, Boolean],
    default: false
  },
  callbacks: {
    type: Boolean,
    default: true
  },
  responsive: {
    type: Object,
    default: () => {}
  },
  responsiveRefreshRate: {
    type: Number,
    default: 200
  },
  responsiveBaseElement: {
    type: String,
    "default": "window"
  },
  video: {
    type: Boolean,
    default: false
  },
  videoHeight: {
    type: [Number, Boolean],
    default: false
  },
  videoWidth: {
    type: [Number, Boolean],
    default: false
  },
  animateOut: {
    type: [String, Boolean],
    default: false
  },
  animateIn: {
    type: [String, Boolean],
    default: false
  },
  fallbackEasing: {
    type: String,
    default: 'swing'
  },
  info: {
    type: Function,
    default: () => {}
  },
  itemElement: {
    type: String,
    default: 'div'
  },
  stageElement: {
    type: String,
    default: 'div'
  },
  navContainer: {
    type: [String, Boolean],
    default: false
  },
  dotsContainer: {
    type: [String, Boolean],
    default: false
  },
  checkVisible: {
    type: Boolean,
    default: true
  }
}
