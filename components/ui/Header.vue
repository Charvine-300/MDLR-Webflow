<template>
        <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
        <a href="index.html" aria-current="page" class="brand w-nav-brand w--current">
      <h1 class="logo">MDLR</h1>
      <h2 class="logo subhead">Online Store</h2>
    </a>
    <nav role="navigation" class="nav-menu w-nav-menu">
      <NuxtLink to="/" aria-current="page" :class="['nav-link w-nav-link', route.path === '/' ? 'w--current' : '']">Home</NuxtLink>
      <NuxtLink to="/category/1" :class="['nav-link w-nav-link', route.path === '/category/1' ? 'w--current' : '']">Clothes</NuxtLink>
      <NuxtLink to="/category/2" :class="['nav-link w-nav-link', route.path === '/category/2' ? 'w--current' : '']">Electronics</NuxtLink>
      <NuxtLink to="/category/3" :class="['nav-link w-nav-link', route.path === '/category/3' ? 'w--current' : '']">Furniture</NuxtLink>
      <NuxtLink to="/category/4" :class="['nav-link w-nav-link', route.path === '/category/4' ? 'w--current' : '']">Shoes</NuxtLink>
      <NuxtLink to="/category/5" :class="['nav-link w-nav-link', route.path === '/category/5' ? 'w--current' : '']">Misc</NuxtLink>
    </nav>
    <div data-node-type="commerce-cart-open-link" class="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart" @click="openCart">
        <img src="/assets/icons/bx-cart.svg" alt="">
        <div class="w-commerce-commercecartopenlinkcount cart-quantity">{{ cartItems?.length || 0 }}</div>
    </div>
    <div class="menu-button w-nav-button" >
      <img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7ca89f9254e93c10c36dd8_bx-menu-alt-right.svg" alt=""></div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const cart = useCartStore();

const { cartItems } = storeToRefs(cart);
const openCart = cart.toggleCartVisibility;
</script>

<style scoped>

</style>