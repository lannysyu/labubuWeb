<script setup>
import Wrap from "@/layouts/Wrap.vue"
import { useRoute } from 'vue-router';

// 🚀 Data
const route = useRoute();

// 🚀 Method

</script>

<template>
    <Wrap>
        <template #header>
            <div class="content-header">
                {{ route.meta.title }}
            </div>
        </template>
        <template #main>
            <div>
                main
            </div>
        </template>
        <template #footer>
            <div>
                footer
            </div>
        </template>
    </Wrap>
</template>
