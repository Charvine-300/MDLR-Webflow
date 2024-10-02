<template>
    <div data-node-type="commerce-cart-container-wrapper"  class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar cart-wrapper" v-if="visible">
        <div data-node-type="commerce-cart-container"  class="w-commerce-commercecartcontainer cart-container">
          <div class="w-commerce-commercecartheader cart-header">
            <h4 class="w-commerce-commercecartheading">Your Cart</h4>
            <button  class="w-commerce-commercecartcloselink w-inline-block"  aria-label="Close cart"><svg width="16px" height="16px" viewbox="0 0 16 16" @click="closeCart">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g fill-rule="nonzero" fill="#333333">
                    <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
                  </g>
                </g>
              </svg></button>
          </div>
          <div class="w-commerce-commercecartformwrapper">
            <form v-if="cartItems" data-node-type="commerce-cart-form" class="w-commerce-commercecartform">
              <div class="w-commerce-commercecartlist cart-list" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-c451091d-f7cf-9fb7-0eeb-cad6d340c589">
                <div class="w-commerce-commercecartitem cart-item" v-for="item in cartItems" :key="item.id">
                  <img :src="item.images[0]" :alt="item.title" class="w-commerce-commercecartitemimage image">
                  <div class="w-commerce-commercecartiteminfo div-block">
                    <h6 class="w-commerce-commercecartproductname"> {{ item.title }} </h6>
                    <p class="price"> {{ formatCurrency(item.price) }} </p>
                    <div>
                      <span> Quantity: </span>
                      <span> {{ item.count }} </span>
                    </div>
                    <span style="cursor: pointer;" class="remove w-inline-block" @click="cart.removeFromCart(item.id)">Remove</span>
                  </div>
                </div>
              </div>
              <div class="w-commerce-commercecartfooter cart-footer">
                <div aria-atomic="false" class="w-commerce-commercecartlineitem cart-line-item">
                  <div>Subtotal</div>
                  <div class="w-commerce-commercecartordervalue"> {{ formatCurrency(total) }} </div>
                </div>
                <div>
                  <div data-node-type="commerce-cart-quick-checkout-actions">
                    <div style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat" class="w-commerce-commercecartapplepaybutton price" tabindex="0" v-if="cartItems">
                      <button class="w-commerce-commercecartcheckoutbutton btn checkoutbutton" @click="cart.checkout">Continue to Checkout</button>
                    </div>
                  </div>

                </div>
              </div>
            </form>
            <div class="w-commerce-commercecartemptystate" v-if="!cartItems">
              <div>No items found.</div>
            </div>
            <div v-if="cartError" data-node-type="commerce-cart-error" class="w-commerce-commercecarterrorstate error-state">
              <div class="w-cart-error-msg">
                Checkout is disabled on this site.
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
const cart = useCartStore();
const closeCart = cart.toggleCartVisibility;
const { visible, cartItems, cartError, total } = storeToRefs(cart);

onMounted(() => {
  cart.fetchCartItems();
})
</script>

<style scoped>
.btn {
  background-color: transparent;
  width: 100%;
  text-align: center;
}

.price {
  margin: 0;
}
</style>