<template>
  <tu-input v-model="inputValue" placeholder="Please input" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const inputValue = ref('');
</script>
