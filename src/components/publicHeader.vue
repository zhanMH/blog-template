<template>
  <div class="header">
    <div class="logo">logo</div>
    <div class="menu-box">
      <div class="menuList">
        <div class="line" v-for="(item, index) in menuLists" :key="index">
          {{ item.title }}
        </div>
      </div>
    </div>
    <div class="headerUser">
      欢迎您
    </div>
  </div>
</template>

<script>
export default {
  name: "publicHeader",
  props: {
    msg: String
  },
  data() {
    return {
      menuLists: [
        {
          title: "首页",
          icon: "icon",
          link: "/"
        },
        {
          title: "菜单1",
          icon: "icon",
          link: "/"
        },
        {
          title: "菜单2",
          icon: "icon",
          link: "/"
        },
        {
          title: "菜单3",
          icon: "icon",
          link: "/"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  overflow: hidden;
  background: rgba(74, 66, 75, 0.692);
  .logo {
    width: 200px;
    height: 60px;
  }
  .menuList {
    flex: 1;
    display: flex;
  }
}
</style>
