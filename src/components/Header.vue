<template>
    <div class="header_box">
        <div class="user_info">
            <el-avatar size="default" :src="state.circleUrl" />
            <div class="name">你好，我是鲨鱼辣椒！~</div>
        </div>
        <div class="user_change">

            <el-dropdown>
                <el-button type="primary">
                    操作<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                    <el-dropdown-menu>
                    <el-dropdown-item>修改个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
        
    </div>
    
    
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
// import { useRouter } from 'vue-router';
// 以后可以做上传头像 跳转设置user信息等
const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})
</script>



<style lang="less" scoped>
.header_box {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user_info {
        display: flex;
        align-items: center;
        .name {
            font-size: 16px;
            font-weight: 600;
            margin-left: 30px;
        }
    }
    .el-dropdown {
        margin-right: 30px;
    }
}

</style>
