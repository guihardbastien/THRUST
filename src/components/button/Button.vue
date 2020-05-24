<template>
  <button 
    :class="[
      `bg-${color}-300`, 
      `hover:bg-${color}-400`, 
      'text-gray-800', 
      'font-bold', 
      'py-2', 
      'px-2', 
      'rounded', 
      'inline-flex', 
      'items-center',
      ]"
    >
    <i v-if="icon !== 'none'" :class="['fa', icon, 'mr-2']"></i>
    <slot></slot>
  </button>
</template>

<script lang="ts" src="./Button.ts">
</script>
