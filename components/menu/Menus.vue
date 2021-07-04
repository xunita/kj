<template>
  <div class="flex relative h-full w-full">
    <div
      id="menu-white"
      class="
        min-w-94
        max-w-94
        drawer
        fixed
        h-full
        w-full-menu
        bg-white
        z-21
        overflow-y-auto
      "
      :class="{ 'is-open': menu, 'is-hid': !menu }"
    >
      <button class="p-1 mt-2 ml-2" @click="close">
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
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <div class="p-5 flex flex-col space-y-6">
        <div class="flex flex-col space-y-2">
          <nuxt-link
            v-for="(content, i) in best"
            :key="i"
            :to="content.url"
            class="
              button
              outline-none
              border-none
              text-lefts
              rounded-none
              bg-red-50
              p-5.5
              w-full
              text-sm
              tracking-widest
              hover:bg-gray-100
            "
            ><span class="whitespace-normal">{{
              content.name
            }}</span></nuxt-link
          >
          <div class="relative inline-block">
            <div class="relative flex items-center w-full h-fit z-10">
              <nuxt-link
                to="#"
                class="
                  button
                  text-lefts
                  outline-none
                  border-none
                  rounded-none
                  bg-red-50
                  py-5.5
                  pl-5.5
                  pr-12
                  w-full
                  text-sm
                  tracking-widest
                  hover:bg-gray-100
                "
                :class="{ 'bg-grays-100': plusing }"
                ><span class="whitespace-normal">COSMETICS SHOP'S LIST</span>
              </nuxt-link>
              <button
                v-show="!shoping"
                class="absolute right-4 z-10 p-1"
                @mouseover="plus = true"
                @mouseleave="plus = false"
                @click="open_mag"
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </button>
              <button
                v-show="shoping"
                class="absolute right-4 z-10 p-1"
                @mouseover="plus = true"
                @mouseleave="plus = false"
                @click="close_mag"
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
                    d="M20 12H4"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="flex flex-col w-full"
              :class="{
                'block appearY': shoping,
                hidden: !shoping,
              }"
            >
              <nuxt-link
                v-for="(content, i) in shops"
                :key="i"
                :to="content.url"
                class="
                  button
                  outline-none
                  border-none
                  text-lefts
                  rounded-none
                  bg-red-50
                  py-4.5
                  pl-10
                  w-full
                  text-sm
                  tracking-widest
                  hover:bg-gray-100
                "
                ><span class="whitespace-normal">{{
                  content.name
                }}</span></nuxt-link
              >
            </div>
          </div>
          <nuxt-link
            v-for="(content, j) in best"
            :key="j + content"
            :to="content.url"
            class="
              button
              outline-none
              border-none
              text-lefts
              rounded-none
              bg-red-50
              p-5.5
              w-full
              text-sm
              tracking-widest
              hover:bg-gray-100
            "
            ><span class="whitespace-normal">{{
              content.name
            }}</span></nuxt-link
          >
          <nuxt-link
            v-for="(content, i) in other"
            :key="i + 'ok'"
            :to="content.url"
            class="
              button
              outline-none
              border-none
              text-lefts
              rounded-none
              bg-red-50
              p-5.5
              w-full
              text-sm
              tracking-widest
              hover:bg-gray-100
            "
            ><span class="whitespace-normal">{{
              content.name
            }}</span></nuxt-link
          >
        </div>
        <div>
          <div class="flex items-center space-x-3 tracking-widest">
            <nuxt-link to="#" class="text-black">
              <span class="raleway-font text-xs text-black"
                >CREATE AN ACCOUNT</span
              >
            </nuxt-link>
            <span>|</span>
            <nuxt-link to="#" class="text-black">
              <span class="raleway-font text-xs text-black">LOG IN</span>
            </nuxt-link>
          </div>
        </div>
        <div>
          <div class="flex flex-col space-y-1 tracking-widest">
            <nuxt-link to="#" class="text-black">
              <span class="raleway-font text-xs text-black">ABOUT</span>
            </nuxt-link>
            <nuxt-link to="#" class="text-black">
              <span class="raleway-font text-xs text-black">FAQ</span>
            </nuxt-link>
          </div>
        </div>
        <div v-for="(lan, i) in langs" :key="i + 'lang'">
          <a class="flex items-center space-x-2 cursor-pointer">
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
    <div
      v-show="!before"
      class="bg-black w-full h-full w-opaque opacity-60"
      @click="close"
    ></div>
  </div>
</template>

<script>
import { lang } from '@/lang/lang'
export default {
  data() {
    return {
      lang,
      current_lang: null,
      bef_timeout: null,
      bef: true,
      plus: false,
      hidd: true,
      mag: false,
      best: [
        { name: 'BEST SELLERS', url: '#' },
        { name: 'NEW ARRIVALS', url: '#' },
        { name: 'NEW TO KYLIE COSMETICS?', url: '#' },
      ],
      shops: [
        { name: 'Douglas Cosmetics', url: '#' },
        { name: 'Nocibé', url: '#' },
        { name: 'Harrods', url: '#' },
        { name: 'Selfridges', url: '#' },
        { name: 'MECCA', url: '#' },
        { name: 'Ulta Beauty', url: '#' },
        { name: 'Nordstrom', url: '#' },
        { name: 'Boots UK', url: '#' },
        { name: 'Gold Apple', url: '#' },
        { name: 'Shoppers Drug Mart', url: '#' },
      ],
      other: [
        { name: 'BUNDLES & SETS', url: '#' },
        { name: 'CLEANSERS & EXFOLIATORS', url: '#' },
        { name: 'MOISTURIZERS', url: '#' },
        { name: 'CLARIFYING', url: '#' },
        { name: 'ROSE BATH', url: '#' },
        { name: 'SERUMS & TREATMENTS', url: '#' },
        { name: 'MASKS', url: '#' },
        { name: 'BATH & BODY', url: '#' },
        { name: 'LIP & EYE CARE', url: '#' },
        { name: 'SUNSCREEN', url: '#' },
        { name: 'ACCESSORIES', url: '#' },
        { name: 'GIFT CARD', url: '#' },
        { name: 'SHOP ALL', url: '#' },
      ],
    }
  },
  computed: {
    langs() {
      return this.current_lang !== null
        ? this.lang.filter((lan) => lan.name !== this.current_lang.name)
        : this.lang
    },
    menu() {
      return this.$store.state.menu === true
    },
    after_menu() {
      return this.$store.state.after_menu === true
    },
    before() {
      return this.bef === true
    },
    plusing() {
      return this.plus === true
    },
    shoping() {
      return this.mag === true
    },
    hid_shop() {
      return this.hidd === true
    },
  },
  watch: {
    menu(nv, ov) {
      if (nv) {
        this.bef = false
      }
    },
  },
  methods: {
    close() {
      if (this.bef_timeout !== null) clearTimeout(this.bef_timeout)
      this.$store.commit('set_menu', false)
      this.bef_timeout = setTimeout(() => {
        this.bef = true
        document.getElementsByTagName('html')[0].style.overflow = 'visible'
      }, 150)
    },
    open_mag() {
      this.mag = true
      this.hidd = false
    },
    close_mag() {
      if (this.bef_timeout !== null) clearTimeout(this.bef_timeout)
      this.mag = false
      this.bef_timeout = setTimeout(() => {
        this.hidd = true
      }, 150)
    },
  },
}
</script>
