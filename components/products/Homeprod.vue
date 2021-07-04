<template>
  <div>
    <nuxt-link v-if="prod !== null" :to="prod.url">
      <figure
        class="image is-square relative"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      >
        <img v-show="hovered" class="opacity-t" :src="prod.pic2" />
        <img v-show="!hovered" class="opacity-t" :src="prod.pic1" />
        <etiquette class="absolute top-2 right-2"></etiquette>
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
        lg:w-2/3
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
      hover: false,
    }
  },
  computed: {
    hovered() {
      return this.hover === true
    },
  },
  watch: {
    nb(nv, ov) {
      if (!isNaN(nv) && +nv >= 0) {
        this.nb = +nv !== 0 ? Math.ceil(nv) : ''
      } else this.nb = ov
    },
  },
}
</script>
