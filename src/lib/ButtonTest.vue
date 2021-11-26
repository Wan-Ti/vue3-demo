<template>
    <!--<div class="Button-Test">
        <Button class="gulu-button " :class="classes" @click="onClick">
            <span v-if="loading" class="gulu-loadingIndicator"></span>
            <slot />
        </Button>
    </div>-->
    <Button class="gulu-button " :class="classes" @click="onClick">
        <span v-if="loading" class="gulu-loadingIndicator"></span>
        <slot />
    </Button>
</template>

<script lang="ts">
    import {computed} from "vue"
    export default {
        inheritAttrs:false, //取消默认绑定
        props:{
            theme:{
                type:String,
                default:"button"
            },
            loading:{
                type:Boolean,
                default:false
            }
        },
        setup(props,context){
            const { size, onClick} = context.attrs
            const classes = computed(() => {
                const { theme } = props;
                return {
                    [`gulu-theme-${theme}`]:theme,
                    [`gulu-size-${size}`]:size
                }
            })
            return {
                classes,
                size,
                onClick
            }
        }
    }
</script>

<style lang="scss">
    .Button-Test{
        width: 500px;
        border: 1px solid red;
    }
    .gulu-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: blue;
        &:hover,
        &:focus {
            background: darken(white, 5%);
        }
    }
    .gulu-size-normal {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;

    }
    .gulu-button{

        .gulu-loadingIndicator{
            width: 14px;
            height: 14px;
            display: inline-block;
            margin-right: 4px;
            border-radius: 8px;
            border-color: blue blue blue transparent;
            border-style: solid;
            border-width: 2px;
            animation: gulu-spin 1s infinite linear;
        }
    }

    @keyframes gulu-spin {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
</style>
