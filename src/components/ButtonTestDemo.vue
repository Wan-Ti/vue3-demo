<template>
    <ButtonTest @click="toggle">你好啊</ButtonTest>
    <ButtonTest @click="toggle" theme="text" size="normal">
        你好鸭
    </ButtonTest>
    <ButtonTest theme="link" loading>你好居</ButtonTest>
</template>

<script>
    import ButtonTest from "../lib/ButtonTest.vue"
    export default {
        name: "ButtonTestDemo",
        components:{
            ButtonTest
        },
        setup(){
            const toggle = () => {
                console.log('hi')
            };
            return {
                toggle
            }
        }
    }
</script>

<style scoped>

</style>
