<template>
  <div class="home">
    <sidebar msg="" />
  </div>
</template>

<script>
// @ is an alias to /src
import sidebar from "@/components/sidebar.vue";

export default {
  name: "Home",
  components: {
    sidebar
  }
};
</script>
