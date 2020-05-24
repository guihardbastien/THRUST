
<template>
   <div class="container max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white hover:opacity-75">
      <div class="relative mb-6">
         <img class="w-full" :src="picture"
            alt="Profile picture" />
         <div class="text-center absolute w-full" style="bottom: -30px">
            <div class="mb-10">
               <p class="text-white tracking-wide uppercase text-lg font-bold">{{title}}</p>
               <p class="text-gray-400 text-sm">@{{user}}</p>
            </div>
         </div>
      </div>
      <div class="py-10 px-6 text-center flex flex-row flex-no-wrap justify-around">
          <slot></slot>
      </div>
   </div>
</template>

<script lang="ts" src="./Card.ts">
</script>