interface Settings {
  watermark_txt: string;
  watermark_x: number; // 水印起始位置x轴坐标
  watermark_y: number; // 水印起始位置Y轴坐标
  watermark_rows: number; // 水印行数
  watermark_cols: number; // 水印列数
  watermark_x_space: number; // 水印x轴间隔
  watermark_y_space: number; // 水印y轴间隔
  watermark_color: string; // 水印字体颜色
  watermark_alpha: number; // 水印透明度，小于等于0.003,不可恢复到水印。
  watermark_fontsize: string; // 水印字体
  watermark_font: string; // 水印字体
  watermark_line_height: number; // 水印行高
  watermark_width: number; // 水印宽度
  watermark_height: number; // 水印长度
  watermark_angle: number; // 水印倾斜度数
  watermark_bg_alpha: number; // 加透明度导致隐形水印无法读取
}
function watermark (waterMarkTxt: string, className: string) { // 水印
  let watermarkdivs: [] = []
  // 加载水印
  const loadMark = function () {
    const defaultSettings: Settings = {
      watermark_txt: waterMarkTxt,
      watermark_x: -2, // 水印起始位置x轴坐标
      watermark_y: 20, // 水印起始位置Y轴坐标
      watermark_rows: 4, // 水印行数
      watermark_cols: 5, // 水印列数
      watermark_x_space: 60, // 水印x轴间隔
      watermark_y_space: 70, // 水印y轴间隔
      watermark_color: '#000000', // 水印字体颜色
      watermark_alpha: 0.05, // 水印透明度，小于等于0.003,不可恢复到水印。
      watermark_fontsize: '20px', // 水印字体
      watermark_font: 'CN Bold Bold', // 水印字体
      watermark_line_height: 30, // 水印行高
      watermark_width: 333, // 水印宽度
      watermark_height: 136, // 水印长度
      watermark_angle: 15, // 水印倾斜度数
      // watermark_bg_color:'yellow',
      watermark_bg_alpha: 0.5 // 加透明度导致隐形水印无法读取

    }
    // 采用配置项替换默认值，作用类似jquery.extend
    const oTemp = document.createDocumentFragment()

    if (watermarkdivs && watermarkdivs.length > 0) {
      const revDom = document.getElementById('otdivid')
      if(revDom){
        document.getElementsByClassName(className)[0].removeChild(revDom)
      }
      watermarkdivs = []
    }
    let x
    let y
    for (let i = 0; i < defaultSettings.watermark_rows; i++) {
      y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i
      for (let j = 0; j < defaultSettings.watermark_cols; j++) {
        x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j

        const mask_div = document.createElement('div')
        mask_div.id = '_mask_div' + i + j
        mask_div.className = '_mask_div'
        // mask_div.appendChild(document.createTextNode(defaultSettings.watermark_txt));
        // 设置水印div倾斜显示
        mask_div.style.transform = 'rotate(-' + defaultSettings.watermark_angle + 'deg)'
        mask_div.style.visibility = ''
        mask_div.style.position = 'fixed'
        // 选不中
        mask_div.style.left = x + 'px'
        mask_div.style.top = y + 'px'
        mask_div.style.overflow = 'hidden'
        mask_div.style.zIndex = '9'
        mask_div.style.pointerEvents = 'none'
        // mask_div.style.border="solid #eee 1px";
        mask_div.style.opacity = String(defaultSettings.watermark_alpha)
        mask_div.style.fontSize = defaultSettings.watermark_fontsize
        mask_div.style.fontFamily = defaultSettings.watermark_font
        mask_div.style.color = defaultSettings.watermark_color
        mask_div.style.textAlign = 'center'
        mask_div.style.lineHeight = defaultSettings.watermark_line_height + 'px'
        mask_div.style.width = defaultSettings.watermark_width + 'px'
        mask_div.style.height = defaultSettings.watermark_height + 'px'
        mask_div.style.display = 'block'
        mask_div.style.fontWeight = '900'
        mask_div.style.zIndex = '2000'
        oTemp.appendChild(mask_div)
      }
    }

    document.getElementsByClassName(className)[0].appendChild(oTemp)

    const divs = document.querySelectorAll('._mask_div')
    for (let i = 0; i < divs.length; i++) {
      divs[i].innerHTML = defaultSettings.watermark_txt
    }
  }

  watermark.load = function () {
    function del () {
      const divs = document.querySelectorAll('._mask_div')
      for (let i = 0; i < divs.length; i++) {
        const parent = divs[i].parentNode
        if (parent) {
          parent.removeChild(divs[i])
        }
        console.log(divs[i].parentElement)
      }
    }
    del()
    window.onload = function () {
      del()
      loadMark()
    }
    window.onresize = function () {
      del()
      loadMark()
    }
    del()
    loadMark()
  }
  watermark.load({
    watermark_txt: waterMarkTxt
  })
}
export default watermark
