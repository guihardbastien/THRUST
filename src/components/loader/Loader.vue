
<template>
  <div v-if="currentState === 'loading'" class="spinner"></div>
  <div v-else-if="currentState === 'success'" class="loader-ok flex justify-center items-center">
    <i :class="['fa', 'fa-check']"></i>
  </div>
  <div v-else class="loader-error flex justify-center items-center">
    <i :class="['fa', 'fa-times']"></i>
  </div>
</template>

<script lang="ts" src="./Loader.ts">
</script>

<style lang="css" scoped>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.spinner:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  margin-left: -15px;
  border-radius: 50%;
  border: 1px solid #ccc;
  border-top-color: #07d;
  animation: spinner 0.6s linear infinite;
}

.loader-ok {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  margin-left: -15px;
  border-radius: 50%;
  color: rgb(36, 139, 41);
  border: 1px solid rgb(36, 139, 41);
}

.loader-error {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  margin-left: -15px;
  border-radius: 50%;
  color: rgb(216, 22, 22);
  border: 1px solid rgb(216, 22, 22);
}
</style>