import Keycloak from "keycloak-js";

export default defineNuxtPlugin({
    name: "keycloak-init",
    enforce: "pre",
    hooks: {
        
        /**
         * Fix the fragment in url issue
         */
        "app:created"() {
            const router = useRouter();
            router.currentRoute.value.query = {};
        },
    },
    async setup() {
        const config = useRuntimeConfig();
        try {
            const keycloak = new Keycloak({
                url: config.public.keycloakUrl,
                realm: config.public.keycloakRealm,
                clientId: config.public.keycloakClientId,
            });
            await keycloak.init({
                responseMode: "query",
                onLoad: "check-sso",
                silentCheckSsoRedirectUri: useRelativeRoute(
                    "silent-check-sso.html"
                ),
            });
            return {
                provide: {
                    keycloak,
                },
            };
        } catch (e) {
            console.log(e);
            throw createError({});
        }
    },
});
