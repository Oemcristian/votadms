<script>
import BotaoGato from './BotaoGato.vue'
import BotaoCachorro from './BotaoCachorro.vue'

export default{
    components: {
        BotaoGato,
        BotaoCachorro,
    }
}
</script>

<template>
<div class="relative flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
  <div class="relative py-3 sm:max-w-xl mx-auto">
    <span class="text-2xl font-light">Vote no seu candidato</span>
    <div class="mt-4 bg-white shadow-md rounded-lg">
      <div class="h-2 bg-indigo-400 rounded-t-md"></div>
        <div class="px-8 py-6">
          <label class="block font-semibold text-center">Gato</label>
          <BotaoGato />
          <label class="block mt-3 font-semibold text-center">Cachorro</label>
          <BotaoCachorro />
          
        </div>
    </div>
  </div>
  
</div>
</template>

<style scoped>

</style>
