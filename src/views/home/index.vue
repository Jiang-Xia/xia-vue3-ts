<template>
  <div class="index-container">
    {{ msg1 }}
    <!-- {{ msg2 }} -->
    {{ msg3 }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import { Vue, Component, Prop } from 'vue-property-decorator'
// import { defineComponent, ref } from 'vue'
@Options({
  props: {
  },
  data(){
    return{
      msg1:'msg1'
    }
  },
  // setup(props){
  //   const msg2 = 'msg2'
  //   console.log(props)
  //   return {
  //     msg2
  //   }
  // },
  created(){
    console.log(111111111)
  },
  // methods:{
  //   init(){
  //     console.log(this.msg1)
  //   }
  // }
})
export default class HelloWorld extends Vue {
  msg3= 'msg3'
  init(){
      console.log(this.msg3)
  }
  created(){
    console.log(this)
    this.init()
    console.log(33333)
  }
}
</script>
<style scoped lang="scss">

</style>
