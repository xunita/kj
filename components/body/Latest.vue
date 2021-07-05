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
    <div v-if="products !== null" class="flex d-half pt-8 pb-10">
      <homeprod
        v-for="(prod, i) in products"
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
      products: null,
      err: null,
    }
  },
  async fetch() {
    try {
      const products = await this.$axios.$get('products/all')
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!products.length) this.products = products
    } catch (error) {
      this.err = error
    }
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
