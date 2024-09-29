import { defineStore } from "pinia";

interface ProductsStore {
    products: ProductsInterface[] | null;
    productsLoading: boolean;
    productDetails: ProductDetailsInterface | null;
    category: ProductsInterface[] | null;
}

export const useProductsStore = defineStore('Product', {
    state: (): ProductsStore => ({
        products: null,
        productsLoading: false,
        productDetails: null,
        category: null,
    }),
    actions: {
        async fetchProducts () {
            if (!this.products) {
            this.productsLoading = true;

            const { $axios, $baseUrl } = useNuxtApp();

            
            try {
                    const { data }= await $axios.get(`${$baseUrl}/products`, {
                        params: {
                            offset: 0,
                            limit: 20
                        }
                    });
    
                    this.products = data;
                } catch (err) {
                    console.error(err);
                } finally {
                    this.productsLoading = false;
                }
            }
        },
        async fetchProductDetails(id: string) {
            this.productsLoading = true;
            this.productDetails = null;

            const { $axios, $baseUrl } = useNuxtApp();

            try {
                const { data }= await $axios.get(`${$baseUrl}/products/${id}`);

                this.productDetails = data;
            } catch (err) {
                console.error(err);
            } finally {
                this.productsLoading = false;
            }
        },
        async fetchProductsByCategory(id: number) {
            this.productsLoading = true;
            this.category = null;

            const { $axios, $baseUrl } = useNuxtApp();

            try {
                const { data }= await $axios.get(`${$baseUrl}/products`, {
                    params: {
                        categoryId: id,
                        offset: 0,
                        limit: 12
                    }
                });

                this.category = data;
            } catch (err) {
                console.error(err);
            } finally {
                this.productsLoading = false;
            }
        }
    }
})