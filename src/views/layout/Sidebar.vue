<template>
    <el-menu mode="vertical" theme="dark" :default-active="$route.path">
        <sidebar-item :routers="routerMaps"></sidebar-item>
    </el-menu>
</template>

<script>
import SidebarItem from './SidebarItem'
import { RouterMap } from '@/router'
export default {
    components: {
        SidebarItem
    },
    data() {
        return {
            routerMaps: RouterMap
        }
    }
}
</script>

<style>

</style>
