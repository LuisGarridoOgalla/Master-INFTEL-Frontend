<template>
  <div class="home-view">
    <MealForm />
    <WeeklyView />
  </div>
</template>

<script setup>
import MealForm from '../components/MealForm.vue'
import WeeklyView from '../views/WeeklyView.vue'
</script>

<style scoped>
.home-view {
  width: 100%;
}
</style>