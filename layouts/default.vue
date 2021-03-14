<template>
  <div class="main-container">
    <Menu />
    <Nuxt
      class="content-container"
      :style="{ paddingBottom: contentPaddingBottom }"
    />
    <Footer ref="footer" />
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
  data() {
    return {
      contentPaddingBottom: null,
    }
  },
  mounted() {
    this.$store.dispatch('initAuth')
    this.adjustContentPadding()
  },
  methods: {
    adjustContentPadding() {
      const footerHeight = this.$refs.footer.$el.clientHeight
      const actualPadding = 60
      this.contentPaddingBottom = `${footerHeight + actualPadding}px`
    },
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
  padding-bottom: 370px + 60px;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
/*----------------------------------------------
  MEDIA QUERIES
-----------------------------------------------*/
@media screen and (min-width: 480px) {
  .content-container {
    padding-bottom: 325px + 60px;
  }
}
</style>
