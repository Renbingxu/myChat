



<template>
    <div class="aside_box">
        <div class="aside_view">
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            >
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>已加入</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="1-1">聊天室1</el-menu-item>
                        <el-menu-item index="1-2">聊天室2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                        <template #title>item four</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <el-icon><document /></el-icon>
                    <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon><setting /></el-icon>
                    <span>Navigator Four</span>
                </el-menu-item>
            </el-menu>
        </div>
        
        
    </div>
    
    
</template>

<script setup lang="ts">

import { ref, reactive } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
// import { useRouter } from 'vue-router';
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>



<style lang="less" scoped>
.aside_box {
    width: 200px;
    height: 100%;
    overflow: hidden;
    .aside_view {
        width: 220px;
        height: 100%;
        background: blue;
        overflow-y: scroll;
        overflow-x: hidden;
    }
}

</style>
