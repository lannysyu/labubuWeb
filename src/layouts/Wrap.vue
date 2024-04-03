<script setup>
</script>

<template>
    <div class="wrap-layout">
        <header class="wrap-header">
            <slot name="header"></slot>
        </header>
        <main class="wrap-main">
            <slot name="main"></slot>
        </main>
        <footer class="wrap-footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
