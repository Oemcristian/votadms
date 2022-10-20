<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">{{ count }} votos
    <img src="../images/gato.jpg" alt="gato" class="object-cover h-48 w-48 rounded-lg"/>
    </button>
</template>