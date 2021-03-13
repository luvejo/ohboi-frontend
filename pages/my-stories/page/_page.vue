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
        :id="story._id"
        :key="story._id"
        class="story-card"
        :text="story.text"
        :author="story.author"
        @delete="onDeleteStory"
      />
      <Pagination
        v-if="pages.total > 0"
        :pages="pages"
        url-prefix="/my-stories"
        @page-search="onPageSearch"
      />
      <p v-if="pages.total === 0" class="empty-state">
        You haven't written any story yet.
      </p>
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
    onDeleteStory({ id }) {
      this.stories = this.stories.filter((story) => {
        return story._id !== id
      })
    },
  },
}
</script>
