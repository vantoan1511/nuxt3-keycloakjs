export default defineNuxtRouteMiddleware(async () => {
    if (process.client) {
        const { $keycloak } = useNuxtApp();
        if (!$keycloak.authenticated) {
            return $keycloak.login();
        }
    }
});
