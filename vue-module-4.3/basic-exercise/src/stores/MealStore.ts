import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMealStore = defineStore('meal', () => {
  const meals = ref([])

  const daysOfWeek = ref(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])

  const mealTypes = ref([
    { value: 'breakfast', label: '🌅 Breakfast' },
    { value: 'lunch', label: '🍽️ Lunch' },
    { value: 'dinner', label: '🌙 Dinner' }
  ])

  const favoritesMeals = computed(() => {
    return meals.value.filter((meal: any) => meal.isFavorite)
  })

  function toggleFavorite(mealId) {
    const meal = meals.value.find(meal => meal.id === mealId)
    if (meal) {
      meal.isFavorite = !meal.isFavorite
    }
  }

  function removeAllFavorites() {
    meals.value.forEach(meal => {
      meal.isFavorite = false
    })
  }

  const mealsByDay = computed(() => {
    const groupedMeals: Record<string, any> = {}

    daysOfWeek.value.forEach(day => {
      groupedMeals[day] = {
        breakfast: meals.value.filter((meal: any) =>
          meal.day === day && meal.mealType === 'breakfast'
        ),
        lunch: meals.value.filter((meal: any) =>
          meal.day === day && meal.mealType === 'lunch'
        ),
        dinner: meals.value.filter((meal: any) =>
          meal.day === day && meal.mealType === 'dinner'
        )
      }
    })

    return groupedMeals
  })
  const daysWithMeals = computed(() => {
    return daysOfWeek.value.filter(day => {
      const dayMeals = mealsByDay.value[day]
      return dayMeals.breakfast.length > 0 ||
        dayMeals.lunch.length > 0 ||
        dayMeals.dinner.length > 0
    })
  })

  function addMeal(meal: { name: string; day: string; mealType: string }) {
    const newMeal = {
      id: Date.now(),
      name: meal.name,
      day: meal.day,
      mealType: meal.mealType,
      isFavorite: false
    }
    meals.value.push(newMeal)
  }

  function removeMeal(mealId: number) {
    meals.value = meals.value.filter((meal: any) => meal.id !== mealId)
  }

  function clearAllMeals() {
    meals.value = []
  }

  return {
    meals,
    daysOfWeek,
    mealsByDay,
    addMeal,
    removeMeal,
    clearAllMeals,
    favoritesMeals,
    mealTypes,
    toggleFavorite,
    daysWithMeals,
    removeAllFavorites
  }
})