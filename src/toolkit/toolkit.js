/**
 * Created by gaotianyang on 2018/11/15.
 * 使用此方式声明的全局方法必须挂载在Vue.prototype上才能调用到
 */

import _ from 'lodash'

const matrixToolkit = {
  /**
   * 生成行
   */
  makeRow (v = 0) {
    const array = new Array(9)
    array.fill(v)
    return array
  },
  /**
   * 生成格
   */
  makeMatrix (v = 0) {
    var self = this
    // 此方法只运行了一次makeRow()，然后复制到了每一行
    // const array = new Array(9)
    // array.fill(self.makeRow(v))
    // return array
    // 此时使用Array.from可生成一个伪数组，然后对每一个元素进行映射
    // return Array.from({ length: 9 })
    //   .map(() => self.makeRow(v))
    // 上述方法可简写为如下方法，将map方法中的内容写入form方法的第二个参数，一次性生成，效率会提升
    return Array.from({ length: 9 }, () => self.makeRow(v))
  },
  /**
   * Fisher-Yates 洗牌算法
   */
  shuffle (array) {
    _.each(array, function (v, k) {
      const num = _.random(k, 8)
        // ES5交换
        // let tmp = v
        // array[k] = array[num]
        // array[num] = tmp
        // ES6解构
      ;[array[k], array[num]] = [array[num], array[k]]
    })
    return array
  }
}

/**
 * 下面的注入会报错：Cannot assign to read only property 'exports' of object '#<Object>'
 * https://www.cnblogs.com/joyco773/p/8688410.html
 * webpack打包的时候，可以在js文件中混用require和export。
 * 但是不能混用import 以及module.exports
 * 因为webpack 2中不允许混用import和 module.exports ,
 * 解决办法就是统一改成ES6的方式编写即可.
 */

// module.exports = matrixToolkit
export default matrixToolkit
