<template>
  <div class="relative">
    <etiquette
      class="absolute top-2 right-4 z-1"
      @mouseenter.native="hover = true"
      @mouseleave.native="hover = false"
    ></etiquette>
    <button
      v-show="!favorited"
      class="
        absolute
        z-1
        focus:border focus:border-black
        text-gray-500
        hover:text-gray-600
        top-2
        left-4
      "
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      @click="manage_fav"
    >
      <svg
        class="w-7 h-7"
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
    </button>
    <button
      v-show="favorited"
      class="
        absolute
        z-1
        focus:border focus:border-black
        text-gray-500
        hover:text-gray-600
        top-2
        left-4
      "
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      @click="manage_fav"
    >
      <svg
        class="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <nuxt-link v-if="prod !== null" :to="prod.url">
      <figure
        class="image is-square relative"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      >
        <img v-show="hovered" class="opacity-t" :src="prod.pic2" />
        <img v-show="!hovered" class="opacity-t" :src="prod.pic1" />
      </figure>
      <p class="text-sm raleway-font flex justify-center py-3">
        <span class="flex flex-col space-y-3"
          ><span class="text-center">{{ prod.name }}</span>
          <span class="font-semibold flex justify-center space-x-4">
            <span
              v-show="prod.discount !== 0"
              class="line-through text-gray-500"
              >{{ `${prod.devise} ${prod.price}` }}</span
            >
            <span>{{
              `${prod.devise} ${(
                prod.price -
                prod.price * prod.discount
              ).toFixed(2)}`
            }}</span>
          </span>
          <span class="flex items-center space-x-2 justify-center">
            <span class="flex items-center"
              ><svg
                v-for="j in 5"
                :key="j + 'rate'"
                class="w-4 h-4 text-gray-400"
                :class="{ 'text-rose': j <= Math.round(prod.rate) }"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path></svg
            ></span>
            <span>({{ prod.raters }})</span></span
          ></span
        >
      </p>
    </nuxt-link>

    <p
      class="
        flex
        tracking-widest
        h-8
        lg:w-2/4
        md:w-3/4
        sm:w-4/5
        w-full
        mx-auto
        bg-red-50
      "
      @click.stop=""
    >
      <span class="pl-2 flex h-full bg-gray-100s bg-red-50 hover:bg-gray-100">
        <span class="flex flex-col">
          <button class="focus:border focus:border-black" @click="nb++">
            <svg
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            class="focus:border focus:border-black"
            @click=";+nb === 1 ? (nb = 1) : nb--"
          >
            <svg
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </span>
        <input
          v-model="nb"
          min="0"
          type="text"
          class="inline max-w-8 text-center focus:border focus:border-black"
          @blur="nb === '' ? (nb = 1) : (nb = nb)"
        />
      </span>
      <button
        class="
          bg-red-50
          hover:bg-black hover:text-white
          w-full
          h-full
          button
          border-none
          rounded-none
          text-sm
        "
      >
        ADD
      </button>
    </p>
  </div>
</template>

<script>
import { cookies } from '@/cookies/cookies'
import Etiquette from '../etiquette/Etiquette.vue'
export default {
  components: { Etiquette },
  props: {
    prod: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      nb: 1,
      cookies,
      hover: false,
      fav: false,
    }
  },
  computed: {
    hovered() {
      return this.hover === true
    },
    favorited() {
      return this.fav === true
    },
  },
  watch: {
    nb(nv, ov) {
      if (!isNaN(nv) && +nv >= 0) {
        this.nb = +nv !== 0 ? Math.ceil(nv) : ''
      } else this.nb = ov
    },
  },
  mounted() {
    this.check_fav()
  },
  updated() {
    this.check_fav()
  },
  methods: {
    check_fav() {
      let fav = []
      if (this.cookies.checkCookie('fav')) {
        const cookie = this.cookies.getCookie('fav')
        fav = JSON.parse(cookie)
        if (fav.some((el) => el.id === this.prod.id)) {
          this.fav = true
        } else {
          this.fav = false
        }
      }
    },
    manage_fav() {
      let fav = []
      if (this.cookies.checkCookie('fav')) {
        const cookie = this.cookies.getCookie('fav')
        fav = JSON.parse(cookie)
        if (!fav.some((el) => el.id === this.prod.id)) {
          fav.push(this.prod)
          this.cookies.setCookie('fav', fav, 365)
        } else {
          fav = fav.filter((el) => el.id !== this.prod.id)
          this.cookies.setCookie('fav', fav, 365)
        }
      } else {
        fav.push(this.prod)
        this.cookies.setCookie('fav', fav, 365)
      }
      this.$store.commit('set_favorite', true)
    },
  },
}
</script>
