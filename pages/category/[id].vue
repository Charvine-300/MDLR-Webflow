<template>

    <div>
        <div class="hero_checkout">
    <h1 class="largeheading"> {{ heading }} </h1>
  </div>
  <div class="w-dyn-list">
    <div class="w-dyn-empty" v-if="productsLoading">
        <div>Loading...</div>
      </div>
    <div role="list" class="w-dyn-items w-row">
        <div v-for="item in category" :key="item.id">
          <Card :item="item" />
        </div>
      </div>
      <div class="w-dyn-empty" v-if="!productsLoading && category && category.length < 1">
        <div>No items found.</div>
      </div>
  </div>
    </div>
</template>

<script setup lang="ts">
import Card from '~/components/ui/Card.vue';

  const { id } = useRoute().params as { id: string };
  const heading = ref('');

definePageMeta({
    layout: 'app',
});


const productsStore = useProductsStore();
const { category, productsLoading } = storeToRefs(productsStore);

onMounted(() => {
  switch(true) {
    case id === '1':
      heading.value = 'Clothes'
      break;
    case id === '2':
      heading.value = 'Electronics'
      break;
    case id === '3':
      heading.value = 'Furniture'
      break;
    case id === '4':
      heading.value = 'Shoes'
      break;
    case id === '5':
      heading.value = 'Miscellaneous'
      break;
  }
  productsStore.fetchProductsByCategory(Number(id));
})
</script>

<style scoped>

</style>