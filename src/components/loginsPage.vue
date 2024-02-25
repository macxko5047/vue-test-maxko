<script setup lang="ts">
console.log('hello script setup')

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const userData = {
  user: ref(''),
  password: ref('')
}
console.log(userData);
const loginUser = async () => {
  try {
    const response = await fetch(`https://my-json-server.typicode.com/macxko5047/test_login/user/?id=${userData.user.value}`)
    
    if (!response.ok) {
      throw new Error('Invalid user');
    }

    const userDataFromServer = await response.json();
console.log(userDataFromServer);


    // Check if the password matches
    if (userDataFromServer[0].pass === userData.password.value) {
      // Password is correct, you can now use userDataFromServer as needed
      document.cookie = `user=${userDataFromServer[0].user_name}; path=/`; // Set cookie
      console.log('Login successful. User data:', userDataFromServer);
      router.push('/show_table')
    } else {
      console.log('Incorrect password');
    }
  } catch (error) {
    console.error('Error logging in:', error);
  } finally {
    // Reset the form after submission
    userData.user.value = ''
    userData.password.value = ''
  }
}
</script>

<template>
  <div class="">
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit.prevent="loginUser" class="space-y-6" action="#" method="POST">
          <div>
            <label for="user" class="block text-sm font-medium leading-6 text-gray-900"
              >User</label
            >
            <div class="mt-2">
              <input
                v-model="userData.user.value"
                id="user"
                name="user"
                type="text"
                autocomplete="user"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >Forgot password?</a
                >
              </div>
            </div>
            <div class="mt-2">
              <input
                v-model="userData.password.value"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          sample Login By :
          <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >MACXKO</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
