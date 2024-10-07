<template>
     <div role="listitem" class="product w-dyn-item w-col w-col-3" >
          <NuxtLink :to="`/${item.id}`" class="link-block w-inline-block">
            <img alt="" :src="typeof item.images[0] === 'string' && !item.images[0].startsWith('[') ? item.images[0] : 'assets/images/fallback-img.jpg'" />
            <div class="productinfo">
              <div class="productinfo_title line-clamp"> {{ item.title }} </div>
              <div class="productinfo_price">
                <div class="pricenow">{{ formatCurrency(item.price) }}</div>
                <div class="pricewas">{{ moment(item.creationAt).format('MMM DD, YYYY') }}</div>
              </div>
            </div>
          </NuxtLink>
        </div>
</template>

<script setup lang="ts">
import moment from 'moment';
import type { PropType } from 'vue';

defineProps({
    item: {
        type: Object as PropType<ProductsInterface>,
        required: true
    }
})
</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  max-height: 4.5em;
}
</style>