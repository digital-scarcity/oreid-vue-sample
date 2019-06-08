<template>
  <div>
    <Navigation />
    <el-header><h1>Page 3</h1></el-header>
    <el-header><h1>Sign a Transaction from this page and you'll be re-routed back here</h1></el-header>
    <img src="http://www.shoreaerial.com/wp-content/uploads/2015/02/NYC-3.jpg" width="450"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'route3',
  components: {
    Navigation
  }
}
</script>
