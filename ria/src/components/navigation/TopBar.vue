<template>
  <div class="top-bar">
    <div class="top-bar__title">Simple Weather</div>
    <div class="top-bar__search-btn">
      <v-icon icon="mdi-magnify"></v-icon>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--primary-blue-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.top-bar__title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.top-bar__search-btn {
  cursor: pointer;
  color: red;
}
</style>
