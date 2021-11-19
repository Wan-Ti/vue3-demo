<template>
    <div>
        <div v-for="(t,index) in titles" :key="index">
            {{t}}
        </div>
        <component  v-for="(c,index) in defaults"  :key="index" :is="c"></component>
    </div>
</template>

<script lang="ts">
    import TabTest from "./TabTest.vue";
    export default {
        name: "TabTest",
        components:{
            TabTest
        },
        setup(props,context){
            const defaults = context.slots.default() //判断用户传入的标签是否时tabs标签，vue会把每一个.vue文件最终转化成type对象的形式
            defaults.forEach((tag) => {
                if(tag.type !== TabTest) {
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
