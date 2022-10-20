<script setup>
</script>

<template>
<div class="relative flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
  <div class="relative py-3 sm:max-w-xl mx-auto text-center">
    <span class="text-2xl font-light content-center">Entre na sua conta</span>
    <div class="mt-4 bg-white shadow-md rounded-lg">
      <div class="h-2 bg-indigo-400 rounded-t-md"></div>
        <div class="px-8 py-6 content-center">
          <label class="block font-semibold">E-mail</label>
          <input type="email" placeholder="Digite aqui o seu e-mail" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md" />
          <label class="block mt-3 font-semibold">Senha</label>
          <input type="password" placeholder="Digite aqui a sua senha" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md" />
          <div class="flex justify-between items-baseline content-center text-center">
            <router-link :to="{ name: 'Votar' }"><button type="submit" class="mt-4 bg-indigo-500 text-white py-2 px-20 rounded-md hover:bg-indigo-600 content-center text-center">Entrar</button></router-link>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
