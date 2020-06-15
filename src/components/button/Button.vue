<template>
  <button
    :class="[
      `bg-${color}-500`, 
      `hover:bg-${color}-700`, 
      'text-white', 
      'py-2', 
      'px-4', 
      'rounded', 
      'inline-flex', 
      'items-center',
      'shadow'
      ]"
  >
    <i v-if="icon !== 'none'" :class="['fa', icon, 'mr-2']"></i>
    <slot></slot>
  </button>
</template>

<script lang="ts" src="./Button.ts">
</script>
