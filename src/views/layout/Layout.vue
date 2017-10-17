<template>
    <div class="app-wrapper">
        <div class="sidebar-wrapper">
            <sidebar class="sidebar-container"></sidebar>
        </div>
        <div>
        <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { Sidebar } from '@/views/layout'

export default {
    name: 'layout',
    components: {
        Sidebar
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        .sidebar-wrapper {
            width: 180px;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 1001;
            overflow: hidden;
            transition: all .28s ease-out;
        }
        .sidebar-container {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: -17px;
            overflow: scroll;
            transition: all .28s ease-out;
        }
    }
</style>
