<template>
  <div class="meal-form-container">
    <h2>Add dish</h2>
    <form @submit.prevent="handleSubmit" class="meal-form">
      <div class="form-group">
        <label for="mealName">Name of dish:</label>
        <input
          id="mealName"
          v-model="mealName"
          type="text"
          placeholder="Ej: Paella, Ensalada, Pizza..."
          required
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label for="mealType">Type of meal:</label>
        <select
          id="mealType"
          v-model="selectedType"
          required
          class="form-select"
        >
          <option value="" disabled>Select type of food</option>
          <option
            v-for="type in mealStore.mealTypes"
            :key="type.value"
            :value="type.value"
          >
            {{ type.label }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="daySelect">Day of week:</label>
        <select
          id="daySelect"
          v-model="selectedDay"
          required
          class="form-select"
        >
          <option value="" disabled>Select day</option>
          <option
            v-for="day in mealStore.daysOfWeek"
            :key="day"
            :value="day"
          >
            {{ day }}
          </option>
        </select>
      </div>

      <button type="submit" class="btn-submit">
        ➕ Add
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMealStore } from '../stores/MealStore'

const mealStore = useMealStore()

const mealName = ref('')
const selectedDay = ref('')
const selectedType = ref('')

const handleSubmit = () => {
  if (mealName.value.trim() && selectedDay.value && selectedType.value) {
    mealStore.addMeal({
      name: mealName.value.trim(),
      day: selectedDay.value,
      mealType: selectedType.value
    })
        mealName.value = ''
    selectedDay.value = ''
    selectedType.value = ''
  }
}
</script>

<style scoped>
.meal-form-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.meal-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.95rem;
}

.form-input,
.form-select {
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: #42b983;
}

.btn-submit {
  background: linear-gradient(135deg, #42b983 0%, #35a372 100%);
  color: white;
  padding: 0.875rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 4px rgba(66, 185, 131, 0.3);
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(66, 185, 131, 0.4);
}

.btn-submit:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .meal-form-container {
    padding: 1.5rem;
  }
}
</style>