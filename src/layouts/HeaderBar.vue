<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from "vue-router";

onMounted(() => {
    // console.log(route.params)
});

// 🚀 Data
const route = useRoute();

// 🚀 Method
// const check = () => {
//     console.log(route.params)
// }
</script>

<template>
    <div
        class="d-flex gap-2 align-items-center mx-auto text-center fs-5 fw-bold justify-content-end"
        :class="route.name == 'Home' ? 'fixed-top' : ''"
        style="height: 140px; width: 1640px;"
    >
        <div>
            <router-link
                :to="{ name: 'Home' }"
                class="text-decoration-none text-dark"
            >
                <div class="p-2">Home</div>
            </router-link>
        </div>
        <div>
            <router-link
                :to="{ name: 'Shop' }"
                class="text-decoration-none text-dark"
            >
                <div class="p-2">Shop</div>
            </router-link>
        </div>
        <div>
            <router-link
                :to="{ name: 'Schedule' }"
                class="text-decoration-none text-dark"
            >
                <div class="p-2">Schedule</div>
            </router-link>
        </div>
        <div>
            <router-link
                :to="{ name: 'Cart' }"
                class="text-decoration-none text-dark"
            >
                <div class="p-2"><svg-icon
                        name="cart-shopping"
                        width="18"
                        height="18"
                        alt="購物車"
                        color="#000000"
                    ></svg-icon></div>
            </router-link>
        </div>
    </div>

</template>

<style scoped></style>
