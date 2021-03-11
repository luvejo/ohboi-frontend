<template>
  <div class="main-column-limit">
    <Header>
      <h1>My stories</h1>
    </Header>
    <div class="actions">
      <NuxtLink to="/new-story" class="btn btn-dark-green">Add one</NuxtLink>
    </div>
    <section class="story-list">
      <StoryCard
        v-for="story in stories"
        :key="story._id"
        class="story-card"
        :text="story.text"
      />
      <Pagination
        v-if="pages"
        :pages="pages"
        url-prefix="/my-stories"
        @page-search="onPageSearch"
      />
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header'
import StoryCard from '@/components/StoryCard'
import Pagination from '@/components/Pagination'
import api from '@/api'

export default {
  components: {
    Header,
    StoryCard,
    Pagination,
  },
  middleware: 'authenticated',
  data() {
    return {
      stories: [],
      pages: {},
    }
  },
  async mounted() {
    const { page } = this.$route.params

    this.$store.dispatch('initAuth')
    const userId = this.$store.state.auth.id

    const res = await api.stories.listByUser({ page, userId })

    this.stories = res.data
    this.pages = res.pages
  },
  methods: {
    onPageSearch(page) {
      if (page <= this.pages.total && page >= 1) {
        this.$router.push(`/my-stories/page/${page}`)
      }
    },
  },
}
</script>
