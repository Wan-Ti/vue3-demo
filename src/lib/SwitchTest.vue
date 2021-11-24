<template>
    <div class="SwitchTest">
        <!--<Button class="outside" :class="{checked}" @click="toggle">
            <span class="inside"></span>
        </Button>-->

        <Button class="outside" :class="{checked:value}" @click="toggle">
            <span class="inside"></span>
        </Button>
    </div>
</template>
<script lang="ts">
    import {ref} from 'vue'
    export default {
        props:{
            value:Boolean
        },
        setup(props,context){
            /*const checked = ref(false);
            const toggle = () => {
                checked.value = !checked.value
            }
            return {
                checked,
                toggle
            }*/
            const toggle = () => {
                context.emit("update:value",!props.value)
            }
            return {
                toggle
            }
        }
    }
</script>
<style lang="scss" scoped>
    $h:22px;
    .SwitchTest{
        .outside{
            width: $h * 2;
            height: $h;
            border: 1px solid black;
            background-color: grey;
            position: relative;
            border-radius: $h / 2;
            .inside{
                width: $h - 2px;
                height: $h - 2px;
                background-color: white;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 100%;
                transition: left 250ms;
            }
        }
        .checked {
            background-color: #0d92ff;
            .inside{
                left: $h;
            }
        }
    }
</style>

