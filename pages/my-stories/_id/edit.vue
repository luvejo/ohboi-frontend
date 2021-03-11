<template>
  <div class="main-column-limit">
    <Header />

    <form class="form-group" method="post" @submit.prevent="onSubmit">
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="success" class="success">{{ success }}</div>
      <textarea v-model="text" placeholder="So... What happened?"></textarea>
      <button type="submit" class="btn btn-dark-green">Save</button>
    </form>
  </div>
</template>

<script>
import Header from '@/components/Header'
import api from '@/api'

export default {
  components: { Header },
  data() {
    return {
      id: '',
      text: '',
      author: '',
      error: '',
      success: '',
    }
  },
  async created() {
    const storyId = this.$route.params.id
    const { data } = await api.stories.get({ storyId })

    this.id = data._id
    this.text = data.text
    this.author = data.author
  },
  methods: {
    async onSubmit() {
      this.error = ''
      this.success = ''

      const res = await api.stories.update({
        story: {
          id: this.id,
          text: this.text,
        },
      })

      if (res === 'Unauthorized') {
        return this.$router.push(`/sign-in?redirect=${this.$route.path}`)
      }

      if ('error' in res) {
        this.error = res.message
      }

      if ('data' in res) {
        this.success = res.message
      }
    },
  },
}
</script>
