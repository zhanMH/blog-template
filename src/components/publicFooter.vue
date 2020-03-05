<template>
  <div class="footer">
    <div class="copyright">
      © 2020 初玖
      <a href="http://www.beian.miit.gov.cn" target="_blank"
        >粤ICP备18035587号</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "publicHeader",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  margin-top: 40px;
  .copyright {
    text-align: center;
  }
}
</style>
