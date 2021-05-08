<template>
  <div class="wrap">
    <div class="poster-wrap js-poster-wrap">
      <img src="../assets/xiaomi.png" alt="" class="material" />
      <div class="content">
        <p>我是分销测试，邀你一起学习画啦啦</p>
        <p>原价259，¥99.99元</p>
      </div>
      <img
        class="js-add-content add-content"
        src="../assets/footer.jpeg"
        alt="footer"
      />
    </div>
    <div class="operation">
      <button @click="startScreenshot">click me</button>
    </div>
    <img v-show="baseUrl" :src="baseUrl" alt="" class="poster" />
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import testExtend from "./testExtend";
export default {
  extends: testExtend,
  data() {
    return {
      baseUrl: ""
    };
  },
  methods: {
    startScreenshot() {
      const container = document.querySelector(".js-poster-wrap");
      console.log("startScreenshot container:", container);
      this.handleCanvas(container);
    },
    handleCanvas(content) {
      console.log("startCanvas content:", content);
      html2canvas(content, {
        height: 900,
        useCORS: true,
        backgroundColor: null,
        debug: true,
        logging: true,
        scrollX: 0,
        scrollY: 300
      }).then(canvas => {
        this.baseUrl = canvas.toDataURL("image/png");
        console.log("this.baseUrl:", this.baseUrl);
      });
    }
  }
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  position: relative;
  color: #fff;
  font-size: 20px;
  margin: auto;
  background: #fff;
}

.poster-wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
}

.poster-wrap .material {
  width: 100%;
  height: 100%;
}

.content {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
}

.notice {
  color: #000;
  font-size: 30px;
}

.add-content {
  position: absolute;
  left: 0;
  /* bottom: -152px; */
  top: -152px;
  width: 100%;
}

.operation {
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
}
.poster {
  width: 200px;
  height: 300px;
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
</style>