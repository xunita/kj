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
          tracking-widest
        "
      >
        # THE LATEST
      </nuxt-link>
      <h4 class="text-center text-black">
        Shop Kylie cosmetic's newest and best-selling products!
      </h4>
    </div>
    <div class="flex d-half pt-8 pb-10">
      <homeprod
        v-for="(prod, i) in prods"
        :key="i + 'prods'"
        :prod="prod"
        class="column tracking-widest is-halfs md:p-0 sm:p-4.5 p-2.1 text-black"
      ></homeprod>
    </div>
  </div>
</template>

<script>
import Homeprod from '../products/Homeprod.vue'
export default {
  components: {
    Homeprod,
  },
  data() {
    return {
      hover1: false,
      hover2: false,
      prods: [
        {
          url: '#',
          price: 36,
          devise: '$',
          discount: 0.25,
          rate: 4,
          raters: 450,
          name: 'COCONUT BODY WASH',
          pic1: '/assets/images/banner/KS_CBW_21_Open_WS_01_360x.jpg',
          pic2: '/assets/images/banner/KS_CBW_21_Model_WS_10_360x.jpg',
        },
        {
          url: '#',
          price: 29,
          devise: '$',
          discount: 0.2,
          rate: 3.5,
          raters: 588,
          name: 'ROSE BODY LOTION',
          pic1: '/assets/images/banner/KS_RBL_21_Closed_WS_01_360x.jpg',
          pic2: '/assets/images/banner/KS_RBL_21_Model_WS_11_360x.jpg',
        },
        {
          url: '#',
          price: 66,
          devise: '$',
          discount: 0.3,
          rate: 5,
          raters: 803,
          name: 'COCONUT BODY WASH + ROSE BODY LOTION',
          pic1: '/assets/images/banner/KS_CBW_RBL_21_Closed_WS_01_360x.jpg',
          pic2: '/assets/images/banner/KS_MULTI_21_RoseBodLotionCocoBodWash_WS_01_360x.jpg',
        },
      ],
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
<style scoped>
@media screen and (max-width: 767px) {
  .d-half {
    flex-wrap: wrap !important;
  }
  .is-halfs {
    flex: none;
    width: 50%;
  }
}
@media screen and (max-width: 400px) {
  .is-halfs {
    width: 100%;
  }
}
</style>
