<template>
  <div>
    <Navigation />
    <Primary />
  </div>
</template>

<script>
// @ is an alias to /src
import Primary from '@/components/Primary.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'home',
  components: {
    Primary,
    Navigation
  }
}
</script>
