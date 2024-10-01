interface Cart {
    visible: boolean;
    cartItems: ProductDetailsInterface[] | null;
    cartError: boolean;
    count: number;
    cartBtnText: string;
}

export const useCartStore = defineStore('Cart', {
    state: (): Cart => ({
        visible: false,
        cartItems: null,
        cartError: false,
        count: 1,
        cartBtnText: "Add to cart",
    }),

    actions: {
        toggleCartVisibility() {
            this.visible = !this.visible;
            this.fetchCartItems();
        },
        fetchCartItems() {
            const items = sessionStorage.getItem('cart');

            if (items) {
                this.cartItems = JSON.parse(items);
            }
        },
        addToCart(item: ProductDetailsInterface, count: number) {
            const items = JSON.parse(sessionStorage.getItem('cart') || '[]');
            item.count = count;

            items.push(item);

            this.cartItems = items;
            sessionStorage.setItem('cart', JSON.stringify(items));

            this.cartBtnText = "Added to cart";
        },
        updateCount(count: number) {
            this.count = count;
        },
        checkCartForItem(id: number) {
            this.count = 1;
            this.cartBtnText = "Add to cart";

            const items = JSON.parse(sessionStorage.getItem('cart') || '[]');
            if (items.length > 0) {
                const itemInCart = items.find((item: ProductDetailsInterface) => item.id === id);
                if (itemInCart) {
                    this.cartBtnText = "Added to cart";
                    this.count = itemInCart.count;
                }
            }
        }
    }
})