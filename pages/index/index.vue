<template>
  <div>
    <welcome></welcome>
    <div class="raleway-font bg-white flex flex-col">
      <best class="px-2.5 lg:px-4.5"></best>
      <latest></latest>
    </div>
  </div>
</template>

<script>
import Best from '@/components/body/Best.vue'
import Welcome from '@/components/body/Welcome.vue'
import Latest from '~/components/body/Latest.vue'
export default {
  components: { Welcome, Best, Latest },
}
</script>
