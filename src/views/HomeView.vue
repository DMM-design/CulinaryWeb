<template>
  <div class="home">
    <ResearchBar 
      @research = research
      class="mt-4"
    />
    <div class="recipes d-flex flex-wrap gap-5 mt-5">
      <Recipes 
        class
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
  import { ref } from 'vue';
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
    await api.getRecipes.then(data => recipes.value = data?.results);
  }
</script>

<style scoped>
@media (min-width: 300px) {
  .home {
    min-height: 100vh;
  }
}

@media screen and (max-width: 600px) {
  .home {
    min-height: 89.4vh;
  }
  .recipes{
    display: flex !important;
    justify-content: center;
  }
}
</style>


