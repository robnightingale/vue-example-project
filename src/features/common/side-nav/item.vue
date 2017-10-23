<template lang="pug">
  div
    component.my-item(
      :is='this.routeTo ? "router-link" : "div"' 
      :to='this.routeTo'
      @click='handleClick()'
      @click.native='handleClick()'
    )
      .my-left-icon(v-show='icon')
        slot(name='left-icon')
      .my-title(:class='{"my-header": header}')
        slot
      .my-arrow(v-show='isExpandable()')
        b-icon(v-show='!expanded' icon='keyboard_arrow_down')
        b-icon(v-show='expanded' icon='keyboard_arrow_up')

    transition(@enter="transitionExpand" @leave="transitionContract" :css="false")
      .my-sub-items(v-show='expanded')
        slot(name='sub-items')
</template>

<script>
export default {
  name: 'item',

  inject: ['sideNav'],

  props: {
    header: {
      type: Boolean,
      default: false
    },

    icon: {
      type: Boolean,
      default: true
    },

    routeTo: {
      type: Object,
      default () {
        return null
      }
    }
  },

  data () {
    return {
      expanded: false
    }
  },

  methods: {
    isExpandable () {
      return this.$slots['sub-items']
    },

    toggleExpanded () {
      this.expanded = !this.expanded
    },

    handleClick () {
      this.isExpandable() ? this.toggleExpanded() : this.sideNav.close()
    },

    transitionExpand (el, done) {
      el.style.overflow = 'hidden'
      el.style.height = null
      el.style.display = 'block'
      const height = `${el.clientHeight}px`
      el.style.height = 0

      setTimeout(() => (el.style.height = height), 100)
    },

    transitionContract (el, done) {
      el.style.overflow = 'hidden'
      el.style.height = `${el.clientHeight}px`

      setTimeout(() => (el.style.height = 0), 100)
    }
  }
}

</script>


<style lang='stylus' scoped>
  .my-item 
    display: flex
    flex-flow: row wrap
    height: 36px

  .my-left-icon
    width: 34px

  .my-title
    flex: 1

  .my-header
    font-weight: bold

  .my-arrow
    width: 24px

  .my-sub-items
    width: 100%
    transition: all .2s ease

</style>
