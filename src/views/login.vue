<template>
  <div class="login">
    <div class="container">
      <div class="main">
        <div class="logo">
          <svg class="icon" aria-hidden="true" style="width:90px;height:90px">
            <use xlink:href="#icondenglu"></use>
          </svg>
        </div>
        <div class="line">
          <Input
            v-model="userData.userName"
            size="large"
            placeholder="请输入用户名"
          />
        </div>
        <div class="line">
          <Input
            v-model="userData.userName"
            size="large"
            placeholder="请输入用户名"
          />
        </div>
        <div class="line">
          <a href="">注册账号</a>
          <a href="">忘记密码</a>
        </div>
        <Button type="success" long> 登录 </Button>
      </div>
      <public-footer></public-footer>
    </div>
  </div>
</template>

<script>
import publicFooter from "@/components/publicFooter.vue";
export default {
  name: "Home",
  components: {
    publicFooter
  },
  data() {
    return {
      userData: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  display: flex;
  align-items: center;
  height: 100vh;
  min-height: 900px;
  justify-content: space-around;
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
    width: 720px;
    height: 620px;
    padding: 40px;
    overflow: hidden;
    background: rgba($color: #ffffff, $alpha: 0.5);
    .main {
      display: flex;
      flex: 1;
      align-items: center;
      flex-direction: column;
      width: 300px;
      .line {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 20px;
      }
      .logo {
        margin: 60px;
      }
    }
  }
}
</style>
