<template>
  <div class="bg-gray-300 min-h-screen flex flex-col justify-between">
    <div class="m-10">
      <Button color="blue" icon="fa-globe">Test</Button>
      <Card>
        <div class="posts">
          <p class="text-lg">524</p>
          <p class="text-gray-400 text-sm">Kcal</p>
        </div>
      </Card>
      <Input label="Label" placeholder="placeholder" type="text" class="w-1/2" />
      <div class="w-20 h-20 m-2">
        <ImagePlaceholder />
      </div>
      <Loader/>
    </div>
    <Test />
  </div>
</template>

<script lang="ts" src="./App.ts">
</script>
