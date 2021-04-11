<template>
  <div class="hero">
    <c-flex
      align="center"
      justify="center"
      :direction="{ base: 'column', md: 'row' }"
    >
      <c-stack :spacing="5" m="4" align="center" justify="center">
        <c-text as="h1" display="flex" textAlign="center">
          <c-text
            as="span"
            color="gray.500"
            class="pacifico"
            fontWeight="400"
            :fontSize="{ base: '2xl', sm: '4xl', md: '6xl' }"
            lineHeight="110%"
            >Vue2</c-text
          ><c-text
            as="span"
            color="orange.500"
            class="pacifico"
            fontWeight="400"
            :fontSize="{ base: '2xl', sm: '4xl', md: '6xl' }"
            lineHeight="110%"
            >Simplert</c-text
          >
        </c-text>

        <c-text as="h2" color="gray.500" fontSize="lg" textAlign="center"
          >Vue 2 Simple Alert Plugin (SweetAlert Inspired)</c-text
        >

        <a href="https://github.com/mazipan/vue2-simplert-plugin">
          <c-button
            left-icon="github"
            variant-color="orange"
            variant="outline"
            rounded="full"
          >
            Github Repo
          </c-button>
        </a>

        <c-flex align="center" justify="center">
          <a
            href="https://www.npmjs.com/package/vue2-simplert-plugin"
            target="_blank"
            rel="noopener noreferer"
            style="margin-right: 0.5rem"
          >
            <img
              alt="NPM Version"
              src="https://img.shields.io/npm/v/vue2-simplert-plugin.svg"
            />
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
      </c-stack>

      <c-box>
        <c-flex align="center" justify="center">
          <img :src="unDrawUrl" />
        </c-flex>
      </c-box>
    </c-flex>
  </div>
</template>

<script>
import {
  CFlex,
  CStack,
  CBox,
  CText,
  CButton,
} from "@chakra-ui/vue";
import unDraw from "../assets/undraw_Notify_re_65on.png";

export default {
  name: "Header",
  components: {
    CFlex,
    CBox,
    CStack,
    CText,
    CButton,
  },
  data() {
    return {
      unDrawUrl: unDraw,
    };
  },
};
</script>
