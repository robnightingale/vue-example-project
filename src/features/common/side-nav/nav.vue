<template lang="pug">
  div
    transition(name='slide')
      .my-menu(v-show='value')
        slot
    .my-overlay(v-show='value' @click="close()")
</template>

<script>
import Provide from '@/features/common/mixins/provide.js'

export default {
  name: 'sideNav',

  mixins: [Provide],

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    value (val) {
      val ? this.open() : this.close()
    }
  },

  data () {
    return {
      // Data provided to all Vue descendents. See "Provide" mixin above.
      provide: {
        close: () => { this.close() }
      }
    }
  },

  methods: {
    open () {
      // Lock background scrolling.
      document.documentElement.classList.add('app-noscroll')
      document.body.classList.add('app-noscroll')

      this.$emit('input', true)
    },

    close () {
      // Unlock background scrolling.
      document.documentElement.classList.remove('app-noscroll')
      document.body.classList.remove('app-noscroll')

      this.$emit('input', false)
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

    .my-menu
      position: fixed
      z-index: 104
      bottom: 0
      top: 0
      width: 280px
      background-color: white
      font-size: 14px
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
      transform: translateX(-281px)

    .slide-enter-to, .slide-leave
      transform: translateX(0)

</style>