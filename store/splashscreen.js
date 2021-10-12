export const state = () => ({
  isOnce: false
})

export const mutations = {
  SET_ONCE(state, pisan) {
    state.isOnce = pisan
  }
}
