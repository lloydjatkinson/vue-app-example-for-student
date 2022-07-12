<template>
    <div v-if="isLoggedIn">
        <span>Welcome, {{ userName }}!</span>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoginStatus',

    computed: {
        isLoggedIn () {
            return this.$store.getters.isLoggedIn;
        },
        isLoggedOut () {
            return !this.isLoggedIn;
        },
        userName () {
            return this.$store.getters.userName;
        }
    },
});
</script>