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
          :class="[{ mark: index % 2 == 1 }]"
          :href="item.link"
          v-for="(item, index) in lists"
          :key="index"
        >
          <div class="info">
            <div class="title">{{ item.title }}</div>
            <div class="content">{{ item.content }}</div>
            <div class="time">发布于{{ item.creationTime }}</div>
            <div class="attribute">
              <div class="browse">{{ item.browse }}浏览</div>
              <div class="comment">{{ item.commentSum }}评论</div>
              <div class="tag">{{ item.tag }}</div>
            </div>
          </div>
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
        </a>
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
      bannerSrc:
        "https://cdn.jsdelivr.net/gh/moezx/cdn@3.6.8/cover/webp/AK-01.jpg.webp",
      lists: [
        {
          id: 1,
          link: "",
          title: "test1",
          img:
            "https://2heng.xin/wp-content/uploads//2019/12/2572384-1024x640.jpg",
          creationTime: "2020-02-29 18:59",
          content:
            "测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1",
          commentSum: "34523",
          tag: "标签",
          browse: "123"
        },
        {
          id: 2,
          link: "",
          title: "test2",
          img: "https://2heng.xin/wp-content/uploads//2019/06/74857125_p0.png",
          creationTime: "2020-02-29 18:59",
          content:
            "测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2",
          commentSum: "2312",
          tag: "标签",
          browse: "1235"
        },
        {
          id: 1,
          link: "",
          title: "test1",
          img:
            "https://2heng.xin/wp-content/uploads//2019/12/2572384-1024x640.jpg",
          creationTime: "2020-02-29 18:59",
          content:
            "测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1",
          commentSum: "34523",
          tag: "标签",
          browse: "123"
        },
        {
          id: 2,
          link: "",
          title: "test2",
          img: "https://2heng.xin/wp-content/uploads//2019/06/74857125_p0.png",
          creationTime: "2020-02-29 18:59",
          content:
            "测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2测试2",
          commentSum: "2312",
          tag: "标签",
          browse: "1235"
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
  min-height: 300px;
  background: rgba($color: #ffffff, $alpha: 0.7);
  padding: 20px;
  margin: 0 auto;
  .list {
    width: 100%;
    .line {
      width: 100%;
      display: flex;
      height: 300px;
      justify-content: space-between;
      overflow: hidden;
      border-radius: 10px;
      background: rgba($color: #ffffff, $alpha: 0.7);
      margin-bottom: 40px;
      box-shadow: 0 1px 20px -6px rgba(0, 0, 0, 0.3);
      transition: all 0.35s;
      .info {
        padding: 20px;
        .title {
          font-size: 26px;
          line-height: 30px;
          color: #333;
          height: 30px;
          margin-bottom: 10px;
        }
        .content {
          font-size: 16px;
          color: #666666;
          line-height: 1.8;
          height: 140px;
          overflow: hidden;
        }
        .time {
          margin: 30px 0 10px;
        }
        .attribute {
          > div {
            display: inline-block;
          }
          .comment {
            margin: 0px 10px;
          }
        }
      }
      .img {
        width: 440px;
        flex: none;
        height: 100%;
        overflow: hidden;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          pointer-events: none;
          transition: all 0.6s;
        }
      }
      &:hover {
        box-shadow: 0 5px 25px -6px rgba(0, 0, 0, 0.6);
        img {
          transform: scale(1.1);
        }
      }
    }
    .line.mark {
      flex-direction: row-reverse;
      text-align: right;
    }
  }
}
</style>
