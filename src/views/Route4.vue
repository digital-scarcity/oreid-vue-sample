<template>
  <div>
    <Navigation />
    <el-header><h1>Page 4</h1></el-header>
    <el-header><h1>Sign a Transaction from this page and you'll be re-routed back here</h1></el-header>
    <img src="https://i1.trekearth.com/photos/11359/rgr_0476a.jpg" width="450"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'route4',
  components: {
    Navigation
  }
}
</script>
