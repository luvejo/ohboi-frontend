<template>
  <footer>
    <section class="credits">
      <p class="main-column-limit">
        Original uncomfortable fruit design by
        <a target="__blank" href="http://www.freepik.com">Freepik</a>.
      </p>
      <p class="main-column-limit">
        All the stories are taken from
        <a
          target="__blank"
          href="https://www.reddit.com/r/AskReddit/comments/9j7baf/"
          >Reddit</a
        >.
      </p>
      <p class="main-column-limit">
        Thanks to
        <a target="__blank" href="https://www.youtube.com/user/ContraPoints">
          ContraPoints
        </a>
        for introducing me this concept.
      </p>
    </section>
    <section class="about">
      <p class="main-column-limit">
        This is just a practice project. Don’t take it too seriously. You can
        fork it/play around with it on
        <a target="__blank" href="https://github.com/luvejo/ohboi-frontend">
          GitHub</a
        >.
      </p>
    </section>
    <section class="me">
      <p class="main-column-limit">
        A project by
        <a target="__blank" href="https://github.com/luvejo">@luvejo</a>.
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

    p:not(:last-of-type) {
      margin-bottom: 20px;
    }
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
