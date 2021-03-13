<template>
  <div class="main-container">
    <Menu />
    <Nuxt class="content-container" />
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

<style lang="scss">
html,
body,
#__nuxt,
#__layout {
  height: 100%;
}
.main-container {
  min-height: 100%;
  position: relative;
}
.content-container {
  padding-bottom: 260px;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
