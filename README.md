# Vjs-Owl-Carousel

Just another vuejs wrapper for [OwlCarousel](https://owlcarousel2.github.io/OwlCarousel2/).
Inspired by [Vue-Own-Carousel](https://github.com/s950329/vue-owl-carousel).

## Install

`npm install vjs-owl-carousel`

## Api

All the props of this component are the same of options present in the official documentation of [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html).
The all the events could be catch by the componente using the `@` notation. The collection of avaliable events are in the [documentation](https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html). Events that could be trigged were set to methods in this component.
The instance of owl carousel is avaliable in the variable `instance`.

## Usage

```
<template>
  <div id="app">
    Exemple app.
    <!--
      You could set the options one by one:
        <owl-carousel id="asdf" :dots="true">

      Or you could mix the v-bind with options one by one:
        <owl-carousel id="asdf" v-bind="options">
    -->
    <center>
      <owl-carousel id="id" v-bind="options" ref="owl">
        <template v-slot:nav>
          <div style="margin: 25px 0px;">
            <button @click="$refs.owl.prev()">Prev figure</button>
            <button @click="$refs.owl.next()">Next figure</button>
          </div>
        </template>
        <img src="https://placeimg.com/200/200/any?1">
        <img src="https://placeimg.com/200/200/any?2">
        <img src="https://placeimg.com/200/200/any?3">
        <img src="https://placeimg.com/200/200/any?4">
      </owl-carousel>
    </center>
  </div>
</template>

<script>
import OwlCarousel from 'vjs-owl-carousel'

export default {
  name: 'App',
  data: function () {
    return {
      options: {
        dots: true,
        nav: false,
        items: 1
      }
    }
  },
  components: {
    OwlCarousel
  }
}
</script>
```
