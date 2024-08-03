<template>
  <div v-if="authState.authenticated">
    <h1>Protected page</h1>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})
const authState = useAuthState();
</script>