<template>
   <header class="app-header">
      <div class="container">
        <h1>🍽️ Meal weekly planner</h1>
        <p class="subtitle">Manage your food for all week</p>
      </div>
    </header>
    <MealForm />
    <WeeklyView />
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