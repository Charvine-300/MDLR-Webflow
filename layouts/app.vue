<template>
  <div class="body">
    <Header />
    <div>
        <slot />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/ui/Footer.vue';
import Header from '~/components/ui/Header.vue';
</script>

<style scoped>

</style>