<template>
  <div class="day-card">
    <h3 class="day-title">{{ day }}</h3>
    
    <div class="meal-section">
      <h4 class="meal-section-title">🌅 Breakfast</h4>
      <div v-if="dayMeals.breakfast.length === 0" class="no-meals">
        <span class="no-meals-text">Without dish</span>
      </div>
      <ul v-else class="meals-list">
        <li
          v-for="meal in dayMeals.breakfast"
          :key="meal.id"
          class="meal-item"
        >
          <span class="meal-name">{{ meal.name }}</span>
          <div class="meal-actions">
            <button
              @click="$emit('toggle-favorite', meal.id)"
              class="btn-favorite"
              :class="{ active: meal.isFavorite }"
              :title="meal.isFavorite ? 'Remove to favorites' : 'Add to favorites'"
            >
              {{ meal.isFavorite ? '⭐' : '☆' }}
            </button>
            <button
              @click="$emit('remove-meal', meal.id)"
              class="btn-delete"
              title="Remove dish"
            >
                x
            </button>
          </div>
        </li>
      </ul>
    </div>

    <div class="meal-section">
      <h4 class="meal-section-title">🍽️ Lunch</h4>
      <div v-if="dayMeals.lunch.length === 0" class="no-meals">
        <span class="no-meals-text">Without dishes</span>
      </div>
      <ul v-else class="meals-list">
        <li
          v-for="meal in dayMeals.lunch"
          :key="meal.id"
          class="meal-item"
        >
          <span class="meal-name">{{ meal.name }}</span>
          <div class="meal-actions">
            <button
              @click="$emit('toggle-favorite', meal.id)"
              class="btn-favorite"
              :class="{ active: meal.isFavorite }"
              :title="meal.isFavorite ? 'Remove to favorites' : 'Add to favorites'"
            >
              {{ meal.isFavorite ? '⭐' : '☆' }}
            </button>
            <button
              @click="$emit('remove-meal', meal.id)"
              class="btn-delete"
              title="Delete dish"
            >
            </button>
          </div>
        </li>
      </ul>
    </div>

    <div class="meal-section">
      <h4 class="meal-section-title">🌙 Dinner</h4>
      <div v-if="dayMeals.dinner.length === 0" class="no-meals">
        <span class="no-meals-text">Without dishes</span>
      </div>
      <ul v-else class="meals-list">
        <li
          v-for="meal in dayMeals.dinner"
          :key="meal.id"
          class="meal-item"
        >
          <span class="meal-name">{{ meal.name }}</span>
          <div class="meal-actions">
            <button
              @click="$emit('toggle-favorite', meal.id)"
              class="btn-favorite"
              :class="{ active: meal.isFavorite }"
              :title="meal.isFavorite ? 'remove to favorites' : 'Add to favorites'"
            >
              {{ meal.isFavorite ? '⭐' : '☆' }}
            </button>
            <button
              @click="$emit('remove-meal', meal.id)"
              class="btn-delete"
              title="Delete dish"
            >
              ✕
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  day: {
    type: String,
    required: true
  },
  dayMeals: {
    type: Object,
    required: true
  }
})

defineEmits(['remove-meal', 'toggle-favorite'])
</script>

<style scoped>
.day-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 10px;
  padding: 1.25rem;
  border: 2px solid #dee2e6;
  transition: transform 0.2s, box-shadow 0.2s;
}

.day-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.day-title {
  color: #2c3e50;
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 3px solid #42b983;
  font-weight: 700;
  text-align: center;
}

.meal-section {
  margin-bottom: 1.25rem;
}

.meal-section:last-child {
  margin-bottom: 0;
}

.meal-section-title {
  color: #495057;
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  padding-bottom: 0.25rem;
  border-bottom: 2px solid #dee2e6;
}

.no-meals {
  padding: 0.75rem;
  text-align: center;
  background: white;
  border-radius: 6px;
  border: 1px dashed #dee2e6;
}

.no-meals-text {
  color: #95a5a6;
  font-style: italic;
  font-size: 0.85rem;
}

.meals-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.meal-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #dee2e6;
  transition: background-color 0.2s, transform 0.2s;
}

.meal-item:hover {
  background: #f8f9fa;
  transform: translateX(4px);
}

.meal-name {
  color: #2c3e50;
  font-weight: 500;
  flex: 1;
  font-size: 0.95rem;
}

.meal-actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.btn-favorite {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s;
  padding: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-favorite:hover {
  transform: scale(1.2);
}

.btn-favorite.active {
  filter: drop-shadow(0 0 3px rgba(255, 193, 7, 0.6));
}

.btn-delete {
  background: #ff6b6b;
  color: white;
  border: none;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background-color 0.2s, transform 0.2s;
  flex-shrink: 0;
}

.btn-delete:hover {
  background: #ee5a52;
  transform: scale(1.1);
}

.btn-delete:active {
  transform: scale(0.95);
}

@media (max-width: 768px) {
  .day-card {
    padding: 1rem;
  }

  .day-title {
    font-size: 1.1rem;
  }

  .meal-section-title {
    font-size: 0.9rem;
  }

  .meal-name {
    font-size: 0.9rem;
  }
}
</style>