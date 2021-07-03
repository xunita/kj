<template>
  <div class="z-10 w-full py-4 px-4.5 lg:px-8 bg-white">
    <p
      class="
        lg:absolute
        relative
        flex
        justify-center
        pointer-events-none
        block
        w-full
        lg:-ml-8.5
      "
    >
      <nuxt-link
        to="/"
        class="
          text-xl
          pointer-events-auto
          lg:text-current
          text-rose text-center
          raleway-font
          whitespace-nowrap
        "
      >
        <span class="font-black">KYLIE COSMETICS</span>
        <span>SHOPS</span>
      </nuxt-link>
      <!-- <span class="text-sm font-semibold w-max mx-auto"
            >by Kylie Jenner</span
          > -->
    </p>
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-5">
        <a class="cursor-pointer p-0.5" @click="open_menu">
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
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </a>
        <a class="cursor-pointer p-0.5" @click="open_search">
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
        </a>
      </div>
      <div>
        <div class="flex items-center space-x-10">
          <div
            class="sm:block hidden relative"
            @mouseover="langing = true"
            @mouseleave="langing = false"
          >
            <a
              v-if="current_lang !== null"
              class="flex items-center space-x-2 cursor-pointer"
            >
              <figure class="image is-24x24">
                <img class="is-rounded is-24x24" :src="current_lang.image" />
              </figure>
              <span class="raleway-font text-xs text-black self-center">{{
                current_lang.name
              }}</span>
            </a>
            <div class="absolute -left-8 z-10">
              <div
                v-show="hov_lang"
                class="
                  shadow-lg
                  py-5
                  whitespace-nowrap
                  flex flex-col
                  text-black
                  space-y-7
                  mt-2
                  px-8
                  bg-white
                "
              >
                <div v-for="(lan, i) in langs" :key="i">
                  <a
                    v-if="
                      current_lang !== null && lan.name !== current_lang.name
                    "
                    class="flex items-center space-x-2 cursor-pointer"
                    @click="set_lang(lan)"
                  >
                    <figure class="image is-24x24">
                      <img class="is-rounded is-24x24" :src="lan.image" />
                    </figure>
                    <span class="raleway-font text-xs text-black self-center">{{
                      lan.name
                    }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-6">
            <div
              class="relative"
              @mouseover="accounting = true"
              @mouseleave="accounting = false"
            >
              <a class="cursor-pointer">
                <span
                  class="
                    raleway-font
                    sm:block
                    hidden
                    font-12px
                    self-center
                    text-black
                  "
                  >MY ACCOUNT</span
                >
                <svg
                  class="w-6 h-6 sm:hidden block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </a>
              <div class="absolute sm:-left-20 -left-30 z-10">
                <div
                  v-show="hov_acc"
                  class="
                    shadow-lg
                    py-5
                    whitespace-nowrap
                    flex flex-col
                    text-black
                    space-y-7
                    mt-2
                    px-5.5
                    bg-white
                  "
                >
                  <div class="flex items-center space-x-3">
                    <nuxt-link to="#" class="text-black">
                      <span class="raleway-font text-xs text-black"
                        >CREATE AN ACCOUNT</span
                      >
                    </nuxt-link>
                    <span>|</span>
                    <nuxt-link to="#" class="text-black">
                      <span class="raleway-font text-xs text-black"
                        >LOG IN</span
                      >
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative">
              <a class="cursor-pointer">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </a>
              <span class="count">0</span>
            </div>
            <div class="relative">
              <a class="cursor-pointer">
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
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
              </a>
              <span class="count">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { lang } from '@/lang/lang'
export default {
  data() {
    return {
      langing: false,
      accounting: false,
      current_lang: null,
      lang,
    }
  },
  computed: {
    hov_lang() {
      return this.langing === true
    },
    langs() {
      return this.current_lang !== null
        ? this.lang.filter((lan) => lan.name !== this.current_lang.name)
        : this.lang
    },
    hov_acc() {
      return this.accounting === true
    },
  },
  created() {
    this.current_lang = this.lang[0]
  },
  methods: {
    set_lang(val) {
      this.current_lang = val
      this.langing = false
    },
    open_menu() {
      this.$store.commit('set_menu', true)
      this.$store.commit('set_after_menu', false)
      document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    },
    open_search() {
      this.$store.commit('set_search', true)
      this.$store.commit('set_after_search', false)
      document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    },
  },
}
</script>
