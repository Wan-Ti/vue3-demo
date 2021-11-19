<template>
    <h1>示例1</h1>
    <TabsTest>
        <TabTest title="导航1">内容1</TabTest>
        <TabTest title="导航2">内容2</TabTest>
    </TabsTest>
</template>

<script lang="ts">
    import TabsTest from "../lib/TabsTest.vue";
    import TabTest from "../lib/TabTest.vue";
    export default {
        components:{
            TabsTest,
            TabTest
        }
    }
</script>

<style scoped>

</style>
