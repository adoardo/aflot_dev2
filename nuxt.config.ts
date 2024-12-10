// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "nuxt-telegram-auth",
        "@paranoidphantom/tgauth",
        "@nuxt/ui",
        "@nuxtjs/date-fns"
    ],
    dateFns: {
        defaultLocale: 'ru'
    }
})
