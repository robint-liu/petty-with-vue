<template>
  <div class="extend">
    <audio preload id="audio" controls>
      <source
        src="http://activity-test.61info.cn/static/newworlddraw/audio/02.mp3"
      />
    </audio>
    <p v-show="!!text">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "testAudio",
  data() {
    return {
      isextend: false
    };
  },
  computed: {
    text() {
      return this.isextend;
    }
  },
  mounted() {
    const dom = document.querySelector("#audio");
    console.log("dom:", dom);
    dom.addEventListener("loadeddata", event => {
      console.log("loadeddata");
      alert("loadeddata");
    });
  }
};
</script>