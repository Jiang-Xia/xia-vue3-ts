<template>
  <a-modal
    v-if="loginVisible"
    v-model="loginVisible.value"
    :visible="loginVisible"
    :title="title"
    @ok="tologinForm"
    @cancel="handleCancel"
  >
    <p>{{ ModalText }}</p>
  </a-modal>
</template>
<script lang="ts">
import store from '@/store'
import { Options, Vue } from 'vue-class-component'
@Options({

})
export default class XiaLogin extends Vue {
    data() {
    return {
      token: '',
      title:'登录',
      loginVisible : false,
      loginForm: {
        username: '',
        password: '',
        grant_type: 'password'
      },
      loginrules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      ModalText:'ModalText'
    }
  }
  static init(){
    this.loginVisible =  true;
    console.log('init',this.loginVisible);
  }
   showXiaLogin(option = {}) {
      this.init()
    }
    hideXiaLogin() {
      this.loginVisible = false
    }
    destory() {
      this.$destroy()
    }
    handleCancel(){
      this.loginVisible = false
    }
    /* 登录方式控制 */
    loginTypeHandle() {
      const code = this.$getCode()
      const service_url = location.protocol + '//' + location.host + location.pathname + 'login'
      switch (code) {
        // 单点登录
        case 'gyfy_117' :
          top.location.href = 'https://www.elungcare.com/sso/login?service=' + service_url
          break
        default:
          this.loginVisible = true
          break
      }
    }
    /* 登录回调 */
    tologinForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          store.dispatch('user/login', this.loginForm).then(async res => {
            if (res) {
              // 重定向或者首页
              this.$message.success('登录成功')
              this.token = this.$getToken()
              this.hideXiaLogin()
              await store.dispatch('user/getUserInfo')
              location.reload()
            } else {
              this.$message.error('用户名，密码不匹配')
            }
          })
        } else {
          this.$message.error('输入信息有误！请重新输入')
          return false
        }
      })
    }
}
</script>
<style scoped lang="scss">
@import "~@/styles/scss/_mixins";
.xia-dialog-login {
  .xia-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
