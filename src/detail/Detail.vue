<template>
  <div>
    <detail-header
      :sightName="sightName"
    ></detail-header>
    <detail-banner
      :bannerImg="bannerImg"
      :sightName="sightName"
      @change="handleChange"
    ></detail-banner>
    <common-gallery :gallaryImgs="gallaryImgs" :showHide="toggle"></common-gallery>
    <detail-list :categoryList="categoryList"></detail-list>
    <div class="aside"></div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import CommonGallery from 'common/Gallery'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner,
    CommonGallery,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
      toggle: false
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json')
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      // console.log(res)
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    },
    handleChange () {
      this.toggle = !this.toggle
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .aside
    height 20rem
</style>
