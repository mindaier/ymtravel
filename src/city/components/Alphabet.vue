<template>
  <div class="list">
    <ul class="items">
      <li class="item"
        v-for="item of list"
        :key='item'
        @click="handleClick"
        @touchstart="handleTouchStart"
        @touchmove.prevent="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="item"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () { // 数据更新，页面完成数据渲染后执行
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    list () {
      const list = []
      for (let item in this.cities) {
        list.push(item)
      }
      return list
    }
  },
  methods: {
    handleClick (e) {
      // console.log(e.target.innerText)
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      // console.log(this.$refs['A'][0])
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // A字母距顶部高度
          // const startY = this.$refs['A'][0].offsetTop
          const moveY = e.touches[0].clientY - 79 - this.startY
          // console.log(moveY)
          const currentIdx = Math.floor(moveY / 21)
          // console.log(this.list[currentIdx])
          // console.log(currentIdx)
          if (currentIdx >= 0 && currentIdx < this.list.length) {
            this.$emit('change', this.list[currentIdx])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .items
    position absolute
    top 1.57rem
    right 0
    bottom 0
    display flex
    flex-direction column
    justify-content center
    .item
      width .42rem
      height .42rem
      line-height .4rem
      text-align center
      margin-right .1rem
      color #777
      font-size .30rem

</style>
