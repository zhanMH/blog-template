<template>
  <div class="home">
    <div
      class="banner"
      :style="'background-image: url(' + bannerSrc + ')'"
    ></div>
    <div class="container">
      <div class="list">
        <a
          class="line"
          :href="item.link"
          v-for="(item, index) in lists"
          :key="index"
        >
          <div class="info">
            <div class="title">{{ item.title }}</div>
            <div class="content">{{ item.content }}</div>
          </div>
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      bannerSrc:
        "https://cdn.jsdelivr.net/gh/moezx/cdn@3.6.8/cover/webp/AK-01.jpg.webp",
      lists: [
        {
          id: 1,
          link: "",
          title: "test1",
          img:
            "https://2heng.xin/wp-content/uploads//2019/12/2572384-1024x640.jpg",
          creationTime: "",
          content:
            "测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1",
          commentSum: "",
          tag: ""
        },
        {
          id: 2,
          link: "",
          title: "test2",
          img: "",
          creationTime: "",
          content:
            "测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2",
          commentSum: "",
          tag: ""
        }
      ]
    };
  }
};
</script>
<style lang="scss" scope>
.banner {
  background: no-repeat fixed center;
  background-size: cover;
  height: 100vh;
  width: 100%;
}
.container {
  width: 800px;
  height: 100vh;
  background: rgba($color: #ffffff, $alpha: 0.5);
  padding: 20px;
  margin: 0 auto;
  .list {
    .line {
      display: block;
      height: 200px;
      overflow: hidden;
      border-radius: 10px;
      background: rgba($color: #ffffff, $alpha: 0.5);
      margin-bottom: 40px;
      box-shadow: 0 1px 20px -6px rgba(0, 0, 0, 0.3);
      transition: all 0.35s;
      .img {
        img {
          height: 100%;
          width: 500px;
        }
      }
    }
    .line:hover {
      box-shadow: 0 5px 25px -6px rgba(0, 0, 0, 0.6);
    }
  }
}
</style>
