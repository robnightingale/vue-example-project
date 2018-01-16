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
          <dataGrid
            :data="gridData"
            :columns="gridColumns"
            :filter-key="searchQuery">
          </dataGrid>
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
          <form id="search2">
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
  import dataGrid from '../common/Grid.vue'
  import HotTable from 'vue-handsontable-official';

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
          data: function(rows, columns) {
            const result = [];
            for (let i = 0; i < rows; i++) {
              let row = [];
              for (let j = 0; j < columns; j++) {
                row.push('[' + i + ', ' + j + ']');
              }
              result.push(row);
            }
            return result;
          }(40, 40),
          colHeaders: true
        },
      };
    },
    // name: 'SampleApp',
    components: {
      HotTable, dataGrid
    }
  }
</script>

<style scoped>
</style>
