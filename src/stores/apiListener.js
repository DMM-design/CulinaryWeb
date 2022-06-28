import { defineStore } from 'pinia'

export const apiListener = defineStore({
    id: 'apiListener',
    state: () => ({
        research: '',
        idRecipe: 0,
    }),
    getters: {
        getRecipes: async (state) => {
            if(state.research === '') return;
            const URL = `https://api.spoonacular.com/recipes/complexSearch`;
            const query = `?apiKey=673028a43cdf404a84b3b5f654602035&query=${state.research}&number=10&offset=1`
            const recipe = await fetch(URL + query)
                                .then((response) => response.json())
                                .then((recipe) => recipe);
            return recipe;
        },
        getAdditionalInformation: async (state) => {
            if(state.idRecipe === '') return;
            const URL = `https://api.spoonacular.com/recipes/${state.idRecipe}/information`;
            const querry = `?apiKey=673028a43cdf404a84b3b5f654602035`;
            const additionalInformation = await fetch(URL + querry)
                                                .then((response) => response.json())
                                                .then((recipe) => recipe);
            return additionalInformation;
        }
    }
})