export const state = () => ({
  list: null,
})

export const mutations = {
  setList(state, val) {
    state.list = val
  },
}

export const actions = {
  async loadList({ commit }) {
    const list =  new Promise((resolve) => {
      const resolveList = [
        { id: 0, title: 'el 1' },
        { id: 1, title: 'el 2' },
      ]

      resolve(resolveList)
    })

    await commit('setList', list)
  },
}
