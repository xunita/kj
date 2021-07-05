export const state = () => ({
  scroll: 0,
  old_scroll: 0,
  menu: false,
  search: false,
  after_menu: true,
  after_search: true,
  domloading: true,
  fav: false,
  cart: false,
})

export const mutations = {
  set_domload(state, value) {
    state.domloading = value
  },
  set_scroll(state, value) {
    state.scroll = value
  },
  set_favorite(state, value) {
    state.fav = value
  },
  set_cart(state, value) {
    state.cart = value
  },
  set_menu(state, value) {
    state.menu = value
  },
  set_after_menu(state, value) {
    state.after_menu = value
  },
  set_search(state, value) {
    state.search = value
  },
  set_after_search(state, value) {
    state.after_search = value
  },
  set_old_scroll(state, value) {
    state.old_scroll = value
  },
}
