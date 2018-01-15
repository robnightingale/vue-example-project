<template>
  <div>
    <div class="card">
      <div class="card-header" data-target="#collapseOne" data-toggle="collapse">
        <h3 class="panel-title">
          <i class="fa fa-chevron-down fa-fw"></i> Portfolio Summary
        </h3>
      </div>
      <div id="collapseOne" class="panel-collapse collapse in">
        <div class="card-body">
          <form id="search">
            <i class="fa fa-search"/> <input name="query" v-model="searchQuery">
          </form>
          <p></p>
          <gridimpl
            :data="gridData"
            :columns="gridColumns"
            :filter-key="searchQuery">
          </gridimpl>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" data-target="#collapseTwo" data-toggle="collapse">
        <h3 class="panel-title">
          <i class="fa fa-chevron-down fa-fw"></i> Trade Blotter
        </h3>
      </div>
      <div id="collapseTwo" class="panel-collapse collapse in">
        <div class="card-body">
          <form id="search">
            <i class="fa fa-search"/> <input name="query" v-model="searchQuery">
          </form>
          <p></p>
          <div id="example-container" class="wrapper">
            <HotTable :root="root" :settings="hotSettings"></HotTable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gridimpl from '../common/Grid.vue'

  import HotTable from 'vue-handsontable-official';
  import Vue from 'vue';


  export default {
    data: function () {
      return {
        searchQuery: '',
        gridColumns: ['name', 'power'],
        gridData: [
          {name: 'Chuck Norris', power: Infinity},
          {name: 'Bruce Lee', power: 9000},
          {name: 'Jackie Chan', power: 7000},
          {name: 'Jet Li', power: 8000}
        ],
        root: 'test-hot',
        hotSettings: {
          data: yourDataObject,
          colHeaders: true
        }
      };
    },
    name: 'SampleApp',
    components: {
      HotTable, gridimpl
    }
  }
</script>

<style scoped>
</style>
