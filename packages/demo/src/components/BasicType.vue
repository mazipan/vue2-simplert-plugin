<template>
  <c-stack :spacing="5" :mt="5" justify="space-between">
    <c-box
      width="100%"
      :p="5"
      rounded="lg"
      shadow="md"
      border-width="1px"
      v-for="typeV in typeVariants"
      :key="typeV.type"
    >
      <c-text font-size="xl" :mb="2"
        >Type: <c-code :variant-color="typeV.color">{{ typeV.type }}</c-code></c-text
      >

      <c-button
        :variant-color="typeV.color"
        size="md"
        @click="emitOpen('Information!', 'Hey, I am Opened...', typeV.type)"
      >
        Click Me!
      </c-button>
    </c-box>
  </c-stack>
</template>

<script lang="js">
import { CBox, CButton, CText, CCode, CStack } from '@chakra-ui/vue'

export default {
  name: 'BasicType',
  components: {
    CBox,
    CButton,
    CText,
    CCode,
    CStack,
  },
  data () {
    return {
      typeVariants: [{
        type: 'info',
        color: 'blue'
      },{
        type: 'success',
        color: 'green'
      },{
        type: 'warning',
        color: 'orange'
      },{
        type: 'error',
        color: 'red'
      }]
    }
  },
  methods: {
    emitOpen (...args) {
      this.$emit('open', ...args);
    }
  }
}
</script>
