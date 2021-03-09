<template>
  <div class="sign-in-form main-column-limit">
    <Header>
      <h1>Sign in</h1>
    </Header>

    <form method="post" class="form-group" @submit.prevent="onSubmit">
      <div v-if="error" class="error">{{ error }}</div>
      <input v-model="username" type="text" placeholder="Email" />
      <input v-model="password" type="text" placeholder="Password" />
      <button class="btn btn-dark-green" type="submit">Sign in</button>
    </form>

    <a href="#" class="suggested-link">Create account</a>

    <div class="separator">
      <div class="line"></div>
      <p>or just</p>
      <div class="line"></div>
    </div>

    <a :href="googleOAuthURL" class="btn btn-dark-green social-button">
      <font-awesome-icon :icon="['fab', 'google']" />
      <p>Sign in with <span>Google</span></p>
    </a>
  </div>
</template>

<script>
import api from '@/api'

const Cookie = process.client ? require('js-cookie') : undefined

export default {
  data() {
    return {
      username: 'jose@undefned.sh',
      password: 'secret',
      error: false,
      redirectURL: '/',
    }
  },
  computed: {
    googleOAuthURL() {
      return api.auth.googleOAuthURL
    },
  },
  mounted() {
    const redirectURL = this.$route.query.redirect
    if (redirectURL) {
      this.redirectURL = redirectURL
    }
  },
  methods: {
    async onSubmit() {
      this.error = ''

      const res = await api.auth.signIn({
        creds: {
          username: this.username,
          password: this.password,
        },
      })

      if ('error' in res) {
        this.error = res.message
      }

      if ('user' in res) {
        Cookie.set('auth', res.user)
        this.$store.commit('setAuth', res.user)
        this.$router.push(this.redirectURL)
      }
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/css/vars' as vars;

.sign-in-form .suggested-link {
  margin-top: 10px;
  text-align: center;
  display: block;
  color: vars.$dark-green;
  text-decoration: underline;
}
.separator {
  display: flex;
  align-items: center;
  margin-top: 40px;

  .line {
    border-bottom: 1px solid vars.$middle-green;
    flex-grow: 1;
  }
  p {
    margin: 0px 10px;
  }
}
.social-button {
  width: 100%;
  margin-top: 20px;
  display: block;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin-left: 10px;
  }
  span {
    font-weight: 700;
  }
}
</style>
