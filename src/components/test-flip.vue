<template>
  <div class="binuo_flip">
    <!--  @change="handlerTurnChange" @tap="handlerToggleControl" @turning="handlerTurning" @prev="handleTurnPrev" @next="handlerTurnNext" -->
    <flipPage :width="375" ref="turn" :height="667" :data="pages" />
  </div>
</template>

<script>
import flipPage from "vue-flip-page";

export default {
  name: "flipPage",
  components: { flipPage },
  data() {
    return {
      pages: [
        {
          picture_image:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2600216442,2384386498&fm=15&gp=0.jpg"
        },
        {
          picture_image:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2600216442,2384386498&fm=15&gp=0.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.a {
  width: 200px;
  height: 200px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
}
.b {
  display: block;
  width: 100px;
  height: 100px;
}
</style>