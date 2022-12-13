<template>
  <div class="page">
    <h1>Hello, world!</h1>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Hello, world!',
});
</script>

<style lang="scss">
h1 {
  color: $cBaseText;
  font-family: $fFamily;
  font-size: remify(30);
}
</style>
