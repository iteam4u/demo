<template lang="pug">
api-demo
    vm-button(
        slot="demo"
        :primary="primary"
        :raised="raised"
        :disabled="disabled"
        @click="counter++"
    ) {{ label }}
    api-code(slot="code" :code="htmlCode")

    span(slot="about") Supports default HTML button attibutes

    vm-input(
        label="Label"
        description="Prop as default slot"
        v-model="label"
    )

    vm-field
        vm-checkbox(v-model="primary") Primary color
        vm-checkbox(v-model="raised") Raised
        vm-checkbox(v-model="disabled") Disabled

    vm-field(label="Emitted events" v-model="emittedEvents")
        vm-checkbox(marker="click") @click ($event) | counter: {{ counter }}

</template>

<script lang="ts">
import Route from '../core/route';
import { Prop, Component } from 'vue-property-decorator';
import { attr } from '../helpers';

import Input from 'vue-mapp/ts/input';

@Component
export default class ButtonRoute extends Route {
    routeTitle: string = 'Button';

    label: string = 'Button';
    counter: number = 0;
    primary: boolean = false;
    raised: boolean = false;
    disabled: boolean = false;
    emittedEvents: string[] = ['click'];


    get htmlCode(): string {

        const _attrs = [
            attr({ label: 'primary', value: this.primary }),
            attr({ label: 'raised', value: this.raised }),
            attr({ label: 'disabled', value: this.disabled }),
            attr({
                label: '@click',
                value: this.emittedEvents.indexOf('click') >= 0 ? 'counter++' : false
            }),
        ].filter(i => !!i);

        let attrs: string = _attrs.join('');

        switch(_attrs.length) {
            case 0: break;
            case 1:
                if (attrs.length < 24) {
                    attrs = ' ' + attrs.slice(2);
                    break;
                }
            default: attrs = _attrs.join('') + '\n'; break;
        }

        return `<vm-button${attrs}>${this.label}</vm-button>`;
    }

    test() {
        return 'dsdsd';
    }
}

</script>

<style lang="postcss">

</style>
