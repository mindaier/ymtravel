<template>
  <div class="city" ref="wrapper">
    <div>
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list
        :city="city"
        :hotCities="hotCities"
        :cities="cities"
        :alphabet="alphabet"
      ></city-list>
      <city-alphabet
        :cities="cities"
        @change="changeAlphabet"
      ></city-alphabet>
    </div>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      city: [],
      hotCities: [],
      cities: {},
      alphabet: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.hotCities = data.hotCities
        // console.log(hotCities)
        this.cities = data.cities
      }
    },
    changeAlphabet (letter) {
      this.alphabet = letter
      // console.log(this.alphabet)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
