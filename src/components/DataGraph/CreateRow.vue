<template>
  <template v-if="typeId === 1 || typeId === 2 || typeId === 5 || typeId === 6">
    <div style="width: 17px; height: 27px; position: absolute">
      <i
        v-bind:key="index"
        v-for="(icon, index) of icons"
        :class="icon.class"
      ></i>
    </div>
    <tr :style="{ backgroundColor: color }" :id="id" @click="getIcon">
      <td
        colspan="8"
        style="vertical-align: top; border: 1px solid teal"
        rowspan="2"
        @contextmenu="$emit('contextmenu', $event)"
      >
        <input-text type="text" v-model="title" class="input" />
      </td>
      <td
        :style="[
          {
            borderTop: '2px solid teal',
            borderBottom: '2px solid teal',
          },
          (index - 1) % 3 === 0 && (index - 1) % 6 !== 0
            ? { borderLeft: '1px dashed teal' }
            : { borderLeft: '1px solid teal' },
          (index - 1) % 6 === 0 ? { borderLeft: '2px solid teal' } : {},
        ]"
        v-bind:key="index"
        v-for="index in 24 * 6"
      ></td>
    </tr>
    <tr style="border: none">
      <td style="height: 8px; border-left: 2px solid teal"></td>
    </tr>
  </template>
  <template v-else>
    <tr :style="{ backgroundColor: color }" :id="id" @click="getIcon">
      <td
        v-bind:key="index"
        v-for="index in 8"
        style="vertical-align: top; border: 1px solid teal"
        rowspan="2"
        @contextmenu="$emit('contextmenu', $event)"
      >
        <input-text
          v-if="index === 2"
          type="text"
          v-model="title"
          class="input"
        />
        <input-text v-else type="text" class="input" />
      </td>
      <td
        :style="[
          {
            padding: '8px',
            borderTop: '2px solid teal',
            borderBottom: '2px solid teal',
          },
          (index - 1) % 3 === 0 && (index - 1) % 6 !== 0
            ? { borderLeft: '1px dashed teal' }
            : { borderLeft: '1px solid teal' },
          (index - 1) % 6 === 0 ? { borderLeft: '2px solid teal' } : {},
        ]"
        v-bind:key="index"
        v-for="index in 24 * 6"
      />
    </tr>
    <tr>
      <td style="height: 8px; border-left: 2px solid teal"></td>
    </tr>
  </template>
</template>

<script>
import InputText from "primevue/inputtext";
export default {
  name: "CreateRow",
  components: { InputText },
  props: {
    typeId: Number,
    id: Number,
  },
  emits: ["contextmenu"],
  data() {
    return {
      title: "",
      color: "",
      icons: [],
    };
  },
  methods: {
    getIcon() {
      const newIcon = {
        id: this.$store.state.selectedIconId,
        class: "fa-solid fa-floppy-disk fa-2x",
      };
      this.icons.push(newIcon);
      console.log(this.$store.state.selectedIconId);
    },
  },
  mounted() {
    switch (this.typeId) {
      case 1:
        this.title = "Перегон";
        this.color = "aquamarine";
        break;
      case 2:
        this.title = "Стрелочная группа";
        this.color = "burlywood";
        break;
      case 3:
        this.title = "Путь";
        this.color = "violet";
        break;
      case 4:
        this.title = "Место погрузки (выгрузки)";
        this.color = "lightpink";
        break;
      case 5:
        this.title = "Локомотив";
        this.color = "white";
        break;
      case 6:
        this.title = "Бригады ТО и КО";
        this.color = "yellow";
        break;
    }
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
}
</style>
