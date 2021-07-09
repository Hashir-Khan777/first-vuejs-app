<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <HelloWorld message="Update global state" />
    <h3>{{ count }}</h3>
    <button @click="updateGlobalState">
      press
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },

  methods: {
    updateGlobalState() {
      this.$store.commit({
        type: "increment",
        payload: 1,
      });
    },
  },

  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>
