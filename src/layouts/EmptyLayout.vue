<template>
  <div class="grey_ darken-1 empty-layout">
    <router-view />
  </div>
</template>

<script>
import messages from "../utils/messages";

export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(firebaseError) {
      this.$error(messages[firebaseError.code] || "Что-то пошло не так");
    }
  }
};
</script>
