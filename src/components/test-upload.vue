<template>
  <div class="test-text">
    <div class="a">
      <span>test1</span>
      <form name="myform" action="aaa.cgi" method="post"  enctype="multipart/form-data">
        <input type="file" name="file" />
        <input type="submit" value="提交" />
      </form>
      <img :src="file" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "testText",
  data() {
    return { file: "" };
  },
  watch: {
    file(value) {
      console.log("file:", value);
    }
  },
  methods: {
    submit() {
      var upFile = document.myform.file.value;
    },
    onchange(e) {
      console.log("value:", e, e.target.value);
      // let fileReader = new FileReader();
      // fileReader.onload = e => {
      //   let base64 = e.target.result;
      //   this.file = base64;
      // };
      // fileReader.readAsDataURL(value); // 根据图片路径读取图片
    }
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