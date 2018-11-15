<template>
  <div>
    <x-header>数独游戏</x-header>
    <group>
      <div class="row" v-for="(row, index) in data" :key="index">
        <div class="matrix" v-for="(matrix, index) in row" :key="index">{{matrix}}</div>
      </div>
    </group>
  </div>
</template>

<script>
//  import _ from 'lodash'
//  import toolkit from '../toolkit/toolkit'
  import { XHeader, Group } from 'vux'

  export default {
    name: 'Game',
    components: {
      XHeader,
      Group
    },
    data () {
      return {
        msg: '这是游戏页面',
        data: [],
        test: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
    methods: {
      /**
       * 生成行
       */
//      makeRow (v = 0) {
//        const array = new Array(9)
//        array.fill(v)
//        return array
//      },
      /**
       * 生成格
       */
//      makeMatrix (v = 0) {
//        var self = this
//        // 此方法只运行了一次makeRow()，然后复制到了每一行
//        // const array = new Array(9)
//        // array.fill(self.makeRow(v))
//        // return array
//        // 此时使用Array.from可生成一个伪数组，然后对每一个元素进行映射
//        // return Array.from({ length: 9 })
//        //   .map(() => self.makeRow(v))
//        // 上述方法可简写为如下方法，将map方法中的内容写入form方法的第二个参数，一次性生成，效率会提升
//        return Array.from({ length: 9 }, () => self.makeRow(v))
//      },
      /**
       * Fisher-Yates 洗牌算法
       */
//      shuffle (array) {
//        _.each(array, function (v, k) {
//          const num = _.random(k, 8)
//          // ES5交换
//          // let tmp = v
//          // array[k] = array[num]
//          // array[num] = tmp
//          // ES6解构
//          ;[array[k], array[num]] = [array[num], array[k]]
//        })
//        return array
//      },
      /**
       * 初始化
       */
      init () {
        var self = this
//        self.data = self.makeMatrix()
//        self.data[0][1] = 2
//        console.log(toolkit.shuffle(self.test))
//        console.log(toolkit.makeRow())
//        console.log(toolkit.makeMatrix())
//        console.log(self.$toolkit.makeMatrix())
        console.log(self.shuffle(self.test))
        console.log(self.$toolkit.shuffle(self.test))
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>

<style>
  .row{
    height: 35px;
    text-align: center;
  }
  .matrix{
    display: inline-block;
    border: 1px solid #000;
    width: 35px;
    height: 35px;
    box-sizing: border-box;
  }
</style>
