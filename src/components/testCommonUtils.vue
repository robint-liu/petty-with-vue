
<template>
  <div>
    <h2>this is a testCommonUtils</h2>
  </div>
</template>
<script>
import { isRetina, clientType, systemInfo } from "@i61/common-function-utils";

export default {
  name: "testCommonUtils",
  data() {
    return {};
  },
  mounted() {
    console.log("systemInfo:", systemInfo());
    const a = systemInfo();
  console.log(123, typeof a.systemVersion);
  }
};
</script>