<demo>示例</demo>
<template>
    <Button @click="showDialog">showDialog</Button>
</template>

<script lang="ts">
    import Dialog from "../lib/Dialog.vue";
    import Button from "../lib/Button.vue";
    import {openDialog} from "../lib/openDialog"
    export default {
        components:{
            Dialog,Button
        },
        setup(){
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
            return {showDialog}
        }
    }
</script>
