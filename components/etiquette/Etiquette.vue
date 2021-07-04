<template>
  <div class="text-black">
    <button class="rounded cursor-default bg-white font-12px px-1.5 py-0.5">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'NEW',
    },
  },
}
</script>
