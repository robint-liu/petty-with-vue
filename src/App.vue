<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" @created="test"/>
    <!-- <testShow v-if="0"/> -->
    <!-- <testCanvas></testCanvas> -->
    <!-- <testAudio></testAudio> -->
    <!-- <testSvg></testSvg> -->
    <!-- <testText></testText> -->
    <!-- <test-flip></test-flip> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import testCanvas from "./components/testCanvas.vue";
// import testCommonUtils from "./components/testCommonUtils.vue";
import testAudio from "./components/testAudio.vue";
import testShow from "./components/test-v-show.vue";
import testSvg from "./components/test-svg.vue";
import testText from "./components/test-text.vue";
import testJG from "./components/test-jiguang.vue";
import testUpload from "./components/test-upload.vue";
import testFlip from "./components/test-flip.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    testCanvas,
    testAudio,
    testShow,
    testSvg,
    testText,
    testJG,
    testUpload,
    testFlip
  },
  methods:{
    test(...rest){
      console.log("rest:", rest);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
