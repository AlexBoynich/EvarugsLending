import routerPageHook from '@utilities/routerPageHook.js';
import Vue from 'vue';
import { mapState } from 'vuex';
import slider from '@components/ui-components/slider/slider.vue'

export default {
    name: 'index',
    data() {
        return {
            template: '<main></main>',
        };
    },
    computed: {
        ...mapState('mobile', ['isMobile']),
    },
    components: {
        slider
    },
    ...routerPageHook,
    render(createElement) {
        return Vue.compile(this.template).render.call(this, createElement);
    },
};
