<template>
  <a-modal
    title="登录"
    :visible="loginVisible"
    :close-on-click-modal="false"
    class="xia-dialog-login"
    width="400px"
    :modal="true"
  >
    <a-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginrules"
      class="loginForm"
    >
      <a-form-item
        prop="username"
        class="me-item"
      >
        <div class="xia-item">
          <i class="fas fa-user mg-r-10" />
          <a-input
            v-model="loginForm.username"
            class="inline"
            type="username"
            autocomplete="on"
          />
        </div>
      </a-form-item>
      <a-form-item
        prop="password"
        class="me-item"
      >
        <div class="xia-item">
          <i class="fas fa-lock mg-r-10" />
          <a-input
            v-model="loginForm.password"
            class="inline"
            type="password"
            autocomplete="on"
            @keydown.native.enter="tologinForm('loginForm')"
          />
        </div>
      </a-form-item>
    </a-form>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <!-- <a-button @click="loginVisible = false">取 消</a-button> -->
      <a-button
        type="primary"
        @click="tologinForm('loginForm')"
      >登 录</a-button>
    </span>
  </a-modal>
</template>
<script>
import store from '@/store'
import { Options, Vue } from 'vue-class-component'
@Options({
  data() {
    return {
      token: '',
      loginVisible: false,
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
      }
    }
  },
  methods: {
    async init() {
      this.loginTypeHandle()
    },
    showXiaLogin(option = {}) {
      this.init()
    },
    hideXiaLogin() {
      this.loginVisible = false
    },
    destory() {
      this.$destroy()
    },
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
    },
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
})
export default class XiaLogin extends Vue {

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
