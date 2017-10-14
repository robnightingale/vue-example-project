<template lang="pug">
  div
    .my-label(@click='toggle()')
      slot
    .my-content(v-show='levels[level] === $el')
      slot(name='content')

</template>

<script>
export default {
  inject: ['levels'],

  props: {
    'level': {
      type: String,
      default: '1'
    }
  },

  data () {
    return {

    }
  },

  methods: {
    toggle () {
      if (this.levels[this.level] !== this.$el) this.levels[this.level] = this.$el
      else this.levels[this.level] = null
      console.log('here')
    }
  }
}

</script>
