<template lang="pug">
div.api-code.xs-12
    div.api-code__toolbar
        div.api-demo__title HTML
        div.is-grow
        vm-button(ref="copy-button")
            vm-icon content_copy
    div.api-code__content
        pre(:class="`language-${lang}`")
            code(ref="copy-source" v-html="$_code")

    //- <div
    //-     class="api-code xs-12"
    //-     :class="{ 'is--wrap': wrap }"
    //- >
    //-         <div class="api-code__content">
    //-             <pre :class="'language-' + lang">
    //-                 <code ref="copy-source" v-html="_code"></code>
    //-             </pre>
    //-         </div>
    //-         <vm-divider />
    //-         <div class="api-code__actions pad-h" align="right">
    //-             <vm-button ref="copy-button">Копировать</vm-button>
    //-         </div>
    //- </div>
</template>

<script lang="ts">
import { VueConstructor } from 'vue'
import { Vue, Component, Prop } from 'vue-property-decorator'
import Prism from 'prismjs'
import Clipboard from 'clipboard';

@Component
export default class ApiCode extends Vue {

    @Prop({ default: 'html' })
    lang: string;

    @Prop({ default: '' })
    code: string;

    private get $_code(): string {
        const lang = Prism.languages[this.lang];
        return Prism.highlight(this.code, lang);
    }

    refs: {
        'copy-button': Vue,
        'copy-source': HTMLElement
    }

    mounted() {
        const target: any = this.$refs['copy-button'];

        const clipboard = new Clipboard(target.$el, {
            target: () => this.$refs['copy-source']
        });

        clipboard.on('success', event => {
            event.clearSelection();
            // this.showMessage = true;
            //
            // window.setTimeout(() => {
            //     this.showMessage = false;
            // }, 2000);
        });
    }
}
</script>

<style lang="postcss">

.api-code {
    border-radius: 2px;
    font-weight: 500;
    order: 2;
    box: vertical;

    &__toolbar {
        padding: 16px 16px 16px 24px;
        box: horizontal middle;

        .vm-icon {
            font-size: 22px;
            padding: 4px;
        }
    }

    &__content {
        flex-grow: 1;
        overflow: auto;
    }

    &__actions {
        flex-shrink: 0;
    }

    &.is--wrap {

        pre {
            white-space: pre-wrap;
        }
    }

    pre, code {
        text-shadow: none;
        background: none;
        font-family: Menlo, monospace;
        font-size: 13px;
    }

    pre {
        margin: 0;
        padding: 0 24px;
        overflow: auto;
        font-size: 1em;
        white-space: pre;
    	word-spacing: normal;
    	word-break: normal;
    	word-wrap: normal;
    	line-height: 20px;
    	tab-size: 4;
    	hyphens: none;
        text-align: left;
    }
}

</style>
