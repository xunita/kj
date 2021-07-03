<template>
  <div>
    <welcome></welcome>
    <div class="raleway-font bg-white py-4 px-2.5 lg:px-4.5">
      <best></best>
    </div>
  </div>
</template>

<script>
import Best from '@/components/body/Best.vue'
import Welcome from '@/components/body/Welcome.vue'
export default {
  components: { Welcome, Best },
}
</script>
