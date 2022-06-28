import { defineStore } from 'pinia'

export const jsonHandler = defineStore({
    id: 'jsonHandler',
    state: ()=>({
        likedRecipe: {},
        commantsOnRecipe: {}
    }),
    getters: {
        saveLikedRecipe: (state) => {
            
        }
    }
});