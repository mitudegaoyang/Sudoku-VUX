<template>
  <div>
    <x-header>数独游戏</x-header>
    <!--九宫格-->
    <group>
      <div class="p10">
        <div class="row" v-for="(row, index) in data" :key="index">
          <div class="matrix" v-for="(matrix, index) in row" :key="index">{{matrix}}</div>
        </div>
      </div>
    </group>
    <!--按钮组-->
    <group>
      <div class="p10">
        <flexbox>
          <flexbox-item>
            <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="check()">检查</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button :gradients="['#FF5E3A', '#FF9500']" @click.native="reset()">重置</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button :gradients="['#FF2719', '#FF61AD']" @click.native="clear()">清理</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button :gradients="['#6F1BFE', '#9479DF']" @click.native="rebuild()">重建</x-button>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="p10">
        <flexbox>
          <flexbox-item>
            <x-button :gradients="['#A644FF', '#FC5BC4']" @click.native="showScrollBox=true">弹框</x-button>
          </flexbox-item>
        </flexbox>
      </div>
    </group>
    <!--弹出面板-->
    <x-dialog v-model="showScrollBox" hide-on-blur>
      <p class="dialog-title">选择数值</p>
      <div class="img-box" style="padding:15px 0;overflow:scroll;-webkit-overflow-scrolling:touch;">
        <grid :cols="3" :show-lr-borders="false">
          <grid-item v-for="i in 9" :key="i" @click.native="choose(i)">
            <span class="grid-center">{{i}}</span>
          </grid-item>
          <grid-item @click.native="choose(-1)">
            <span class="grid-center">?</span>
          </grid-item>
          <grid-item @click.native="choose(0)">
            <span class="grid-center">清空</span>
          </grid-item>
          <grid-item @click.native="choose(10)">
            <span class="grid-center">确认</span>
          </grid-item>
        </grid>
      </div>
      <div @click="showScrollBox=false">
        <span class="vux-close"></span>
      </div>
    </x-dialog>
    <confirm v-model="confirmType"
             :title="confirmMsg"
             @on-cancel="onCancel"
             @on-confirm="onConfirm"
             @on-show="onShow"
             @on-hide="onHide">
      <p style="text-align:center;">确定吗</p>
    </confirm>
  </div>
</template>

<script>
  import { XHeader, Group, Flexbox, FlexboxItem, XButton, XDialog, Grid, GridItem, Confirm } from 'vux'

  export default {
    name: 'Game',
    components: {
      XHeader,
      Group,
      Flexbox,
      FlexboxItem,
      XButton,
      XDialog,
      Grid,
      GridItem,
      Confirm
    },
    data () {
      return {
        showScrollBox: false,
        confirmType: false,
        confirmBtn: 0,
        confirmMsg: '检查',
        data: [],
        test: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
    methods: {
      /**
       * 检查
       */
      check () {
        var self = this
        self.confirmType = true
        self.confirmBtn = 0
        self.confirmMsg = '检查'
      },
      /**
       * 重置
       */
      reset () {
        var self = this
        self.confirmType = true
        self.confirmBtn = 1
        self.confirmMsg = '重置'
      },
      /**
       * 清理
       */
      clear () {
        var self = this
        self.confirmType = true
        self.confirmBtn = 2
        self.confirmMsg = '清理'
      },
      /**
       * 重建
       */
      rebuild () {
        var self = this
        self.confirmType = true
        self.confirmBtn = 3
        self.confirmMsg = '重建'
      },
      /**
       * 选择数值
       */
      choose (i) {
        var self = this
        console.log(i)
        self.showScrollBox = false
      },
      onCancel () {

      },
      onConfirm () {

      },
      onShow () {

      },
      onHide () {

      },
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
    line-height: 35px;
    box-sizing: border-box;
  }
  .p10{
    padding: 10px;
  }
  .dialog-title {
    line-height: 30px;
    font-size: 20px;
    color: #666;
    padding-top: 20px;
  }
  .grid-center {
    display: block;
    text-align: center;
    font-size: 20px;
    color: #666;
  }
</style>
