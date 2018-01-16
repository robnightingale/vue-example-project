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
            <div id="hot-options">
              <label v-on:click="toggleOption" for="fixed-rows"><input id="fixed-rows" type="checkbox"/>Add fixed
                rows</label><br/>
              <label v-on:click="toggleOption" for="fixed-columns"><input id="fixed-columns" type="checkbox"/>Add fixed
                columns</label><br/>
              <label v-on:click="toggleOption" for="row-headers"><input id="row-headers" type="checkbox"/>Enable row
                headers</label><br/>
              <label v-on:click="toggleOption" for="column-sorting"><input id="column-sorting"
                                                                           type="checkbox"/>Enable sorting</label><br/>
              <label v-on:click="toggleOption" for="column-resize"><input id="column-resize" type="checkbox"/>Enable
                column resizing</label><br/>
            </div>
            <div id="hot-preview">
              <HotTable :root="root" :settings="hotSettings"></HotTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dataGrid from '../common/Grid.vue'
  import HotTable from 'vue-handsontable-official';
  import Vue from 'vue'

  let hotData = function (rows, columns) {
    const result = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < columns; j++) {
        row.push('[' + i + ', ' + j + ']');
      }
      result.push(row);
    }
    return result;
  }(40, 40);

  function getData() {
    return [
      [
        'Task 33',
        'Michael',
        '',
        'New',
        '',
        '',
        false,
        0
      ],
      [
        'Task 12',
        'Samuel',
        '',
        'New',
        '',
        '',
        false,
        0
      ],
      [
        'Task 96',
        'Kate',
        '',
        'Accepted',
        '',
        '',
        false,
        0
      ],
      [
        'Task 16',
        'Chris',
        '',
        'Accepted',
        '',
        '',
        false,
        0
      ],
      [
        'Task 19',
        'Samuel',
        '',
        'In progress',
        '24/01/2017',
        '15/05/2017',
        false,
        0
      ],
      [
        'Task 29',
        'Omar',
        '',
        'In progress',
        '24/01/2017',
        '13/06/2017',
        true,
        10
      ],
      [
        'Task 92',
        'Ben',
        '',
        'In progress',
        '26/01/2017',
        '20/04/2017',
        false,
        40
      ],
      [
        'Task 02',
        'Omar',
        '',
        'In progress',
        '26/01/2017',
        '05/02/2017',
        false,
        50
      ],
      [
        'Task 88',
        'Monica',
        '',
        'In progress',
        '26/01/2017',
        '15/02/2017',
        false,
        70
      ],
      [
        'Task 89',
        'Samuel',
        '',
        'In progress',
        '01/02/2017',
        '07/03/2017',
        false,
        40
      ],
      [
        'Task 26',
        'Paul',
        '',
        'In progress',
        '01/02/2017',
        '22/04/2017',
        true,
        20
      ],
      [
        'Task 56',
        'Jessica',
        '',
        'In progress',
        '01/02/2017',
        '11/05/2017',
        true,
        30
      ],
      [
        'Task 06',
        'Michael',
        '',
        'In progress',
        '01/02/2017',
        '06/06/2017',
        true,
        7
      ],
      [
        'Task 01',
        'Chris',
        '',
        'Completed',
        '05/02/2017',
        '12/02/2017',
        false,
        100
      ],
      [
        'Task 09',
        'Samuel',
        '',
        'Completed',
        '06/02/2017',
        '20/02/2017',
        false,
        100
      ],
      [
        'Task 14',
        'Michael',
        '',
        'Completed',
        '06/02/2017',
        '30/03/2017',
        false,
        100
      ],
      [
        'Task 20',
        'Paul',
        '',
        'Completed',
        '07/02/2017',
        '09/02/2017',
        false,
        100
      ],
      [
        'Task 04',
        'Ben',
        '',
        'Completed',
        '08/02/2017',
        '04/04/2017',
        false,
        100
      ],
      [
        'Task 33',
        'Samuel',
        '',
        'Rejected',
        '',
        '',
        false,
        0
      ],
      [
        'Task 79',
        'Kate',
        '',
        'Rejected',
        '',
        '',
        false,
        0
      ],
    ];
  };

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
          data: hotData,
          colHeaders: true
        },
      };
    },
    methods: {
      toggle: function (input, property, onValue, offValue) {
        if (onValue === void 0) {
          onValue = true;
        }
        if (offValue === void 0) {
          offValue = false;
        }


        if (input.checked) {
          Vue.set(this.hotSettings, property, onValue);

        } else {
          Vue.set(this.hotSettings, property, offValue);
        }
      },
      toggleOption: function (event) {
        if (event.target.tagName.toLowerCase() !== 'input') {
          return false;
        }

        switch (event.target.id) {
          case 'fixed-rows':
            this.toggle(event.target, 'fixedRowsTop', 3, 0);
            break;
          case 'fixed-columns':
            this.toggle(event.target, 'fixedColumnsLeft', 3, 0);
            break;
          case 'row-headers':
            this.toggle(event.target, 'rowHeaders');
            break;
          case 'column-sorting':
            this.toggle(event.target, 'columnSorting');
            break;
          case 'column-resize':
            this.toggle(event.target, 'manualColumnResize');
            break;
        }
      }
    },
    // name: 'SampleApp',
    components: {
      HotTable, dataGrid
    }
  }
</script>

<style scoped>
</style>
