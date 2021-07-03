<template>
  <div class="pt-10">
    <div class="flex flex-col space-y-5">
      <nuxt-link
        to="#"
        class="
          w-fit
          mx-auto
          font-black
          text-black text-xl
          border-b-2 border-rose
        "
      >
        # BEST IN SHOPS
      </nuxt-link>
      <h4 class="text-center text-black">
        Shop Kylie's best cosmetics in your favorites shops
      </h4>
    </div>
    <div class="flex sm:flex-row flex-col sm:space-y-0 space-y-5 pt-10">
      <div class="column flex flex-col space-y-4.5 is-half sm:pr-4.5">
        <div class="relative">
          <nuxt-link
            to="#"
            class="absolute top-0 left-0 right-0 bottom-0 z-1"
            :class="{
              'opacity bg-hover-x': h1,
            }"
            @mouseover.native="
              {
                hover1 = true
              }
            "
            @mouseleave.native="
              {
                hover1 = false
              }
            "
          ></nuxt-link>
          <figure class="image">
            <img
              loading="lazy"
              class="object-cover"
              src="/assets/images/banner/KS-1079_CBL_RBL_NA_HP_Content_Square_0521_540x.jpg"
            />
          </figure>
        </div>
        <nuxt-link to="#" class="flex space-x-1.5">
          <span class="text-black font-medium">SHOP NOW</span>
          <span>→</span>
        </nuxt-link>
      </div>
      <div class="column flex flex-col space-y-4.5 is-half sm:pl-4.5">
        <div class="relative">
          <nuxt-link
            to="#"
            class="absolute top-0 left-0 right-0 bottom-0 z-1"
            :class="{
              'opacity bg-hover-x': h2,
            }"
            @mouseover.native="
              {
                hover2 = true
              }
            "
            @mouseleave.native="
              {
                hover2 = false
              }
            "
          ></nuxt-link>
          <figure class="image">
            <img
              loading="lazy"
              class="object-cover"
              src="/assets/images/banner/KS-797_Melting_Makeup_Cleanser_Bundles_NA_HP_Square_0507_1_540x.jpg"
            />
          </figure>
        </div>
        <nuxt-link to="#" class="flex space-x-1.5">
          <span class="text-black font-medium">SHOP NOW</span>
          <span>→</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover1: false,
      hover2: false,
    }
  },
  computed: {
    h1() {
      return this.hover1 === true
    },
    h2() {
      return this.hover2 === true
    },
  },
}
</script>
