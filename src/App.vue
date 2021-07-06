<template>
  <div class="main">
    <input
      type="text"
      @change="onChange"
      placeholder="user name"
      :value="name"
    />
    <HelloWorld v-if="name" :message="name" />
    <HelloWorld v-else message="Hello world" />
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return { name: "" };
  },
  methods: {
    onChange(e) {
      this.name = e.target.value;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
