export default function ({ store, redirect }) {
  if (!store.state.auth) {
    return redirect('/sign-in')
  }
}
