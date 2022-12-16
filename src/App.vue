<template>
  <main-menu />
  <data-graph />
</template>

<script>
import MainMenu from "@/components/MainMenu";
import DataGraph from "@/components/DataGraph/DataGraph";
export default {
  components: { DataGraph, MainMenu },
};
</script>

<style>
@import "~primevue/resources/primevue.min.css";
@import "~primevue/resources/themes/saga-blue/theme.css";
@import "@fortawesome/fontawesome-free/css/all.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 14px;
}
</style>
