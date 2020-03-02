<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/images/logo.png" alt="" />
    </div>
    <div class="menu-box">
      <div class="menuList">
        <div class="line" v-for="(item, index) in menuLists" :key="index">
          {{ item.title }}
        </div>
      </div>
    </div>
    <div class="headerUser">
      <div class="userPic">
        <div class="iconfont iconyonghu"></div>
      </div>
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
  background: rgba(255, 255, 255, 0.75);
  transition: all 0.6s;
  .logo {
    width: 200px;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 40px;
    img {
      width: 50%;
    }
  }
  .menuList {
    flex: none;
    display: flex;
    .line {
      width: 100px;
      height: 70px;
      line-height: 70px;
      text-align: center;
      color: #666;
      transition: all 0.2s;
      cursor: pointer;
    }
    .line:hover {
      color: #FE9600;
    }
  }
  .headerUser {
    padding-right: 40px;
    .userPic {
      color: #666;
      .iconfont {
        font-size: 36px;
      }
    }
  }
}
.header:hover {
  background: rgba(255, 255, 255, 0.99);
}
</style>
