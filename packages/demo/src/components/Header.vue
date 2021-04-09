<template>
  <div class="hero">

    <c-flex mb="4" textAlign="center" align="center" justify="center" direction="column">
      <img
        src="https://mazipan.github.io/vue2-simplert/images/vue2-simplert-logo.png"
        alt="Vue2-Simplert"
        title="Vue2-Simplert">
      <c-heading as="h2">Vue 2 Simple Alert Plugin (SweetAlert Inspired)</c-heading>
    </c-flex>

    <c-flex mb="2" align="center" justify="center" direction="column">
      <a href="https://github.com/mazipan/vue2-simplert-plugin">
        <c-button variant-color="green">Github Repo</c-button>
      </a>
    </c-flex>

    <c-flex align="center" justify="center">
      <a
        href="https://www.npmjs.com/package/vue2-simplert-plugin"
        target="_blank"
        rel="noopener noreferer"
        style="margin-right: 0.5rem;"
      >
        <img alt="NPM Version" src="https://img.shields.io/npm/v/vue2-simplert-plugin.svg" />
      </a>
      <a
        href="https://github.com/mazipan/vue2-simplert-plugin"
        target="_blank"
        rel="noopener noreferer"
      >
        <img
          alt="GitHub Stars"
          src="https://img.shields.io/github/stars/mazipan/vue2-simplert-plugin.svg?style=social"
        />
      </a>
    </c-flex>
  </div>
</template>

<script>
import { CFlex, CHeading, CButton } from '@chakra-ui/vue'

export default {
  name: 'Header',
  components: {
    CFlex,
    CHeading,
    CButton
  }
}
</script>
