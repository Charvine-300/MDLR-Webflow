export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  // Access public and private runtime configuration
  const baseUrl = config.public.baseURL;

  // Example: Provide the config to the app
  return {
    provide: {
    baseUrl
    }
  };
});
