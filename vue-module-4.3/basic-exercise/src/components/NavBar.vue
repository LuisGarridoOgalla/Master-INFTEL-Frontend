<template>
  <nav class="navbar">
    <div class="nav-container">
      <h1 class="nav-title">🍽️ Meal Planner</h1>
      <div class="nav-links">
        <router-link to="/" class="nav-link" active-class="active">
          📅 Weekly Planning
        </router-link>
        <router-link to="/favorites" class="nav-link" active-class="active">
          ⭐ Favorites
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #42b983 0%, #35a372 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-title {
  color: white;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;
  background: rgba(255, 255, 255, 0.1);
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.nav-link.active {
  background: white;
  color: #42b983;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    padding: 1rem;
  }

  .nav-title {
    font-size: 1.2rem;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
  }

  .nav-link {
    flex: 1;
    text-align: center;
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
  }
}
</style>