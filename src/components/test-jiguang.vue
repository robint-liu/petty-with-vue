<template>
  <div>
    <van-field
      v-model="phoneNumber"
      label="手机号码"
      placeholder="请输入手机号"
    />
    <van-button type="primary" @click="onsubmit">认证</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: undefined
    };
  },
  methods: {
    onsubmit() {
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)) {
      } else {
        this.jverify()
          .then(() => {
            localStorage.setItem("jverificationDemo_phone", this.phoneNumber);
            this.$toast.success("认证成功！");
          })
          .catch(() => {
            this.$toast.success("不符合认证要求");
          });
      }
    },

    jverify() {
      return new Promise((resolve, reject) => {
        window.JVerificationInterface.init({
          appkey: "1c75e65a9e31ac4c582de739",
          success(data) {
            console.log("success:", data);
            const verifyEnable = window.JVerificationInterface.checkVerifyEnable();
            // 1. 是否网络正常
            if (!verifyEnable) {
              this.showError = true;
              console.error("当前网络环境不支持认证,请关闭wifi,刷新页面");
              reject();
            } else {
              // 2. 获取token
              window.JVerificationInterface.getToken({
                // operater: 'CT',
                success(tokenData) {
                  const token = tokenData.content;
                  console.log("success", token);
                  localStorage.setItem("jverificationDemo_token", token);
                  resolve();
                },
                fail(errorData) {
                  console.log("getToken-error", errorData);
                  reject();
                }
              });
            }
          },
          fail(data) {
            console.log("init-error:", data);
            reject();
          }
        });
      });
    }
  }
};
</script>