const Cookie = process.client ? require('js-cookie') : undefined

export const state = () => {
  return {
    auth: null,
  }
}

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  },
}

export const actions = {
  initAuth({ commit }) {
    const cookie = Cookie.get('auth')
    let auth = null

    if (cookie) {
      try {
        auth = JSON.parse(cookie)
      } catch (err) {
        // No valid cookie found
      }
    }

    commit('setAuth', auth)
  },
}
