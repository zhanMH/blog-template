<template>
  <div class="details">
    <public-header></public-header>
    <div class="banner">
      <img src="https://2heng.xin/wp-content/uploads//2019/12/2572384-1024x640.jpg" alt="">
    </div>
    <div class="container" ref="container">

      <div class="main">
        <mavon-editor
          class="mavon-editor"
          :value="context"
          :subfield = "subfield"
          :defaultOpen = "defaultOpen"
          :toolbarsFlag = "toolbarsFlag"
          :editable="editable"
          :scrollStyle="scrollStyle"
          previewBackground='none'
          :boxShadowStyle='boxShadowStyle'
        ></mavon-editor>
      </div>
      <comment></comment>
      <public-footer></public-footer>
    </div>
  </div>
</template>

<script>
import publicFooter from "@/components/publicFooter.vue";
import publicHeader from "@/components/publicHeader.vue";
import comment from "@/components/comment.vue";
export default {
  name: "Home",
  components: {
    publicFooter,
    publicHeader,
    comment
  },
  data() {
    return {
      subfield: false,// 单双栏模式
      defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
      editable: false,
      toolbarsFlag: false,
      boxShadowStyle:'0 2px 12px 0 rgba(0, 0, 0, 0.0)',
      scrollStyle: true,
      context:`### Markdown 编辑器写文章`
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
.mavon-editor{
  background: none;
}
.banner{
  width: 800px;
  height: 400px;
  margin: 70px auto 0;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
}
.container{
  width: 800px;
  min-height: 300px;
  background: rgba($color: #ffffff, $alpha: 0.7);
  padding: 20px;
  margin: 0 auto;

}
</style>
