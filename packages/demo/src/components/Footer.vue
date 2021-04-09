<template>
  <footer class="footer">
    <c-flex mt="8" mb="4" align="center" justify="center">
      <c-text textAlign="center"
        >Built by <a href="https://mazipan.space">Irfan Maulana</a></c-text
      >
    </c-flex>
  </footer>
</template>

<script>
import { CFlex, CText } from "@chakra-ui/vue";

export default {
  name: "Footer",
  components: {
    CFlex,
    CText,
  },
};
</script>
