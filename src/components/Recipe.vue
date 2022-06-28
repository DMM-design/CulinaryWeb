<template>
    <div class="recipe-card card mt-3" style="width: 50rem;">
        <img :src="props?.image" class="card-img img-fluid" alt="...">
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
            <footer class="comments">
                <h2>Comments: </h2>
                <div class="form-floating mb-3">
                    <input 
                        type="text" 
                        v-on:keyup="addComment"
                        v-model="text"
                        class="form-control" 
                        id="floatingInput" 
                        placeholder="name@example.com">
                    <label for="floatingInput">Add a comment...</label>
                </div>
                <div class="added-comments">
                    <div class="comment-sections  d-flex flex-column gap-3">
                        <section
                            v-for="comment in comments"
                            :key="comment"
                        >
                            <div class="card card-comments-body" v-if="comment.id == idParam">
                                <div class="card-body">
                                    <p>
                                        {{comment.comments.comment}}
                                    </p>
                                    <span>
                                        {{comment.comments.date}}
                                    </span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>


<style scoped>
    .recipe-card{
        background-color: var(--card_bg);
        color: var(--txt_color);
    }
    .form-floating, .added-comments{
        color: black !important;
    }
</style>

<script>
    import { useRoute } from 'vue-router'
    import { ref, onMounted, watch} from 'vue';
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
            extendedIngredients: Array
        },
        setup(props, context){
            const route = useRoute();
            const text = ref('');
            const comments = ref([]);
            const date = ref(new Date());
            const commentSchema = {
                id: 0,
                comments: {
                    date: '',
                    comment: ''
                }
            };
           
            
            const addComment = (e) => {
                if(e.keyCode === 13)
                {
                    createFirstCommentAndPush();
                }
            }

            watch(comments, (newVal) => {
                    localStorage.setItem('comments', JSON.stringify(newVal))
                }, {
                    deep: true
            });

            const createFirstCommentAndPush = () => {
                if (text.value.trim() === '') {
                    return
                }
                commentSchema.id = props.id;
                commentSchema.comments.date = date;
                commentSchema.comments.comment = text.value;
                comments.value.push(commentSchema);
            }

            onMounted(() => {
                comments.value = JSON.parse(localStorage.getItem('comments')) || [];
            })
            return { 
                props,
                text,
                comments,
                addComment,
                idParam: route.params.id
            }
        }
    }
</script>
