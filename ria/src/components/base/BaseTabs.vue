<template>
  <div class="tabs-component">
    <v-tabs v-model="selectedTab" background-color="primary" dark>
    <v-tab v-for="tab in tabs" :key="tab" @click="selectCity(tab)">
      {{ tab }}
    </v-tab>
  </v-tabs>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  tabs: {
    type: Array as () => string[],
    required: true,
  },
});

const emit = defineEmits(["selectCity"]);

const selectedTab = ref(0);

const selectCity = (tab: string) => {
  emit("selectCity", tab);
};
</script>

<style lang="scss" scoped>
.tabs-component {
  margin-bottom: 1rem;
  background-color: white;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
