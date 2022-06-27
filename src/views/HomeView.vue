<template>
  <div class="about">
    <ResearchBar 
      @research = research
    />
    <div class="recipes">
      <Recipes 
        v-for="recipe in recipes" 
        :key='recipe'
        :id=recipe.id
        :title=recipe.title
        :image=recipe.image
      />
    </div>
  </div>
</template>

<script setup>
  import { ref, inject } from 'vue';
  import { apiListener } from '@/stores/apiListener';

  import ResearchBar from '@/components/Research.vue';
  import Recipes from '@/components/Recipes.vue';

  const recipes = ref([]);
  const api = apiListener();
  const research = (data) => {
    api.research = data;
    setTheRecipeData();
  };
  
  const setTheRecipeData = async () => {
    await api.getRecipes.then(data => recipes.value = data.results);
  }


</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
}
</style>


