import { defineStore } from 'pinia'

export const researchStore = defineStore({
    id: 'researchStore',
    state: () => ({
        research: ''
    }),
    getters: {
        getResearchAboutRecipe: (state) => {
            
        }
    }
})