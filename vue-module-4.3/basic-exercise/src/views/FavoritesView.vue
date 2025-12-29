<template>
  <div class="favorites-view">
    <div class="favorites-card">
      <h2>⭐ Favorites Dishes</h2>

      <div v-if="mealStore.favoriteMeals.length === 0" class="empty-state">
        <div class="empty-icon">⭐</div>
        <p>There are not favorites dishes</p>
        <p class="empty-subtitle">
          Mark your favorites dishesn usinig star icon in meal weekly planner
        </p>
        <router-link to="/" class="btn-add">
          Go to Meal Planner
        </router-link>
      </div>

      <div v-else class="favorites-content">
        <div class="stats-row">
          <div class="stat-item">
            <span class="stat-number">{{ mealStore.favoriteMeals.length }}</span>
            <span class="stat-label">Favorites dishes</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ favoritesByType.breakfast }}</span>
            <span class="stat-label">🌅 Breakfast</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ favoritesByType.lunch }}</span>
            <span class="stat-label">🍽️ Lunch</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ favoritesByType.dinner }}</span>
            <span class="stat-label">🌙 Dinner</span>
          </div>
        </div>

        <div class="filters">
          <button
            v-for="filter in filters"
            :key="filter.value"
            @click="activeFilter = filter.value"
            class="filter-btn"
            :class="{ active: activeFilter === filter.value }"
          >
            {{ filter.label }}
          </button>
        </div>

        <div class="favorites-list">
          <div
            v-for="meal in filteredFavorites"
            :key="meal.id"
            class="favorite-item"
          >
            <div class="favorite-header">
              <span class="meal-type-badge" :class="meal.type">
                {{ getMealTypeLabel(meal.type) }}
              </span>
              <span class="meal-day">{{ meal.day }}</span>
            </div>
            <div class="favorite-body">
              <h3 class="meal-name">{{ meal.name }}</h3>
              <div class="meal-actions">
                <button
                  @click="removeFavorite(meal.id)"
                  class="btn-unfavorite"
                  title="Remove from favoritesß"
                >
                  ⭐ Remove
                </button>
                <button
                  @click="removeMeal(meal.id)"
                  class="btn-delete"
                  title="Remove dish"
                >
                  🗑️ Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="actions-footer">
          <button
            @click="clearAllFavorites"
            class="btn-clear-favorites"
          >
            Remove all favorites
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMealStore } from '../stores/MealStore'

const mealStore = useMealStore()

const activeFilter = ref('all')

const filters = [
  { value: 'all', label: '🍴 All' },
  { value: 'breakfast', label: '🌅 Breakfast' },
  { value: 'lunch', label: '🍽️ Lunch' },
  { value: 'dinner', label: '🌙 Dinner' }
]

const favoritesByType = computed(() => {
  return {
    breakfast: mealStore.favoriteMeals.filter(m => m.type === 'breakfast').length,
    lunch: mealStore.favoriteMeals.filter(m => m.type === 'lunch').length,
    dinner: mealStore.favoriteMeals.filter(m => m.type === 'dinner').length
  }
})

const filteredFavorites = computed(() => {
  if (activeFilter.value === 'all') {
    return mealStore.favoriteMeals
  }
  return mealStore.favoriteMeals.filter(meal => meal.type === activeFilter.value)
})

const getMealTypeLabel = (type) => {
  const labels = {
    breakfast: '🌅 Breakfast',
    lunch: '🍽️ Lunch',
    dinner: '🌙 Dinner'
  }
  return labels[type] || type
}

const removeFavorite = (mealId) => {
  mealStore.toggleFavorite(mealId)
}

const removeMeal = (mealId) => {
  if (confirm('Are you sure you want to remove this meals of favorite list?')) {
    mealStore.removeMeal(mealId)
  }
}

const clearAllFavorites = () => {
  if (confirm('Do you want to clean favorite list and remove all?')) {
    mealStore.favoriteMeals.forEach(meal => {
      mealStore.toggleFavorite(meal.id)
    })
  }
}
</script>

<style scoped>
.favorites-view {
  width: 100%;
}

.favorites-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.favorites-card h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: 3px solid #ffc107;
  padding-bottom: 1rem;
}

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
}

.empty-icon {
  font-size: 5rem;
  margin-bottom: 1rem;
  opacity: 0.3;
}

.empty-state p {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin: 0.5rem 0;
}

.empty-subtitle {
  font-size: 1rem;
  color: #95a5a6;
  margin-bottom: 2rem;
}

.btn-add {
  display: inline-block;
  background: linear-gradient(135deg, #42b983 0%, #35a372 100%);
  color: white;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 4px rgba(66, 185, 131, 0.3);
}

.btn-add:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(66, 185, 131, 0.4);
}

.favorites-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 10px;
  border: 2px solid #dee2e6;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #ffc107;
}

.stat-label {
  font-size: 0.9rem;
  color: #495057;
  margin-top: 0.25rem;
}

.filters {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  padding: 0.625rem 1.25rem;
  border: 2px solid #dee2e6;
  background: white;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  color: #495057;
}

.filter-btn:hover {
  border-color: #ffc107;
  color: #ffc107;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #ffc107 0%, #ffb300 100%);
  border-color: #ffc107;
  color: white;
  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
}

.favorites-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
}

.favorite-item {
  background: linear-gradient(135deg, #fff9e6 0%, #fff3cc 100%);
  border: 2px solid #ffc107;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.favorite-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(255, 193, 7, 0.2);
}

.favorite-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(255, 193, 7, 0.2);
  border-bottom: 1px solid #ffc107;
}

.meal-type-badge {
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  background: white;
}

.meal-type-badge.breakfast {
  color: #ff6b6b;
}

.meal-type-badge.lunch {
  color: #4dabf7;
}

.meal-type-badge.dinner {
  color: #845ef7;
}

.meal-day {
  font-size: 0.85rem;
  color: #495057;
  font-weight: 600;
}

.favorite-body {
  padding: 1rem;
}

.meal-name {
  color: #2c3e50;
  font-size: 1.1rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
}

.meal-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-unfavorite,
.btn-delete {
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-unfavorite {
  background: #ffc107;
  color: white;
}

.btn-unfavorite:hover {
  background: #ffb300;
  transform: translateY(-2px);
}

.btn-delete {
  background: #ff6b6b;
  color: white;
}

.btn-delete:hover {
  background: #ee5a52;
  transform: translateY(-2px);
}

.actions-footer {
  text-align: center;
  padding-top: 1rem;
  border-top: 2px solid #dee2e6;
}

.btn-clear-favorites {
  background: transparent;
  border: 2px solid #ff6b6b;
  color: #ff6b6b;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-clear-favorites:hover {
  background: #ff6b6b;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .favorites-card {
    padding: 1.5rem;
  }

  .favorites-card h2 {
    font-size: 1.5rem;
  }

  .favorites-list {
    grid-template-columns: 1fr;
  }

  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>