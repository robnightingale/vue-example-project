<template lang="pug">
  .my-side-menu
    transition(name='slide')
      .my-content(v-show='value')
        slot
    .my-overlay(v-show='value' @click="$emit('input', false)")
</template>

<script>
export default {

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      levels: {
        '1': null,
        '2': null,
        '3': null   // <-- Max number of levels explicitly set here for reactivity.
      }
    }
  },

  // See Vue documentation at https://vuejs.org/v2/api/#provide-inject.
  provide () {
    const levels = {}
    return { levels: this.makeReactive(levels, this.levels) }
  },

  methods: {
    // Hooks a provider up with a reactive source, so the provider is reactive.
    // See https://vuejs.org/v2/guide/reactivity.html#How-Changes-Are-Tracked.
    makeReactive (target, source) {
      for (let i = 1; i <= Object.keys(source).length; i++) {
        let prop = i.toString()

        Object.defineProperty(target, prop, {
          enumerable: true,
          get: () => source[prop],
          set: (val) => { source[prop] = val }
        })
      }

      return target
    }
  }
}

</script>

<style lang="stylus" scoped>
  #app

    .my-overlay
      width: 100%
      height: 100%
      top: 0
      bottom: 0
      position: fixed
      z-index: 103
      background-color: #212121
      opacity: .46

    .my-content
      position: fixed
      z-index: 104
      bottom: 0
      top: 0
      width: 264px
      background: white
      overflow-x: hidden
      overflow-y: auto
      -webkit-overflow-scrolling: touch
      padding-left: 12px
      padding-right: 12px
      padding-top: 12px
      -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12)
      box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12)

    .slide-enter-active, .slide-leave-active
      transition: all .3s ease

    .slide-enter, .slide-leave-to
      transform: translateX(-265px)

    .slide-enter-to, .slide-leave
      transform: translateX(0)

</style>