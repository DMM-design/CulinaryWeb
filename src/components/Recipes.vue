<template>
    <div class="d-flex">
        <div class="card" style="width: 18rem;">
            <img :src="props.image" class="card-img" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{props.title}}</h5>
                <RouterLink :to="{path: '/' + props.title + '/' + props.id}" class="btn">
                    Show More
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .btn{
        background-color: var(--bg);
        color: var(--txt_color);
    }
    .card{
        background-color: var(--card_bg);
        color: var(--txt_color);
    }
</style>
<script>
export default{
    props: {
        id: Number,
        title: String,
        image: String
    },
    setup(props, context){
        return{ props }
    }
}
</script>