// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    compatibilityDate: "2024-08-02",
    runtimeConfig: {
        public: {
            keycloakUrl: "http://localhost:8080/",
            keycloakRealm: "my-store",
            keycloakClientId: "my-store-ui",
        },
    },
});
