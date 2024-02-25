<script setup lang="ts">
import MainPage from '@/components/MainPage.vue';
</script>
<script lang="ts">
export default {
  beforeRouteEnter(to, from, next) {
    const userCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('user='))
      ?.split('=')[1];

    if (userCookie) {
      // If "user" cookie is found, you can access its value
      console.log('User cookie value:', userCookie);
      next();
    } else {
      // If "user" cookie is not found, redirect to the login page
      next('/login');
    }
  },
  // Other component options go here
}
</script>

<template>
  <main>
    <MainPage />
  </main>
</template>
