<script setup>
import HeaderBar from "@/layouts/HeaderBar.vue";
import { useRoute } from "vue-router";
import { onMounted, inject, ref } from "vue";

</script>

<template>
    <!-- 手機板 -->

    <!-- 桌機板 -->
    <div class="d-flex vh-100">
        <div class="h-100 w-100">
            <!-- Header bar -->
            <HeaderBar></HeaderBar>
            <!-- View -->
            <div
                style="height: auto; width: 1640px;"
                class="mx-auto overflow-auto"
            >
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
