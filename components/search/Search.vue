<template>
  <div
    id="search-white"
    class="drawer fixed h-full w-full bg-white z-50"
    :class="{ 'is-open-y': search, 'is-hid-y': !search }"
  >
    <button class="p-1 mt-2 ml-4" @click="close">
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeout: null,
      bef_timeout: null,
    }
  },
  computed: {
    search() {
      return this.$store.state.search === true
    },
  },
  methods: {
    close() {
      if (this.timeout !== null) clearTimeout(this.timeout)
      if (this.bef_timeout !== null) clearTimeout(this.bef_timeout)
      this.$store.commit('set_search', false)
      this.bef_timeout = setTimeout(() => {
        this.bef = true
        document.getElementsByTagName('html')[0].style.overflow = 'visible'
      }, 150)
      this.timeout = setTimeout(() => {
        this.$store.commit('set_after_search', true)
        document.getElementsByTagName('html')[0].style.overflow = 'visible'
      }, 400)
    },
  },
}
</script>
