<template>
  <div>
    <detail-header
      :sightName="sightName"
    ></detail-header>
    <detail-banner :bannerImg="bannerImg" :sightName="sightName"></detail-banner>
    <div class="aside"></div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json')
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      console.log(res)
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
      }
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
