// nuxt.d.ts
import { NuxtAxiosInstance } from '@nuxtjs/axios';

declare module 'nuxt/app' {
  interface NuxtApp {
    $axios: AxiosInstance; // Define the type for $axios
    $baseUrl: string; // You can also define the type for $baseUrl if necessary
  }
}
