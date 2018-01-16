<template>
  <div>
    <div class="card">
      <div class="card-header" data-target="#collapseOne" data-toggle="collapse">
        <h3 class="card-title">
          <i class="fa fa-chevron-down fa-chevron-right"></i> Portfolio Summary
        </h3>
      </div>
      <div id="collapseOne" class="collapse in">
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
        <h3 class="card-title">
          <i class="fa fa-chevron-down fa-chevron-right"></i> Trade Blotter
        </h3>
      </div>
      <div id="collapseTwo" class="card-block collapse in">
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
              <HotTable :root="root" :settings="hotSettings" style="font-size='7px'"></HotTable>
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

  let rowsCount = getData().length
  const columnHeaders = [
    'Task',
    'Owner',
    'Team',
    'Status',
    'Start date',
    'End date',
    'At risk',
    '% complete'
  ]

  function produceGridData(keys, values){
    let result = [];
    for (var i = 0;i < values.length; i++){
      let row = values[i];
      let res = {};
      keys.forEach((key, i) => res[key] = row[i])
      result.push(res)
    }
    return result;
  }

  export default {
    data: function () {
      return {
        searchQuery: '',
        gridColumns: columnHeaders,
        gridData: produceGridData(columnHeaders, getData()),
        root: 'test-hot',
        hotSettings: {
          data: getData(),
          height: 456,
          colWidths: 100,
          minCols: 26,
          minRows: 100,
          rowHeaders: true,
          colHeaders: columnHeaders,
          columnSorting: true,
          filters: true,
          dropdownMenu: true,
          contextMenu: true,
          autoRowSize: true,
          manualColumnMove: true,
          manualRowMove: true,
          fillHandle: {
            autoInsertRow: false,
          },
          cells: function (row, column) {
            var cellMeta = {};

            if (row >= rowsCount) {
              return cellMeta;
            }

            if (column === 1) {
              cellMeta.type = 'dropdown';
              cellMeta.source = [
                'Ben',
                'Chris',
                'Jessica',
                'Kate',
                'Michael',
                'Monica',
                'Omar',
                'Paul',
                'Samuel',
              ];

            } else if (column === 2) {
              cellMeta.readOnly = true;
              cellMeta.type = 'text';
              cellMeta.renderer = function (hotInstance, TD, row, col, prop, value) {
                var colors = {
                  Red: '#e87677',
                  Green: '#66e100',
                  Blue: '#00a7fe',
                  Purple: '#6623e2',
                  Orange: '#ffad24',
                  Yellow: '#ffe300',
                };

                TD.style.color = colors[value];
                TD.textContent = value;
              };

            } else if (column === 3) {
              cellMeta.type = 'dropdown';
              cellMeta.source = [
                'New',
                'Accepted',
                'Rejected',
                'In progress',
                'Completed',
              ];

            } else if (column === 4 || column === 5) {
              cellMeta.type = 'date';
              cellMeta.dateFormat = 'DD/MM/YYYY';

            } else if (column === 6) {
              var isChecked = this.instance.getDataAtCell(this.instance.toVisualRow(row), column);

              cellMeta.type = 'checkbox';
              cellMeta.className = 'htCenter' + (isChecked ? ' at-risk-checked' : '');

            } else if (column === 7) {
              cellMeta.width = 110;
              cellMeta.renderer = function (hotInstance, TD, row, col, prop, value, cellProperties) {
                var progressBar = document.createElement('progress');

                value = parseInt(value, 10);

                progressBar.max = 100;
                progressBar.value = isNaN(value) ? 0 : value;

                TD.textContent = '';
                TD.appendChild(progressBar);
              };
            }

            return cellMeta;
          },
        },
      }
    },
    methods:
      {
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
        }
        ,
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
        },
        // Create virtual column data ("Team" column)
        modifyData: function (row, column, valueHolder, ioMode) {
          if (this.toPhysicalColumn(column) === 2 && ioMode === 'get') {
            valueHolder.value = getOwnerTeam(this.getDataAtCell(this.toVisualRow(row), this.toVisualColumn(1)));
          }
        }
      },
    components: {
      HotTable, dataGrid
    },
  }
</script>

<style scoped>
  @import "~handsontable/dist/handsontable.full.min.css";
</style>
