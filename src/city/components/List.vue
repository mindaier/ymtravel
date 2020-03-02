<template>
  <div class="list-wrapper" ref="wrapper">
    <div>
      <div class="area">
      <p class="title border-topbottom">您的位置</p>
      <ul class="list">
        <li class="list-item">
          <button class="list-button">{{this.currentCity}}</button>
        </li>
      </ul>
      </div>
      <div class="area">
        <p class="title border-topbottom">热门城市</p>
        <ul class="list">
          <li class="list-item" v-for="item of hotCities" :key="item.id">
            <button class="list-button" @click="handleClick(item.name)">{{item.name}}</button>
          </li>
        </ul>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <p class="title border-bottom">{{key}}</p>
        <ul class="list-alpha">
          <li class="list-alpha-item border-bottom"
            v-for="innerItem of item" :key="innerItem.id"
            @click="handleClick(innerItem.name)"
          >
            {{innerItem.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'DetailList',
  props: {
    hotCities: Array,
    cities: Object,
    alphabet: String
  },
  computed: {
    ...mapState({ // 将公用数据的city映射到currentCity
      currentCity: 'city'
    })
  },
  methods: {
    handleClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    alphabet () {
      // console.log(this.alphabet[0])
      if (this.alphabet) {
        const el = this.$refs[this.alphabet][0]
        // console.log(el)
        this.scroll.scrollToElement(el) // 滚动页面要指定页面位置
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-top .01rem solid #ccc
    &:after
      border-bottom .01rem solid #ccc
  .list-wrapper
    position absolute
    top 1.57rem
    left 0
    right 0
    bottom 0
    overflow hidden
  .title
    height .66rem
    line-height .66rem
    text-indent .2rem
    color #666
    background #eee
  .list
    display flex
    flex-direction row
    flex-wrap wrap
    padding .2rem .8rem .2rem .2rem
    .list-item
      box-sizing border-box
      width 33.33%
      padding .1rem
      .list-button
        padding .1rem
        width 100%
        background #fff
        border .01rem solid #ccc
        border-radius .06rem
        color #666
  .list-alpha
    text-indent .2rem
    color #666
    .list-alpha-item
      line-height .8rem

</style>
