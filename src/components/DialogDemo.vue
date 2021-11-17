<template>
    <div>
        <Button @click="toggle">
            toggle
        </Button>
        <h1>示例</h1>
        <Button @click="showDialog">showDialog</Button>
    </div>
</template>
<script lang="ts">
    import Dialog from "../lib/Dialog.vue";
    import Button from "../lib/Button.vue";
    import {openDialog} from "../lib/openDialog"
    import { ref } from "vue";


    export default {
        components:{
            Dialog,Button
        },
        setup(){
            const x = ref(false)
            const toggle = ()=>{
                x.value = !x.value
            }
            const showDialog = () => {
                openDialog({
                    title:'标题',
                    content:'你好',
                    ok(){
                        console.log('你好')
                    },
                    cancel(){
                        console.log('关闭')
                    }
                })
            }
            return {x,toggle,showDialog}
        }
    }
</script>
