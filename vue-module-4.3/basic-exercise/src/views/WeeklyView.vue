<template>
  <div class="weekly-view">
    <div class="header">
      <h2>Weekly planning</h2>
      <button
        v-if="mealStore.meals.length > 0"
        @click="clearAll"
        class="btn-clear"
      >
        🗑️ Clean all
      </button>
    </div>

    <div v-if="mealStore.meals.length === 0" class="empty-state">
      <p>📝 There is not planning of meals.</p>
      <p class="empty-subtitle">Add your first dish in the form above 👆</p>
    </div>

    <div v-else class="days-grid">
   <DayCard
        v-for="day in mealStore.daysWithMeals"
        :key="day"
        :day="day"
        :day-meals="mealStore.mealsByDay[day]"
        @remove-meal="removeMeal"
        @toggle-favorite="toggleFavorite"
      />
    </div>
  </div>
</template>

<script setup>
import { useMealStore } from '../stores/MealStore'
import DayCard from '../components/DayCard.vue'

const mealStore = useMealStore()

const removeMeal = (mealId) => {
  if (confirm('Are you sure you want remove this dish?')) {
    mealStore.removeMeal(mealId)
  }
}

const toggleFavorite = (mealId) => {
  mealStore.toggleFavorite(mealId)
}

const clearAll = () => {
  if (confirm('Are you sure you want remove all dishes?')) {
    mealStore.clearAllMeals()
  }
}

</script>

<style scoped>
.weekly-view {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.header h2 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin: 0;
}

.btn-clear {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 4px rgba(255, 107, 107, 0.3);
}

.btn-clear:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 107, 107, 0.4);
}

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  color: #7f8c8d;
}

.empty-state p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.empty-subtitle {
  font-size: 1rem;
  color: #95a5a6;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .weekly-view {
    padding: 1.5rem;
  }

  .days-grid {
    grid-template-columns: 1fr;
  }
}
</style>