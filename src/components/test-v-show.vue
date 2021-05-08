<template >
  <div v-if="text">
    <p>this is a test!</p>
    <p class="p">{{ text }}</p>
    <p>test end!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 1
    };
  }
};
</script>

<style scoped>
p.p {
  background: gray;
  height: 30px;
  width: 100%;
}
</style>