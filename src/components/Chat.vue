<template>
    <div class="chat_box">
        <div class="chat_content" ref="chatContentBox">
            <div class="chat_title">{{ chatName }}</div>
            <template v-for="(item, index) in chatContent" :key="index">
                <div :class="['chat_item', item.user === 1 ? 'chat_mine' : '']" >
                    <div class="avator">
                        <el-avatar size="small" :src="state.circleUrl" />
                    </div>
                    <div class="content" v-html="item.content"></div>
                </div>
            </template>
            
        </div>
        <div class="chat_menu"></div>
        <div class="chat_input">
            <!-- <el-input v-model="currentContent" type="textarea" resize="none" autofocus="true" /> -->
            <textarea @keypress="handleEnter($event)" class="chat_textarea" name="" id="" cols="30" rows="10" v-model="currentContent"></textarea>
        </div>
        
    </div>
    
    
</template>

<script setup lang="ts">
import { createSocket, sendSocket, closeSocket } from '@/api/socket';
import { content } from '@/mock/chatContent';
import { Socket } from 'dgram';
import { ref, reactive, onMounted, onUnmounted } from 'vue'
const chatName = ref('xxxxChat')
// 聊天内容
const chatContent = ref([] as {
    user: Number;
    content: String;
}[])
// current warite content
const currentContent = ref('')
// chatBox ref
const chatContentBox = ref('chatContentBox') as any
const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})

// 控制 scroll
const handleScroll = () => {
    if (chatContentBox.value.scrollHeight > chatContentBox.value.scrollTop) {
        const timer = setTimeout(() => {
            chatContentBox.value.scrollTop = chatContentBox.value.scrollHeight
            clearTimeout(timer)
        }, 100)
        
    }
}

// textarea 事件
const handleEnter = (e: any) => {
    if (!e.shiftKey && e.keyCode === 13) {
        // 展示到聊天框内
        // websocket 发送
        sendSocket(socketObj, currentContent.value)
        chatContent.value.push({
            content: currentContent.value,
            user: 1
        })
        // 清除当前所输入内容
        currentContent.value = ''
        handleScroll()

        e.preventDefault();//这句话可以阻止回车事件冒泡;如果注释掉这句话,那么会有空格残余

        
    }
}

// websocket 的回調函數
const callback = (msg: any) => {
    console.log('websocket的回調函數收到服務器消息'+ msg)
}
let socketObj = null as any
onMounted(() => {
    chatContent.value = content
    // 創建socket鏈接
    socketObj = createSocket(callback)
})
onUnmounted(() => {
    // 關閉此次鏈接
    closeSocket()
})
</script>



<style lang="less" scoped>
.chat_box {
    height: 100%;
    overflow: hidden;
    .chat_content {
        height: 420px;
        background: #fff;
        border: #000 10px solid;
        box-sizing: border-box;
        padding: 10px;
        padding-top: 0;
        overflow: scroll;
        position: relative;
        .chat_title {
            text-align: left;
            font-size: 22px;
            font-weight: blod;
            padding-bottom: 10px;
            border-bottom: 2px solid #000;
            position: sticky;
            top: 0;
            background: #fff;
            margin-bottom: 10px;
        }
        .chat_item {
            display: flex;
            margin-bottom: 10px;
            .avator {
                margin-right: 10px;
            }
        }
        .chat_mine {
            justify-content: right;
            flex-direction: row-reverse;
            .avator {
                margin-left: 10px;
                margin-right: 0;
            }
        }
        .content {
            background: gray;
            padding: 10px;
            border-radius: 6px;
            max-width: 600px;
            text-align: left;
        }
    }
    .chat_menu {
        height: 20px;
        border: #000 10px solid;
        border-top: 0;
    }
    .chat_input {
        height: 120px;
        background: #fff;
        border: #000 10px solid;
        border-top: 0;
        box-sizing: border-box;
        // :deep(.el-textarea__inner) {
        //     height: 100%;
        //     text-decoration: none;
        //     border: 0;
        //     &:focus {
        //         outline: none;
        //     }
        // }
        // .el-textarea {
        //     // display: inline-block;
        //     height: 80px;
            
        // }
        .chat_textarea {
            padding: 6px 14px;
            width: 100%;
            height: 80px;
            border: 0;
            outline: none;
            box-sizing: border-box;
            resize: none;
            font-size: 24px;
        }
    }
}
</style>
