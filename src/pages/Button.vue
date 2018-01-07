<template lang="pug">
api-demo
    vm-button(
        slot="demo"
        :type="type"
        :primary="primary"
        :raised="raised"
        :disabled="disabled"
    ) {{ label }}
    api-code(slot="code" :code="code")
    div.sdsd ghbdtn
</template>

<script lang="ts">
import Route from '../core/route';
import { Prop, Component } from 'vue-property-decorator';

@Component
export default class ButtonRoute extends Route {
    title: string = 'Button';
    label: string = 'Button';
    type: string;
    primary: boolean = false;
    raised: boolean = false;
    disabled: boolean = false;

    get code(): string {
        return `<vm-button>Button</vm-button>`;
    }
}

</script>

<style lang="postcss">

</style>
