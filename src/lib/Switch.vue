<template>
    <button class="gulu-switch" @click="toggle" :class="{'gulu-checked':value}">
        <span></span>
    </button>
</template>
<script lang="ts">
    import { ref } from "vue";
    export default {
        props: {
            value: Boolean,
        },
        setup(props: { value: any; }, context: { emit: (arg0: string, arg1: boolean) => void; }) {
            const toggle = () => {
                context.emit("update:value", !props.value);
            };
            return { toggle };
        }
    };
</script>

<style lang="scss" scoped>
    .gulu-switch {
        height: 22px; width: 22px  * 2; border: none; background: #bfbfbf; border-radius: 22px /2; position: relative;
        > span {
            position: absolute; top: 2px; left: 2px; height: 18px; width: 18px; background: white; border-radius: 18px / 2; transition: all 250ms;
        }
        &.gulu-checked { background: #1890ff;
            > span { left: calc(100% - #{18px} - 2px); }
        }
        &:focus { outline: none; }
        &:active {
            > span { width:18px + 4px; }
        }
        &.gulu-checked:active {
            > span { width: 18px + 4px; margin-left: -4px; }
        }
    }
</style>
