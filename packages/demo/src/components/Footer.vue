<template>
  <footer class="footer">
    <c-box
      bg="gray.50"
      color="gray.700"
      py="8"
      mt="8">
      <c-flex
        p="4"
        spacing="4"
        :justify="['center','space-between','space-between','space-between']"
        align="center">
        <c-text>© 2017-present by Irfan Maulana.<br/>All rights reserved</c-text>
        <c-box direction='row' spacing=6>
          <c-icon-button
            as="a"
            display="inline-flex"
            align-items="center"
            justify-content="center"
            rounded="full"
            aria-label="Github"
            icon="github"
            bg="blackAlpha.100"
            href="https://github.com/mazipan"
          />
        </c-box>
      </c-flex>
    </c-box>
  </footer>
</template>

<script>
import { CBox, CFlex, CText, CIconButton } from "@chakra-ui/vue";

export default {
  name: "Footer",
  components: {
    CBox,
    CFlex,
    CText,
    CIconButton,
  },
};
</script>
