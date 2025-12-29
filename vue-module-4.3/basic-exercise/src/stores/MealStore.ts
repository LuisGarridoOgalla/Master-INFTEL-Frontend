import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMealStore = defineStore('meal', () => {
  const meals = ref([])

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const mealTypes = [
    { value: 'breakfast', label: '🌅 Breakfast' },
    { value: 'lunch', label: '🍽️ Lunch' },
    { value: 'dinner', label: '🌙 Dinner' }
  ]

  const favoritesMeals = computed(() => {
    return meals.value.filter((meal: any) => meal.isFavorite)
  })

  function toggleFavorite(mealId) {
    const meal = meals.value.find(meal => meal.id === mealId)
    if (meal) {
      meal.isFavorite = !meal.isFavorite
    }
  }
  const mealsByDay = computed(() => {
    const groupedMeals: Record<string, any[]> = {}
    daysOfWeek.forEach(day => {
      groupedMeals[day] = meals.value.filter((meal: any) => meal.day === day)
    })
    return groupedMeals
  })

  function addMeal(meal: { name: string; day: string }) {
    const newMeal = {
      id: Date.now(),
      name: meal.name,
      day: meal.day
    }
    meals.value.push(newMeal)
  }

  function removeMeal(mealId: number) {
    meals.value = meals.value.filter((meal: any) => meal.id !== mealId)
  }

  function cleanMeals() {
    meals.value = []
  }

  return {
    meals,
    daysOfWeek,
    mealsByDay,
    addMeal,
    removeMeal,
    cleanMeals,
    favoritesMeals,
    mealTypes,
    toggleFavorite
  }
})
