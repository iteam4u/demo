import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import menu, { Menu } from './menu';

Vue.use(Vuex);

export interface RootState {
    title: string;
    subtitle: string;
    menu: Menu[];
}

export default new Store<RootState>({
    state: {
        title: '',
        subtitle: '',
        menu
    },
    mutations: {
        setTitle(state, data: [ string, string]) {
            state.title = data[0];
            state.subtitle = data[1];
        }
    }
})
