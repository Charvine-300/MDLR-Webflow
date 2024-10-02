interface Cart {
    visible: boolean;
    cartItems: ProductDetailsInterface[] | null;
    cartError: boolean;
    count: number;
    cartBtnText: string;
    total: number;  
}

export const useCartStore = defineStore('Cart', {
    state: (): Cart => ({
        visible: false,
        cartItems: null,
        cartError: false,
        count: 1,
        cartBtnText: "Add to cart",
        total: 0,
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

            this.cartItemsTotal();
        },
        addToCart(item: ProductDetailsInterface, count: number) {
            const items = JSON.parse(sessionStorage.getItem('cart') || '[]');
            item.count = count;

            items.push(item);

            this.cartItems = items;
            sessionStorage.setItem('cart', JSON.stringify(items));

            this.cartBtnText = "Added to cart";
            this.visible = true;

            this.cartItemsTotal();
        },
        removeFromCart(id: number) {
            const items = JSON.parse(sessionStorage.getItem('cart') || '[]');

            const selectedItem = items.indexOf(items.find((item: ProductDetailsInterface) => item.id === id));

            if (selectedItem !== -1) {
                items.splice(selectedItem, 1);
            };

            this.cartItems = items.length > 0 ? items : null;
            sessionStorage.setItem('cart', JSON.stringify(items));
            this.cartItemsTotal();
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
        },
        cartItemsTotal() {
            this.total = 0;
            const items = JSON.parse(sessionStorage.getItem('cart') || '[]');

            for (const item of items) {
                this.total += item.price;
            }
        },
        checkout(e: Event) {
            e.preventDefault();
            this.cartError = true;

            setTimeout(() => {
                this.cartError = !false;
            }, 3000);
        }
    }
})