import { defineStore } from 'pinia'

export const jsonHandler = defineStore({
    id: 'jsonHandler',
    state: ()=>({
        likedRecipe: {},
        commentsOnRecipe: {}
    }),
    getters: {
        saveCommentsRecipe: (state) => {
            
        }
    }
});