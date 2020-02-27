<template>
  <div class="home">
    <div
      class="banner"
      :style="'background-image: url(' + bannerSrc + ')'"
      ref="banner"
    >
      <div class="title">
        HI.CHUJIU!
      </div>
      <div class="info">
        <div class="motto">
          We are all in gutter，but some of us are looking at the stars。
        </div>
        <div class="social">
          <a
            class="iconfont"
            target="_blank"
            :title="item.name"
            :href="item.link"
            :class="item.icon"
            :style="'color:' + item.color"
            v-for="(item, index) in socialLists"
            :key="index"
          ></a>
        </div>
      </div>
      <div class="iconfont iconxiala down" @click="downMain()"></div>
    </div>
    <div class="container" ref="container">
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
import bannerSec from "@/assets/images/banner.jpeg";
export default {
  name: "Home",
  components: {
    publicFooter
  },
  data() {
    return {
      bannerSrc: bannerSec,
      socialLists: [
        {
          icon: "iconwechat-fill",
          link: "wechat",
          name: "微信",
          color: "#71bf4b"
        },
        {
          icon: "iconweibo1",
          link: "weibo",
          name: "微博",
          color: "#c3352f"
        },
        {
          icon: "iconQQ",
          link: "QQ",
          name: "QQ",
          color: "#65aee4"
        },
        {
          icon: "icongithub-fill",
          link: "github",
          name: "github",
          color: "#67b685"
        },
        {
          icon: "iconzhihu",
          link: "zhihu",
          name: "知乎",
          color: "#2f74a6"
        },
        {
          icon: "iconalipay1",
          link: "alipay",
          name: "支付宝",
          color: "#439fe3"
        },
        {
          icon: "iconbilibili",
          link: "https://space.bilibili.com/14167164",
          name: "B站",
          color: "#439fe3"
        },
        {
          icon: "iconwangyiyun",
          link: "https://music.163.com/#/user/home?id=61199609",
          name: "网易云音乐",
          color: "#c73420"
        }
      ],
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
  },
  methods: {
    //滚动到主体
    downMain() {
      let containerTop = this.$refs.container.offsetTop;
      this.roll(containerTop);
    },
    roll(v){
      let time = setInterval(() => {
        document.documentElement.scrollTop += 15;
        if (document.documentElement.scrollTop >= v) {
          clearTimeout(time);
        }
      }, 5);
    },
  },
  mounted() {
    console.log(1);
  }
};
</script>
<style lang="scss" scope>
.banner {
  position: relative;
  background: rgba(0, 0, 0, 0.2) no-repeat fixed center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: url("../../assets/images/dot.png");
  }
  .title {
    position: relative;
    z-index: 10;
    font-size: 86px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 40px;
  }
  .info {
    position: relative;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding: 20px;
    .motto {
      font-size: 26px;
      color: #ffffff;
      margin-top: 10px;
    }
    .social {
      justify-content: space-between;
      padding: 0 20px;
      display: flex;
      .iconfont {
        font-size: 32px;
        margin: 10px;
      }
    }
  }
  .down {
    position: absolute;
    bottom: 30px;
    margin: 0px auto;
    color: #ffffff;
    font-size: 40px;
    z-index: 10;
    animation: float 1s linear infinite;
    cursor: pointer;
  }
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
@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px)
  }

  100% {
    transform: translateY(0)
  }
}
</style>
