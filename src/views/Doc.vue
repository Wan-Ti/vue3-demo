<template>
    <div class="layout">
        <Topnav :toggle-menu-button-visible="true" class="nav" />
        <div class="content">
            <aside v-if="menuVisible">
                <h2>文档</h2>
                <ol>
                    <li>
                        <router-link to="/doc/Intro"> 介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/Install"> 安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/Get-started"> 开始使用</router-link>
                    </li>
                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/SwitchDemo">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/ButtonDemo">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/DialogDemo">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/TabsDemo">Tabs 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/TabsTestDemo">测试Tabs组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/SwitchTestDemo">测试Switch组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/ButtonTestDemo">测试Button组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>
<script lang="ts">
    import Topnav from "../components/Topnav.vue";
    import { inject, Ref } from "vue";
    export default {
        components: { Topnav },
        setup() {
            const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
            return { menuVisible };
        },
    };
</script>
<style lang="scss" scoped>

    .layout {
        display: flex;
        flex-direction: column;
        height: 100vh;
        > .nav {
            flex-shrink: 0;
        }
        > .content {
            flex-grow: 1;
            padding-top: 60px;
            padding-left: 156px;
            @media (max-width: 500px) {
                padding-left: 0;
            }
        }
    }
    .content {
        display: flex;
        > aside {
            flex-shrink: 0;
            z-index: 10;
        }
        > main {
            flex-grow: 1;
            padding: 16px;
            background: white;
        }
    }
    aside {
        background: lightblue;
        width: 150px;
        padding: 16px 0;
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 70px;
        height: 100%;

        > h2 {
            margin-bottom: 4px;
            padding: 0 16px;
        }
        > ol {
            > li {
                > a{
                    display: block;
                    padding: 4px 16px;
                    text-decoration: none;
                }
                .router-link-active {
                    background-color: #ffffff;
                }
            }
        }
    }
    main {
        overflow: auto;
    }
</style>
