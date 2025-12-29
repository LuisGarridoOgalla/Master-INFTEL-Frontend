<template>
  <div id="app">
    <header class="app-header">
      <div class="container">
        <h1>🍽️ Planificador de Comidas Semanal</h1>
        <p class="subtitle">Organiza tus comidas de la semana de forma sencilla</p>
      </div>
    </header>

    <main class="container">
      <MealForm />
      <WeeklyView />
    </main>

    <footer class="app-footer">
      <div class="container">
        <p>© 2024 Planificador de Comidas - Hecho con Vue 3 + Pinia</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import MealForm from './components/MealForm.vue'
import WeeklyView from './views/WeeklyView.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

.app-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.app-header h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

.subtitle {
  color: #7f8c8d;
  text-align: center;
  font-size: 1.1rem;
}

main {
  flex: 1;
  padding: 2rem 0;
}

.app-footer {
  background: rgba(44, 62, 80, 0.9);
  backdrop-filter: blur(10px);
  color: white;
  padding: 1.5rem 0;
  margin-top: 3rem;
  text-align: center;
}

.app-footer p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .app-header h1 {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .container {
    padding: 0 1rem;
  }
}
</style>