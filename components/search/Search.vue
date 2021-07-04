<template>
  <div
    id="search-white"
    class="drawer fixed h-full w-full bg-white"
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
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </button>
    <div class="flex justify-center w-full h-full py-3 mb-5">
      <div
        class="lg:w-2/4 sm:w-3/4 w-full sm:px-0 px-4.5 mb-12 overflow-y-auto"
      >
        <div class="flex w-full border border-gray-300 rounded">
          <input
            ref="search"
            v-model="query"
            type="text"
            class="w-full pl-3 py-1.5 rounded-tl rounded-bl"
            @focus="focus = true"
            @blur="focus = false"
          />
          <button
            v-show="query !== ''"
            class="px-2 hover:text-gray-500"
            @click="query = ''"
          >
            <svg
              class="w-5 h-5"
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
          <button class="px-2 hover:text-red-300">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div
          v-show="focused || query !== ''"
          class="
            w-full
            h-200
            max-h-128
            border border-gray-300
            mt-0.5
            rounded-bl rounded
            overflow-y-auto
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      focus: true,
    }
  },
  computed: {
    search() {
      return this.$store.state.search === true
    },
    focused() {
      return this.focus === true
    },
  },
  watch: {
    search(nv) {
      if (nv) this.focusInput()
    },
    query(nv) {
      if (nv !== '') this.query = nv.toUpperCase()
    },
  },
  mounted() {
    this.focusInput()
  },
  methods: {
    focusInput() {
      this.$refs.search.focus()
    },
    close() {
      this.$store.commit('set_search', false)
      this.focus = false
      document.getElementsByTagName('html')[0].style.overflow = 'visible'
    },
  },
}
</script>
