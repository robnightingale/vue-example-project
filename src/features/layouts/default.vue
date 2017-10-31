<template lang="pug">
  v-app
    main-sidebar
    main-toolbar
    main
      v-content
        transition(name="slide" mode="out-in")
          router-view
    main-footer
</template>

<script>
import MainToolbar from '@/features/main/toolbar'
import MainSidebar from '@/features/main/sidebar'
import MainFooter from '@/features/main/footer'

export default {
  name: 'LayoutDefault',

  components: { MainToolbar, MainSidebar, MainFooter }
}
</script>

<style lang="stylus">

</style>