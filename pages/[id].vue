<template>
     <div class="w-dyn-empty" v-if="productsLoading">
        <div>Loading...</div>
      </div>
    <div v-if="productDetails">
        <div class="product_section">
            <img :src="productDetails.images[0]" :alt="productDetails.title" id="product_details_photo"/>
    <div class="product_content">
      <h1 class="product_title">{{ productDetails.title }}</h1>
      <div class="product_price">{{ formatCurrency(productDetails.price) }}</div>
      <p class="product_description">{{ productDetails.description }}</p>
      <div>
        <form data-node-type="commerce-add-to-cart-form" class="w-commerce-commerceaddtocartform">
          <label for="quantity-54ad9a0e0a51a3aa72ae06e76b969221">Quantity</label>
          <input v-model="count" type="number" pattern="^[0-9]+$" inputmode="numeric" id="quantity-54ad9a0e0a51a3aa72ae06e76b969221" name="commerce-add-to-cart-quantity-input" min="1" class="w-commerce-commerceaddtocartquantityinput" >
          <button aria-busy="false" class="w-commerce-commerceaddtocartbutton button" @click="cartAction" :disabled="cartBtnText === 'Added to cart'">
  {{ cartBtnText }}
</button>

        </form>
        <div style="display:none" class="w-commerce-commerceaddtocartoutofstock" tabindex="0">
          <div>This product is out of stock.</div>
        </div>
        <div data-node-type="commerce-add-to-cart-error" style="display:none" class="w-commerce-commerceaddtocarterror">
          <div data-node-type="commerce-add-to-cart-error" data-w-add-to-cart-quantity-error="Product is not available in this quantity." data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart." data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription." data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item." data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site." data-w-add-to-cart-select-all-options-error="Please select an option in each set.">Product is not available in this quantity.</div>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script setup lang="ts">
  const form = reactive({
    countItem: 1
  });

  const { id } = useRoute().params as { id: string };
  const productStore = useProductsStore();
  const cart = useCartStore();

  const product = ref();
  const { productDetails, productsLoading } = storeToRefs(productStore);
  const { count, cartBtnText } = storeToRefs(cart);

  const cartAction = (event: Event) => {
    event.preventDefault();
    cart.addToCart(product.value, count.value);
  };

  watch(count, (newCount) => {
    cart.updateCount(newCount);
  });

  definePageMeta({
    layout: 'app',
  });

  watch(
  () => productDetails.value,
  (newProductDetails) => {
    if (newProductDetails?.title) {
      useHead({
        title: `MDLR - ${newProductDetails.title}`,
      });
    }
  }
);

  onMounted(() => {
    productStore.fetchProductDetails(id).then(() => {
      product.value = productDetails.value;
    });
    form.countItem = count.value ?? 1;
  })
</script>

<style scoped>


</style>