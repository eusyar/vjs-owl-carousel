<template>
  <div>
    <slot name="nav"></slot>
    <div :id="id" :class="['owl-carousel', 'owl-theme']"  >
      <slot/>
    </div>
  </div>
</template>

<script>
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'owl.carousel'

import events from './events'
import options from './options'
import methods from './methods'

const $ = window.jQuery

export default {
  name: 'VjsOwlCarousel',
  data: function() {
    return {
      instance: {} 
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    navAutoHide: {
      type: Boolean,
      default: true
    },
    ...options
  },
  methods: {
    ...methods
  },
  mounted () {
    var owlOptions = {...this._props}
    delete owlOptions.id
    delete owlOptions.navAutoHide

    this.instance = $(`#${this.id}`).owlCarousel(owlOptions)

    events.map(x => this.instance.on(`${x}.owl.carousel`, e => this.$emit(x, e)))
  }
}
  
</script>

<style>
</style>
