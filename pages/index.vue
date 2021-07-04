<template>
  <div v-show="loaded">
    <!-- on top of apps (fixed elements) -->
    <!-- menu -->
    <div
      id="menu"
      class="sm:fixed absolute z-50 top-0 left-0 right-0 bottom-0"
      :class="{
        'pointer-events-none': !menu,
      }"
    >
      <menus></menus>
    </div>
    <!-- search -->
    <div
      id="search"
      class="fixed z-50 top-0 left-0 right-0 bottom-0"
      :class="{
        'pointer-events-none': !search,
      }"
    >
      <search></search>
    </div>
    <!-- headers -->
    <div class="z-10">
      <tophead></tophead>
      <saleoff></saleoff>
    </div>
    <headers></headers>
    <!-- child -->
    <div>
      <nuxt-child />
    </div>
    <!-- footer -->
  </div>
</template>

<script>
import Headers from '../components/header/Headers.vue'
import Saleoff from '../components/header/Saleoff.vue'
import Tophead from '../components/header/Tophead.vue'
import Menus from '../components/menu/Menus.vue'
import Search from '~/components/search/Search.vue'
export default {
  components: { Headers, Tophead, Saleoff, Menus, Search },
  computed: {
    loaded() {
      return this.$store.state.domloading === false
    },
    menu() {
      return this.$store.state.menu === true
    },
    search() {
      return this.$store.state.search === true
    },
  },
  beforeMount() {
    window.addEventListener('DOMContentLoaded', this.domload, false)
  },
  beforeDestroy() {
    window.removeEventListener('DOMContentLoaded', this.domload, false)
  },
  mounted() {
    if (document.readyState !== 'loading') {
      this.domload()
    } else {
      window.addEventListener('DOMContentLoaded', this.domload, false)
    }
  },
  methods: {
    domload() {
      this.$store.commit('set_domload', false)
    },
  },
}
</script>
