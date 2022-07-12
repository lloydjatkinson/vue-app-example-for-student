<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <LoginStatus />
    </nav>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import LoginStatus from './LoginStatus.vue';

export default defineComponent({
    name: 'Navbar',

    components: {
        LoginStatus
    },
});
</script>