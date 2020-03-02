<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
<style lang="scss">
body {
  min-width: 980px;
  width: 100%;
  background: url("./assets/images/plaid2dbf8.jpg");
}
.icon {
  width: 30px;
  height: 30px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
