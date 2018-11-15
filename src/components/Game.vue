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
       * 初始化
       */
      init () {
        var self = this
        self.data = self.makeMatrix()
        self.data[0][1] = 2
        console.log(self.shuffle(self.test))
//        console.log(self.$toolkit.shuffle(self.test))
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
