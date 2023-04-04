<template>
    <div class="login_bg">
        <div class="login_box">
            <div class="login_title">{{Login}}</div>
            <div class="login_content">
                <div class="login_user login_user_name">
                    <div class="label">用户名</div>
                    <input class="login_input" v-model="userInformation.user" />
                </div>
                <div class="login_user login_user_password">
                    <div class="label">密码</div>
                    <input class="login_input" v-model="userInformation.password" />
                </div>
                <div class="login_user login_user_notify">
                    <div class="label">验证码</div>
                    <input class="login_input" v-model="userInformation.notify" />
                </div>
            </div>
            <div class="login_btn" >
                <button class="btn" @click.native="handleBtn">Sign in</button>
                <button class="btn" >Logon</button>
            </div>
        </div>
        <div class="ccc" @click="test">12312312312321</div>
    </div>
    
</template>

<script setup lang="ts">
import { userLogin } from '@/api/login';
import { ref, } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const Login = 'Login'
const userInformation = ref({
    user: '',
    password: '',
    notify: ''
})
const handleBtn = async () => {
    // alert(1)
    console.log('--------------------------')
    console.log(123213123)
    try {
        const result = await userLogin(userInformation.value)
        console.log(result.code === 200)
        console.log('--------------------------')
        if (result.code === 200 && result.data) {
            // router.push('home')
        }
        console.log(result)
    } catch (error) {
        console.log(error)
    }
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
.login_bg {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: #ccc;
    .login_box {
        width: 500px;
        // height: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        background: #fff;
        // display: flex;
        box-sizing: border-box;
        padding: 20px;
        .login_title {
            font-size: 26px;
            text-align: center;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .login_content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 160px;
            .login_user {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 20px;
                .label {
                    width: 80px;
                    text-align: justify;
                }
                .login_input {
                    display: inline-block;
                    height: 30px;
                    line-height: 30px;
                    padding: 0 10px;
                    text-decoration: none;
                    border: 1px solid blue;
                    margin-left: 30px;
                    flex: 1;
                    border-radius: 6px;
                    box-shadow: 0px 0px 1px 1px #a0c6f7;
                    outline: none;
                }
            }
        }
        .login_btn {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .btn {
                width: 160px;
                height: 40px;
                border-radius: 6px;
                background: #a0c6f7;
                color: #fff;
                text-align: center;
                line-height: 40px;
                margin-bottom: 20px;
                padding: 0;
                cursor: pointer;
                outline: none;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>
