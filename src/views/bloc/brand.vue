<template>
  <div class="brand-container">
    this is brand
  </div>
</template>

<script>

export default {
  name: 'Brand',
  data() {
    return {
      passwordType: 'password',
      loading: false,
      showDialog: false,
      redirect: undefined
    }
  },
  created() {
    // window.addEventListener('hashchange', this.afterQRScan)
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  },
  methods: {
    showPwd() {

    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

// .login-container {

// }
</style>
