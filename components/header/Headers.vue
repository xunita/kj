<template>
  <headercontent class="sticky top-0"></headercontent>
</template>

<script>
import Headercontent from './Headercontent.vue'
export default {
  components: { Headercontent },
  computed: {
    scroll() {
      return this.$store.state.scroll
    },
    old_scroll() {
      return this.$store.state.old_scroll
    },
  },
}
</script>
