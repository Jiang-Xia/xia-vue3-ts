import { defineComponent,ref } from 'vue'
const XiaLogin = defineComponent( {
  setup(){
    const count = ref(0);
    const userName = ref('');
    const token= ref('')
    let loginVisible= ref(true)
    const loginForm= ref(
      {
        username: '',
        password: '',
        grant_type: 'password'
      }
    )
    const handleSubmit= ()=>{

    }
    const init = ()=>{
      
    }
    const handleOk = ()=>{
      loginVisible.value = false
      console.log(loginVisible)
    }
    return () => (
      <a-modal
      title="登录"
      visible={loginVisible}
      v-model={loginVisible}
      class="xia-dialog-login"
      width="400px"
      maskClosable={false}
      onOk={handleOk}
    >
      {/* <a-form
        ref="loginForm"
        class="loginForm"
        submit={handleSubmit}
      >
        <a-form-item
          prop="username"
          class="me-item"
        >
          <div class="xia-item">
            <i class="fas fa-user mg-r-10" />
            <a-input
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
            />
          </div>
        </a-form-item>
      </a-form> */}
    </a-modal>
    )
  },
  created(){
    console.log(11)
  }
})
export default XiaLogin