import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

@Component
export default class RoutePage extends Vue {

    routeTitle: string = 'ff'
    routeSubtitle: string = ''

    @Mutation setTitle

    beforeRouteEnter(to, from, next) {

        next((vm: RoutePage) => {
            vm.setTitle([vm.routeTitle, vm.routeSubtitle])
        });
    }
}
