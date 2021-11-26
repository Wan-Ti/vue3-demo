<template>
    <!--<SwitchTest />
    <span>关闭了</span>-->
    <!--<SwitchTest v-bind:value="bool" v-on:input="bool = $event" />
    <span>{{bool}}</span>-->
    <SwitchTest v-model:value="bool"  />
    <span>{{bool}}</span>
</template>
<script lang="ts">
    import SwitchTest from "../lib/SwitchTest.vue"
    import {ref} from "vue"
    export default {
        components:{
            SwitchTest
        },
        setup(){
            const bool = ref(false);
            return {bool}
        }
    }
</script>
<style lang="scss" scoped>

</style>
