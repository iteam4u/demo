<template lang="pug">
api-demo
    vm-checkbox(
        slot="demo"
        :disabled="disabled"
        :marker="marker"
        :iconRight="iconRight"
        v-model="model"
    ) {{ label }}
    api-code(slot="code" :code="htmlCode")

    vm-input(
        label="Label"
        description="Label as default slot"
        v-model="label"
    )

    vm-field
        vm-checkbox(v-model="disabled") Disabled
        vm-checkbox(v-model="iconRight") Icon on the right

    vm-field(
        label="Model value"
        v-model="modelType"
        message="Model value can be a single value or an array"
    )
        .vm-row
            vm-radio(marker="model") as v-model
            vm-radio(marker="value") as value and @input
        .vpad-3h modelValue: {{ model }}
        vm-checkbox(v-model="isArray" @click="toggleArray") Switch modelValue to Array


    vm-field(
        v-model="marker"
        label="Marker"
        message="If the value of model is an array, the current value will be added or deleted to it"
        :disabled="!isArray"
    )
        .vm-row
            vm-radio(marker="value") string
            vm-radio(:marker="0") number
            vm-radio(:marker="testObject") object

    vm-input(
        label="Field name"
        description="Field name in forms"
        v-model="name"
    )

    vm-field(label="Emitted events" v-model="emittedEvents")
        vm-checkbox(marker="click") @click ($event)
        vm-checkbox(marker="input") @input (value, $event)

</template>

<script lang="ts">
import Route from '../core/route';
import { Prop, Component, Watch } from 'vue-property-decorator';
import { attrs } from '../helpers';
import Input from 'vue-mapp/ts/input';

@Component
export default class ButtonRoute extends Route {
    routeTitle: string = 'Checkbox';

    model: any = false;
    marker: any = 'value';
    label: string = 'Checkbox';
    name: string = '';
    modelType: string = 'model';
    isArray: boolean = false;
    disabled: boolean = false;
    iconRight: boolean = false;
    testObject: object = {
        data: 'someValue'
    }
    emittedEvents: string[] = [];

    @Watch('marker')
    changeModelForMarker(newValue) {
        if (this.model instanceof Array && this.model.length) {
            this.model[0] = newValue;
        }
    }

    get htmlCode(): string {

        let _attrs = attrs([
            { label: 'v-model', value: this.modelType === 'model' ? 'modelValue' : false },
            { label: 'name', value: this.name || false },
            { label: 'disabled', value: this.disabled },
            { label: 'iconRight', value: this.iconRight },
            {
                label: (typeof this.marker === 'string' ? '' : ':') + 'marker',
                value: (() => {
                    if (!this.isArray) return false;

                    if (this.marker instanceof Object) {
                        return JSON.stringify(this.marker).replace(/"/g, "'");
                    } else {
                        return String(this.marker);
                    }
                })(),
            },
            { label: ':value', value: this.modelType === 'value' ? 'modelValue' : false },
            {
                label: '@input',
                value: (() => {
                    if (this.modelType === 'value' && !this.isArray) {
                        return 'modelValue = !modelValue';
                    } else if (this.emittedEvents.indexOf('input') >= 0) {
                        return 'someInputAction';
                    }
                    return false;
                })()
            },
            {
                label: '@click',
                value: this.emittedEvents.indexOf('click') >= 0 ? 'someClickAction' : false
            }
        ]);

        return `<vm-checkbox${_attrs}>${this.label}</vm-checkbox>`;
    }

    toggleArray() {
        this.model = this.isArray ? [] : false;
    }

    test() {
        return 'dsdsd';
    }
}

</script>

<style lang="postcss">

</style>
