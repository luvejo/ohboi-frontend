<template>
  <header class="main-column-limit main-header">
    <slot></slot>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
@use '@/assets/css/vars' as vars;

.main-header {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;

  h1 {
    margin: 0px;
    font-size: 4rem;

    svg {
      position: relative;
      top: 2px;
    }
  }
  p {
    margin: 0px;
  }
}

/*----------------------------------------------
  MEDIA QUERIES
-----------------------------------------------*/
@media screen and (min-width: 480px) {
  .main-header {
    margin-top: 30px;
  }
}
</style>
