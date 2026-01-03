<template>
  <div class="favorites-view">
      <div class="header">
      <h2>⭐ Favorites Dishes</h2>
          <button
            v-if="mealStore.favoritesMeals.length > 0"
            @click="removeAllFavoritesMeals"
            class="btn-clear"
          >
            🗑️ Remove all favorites
          </button>
      </div> 
      <div class="favorites-container">
      <div v-if="mealStore.favoritesMeals.length === 0" class="empty-state">
        <p>You don't have favorite dishes yet.</p>
        <p class="empty-subtitle">Mark dishes as favorites from your weekly planning!</p>
      </div>
      <div v-else class="favorites-grid">
        <div
          v-for="meal in mealStore.favoritesMeals"
          :key="meal.id"
          class="favorite-card"
        >
          <div class="card-header">
            <span class="meal-type-badge">{{ getMealTypeLabel(meal.mealType) }}</span>
            <button
              @click="removeFavoriteMeal(meal.id)"
              class="btn-unfavorite"
              title="Remove from favorites"
            >
              ⭐
            </button>
          </div>
          
          <h3 class="meal-name">{{ meal.name }}</h3>
          
          <div class="meal-info">
            <span class="info-item">📅 {{ meal.day }}</span>
          </div>

          <button
            @click="removeFavoriteMeal(meal.id)"
            class="btn-remove"
          >
            ✕ Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMealStore } from '../stores/MealStore'

const mealStore = useMealStore()

const getMealTypeLabel = (type) => {
  const types = {
    breakfast: '🌅 Breakfast',
    lunch: '🍽️ Lunch',
    dinner: '🌙 Dinner'
  }
  return types[type] || type
}


const removeFavoriteMeal = (mealId) => {
  if (confirm('Are you sure you want to remove this dish of favorites meals?')) {
    mealStore.toggleFavorite(mealId)
  }
}
const removeAllFavoritesMeals = (mealId) => {
  if (confirm('Are you sure you want to remove All favorites meals?')) {
    mealStore.removeAllFavorites(mealId)
  }

}
</script>

<style scoped>
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
  margin-bottom: 2rem;
  position: absolute;
  right: 0;
}

.btn-clear:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 107, 107, 0.4);
}

.favorites-view {

  min-height: 100%;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;
}

.header h2 {
  color: #ffffff;
  margin: 0;
  font-size: 2rem;
  text-align: center;
}

.favorites-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #7f8c8d;
}

.empty-state p {
  font-size: 1.3rem;
  margin: 0.5rem 0;
}

.empty-subtitle {
  font-size: 1rem;
  color: #95a5a6;
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.favorite-card {
  background: linear-gradient(135deg, #fff9e6 0%, #fff 100%);
  border: 2px solid #ffd700;
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.favorite-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(255, 215, 0, 0.2);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.meal-type-badge {
  background: #42b983;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.btn-unfavorite {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s;
  filter: drop-shadow(0 0 3px rgba(255, 193, 7, 0.6));
}

.btn-unfavorite:hover {
  transform: scale(1.2) rotate(15deg);
}

.meal-name {
  color: #2c3e50;
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  font-weight: 700;
}

.meal-info {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #7f8c8d;
  font-size: 0.9rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.btn-remove {
  width: 100%;
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 0.6rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
}

.btn-remove:hover {
  background: #ee5a52;
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .favorites-container {
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .favorites-grid {
    grid-template-columns: 1fr;
  }
}
</style>