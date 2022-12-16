<template>
  <div>
    <table class="table" ref="table">
      <tr>
        <th
          v-bind:key="index"
          v-for="(header, index) in headers"
          :class="[header.vertical ? 'vertical' : '', 'header--cell']"
          :style="[header.style]"
        >
          {{ header.title }}
        </th>
        <th
          :style="[
            (index - 1) % 3 === 0 && (index - 1) % 6 !== 0
              ? { borderLeft: '1px dashed teal' }
              : { borderLeft: '1px solid teal' },
            (index - 1) % 6 === 0 ? { borderLeft: '2px solid teal' } : {},
          ]"
          v-bind:key="index"
          v-for="index in 24 * 6"
          rowspan="2"
        />
      </tr>
      <tr>
        <td class="subheader--cell" v-bind:key="index" v-for="index in 8">
          № {{ index }}
        </td>
      </tr>
      <create-row
        @contextmenu="onHeadersRightClick"
        v-bind:key="row.id"
        v-for="row in rows"
        :id="row.id"
        :typeId="row.typeId"
      />
    </table>
  </div>
  <ContextMenu ref="menu" :model="items" style="width: 250px">
    <template #item="{ item }">
      <div
        style="padding: 0.5rem; cursor: pointer"
        :id="item.typeId"
        @click="onClickHandler"
      >
        {{ item.label }}
      </div>
    </template>
  </ContextMenu>
</template>

<script>
import CreateRow from "@/components/DataGraph/CreateRow";
import { headers, contextMenu } from "./config";
import ContextMenu from "primevue/contextmenu";
import _ from "lodash";

export default {
  components: { ContextMenu, CreateRow },
  name: "DataGraph",
  data() {
    return {
      headers: headers,
      rows: [],
      clickedRowId: 0,
      items: contextMenu,
      configKonva: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 10,
        fill: "red",
        draggable: true,
      },
    };
  },
  methods: {
    addNewRow(typeId, rowId) {
      const newRow = {
        typeId: typeId,
        id: Date.now(),
      };
      const arr1 = _.slice(
        this.rows,
        0,
        _.findIndex(this.rows, (row) => row.id === Number(rowId))
      );
      const arr2 = _.slice(
        this.rows,
        _.findIndex(this.rows, (row) => row.id === Number(rowId))
      );
      this.rows = [...arr1, newRow, ...arr2];
    },
    onHeadersRightClick(event) {
      this.clickedRowId = event.target.parentNode.parentNode.id;
      this.$refs.menu.show(event);
    },
    onClickHandler(event) {
      this.addNewRow(Number(event.target.id), this.clickedRowId);
    },
  },
  mounted() {
    this.rows = [
      { typeId: 1, id: 1 },
      { typeId: 2, id: 2 },
      { typeId: 3, id: 3 },
      { typeId: 4, id: 4 },
      { typeId: 5, id: 5 },
      { typeId: 6, id: 6 },
    ];
  },
};
</script>

<style lang="scss">
.table {
  border: 2px solid teal;
  margin: 0 1rem;
  border-spacing: 0;
}

.header--cell {
  padding: 1rem;
  max-height: 150px;
  border: 1px solid teal;
}

.subheader--cell {
  text-align: center;
  color: red;
  border: 1px solid teal;
}

.vertical {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  word-wrap: normal;
  letter-spacing: 0.1rem;
}

.frozenVer {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
}

.frozenHor {
  position: sticky;
  z-index: 100;
  background-color: white;
}
</style>
