<template>
    <div>
        <template v-for="item in routers">
            <router-link v-if="!item.hidden && item.noDropdown && item.children.length > 0" :to="item.path+'/'+item.children[0].path">
                <el-menu-item :index="item.path+'/'+item.children[0].path">
                    <i v-if="item.icon" :class="item.icon" /> {{ item.name }}
                </el-menu-item>
            </router-link>
            <el-submenu :index="item.name" v-if="!item.noDropdown && !item.hidden">
                <template slot="title">
                    <i v-if="item.icon" :class="item.icon" /> {{ item.name }}
                </template>
                <template v-for="child in item.children" v-if="!child.hidden">
                    <sidebar-item class='menu-indent' v-if='child.children&&child.children.length>0' :routers='[child]'></sidebar-item>
                    <router-link v-else class="menu-indent" :to="item.path+'/'+child.path">
                        <el-menu-item :index="item.path+'/'+child.path">
                            {{ child.name }}
                        </el-menu-item>
                    </router-link>
                </template>
            </el-submenu>
        </template>
    </div>
</template>

<script>
export default {
    name: 'SidebarItem',
    props: {
        routers: {
            type: Array
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .menu-indent {
        display: block;
        text-indent: 10px;
    }
</style>
