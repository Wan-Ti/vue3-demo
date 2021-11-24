<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav">
            <div class="gulu-tabs-nav-item" v-for="(t,index) in titles" :key="index">
                {{t}}
            </div>
        </div>
        <div class="gulu-tabs-content">
            <component class="gulu-tabs-content-item"  v-for="(c,index) in defaults"  :key="index" :is="c"></component>
        </div>
    </div>

</template>

<script lang="ts">
    import TabTest from "./TabTest.vue";
    export default {
        components:{
            TabTest
        },
        setup(props,context){

            const defaults = context.slots.default() //判断用户传入的标签是否时tabs标签，vue会把每一个.vue文件最终转化成type对象的形式
            console.log(defaults[0])
            defaults.forEach((tag) => {
                console.log(tag.type)
                console.log(tag.type.name !== 'TabTest')
                if(tag.type.name !== 'TabTest') {
                    throw  new Error('Tabs 子标签必须是 Tab')
                }
            })
            const titles = defaults.map((tag) => { //获取用户传入的title标签
               return tag.props.title
            })
            return {defaults,titles}
        }
    }
</script>
<style lang="scss">
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;
    .gulu-tabs {
        &-nav {
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;
            &-item {
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;
                &:first-child {
                    margin-left: 0;
                }
                &.selected {
                    color: $blue;
                }
            }
        }
        &-content {
            padding: 8px 0;
        }
    }
</style>
