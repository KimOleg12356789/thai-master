<script setup lang="ts">

</script>

<template>
  <div class="page">
      <AppHeader />
        <main class="page__main">
            <slot />
        </main>
      <AppFooter />
  </div>
</template>

<style lang="scss">
  @use "@/assets/index";
</style>