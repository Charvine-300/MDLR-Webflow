<template>
     <div role="listitem" class="product w-dyn-item w-col w-col-3" >
          <NuxtLink :to="`/${item.id}`" class="link-block w-inline-block">
            <img alt="" :src="item.images[0]" />
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
  display: -webkit-box;            /* Use flexbox model */
  -webkit-box-orient: vertical;   /* Define box orientation */
  overflow: hidden;                /* Hide overflow */
  -webkit-line-clamp: 3;          /* Number of lines to clamp */
  max-height: 4.5em;              /* Adjust based on line-height (3 lines * line-height) */
}
</style>