<template>
  <div class="sign-in-form main-column-limit">
    <Header>
      <h1>Sign up</h1>
    </Header>

    <form method="post" class="form-group" @submit.prevent="onSubmit">
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="success" class="success">{{ success }}</div>
      <input v-model="email" type="text" placeholder="Email" />
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password1" type="password" placeholder="Password" />
      <input
        v-model="password2"
        type="password"
        placeholder="Repeat password"
      />
      <button class="btn btn-dark-green" type="submit">Sign up</button>
    </form>

    <NuxtLink to="/sign-in" class="suggested-link">Sign in instead</NuxtLink>

    <div class="separator">
      <div class="line"></div>
      <p>or just</p>
      <div class="line"></div>
    </div>

    <a :href="googleOAuthURL" class="btn btn-dark-green social-button">
      <font-awesome-icon :icon="['fab', 'google']" />
      <p>Sign up with <span>Google</span></p>
    </a>
  </div>
</template>

<script>
import api from '@/api'

export default {
  data() {
    return {
      email: 'jose@undefned.sh',
      username: 'jose',
      password1: 'secret',
      password2: 'secret',
      error: '',
      success: '',
    }
  },
  computed: {
    googleOAuthURL() {
      return api.auth.googleOAuthURL
    },
  },
  methods: {
    async onSubmit() {
      this.error = ''
      this.success = ''

      const res = await api.auth.signUp({
        data: {
          email: this.email,
          username: this.username,
          password1: this.password1,
          password2: this.password2,
        },
      })

      if ('error' in res) {
        this.error = res.message
      }

      if ('data' in res) {
        this.email = ''
        this.username = ''
        this.password1 = ''
        this.password2 = ''
        this.success = res.message
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
