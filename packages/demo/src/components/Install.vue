<template>
  <c-box>
    <c-heading as="h3" color="orange.500" class="pacifico" id="install">Install</c-heading>
    <c-box width="100%" :mt="5" v-highlight>
      <pre class="language-shell">
        <code>{{ codeInstall }}</code>
      </pre>
    </c-box>

    <c-heading as="h3" :mt="5"  color="orange.500" class="pacifico" id="usage">Usage</c-heading>
    <c-box width="100%" :mt="5" v-highlight>
      <pre class="language-javascript">
        <code>{{ codeUsageMain }}</code>
      </pre>
    </c-box>
    <c-box width="100%" v-highlight>
      <pre class="language-html">
        <code>{{ codeUsageTag }}</code>
      </pre>
    </c-box>

    <c-heading as="h3" :mt="5"  color="orange.500" class="pacifico" id="open-close-alert">Open/Close Alert</c-heading>
    <c-box width="100%" :mt="5" v-highlight>
      <pre class="language-javascript">
        <code>{{ codeCloseOpen }}</code>
      </pre>
    </c-box>

    <c-heading as="h3" :mt="5"  color="orange.500" class="pacifico" id="object-arguments">Object Arguments</c-heading>
    <c-box width="100%" :mt="5" overflow-x="auto">
      <table width="100%">
        <thead>
          <c-box as="tr" text-align="left" bg="gray.100">
            <c-box as="th" p="4">Property</c-box>
            <c-box as="th" p="4">Data Type</c-box>
            <c-box as="th" p="4">Default Value</c-box>
            <c-box as="th" p="4">Description</c-box>
          </c-box>
        </thead>
        <tbody>
          <tr v-for="arg in argumentsObj" :key="arg.prop">
            <c-box as="td" pl="4" py="2" borderColor="gray.200" border-bottom-width="1px"><c-code variant-color="blue">{{ arg.prop }}</c-code></c-box>
            <c-box as="td" pl="4" py="2" borderColor="gray.200" border-bottom-width="1px"><c-code :variant-color="getVariantByType(arg.type)">{{ arg.type }}</c-code></c-box>
            <c-box as="td" pl="4" py="2" borderColor="gray.200" border-bottom-width="1px">{{ arg.default }}</c-box>
            <c-box as="td" pl="4" py="2" borderColor="gray.200" border-bottom-width="1px">{{ arg.desc }}</c-box>
          </tr>
        </tbody>
      </table>
    </c-box>
  </c-box>
</template>

<script lang="js">
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

import { CHeading, CBox, CCode } from '@chakra-ui/vue'

export default {
  name: 'Install',
  components: {
    CHeading,
    CBox,
    CCode,
  },
  methods: {
    getVariantByType (type) {
      if (type === 'string') {
        return 'green'
      }

      if (type === 'function') {
        return 'indigo'
      }

      if (type === 'boolean') {
        return 'orange'
      }

      return 'blue'
    }
  },
  data () {
    return {
      codeInstall: `
# Use npm
$ npm i vue2-simplert-plugin

# Use yarn yarn add
$ vue2-simplert-plugin

# Use pnpm
$ pnpm add vue2-simplert-plugin`,
      codeUsageMain: `
// put on the root file: 'main.js' or 'index.js'
import { Simplert } from 'vue2-simplert-plugin'
import 'vue2-simplert-plugin/dist/vue2-simplert-plugin.min.css'

Vue.use(Simplert)`,
      codeUsageTag: `
// put on the 'App.vue'
<simplert />`,
      codeCloseOpen: `
// to open the Alert
// read more about this 'arg' on the 'Object Arguments' section
this.$Simplert.open(arg)

// to close the Alert
this.$Simplert.close()`,
      argumentsObj: [{
        prop: 'title',
        type: 'string',
        default: 'empty',
        desc: 'The title of alert'
      },{
        prop: 'message',
        type: 'string',
        default: 'empty',
        desc: 'The message of alert'
      },{
        prop: 'type',
        type: 'string',
        default: 'info',
        desc: '	Type of alert, will be used to determine the icon'
      },{
        prop: 'customClass',
        type: 'string',
        default: 'empty',
        desc: 'Adding extra class in the parent tag'
      },{
        prop: 'customIconUrl',
        type: 'string',
        default: 'empty',
        desc: 'Using custom icon url instead the default set'
      },{
        prop: 'customCloseBtnText',
        type: 'string',
        default: 'empty',
        desc: 'Change default text in the close button'
      },{
        prop: 'customCloseBtnClass',
        type: 'string',
        default: 'empty',
        desc: 'Change default class in the close button'
      },{
        prop: 'customConfirmBtnText',
        type: 'string',
        default: 'empty',
        desc: 'Change default text in the confirm button'
      },{
        prop: 'customConfirmBtnClass',
        type: 'string',
        default: 'empty',
        desc: 'Change default class in the confirm button'
      },{
        prop: 'onClose',
        type: 'function',
        default: 'undefined',
        desc: 'Function triggered when closing the alert'
      },{
        prop: 'onConfirm',
        type: 'function',
        default: 'undefined',
        desc: 'Function triggered when click confirm button'
      },{
        prop: 'onOpen',
        type: 'function',
        default: 'undefined',
        desc: 'Function triggered when open alert'
      },{
        prop: 'useConfirmBtn',
        type: 'boolean',
        default: 'false',
        desc: 'Using two button with close and confirm'
      },{
        prop: 'disableOverlayClick',
        type: 'boolean',
        default: 'false',
        desc: 'Prevent click overlay will close alert'
      },{
        prop: 'hideAllButton',
        type: 'boolean',
        default: 'false',
        desc: 'Hide both button close and confirm'
      },{
        prop: 'showXclose',
        type: 'boolean',
        default: 'false',
        desc: 'Show X close button in right corner of alert'
      }]
    }
  }
}
</script>

<style>
div pre[class*="language-"] {
  width: 100%;
}
</style>
