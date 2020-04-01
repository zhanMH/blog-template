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
            placeholder="请输入用户名"
          />
        </div>
        <div class="line">
          <Input
            v-model="userData.phone"
            placeholder="手机号"
          />
        </div>
        <div class="line">
          <Input
            v-model="userData.password"
            type="password"
            placeholder="请输入用密码"
          />
        </div>
        <div class="line">
          <router-link to="/login">登录账号</router-link>
        </div>
        <Button type="success" long @click="submit"> 注册 </Button>
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
        password: "",
        phone:""
      }
    };
  },
  methods: {
    async submit(){
      let resData= await this.$ajax.post('user/register',this.userData)
      if(!resData.errno){
        this.$Message.success('注册成功');
        this.$router.push({name:"login"})
        return
      }
      this.$Message.error(resData.message);
    }
  },
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
