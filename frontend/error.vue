<template>
  <div class="page">
    <nuxt-link to="/" class="error">
      ooops! let's go home
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.page {
  @include flex-center;

  height: 100vh;
}

.error {
  color: blueviolet;
  cursor: pointer;
  font-size: remify(60);
}
</style>
