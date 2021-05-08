<template>
  <div class="extend">
    this is a test for extend!
  </div>
</template>

<script>
export default {
  name: "testExtend",
  data(){
    return {
      isextend: true
    }
  },
  mounted() {
    console.log("this is a testExtend");
  }
};
</script>