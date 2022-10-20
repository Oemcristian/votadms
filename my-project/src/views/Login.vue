<script setup>
</script>

<template>
<div class="relative flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
  <div class="relative py-3 sm:max-w-xl mx-auto">
    <span class="text-2xl font-light">Entre na sua conta</span>
    <div class="mt-4 bg-white shadow-md rounded-lg">
      <div class="h-2 bg-indigo-400 rounded-t-md"></div>
        <div class="px-8 py-6">
          <label class="block font-semibold">E-mail</label>
          <input type="text" placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md" />
          <label class="block mt-3 font-semibold">Senha</label>
          <input type="text" placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md" />
          <div class="flex justify-between items-baseline">
            <router-link :to="{ name: 'Votar' }"><button type="submit" class="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600">Entrar</button></router-link>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
