<template>
<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <i v-if="icon !== 'none'" :class="['fa', icon]"></i>
  <slot></slot>
</button>
</template>

<script lang="ts" src="./Button.ts">
</script>
