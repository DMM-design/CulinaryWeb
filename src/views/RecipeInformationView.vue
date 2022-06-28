<template>
    <div class="recipe">

    </div>
</template>

<script>
  import { useRoute } from 'vue-router'
  import { ref } from 'vue';
  import { apiListener } from '@/stores/apiListener';
    export default{
        setup()
        {
            const recipe = ref([]);
            const api = apiListener();
            const route = useRoute();
            api.idRecipe = route.params.id;
            const getRecipeInformation = async () => {
                
            }
            console.log(api.idRecipe);
        }
    }
</script>

<style scoped>
@media (min-width: 300px) {
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