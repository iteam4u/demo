<template lang="pug">
div.api-demo.bg-light
    div.api-demo__left.xs-12.md-7
        div.api-demo__live
            div.api-demo__title Live demo
            slot(name="demo")
        div.api-demo__code
            slot(name="code")
    div.api-demo__params.api-demo__block.md-5
        div.api-demo__title Component Options
        slot
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Hello extends Vue {

}
</script>

<style lang="postcss">

.api-demo {
    size: 100%;
    box: horizontal;
    overflow: auto;

    & > div {
        height: 100%;
    }

    &__live {
        position: relative;
        border: 0 0 1px / solid;
        box: horizontal center middle;
        padding: 24px;
        flex-basis: 50%;

        .api-demo__title {
            position: absolute;
            top: 24px;
            left: 24px;
        }
    }

    &__title {
        font-size: $text-small-2;
        line-height: 1;
        text-transform: uppercase;
        font-weight: 500;
        opacity: .40;
    }

    &__code {
        flex-basis: 50%;
    }

    &__left {
        box: vertical;
    }

    &__params {
        border: 0 0 0 1px / solid;
        padding: 24px 24px;

        .api-demo__title {
            margin-bottom: 24px;
        }
    }
}

</style>
