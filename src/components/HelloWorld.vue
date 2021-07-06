<template>
  <div class="hello_world">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    message: String,
  },
};
</script>
