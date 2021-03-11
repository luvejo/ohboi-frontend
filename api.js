import axios from 'axios'

const BASE_URL = `${process.env.apiBaseUrl}/api`

async function callAPI(endpoint, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
  options.withCredentials = true

  const url = BASE_URL + endpoint
  return await axios({ url, ...options })
    .then((res) => res.data)
    .catch((err) => err.response.data)
}

const api = {
  auth: {
    googleOAuthURL: `${BASE_URL}/auth/google-oauth`,

    signIn({ creds }) {
      return callAPI('/auth/sign-in', {
        method: 'POST',
        data: creds,
      })
    },
    logout() {
      callAPI('/auth/logout')
    },
    signUp({ data }) {
      return callAPI('/auth/sign-up', {
        method: 'POST',
        data,
      })
    },
    userInfo() {
      return callAPI('/auth/user-info')
    },
  },

  stories: {
    listByUser({ page, userId }) {
      return callAPI(`/users/${userId}/stories/?page=${page}`)
    },

    list({ page }) {
      return callAPI(`/stories/?page=${page}`)
    },

    create({ story }) {
      return callAPI(`/stories/`, {
        method: 'POST',
        data: story,
      })
    },
  },
}

export default api
