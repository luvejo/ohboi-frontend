<template>
  <div class="main-column-limit">
    <Header>
      <h1>Oh boi <Orange /></h1>
      <p>
        Share those cringe —almost surreal— stories that keep you up at night
      </p>
    </Header>
    <div class="actions">
      <button class="btn btn-dark-green">Add one</button>
      <button class="btn btn-middle-green">My stories</button>
    </div>
    <section class="story-list">
      <StoryCard
        v-for="story in stories"
        :key="story._id"
        class="story-card"
        :text="story.text"
      />

      <nav class="pagination-controls">
        <p class="current-page-label">
          Page
          <input v-model="pages.current" type="text" class="page" /> of
          <span>{{ pages.total }}</span>
        </p>
        <div class="nav-actions">
          <a :href="last_page_link" class="btn btn-middle-green btn-prev">
            <font-awesome-icon icon="angle-left" />
          </a>

          <a :href="next_page_link" class="btn btn-dark-green btn-next">
            <font-awesome-icon icon="angle-right" />
          </a>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header'
import StoryCard from '@/components/StoryCard'
import Orange from '@/components/Orange'
import api from '@/api'

export default {
  components: {
    Header,
    StoryCard,
    Orange,
  },
  async asyncData({ params }) {
    const { page } = params
    const res = await api.stories.list({ page })
    return {
      stories: res.data,
      pages: res.pages,
    }
  },
  computed: {
    google_oauth() {
      return api.auth.googleOAuthURL
    },
    last_page_link() {
      return this.pages.last ? `/page/${this.pages.last}` : null
    },
    next_page_link() {
      return this.pages.next ? `/page/${this.pages.next}` : null
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/css/vars' as vars;

.actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-direction: row-reverse;
}
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
