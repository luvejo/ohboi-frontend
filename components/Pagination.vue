<template>
  <nav class="pagination-controls">
    <p class="current-page-label">
      Page
      <input
        v-model="current"
        type="text"
        class="page"
        @keypress.enter="onSubmit"
      />
      of
      <span>{{ pages.total }}</span>
    </p>
    <div class="nav-actions">
      <NuxtLink
        :to="last_page_link"
        :class="[
          'btn',
          last_page_link ? 'btn-dark-green' : 'btn-middle-green',
          'btn-prev',
        ]"
        disabled
      >
        <font-awesome-icon icon="angle-left" />
      </NuxtLink>

      <NuxtLink
        :to="next_page_link"
        :class="[
          'btn',
          next_page_link ? 'btn-dark-green' : 'btn-middle-green',
          'btn-next',
        ]"
      >
        <font-awesome-icon icon="angle-right" />
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    pages: {
      type: Object,
      required: true,
    },
    urlPrefix: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      current: null,
    }
  },
  computed: {
    last_page_link() {
      const link = `${this.urlPrefix}/page/${this.pages.last}`
      return this.pages.last ? link : ''
    },
    next_page_link() {
      const link = `${this.urlPrefix}/page/${this.pages.next}`
      return this.pages.next ? link : ''
    },
  },
  watch: {
    pages() {
      this.current = this.pages.current
    },
  },
  created() {
    this.current = this.pages.current
  },
  methods: {
    onSubmit() {
      this.$emit('page-search', this.current)
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/css/vars' as vars;

.story-list {
  .pagination-controls {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pagination-controls .page {
    border: none;
    background-color: vars.$white;
    padding: 10px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid vars.$dark-green;
    color: vars.$black;
    text-align: center;
  }
  p {
    display: inline-block;
  }
  .nav-actions {
    display: flex;
  }
  .nav-actions button {
    width: 34px;
    height: 34px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-prev {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .btn-next {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
}
.current-page-label {
  margin-right: 20px;

  span {
    font-weight: 700;
  }
}
</style>
