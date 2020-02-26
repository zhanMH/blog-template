<template>
  <div id="app">
    <public-header></public-header>
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import publicHeader from "@/components/publicHeader.vue";

export default {
  name: "Home",
  components: {
    publicHeader
  }
};
</script>
<style lang="scss">
body {
  min-width: 1440px;
  width: 100%;
  background: url("./assets/images/plaid2dbf8.jpg");
}
</style>
