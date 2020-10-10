/**
 * @description 校正windows页面在系统进行缩放后导致页面被放大的问题，通常放大比例是125%、150%
 *
 * **/

class DevicePixelRatio{
    public correct () {
    // 页面devicePixelRatio（设备像素比例）变化后，
    // 计算页面body标签zoom修改其大小，来抵消devicePixelRatio带来的变化。
    let ratio = window.devicePixelRatio
    // 笔记本下需要放大但又不能放大那么多 所以设置了一个系数0.4
    if (ratio > 1) {
      ratio -= 0.25
    }
    const dom = document.getElementsByTagName('body')[0]
    if (dom) {
      dom.style.zoom = String(1 / ratio)
    }
  }
  public watch (){
    window.addEventListener('resize', ()=>{
      this.correct()
    }, false)
  }
  public init(){
    this.correct()
    this.watch()
  } 
}
export default DevicePixelRatio
