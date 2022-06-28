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

</style>
<script setup>
    const props = defineProps({
        id: '',
        title: '',
        image: '',
    });
</script>