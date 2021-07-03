<template>
  <div class="flex relative h-full w-full">
    <div
      id="menu-white raleway-font"
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
      <div class="p-5">
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
                    d="M20 12H4"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="flex flex-col w-full drawer"
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
        </div>
      </div>
    </div>
    <div
      class="bg-black w-full h-full w-opaque opacity-60"
      :class="{
        invisible: !before,
      }"
      @click="close"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeout: null,
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
        { name: 'BEST SELLERS', url: '#' },
        { name: 'NEW ARRIVALS', url: '#' },
        { name: 'NEW TO KYLIE COSMETICS?', url: '#' },
        { name: 'NEW TO KYLIE COSMETICS?', url: '#' },
        { name: 'NEW TO KYLIE COSMETICS?', url: '#' },
        { name: 'NEW TO KYLIE COSMETICS?', url: '#' },
        { name: 'NEW TO KYLIE COSMETICS?', url: '#' },
        { name: 'NEW TO KYLIE COSMETICS?', url: '#' },
        { name: 'NEW TO KYLIE COSMETICS?', url: '#' },
        { name: 'NEW TO KYLIE COSMETICS?', url: '#' },
      ],
    }
  },
  computed: {
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
        this.bef = true
      }
    },
  },
  methods: {
    close() {
      if (this.timeout !== null) clearTimeout(this.timeout)
      if (this.bef_timeout !== null) clearTimeout(this.bef_timeout)
      this.$store.commit('set_menu', false)
      this.bef_timeout = setTimeout(() => {
        this.bef = false
      }, 150)
      this.timeout = setTimeout(() => {
        this.$store.commit('set_after_menu', true)
      }, 400)
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
