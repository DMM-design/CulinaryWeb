<template>
    <div class="card mt-3" style="width: 50rem;">
        <img :src="props.image" class="card-img img-fluid" alt="...">
        <div class="card-body">
            <header>
                <h1 class="card-title">{{props.title}}</h1>
                <div class="icon-information d-flex gap-5">
                    <span>
                        <Clock /> {{props.readyInMinutes}} minutes.
                    </span>
                    <span>
                        <People />{{props.servings}} servings.
                    </span>
                </div>
            </header>
            <section class="ingredients mt-2">
                <h2>Ingredients: </h2>
                <ol>
                    <li 
                        v-for="extendedIngredients in props.extendedIngredients" 
                        :key="extendedIngredients"
                    >
                        {{extendedIngredients.original}}
                    </li>
                </ol>
            </section>
            <section class="instructions mt-2">
                <h2>Instructions: </h2>
                <ol>
                    <li
                        v-for="steps in props.analyzedInstructions[0].steps"
                        :key="steps"
                    >
                        {{steps.step}}
                    </li>
                </ol>
                <p>{{props.instructions}}</p>
            </section>
            <footer class="comments">
                <h2>Comments: </h2>
                <div class="form-floating">
                    <textarea 
                            class="form-control" 
                            placeholder="Leave a comment here" 
                            id="floatingTextarea2" 
                            style="height: 100px resize:none !important;"></textarea>
                    <label for="floatingTextarea2">Add a Comment...</label>
                </div>
                <div class="added-commants"></div>
            </footer>
        </div>
    </div>
</template>

<script>
    import Clock from '@/components/icons/Clock.vue';
    import People from '@/components/icons/People.vue';
    export default{
        components: {
            Clock,
            People
        },
        props: {
            id: Number,
            title: String,
            readyInMinutes: Number,
            servings: Number,
            image: String,
            analyzedInstructions: Array,
            extendedIngredients: Array
        },
        setup(props, context){
            console.log(props.analyzedInstructions)
            return { 
                props
            }
        }
    }
</script>

<style scoped>
</style>