import axios from 'axios'

const BASE_URL = `${process.env.apiBaseUrl}/api`

async function callAPI(endpoint, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

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
        withCredentials: true,
      })
    },
    userInfo() {
      return callAPI('/auth/user-info', {
        withCredentials: true,
      })
    },
  },

  stories: {
    list({ page }) {
      return callAPI(`/stories/?page=${page}`)
    },
  },
}

export default api
