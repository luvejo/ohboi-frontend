<template>
  <footer>
    <section class="credits">
      <p class="main-column-limit">
        Original uncomfortable fruit design by
        <a href="http://www.freepik.com">Freepik</a>.
      </p>
    </section>
    <section class="about">
      <p class="main-column-limit">
        This is just a practice project. Don’t take it too seriously. You can
        fork it/play around with it on
        <a href="https://github.com/luvejo/ohboi-frontend">GitHub</a>.
      </p>
    </section>
    <section class="me">
      <p class="main-column-limit">
        A project by
        <a href="https://github.com/luvejo">@luvejo</a>.
      </p>
    </section>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
@use '@/assets/css/vars' as vars;

footer {
  text-align: center;
  margin-top: 60px;

  section {
    padding: 20px;

    a {
      font-weight: 700;
    }
  }
  .credits {
    background-color: vars.$middle-green;
  }
  .about {
    background-color: vars.$dark-green;

    p,
    a {
      color: vars.$white;
    }
  }
  .me {
    padding: 10px;
    background-color: vars.$black;
  }
}
</style>
