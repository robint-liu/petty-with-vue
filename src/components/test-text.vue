<template>
  <div class="test-text">
    <div class="a">
      <span>test1</span>
      <!-- <div class="b">test2</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "testText"
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