<template>
  <div>
    <div
      id="menu"
      class="sm:fixed absolute z-50 top-0 left-0 right-0 bottom-0"
      :class="{
        'invisible pointer-events-none': after_menu,
      }"
    >
      <menus></menus>
    </div>
    <div :class="{ 'sticky top-0 z-10 appearY': scroll < old_scroll }">
      <tophead></tophead>
      <saleoff></saleoff>
      <headers
        :class="{ hidden: scroll >= old_scroll, block: scroll < old_scroll }"
      ></headers>
    </div>
    <headers :class="{ hidden: scroll < old_scroll }"></headers>
    <welcome></welcome>
    <div class="raleway-font bg-white py-4 px-2.5 lg:px-4.5">
      <best></best>
    </div>
  </div>
</template>

<script>
import Best from '../components/body/Best.vue'
import Welcome from '../components/body/Welcome.vue'
import Headers from '../components/header/Headers.vue'
import Saleoff from '../components/header/Saleoff.vue'
import Tophead from '../components/header/Tophead.vue'
import Menus from '../components/menu/Menus.vue'
export default {
  components: { Headers, Welcome, Tophead, Saleoff, Best, Menus },
  computed: {
    scroll() {
      return this.$store.state.scroll
    },
    old_scroll() {
      return this.$store.state.old_scroll
    },
    menu() {
      return this.$store.state.menu === true
    },
    after_menu() {
      return this.$store.state.after_menu === true
    },
  },
  // watch: {
  //   menu(nv, ov) {
  //     if (!nv) {
  //       this.hid_menu()
  //     }
  //   },
  // },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scroll =
        Math.abs(window.scrollY) ||
        Math.abs(window.scrollTop) ||
        Math.abs(document.getElementsByTagName('html')[0].scrollTop)

      this.$store.commit('set_old_scroll', this.scroll)
      this.$store.commit('set_scroll', scroll)
    },
    close() {
      this.$store.commit('set_menu', false)
    },
  },
}
</script>
