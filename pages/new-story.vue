<template>
  <div class="main-column-limit">
    <Header />

    <form class="form-group" method="post" @submit.prevent="onSubmit">
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="success" class="success">{{ success }}</div>
      <textarea v-model="text" placeholder="So... What happened?"></textarea>
      <button type="submit" class="btn btn-dark-green">Publish</button>
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
      text: '',
      error: '',
      success: '',
    }
  },
  mounted() {
    this.loadTextBackup()
  },
  methods: {
    async onSubmit() {
      this.error = ''
      this.success = ''

      const res = await api.stories.create({
        story: { text: this.text },
      })

      if (res === 'Unauthorized') {
        this.backupText()
        return this.$router.push(`/sign-in?redirect=${this.$route.path}`)
      }

      if ('error' in res) {
        this.error = res.message
      }

      if ('data' in res) {
        this.text = ''
        this.success = res.message
        this.cleanTextBackup()
      }
    },
    backupText() {
      sessionStorage.setItem('text', this.text || '')
    },
    loadTextBackup() {
      const text = sessionStorage.getItem('text')
      this.text = text || ''
    },
    cleanTextBackup() {
      sessionStorage.removeItem('text')
    },
  },
}
</script>
