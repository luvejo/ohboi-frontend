<template>
  <div class="main-container">
    <Menu />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

export default {
  components: {
    Menu,
    Footer,
  },
  mounted() {
    this.$store.dispatch('initAuth')
  },
}
</script>
