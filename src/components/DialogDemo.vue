<template>
    <div>
        Dialog示例
        <Demo :component="Dialog1Demo" />
    </div>
</template>
<script lang="ts">
    import Demo from "./Demo.vue";
    import Dialog1Demo from "./Dialog1Demo.vue";
    export default {
        components: { Dialog1Demo ,Demo},
        setup() {
            return {Dialog1Demo}
        },
    };
</script>
