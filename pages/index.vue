<template>
    <div>
        <div class="hero_home">
    <div class="hero_content">
      <h3 id="blotter" class="topheading">Now in Stores</h3>
      <h1 id="blotter" class="largeheading">New SS19 Collection </h1>
      <p class="paragraph cc-large cc-w90">Discover the new Coats, Shirt, Pants, Shorts and Technology <strong>MODULAR</strong> has to offer.</p>
      <a href="#" class="button w-inline-block">
        <div class="button_textlink">See Collection</div>
      </a>
    </div>
    <div class="hero_photo"></div>
  </div>
  <div class="section">
    <div class="aboutus">
      <h1 class="section_title">About MODULAR</h1>
      <p>We are a lifestyle retailer dedicated to inspiring customers through a unique combination of product, creativity and cultural understanding. Founded in 1970 in a small space across the street from the University of Pennsylvania.<br><br>‍<strong>Modular</strong> now operates over 200 stores in the United States, Canada and Europe, offering experiential retail environments and a well-curated mix men&#x27;s product assortments.</p>
    </div>
  </div>
  <div>
    <div class="w-dyn-list">
      <div class="w-dyn-empty" v-if="productsLoading">
        <div>Loading...</div>
      </div>
      <div role="list" class="w-dyn-items w-row">
        <div role="listitem" v-for="item in products" :key="item.id">
          <Card :item="item" />
        </div>
      </div>
      <div class="w-dyn-empty" v-if="!productsLoading && products && products.length < 1">
        <div>No items found.</div>
      </div>
    </div>
  </div>
    </div>
    <Cart />
</template>

<script setup lang="ts">
import { useProductsStore } from '~/stores/product';
import Card from '~/components/ui/Card.vue';
import Cart from '~/components/Cart.vue';


definePageMeta({
    layout: 'app',
});

useHead({
    title: 'MDLR - Shop',
});

const productStore = useProductsStore();
const { products, productsLoading } = storeToRefs(productStore);

onMounted(async () => {
 productStore.fetchProducts();
})

</script>

<style scoped>

</style>