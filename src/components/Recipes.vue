<template>
    <div>
        <header>
            {{props.id}}
            {{props.image}}
            heart
        </header>
        <section>{{props.title}}</section>
        <footer>
            <button>Show More</button>
        </footer>
    </div>
</template>

<script setup>
    const props = defineProps({
        id: '',
        title: '',
        image: '',
    });
</script>