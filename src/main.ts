import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "./styles/main.scss";

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: definePreset(Aura, {
            components: {
                menu: {
                    colorScheme: {
                        light: {
                            root: {
                                background: '#180624',
                                color: '#fff',
                                borderRadius: '0 10px 10px 0',
                                borderColor: '#180624',
                            },
                            submenuLabel: {
                                color: '{zinc.500}',
                            },
                            item: {
                                color: '{zinc.100}',
                                focusColor: '#fff',
                                focusBackground: '{violet.950}',
                            }
                        }
                    }
                }
            },
            semantic: {
                primary: {
                    50: '{indigo.50}',
                    100: '{indigo.100}',
                    200: '{indigo.200}',
                    300: '{indigo.300}',
                    400: '{indigo.400}',
                    500: '{indigo.500}',
                    600: '{indigo.600}',
                    700: '{indigo.700}',
                    800: '{indigo.800}',
                    900: '{indigo.900}',
                    950: '{indigo.950}'
                },
                colorScheme: {
                    light: {
                        surface: {
                            0: '#fff',
                            50: '{zinc.50}',
                            100: '{zinc.100}',
                            200: '{zinc.200}',
                            300: '{zinc.300}',
                            400: '{zinc.400}',
                            500: '{zinc.500}',
                            600: '{zinc.600}',
                            700: '{zinc.700}',
                            800: '{zinc.800}',
                            900: '{zinc.900}',
                            950: '{zinc.950}'
                        }
                    },
                },
            },

        }),
        options: {
            darkModeSelector: false,
        },
    },
});
app.mount('#app')
