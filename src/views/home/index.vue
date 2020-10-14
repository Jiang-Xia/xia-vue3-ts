<template>
  <div class="index-container">
    <a-button
      type="primary"
      @click="clickHandle"
    >
      打开
    </a-button>
    <!-- <XiaLogin /> -->

    <a-divider />
    <a-divider />
    <a-input
      :value="antInput"
      placeholder="Basic usage"
      @input="changeHandle"
    >
      <a-icon
        slot="prefix"
        type="user"
      />
      <a-tooltip
        slot="suffix"
        title="Extra information"
      >
        <a-icon
          type="info-circle"
          style="color: rgba(0,0,0,.45)"
        />
      </a-tooltip>
    </a-input>
    <a-divider />
    <input
      v-model="nativeInput"
      type="text"
      style="border:1px solid #eee"
    >
    <a-divider />
    <div>{{ antAndNative }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
// import XiaLogin from '@/components/xia-login/index.vue'
@Options({
  components:{
    // XiaLogin:XiaLogin
  }
})
export default class Home extends Vue {
  antInput= 'antInput'
  nativeInput= 'nativeInput'
  get antAndNative(){
    return this.antInput +'======'+ this.nativeInput
  }
  set antAndNative(value){
    console.log(value)
    this.antInput = value
    this.nativeInput = value
  }
  init(){
     this.console() 
  }
  console(){
    console.log('nativeInput==>',this.nativeInput)
    console.log('props==>',this.$props)
    console.log('refs==>',this.$refs)
    console.log('route==>',this.$route)
    console.log('router==>',this.$router)
    console.log('emit==>',this.$emit)
    console.log('el==>',this.$el)
    console.log('nextTick==>',this.$nextTick)
    console.log('watch==>',this.$watch)
    console.log('options==>',this.$options)
  }
  clickHandle(){
    // XiaLogin.init()
    this.antAndNative ='打开' 
  }
  changeHandle(e: any){
    this.antInput = e.target.value
  }
  @Watch('antInput')
  onAntInputChanged(n: string, o: string) {
    console.log(n,o);
  }
  @Watch('nativeInput')
  onNativeInputChanged(n: string, o: string) {
    console.log(n,o);
    // 改名
  }
  created(){
    this.init()
  }
}
</script>
<style scoped lang="scss">

</style>
