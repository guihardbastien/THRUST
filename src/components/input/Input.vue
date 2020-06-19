<template>
  <div class="mb-4">
    <label v-if="label !== ''" class="block text-gray-700 text-sm font-bold mb-2">{{label}}</label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :type="type"
      :placeholder="placeholder"
      :value="value"
    />
  </div>
</template>


<script lang="ts" src="./Input.ts">
</script>
