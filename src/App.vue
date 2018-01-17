<template lang="pug">
vm-layout(
    ref="layout"
    :title="title"
    :subtitle="subtitle"
)
    router-view

    div.sidebar(slot="sidebar")
        div.sidebar-header.vm-layout__header-top Vue Material Application
        div.sidebar-content
            vm-list.sidebar-nav(slot="sidebar" nav dense)
                vm-list-item(
                    v-for="route in menu"
                    :key="route.title"
                    @click="$router.push(route.route)"
                ) {{ route.title }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'

@Component({
    name: 'app'
})
export default class App extends Vue {
    show: boolean = false;

    @State('title') title;
    @State subtitle;
    @State menu;
}
</script>

<style lang="postcss">
.sidebar {
    min-height: 100%;
    box: vertical;

    &-content {
        box: vertical;
        overflow: auto;
        flex-grow: 1;
    }

    &-header {
        box: vertical center middle;
        cursor: pointer;
        padding: 0 !important;
        font-size: $text-large-2;
        font-weight: 300;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        text-align: center;
        flex-shrink: 0;
    }

    &-nav {
        margin: 8px 0;
        flex-shrink: 0;
    }
}
</style>
