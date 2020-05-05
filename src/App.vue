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
import OwlCarousel from './components/owlcarousel.vue'

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

<style>
.owl-carousel {
  width: 200px;
  height: 200px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
