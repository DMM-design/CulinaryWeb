<template>
    <div class="recipe d-flex justify-content-center">
      <RecipeInformation 
          :id=recipe.id
          :title=recipe.title
          :readyInMinutes=recipe.readyInMinutes
          :servings=recipe.servings
          :image=recipe.image
          :analyzedInstructions=recipe.analyzedInstructions
          :extendedIngredients=recipe.extendedIngredients
      />
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue';
import { apiListener } from '@/stores/apiListener';

import RecipeInformation from '@/components/Recipe.vue'

export default{
    components:{
      RecipeInformation
    },
    setup()
    {
        const recipe = ref({});
        const api = apiListener();
        const route = useRoute();
        api.idRecipe = route.params.id;

        onMounted(async () => {
            await api.getAdditionalInformation.then((response) => {
              const { id, 
                      title, 
                      readyInMinutes, 
                      servings,
                      image,
                      analyzedInstructions,
                      extendedIngredients} = response;
              recipe.value = {id, 
                              title, 
                              readyInMinutes, 
                              servings,
                              image,
                              analyzedInstructions,
                              extendedIngredients}
            });
        });

        return{
            recipe,
        }
    }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .recipe {
    min-height: 92.3vh;
  }
}
@media screen and (max-width: 600px) {
  .recipe {
    min-height: 89.4vh;
  }
}
</style>