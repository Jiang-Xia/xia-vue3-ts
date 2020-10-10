/**
 * @description 校正windows页面在系统进行缩放后导致页面被放大的问题，通常放大比例是125%、150%
 *
 * **/

// class DevicePixelRatio {
//   public flag = false
//   constructor(){
//     this.flag = false
//   }
//   // 获取系统类型
//   _getSystem () {
//     // const flag = false
//     const agent = navigator.userAgent.toLowerCase()
//     //		var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
//     //		if(isMac) {
//     //			return false;
//     //		}
//     // 现只针对windows处理，其它系统暂无该情况，如有，继续在此添加
//     if (agent.indexOf('windows') >= 0) {
//       return true
//     }
//   }

//   // 获取页面缩放比例
//   //	_getDevicePixelRatio() {
//   //		let t = this;
//   //	}
//   // 监听方法兼容写法
//   public _addHandler (element: Window, type: string, handler: any) {
//     if (element.addEventListener) {
//       element.addEventListener(type, handler, false)
//     }
//   }

//   // 校正浏览器缩放比例
//   _correct () {
//     // const t = this
//     // 页面devicePixelRatio（设备像素比例）变化后，计算页面body标签zoom修改其大小，来抵消devicePixelRatio带来的变化。
//     let ratio = window.devicePixelRatio
//     // 笔记本下需要放大但又不能放大那么多 所以设置了一个系数0.4
//     if (ratio > 1) {
//       ratio -= 0.25
//     }
//     const dom = document.getElementsByTagName('body')[0]
//     if (dom) {
//       dom.style.zoom = String(1 / ratio)
//     }
//   }

//   // 监听页面缩放
//   _watch () {
//     const t = this
//     t._addHandler(window, 'resize', function () { // 注意这个方法是解决全局有两个window.resize
//       // 重新校正
//       t._correct()
//     })
//   }

//   // 初始化页面比例
//   init () {
//     const t = this
//     if (t._getSystem()) { // 判断设备，目前只在windows系统下校正浏览器缩放比例
//       // 初始化页面校正浏览器缩放比例
//       t._correct()
//       // 开启监听页面缩放
//       t._watch()
//     }
//   }
// }
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
