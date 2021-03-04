<template>
  <article class="story-card">
    <p>
      {{ visibleText }}
    </p>
    <button
      v-show="!isExpanded"
      class="btn-transparent btn-see-more"
      @click="toggleText"
    >
      See more
    </button>
  </article>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    visibleLength: {
      type: Number,
      default: 140,
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  computed: {
    visibleText() {
      return this.isExpanded
        ? this.text
        : `${this.text.substring(0, this.visibleLength)}[...]`
    },
  },
  mounted() {
    if (this.text.length <= this.visibleLength) {
      this.isExpanded = true
    }
  },
  methods: {
    toggleText() {
      this.isExpanded = !this.isExpanded
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/css/vars' as vars;

.story-card {
  background-color: vars.$white;
  border-radius: vars.$border-radius;
  padding: 20px;
  margin-bottom: 20px;

  p {
    margin: 0px;
    color: vars.$black;
    margin-bottom: 20px;
  }
  .btn-see-more {
    width: 100%;
  }
}
</style>
