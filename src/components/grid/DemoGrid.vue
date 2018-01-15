<template>
  <div class="'container">
    <form id="search">
      Search <input name="query" v-model="searchQuery">
    </form>
    <gridimpl
      :data="gridData"
      :columns="gridColumns"
      :filter-key="searchQuery">
    </gridimpl>
  </div>
</template>

<script>
  import gridimpl from '@/components/common/Grid.vue'

  export default {
    name: 'demo-grid',
    data: function () {
      return {
        searchQuery: '',
        gridColumns: ['name', 'power'],
        gridData: [
          {name: 'Chuck Norris', power: Infinity},
          {name: 'Bruce Lee', power: 9000},
          {name: 'Jackie Chan', power: 7000},
          {name: 'Jet Li', power: 8000}
        ]
      }
    },
    components: {gridimpl}
  }
</script>

<style scoped>
</style>
