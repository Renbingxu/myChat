<template>
    <div class="box">
        <div class="common-layout">
            <el-container>
                <el-header>
                    <Header></Header>
                </el-header>
                <el-container>
                    <el-aside width="200px">
                        <Aside></Aside>
                    </el-aside>
                    <el-container>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                    <!-- <el-footer>Footer</el-footer> -->
                    </el-container>
                </el-container>
            </el-container>
        </div>
    </div>
    
    
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
import { ref, } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
console.log(1111111)
const Login = 'Loginsss'
const userInformation = ref({
    user: '',
    password: '',
    notify: ''
})
const handleBtn = function() {
    // alert(1)
    router.push('home')
}

const handleInput = () => {
    console.log(13213123)
}

const test = () => {
    // alert(1321312)
    console.log(123123123)
}

</script>



<style lang="less" scoped>
.box {
    width: 100vw;
    height: 100vh;
    background: #ccc;
}
.common-layout {
    width: 100%;
    height: 100vh;
}
.el-container {
    width: 100%;
    height: 100%;
}
.el-aside {
    background: #fff;
    overflow-x: hidden;
}
.el-header {
    background: #999;
}
.el-main {
    background: yellow;
    height: calc(100vh-60px);
}
.el-aside {
    background: #666;
}
</style>
