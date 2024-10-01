<template>
  <div class="body relative">
    <Cart />
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
import Cart from '~/components/Cart.vue';
</script>

<style scoped>

</style>