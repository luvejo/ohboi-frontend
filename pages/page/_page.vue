<template>
  <div class="main-column-limit">
    <Header />
    <div class="actions">
      <NuxtLink to="/new-story" class="btn btn-dark-green">Add one</NuxtLink>
      <button class="btn btn-middle-green">My stories</button>
    </div>
    <section class="story-list">
      <StoryCard
        v-for="story in stories"
        :key="story._id"
        class="story-card"
        :text="story.text"
      />
      <Pagination :pages="pages" @page-search="onPageSearch" />
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
  async asyncData({ params }) {
    const { page } = params
    const res = await api.stories.list({ page })

    return {
      stories: res.data,
      pages: res.pages,
    }
  },
  methods: {
    onPageSearch(page) {
      if (page <= this.pages.total && page >= 1) {
        const matchedPath = this.$route.matched[0].path
        this.$router.push(matchedPath.replace(':page?', page))
      }
    },
  },
}
</script>
