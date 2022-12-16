<template>
  <div class="menu">
    <TabView>
      <TabPanel header="Главная">
        <div class="menu--section">
          <Panel header="Панель управления" style="flex: 0 0 200px">
            <div style="display: flex; align-items: center; gap: 5px">
              <i class="fa-solid fa-print fa-3x"></i>
              <div class="menu--icons">
                <i
                  @click="getIcon"
                  id="1"
                  class="fa-solid fa-floppy-disk fa-2x"
                ></i>
                <i
                  @click="getIcon"
                  id="2"
                  class="fa-solid fa-folder-open fa-2x"
                ></i>
                <i class="fa-solid fa-upload fa-2x"></i>
                <i class="fa-solid fa-circle-xmark fa-2x"></i>
                <i class="fa-solid fa-image fa-2x"></i>
                <i class="fa-solid fa-pen-to-square fa-2x"></i>
                <i class="fa-solid fa-download fa-2x"></i>
                <i class="fa-solid fa-recycle fa-2x"></i>
              </div>
            </div>
          </Panel>
          <Panel header="Графика" style="flex: 0 0 200px">
            <div style="display: flex; align-items: center; gap: 5px">
              <div class="menu--icons">
                <i class="fa-solid fa-floppy-disk fa-2x"></i>
                <i class="fa-solid fa-folder-open fa-2x"></i>
                <i class="fa-solid fa-upload fa-2x"></i>
                <i class="fa-solid fa-circle-xmark fa-2x"></i>
                <i class="fa-solid fa-image fa-2x"></i>
                <i class="fa-solid fa-pen-to-square fa-2x"></i>
                <i class="fa-solid fa-download fa-2x"></i>
                <i class="fa-solid fa-recycle fa-2x"></i>
              </div>
              <i class="fa-solid fa-print fa-3x"></i>
            </div>
          </Panel>
          <Panel
            header="Форма ввода информации"
            class="no-padding-panel"
            style="flex: 1 1 1px"
          >
            <Panel
              header="Введите название суточного план графика"
              class="padding-panel"
            >
              <InputText style="width: 100%" type="text" v-model="value" />
            </Panel>
          </Panel>
        </div>
      </TabPanel>

      <TabPanel header="Технологические операции">
        <div class="menu--section">
          <Panel header="Условные обозначения" style="flex: 1 1 1px"></Panel>
          <Panel header="Продолжительность операций" style="flex: 1 1 1px">
          </Panel>
          <Panel header="Количество вагонов" style="flex: 1 1 1px"></Panel>
          <Panel header="Количество вагонов" style="flex: 1 1 1px"></Panel>
        </div>
      </TabPanel>
      <TabPanel header="Правка"> Content III </TabPanel>
      <TabPanel header="Расчеты"> Content III </TabPanel>
      <TabPanel header="Справка"> Content III </TabPanel>
    </TabView>
  </div>
</template>

<script>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Panel from "primevue/panel";
import InputText from "primevue/inputtext";

export default {
  components: {
    TabView,
    TabPanel,
    Panel,
    InputText,
  },
  name: "MainMenu",
  methods: {
    getIcon(e) {
      this.$store.commit("selectIcon", e.target.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  max-width: 1000px;
  margin: 0 0 1rem 1rem;
}

.menu--section {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.menu--icons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5px;
  row-gap: 5px;
}

::v-deep(.no-padding-panel.p-panel) {
  .p-panel-content {
    padding: 0;
  }
}

::v-deep(.padding-panel.p-panel) {
  .p-panel-content {
    padding: 6px;
  }
}

::v-deep(.p-tabview) {
  .p-tabview-panels {
    padding: 0.5rem 0 0 0;
  }
}

::v-deep(.p-panel-header) {
  font-size: 14px;
  justify-content: center;
}
</style>
