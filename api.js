import axios from 'axios'

const BASE_URL = `${process.env.apiBaseUrl}/api`

async function callAPI(endpoint, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const url = BASE_URL + endpoint
  const response = await axios({ url, ...options })

  return response.data
}

const api = {
  auth: {
    googleOAuthURL: `${BASE_URL}/auth/google-oauth`,

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
