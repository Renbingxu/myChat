// export const socket = new WebSocket('ws://localhost:8888')
let global_callback = null as any
let socket = null as any
const createSocket = (callback: any) => {
    if (socket) return
    return initSocket(callback)
}

const initSocket = (callback: any) => {
    const socket = new WebSocket('ws://localhost:3000', '11')
    global_callback = callback
    console.log('socket', socket)

    // send message

    socket.onopen = function (e) {
        console.log("Connection open ...");
        websocketOpen()
        //ws.send("Hello WebSockets!");
    };


    socket.onmessage = function (e) {
        websocketOnMessage(e)

    };
    socket.onclose = function (e) {
        console.log("Connection closed.")
        websocketClose(e)
    }

    socket.onerror = function (e) {
        console.log("Connection error ...");

        console.log(e)
        websocketError()
        //ws.send("Hello WebSockets!");
    };
    return socket
}
// open 
const websocketOpen = () => {

}

// onmessage 接收數據
const websocketOnMessage = (msg: any) => {
    console.log('接收消息', msg)
    let result = null as any
    if (msg.data instanceof Blob) {
        const reader = new FileReader();
        reader.readAsText(msg.data, "UTF-8");
        reader.onload = (e: any) => {
            console.log(e);
            if (typeof reader.result === "string") {
                result = JSON.parse(reader.result);
            }
            //console.log("websocket收到", result);
            global_callback(result);
        }
    } else {
        result = msg.data;
        //console.log("websocket收到", result);
        global_callback(result);
    }
}
// close
const websocketClose = (e: any) => {
    console.log('connection close 關了 我')
}

// error
const websocketError = () => {

}

// send
const websocketSend = (socket: any, data: any) => {
    console.log('發送數據' + data)
    socket.send(data)
}

// 外部使用的方法
const sendSocket = (socket: any, data: any) => {
    // 如果是開啓狀態 直接發送
    console.log(socket)
    if (socket.readyState === socket.OPEN) {
        websocketSend(socket ,data)
    }
    // 如果是正在開啓狀態
    else if (socket.readyState === socket.CONNECTION) {
        const timer = setTimeout(() => {
            websocketSend(socket, data)
            clearTimeout(timer)
        }, 1000)
    }
    // 如果是沒有開啓
    else {
        const timer = setTimeout(() => {
            websocketSend(socket, data)
            clearTimeout(timer)
        }, 1000)
    }
}

// close
const closeSocket = () => {
    socket.close()
}


export { sendSocket, createSocket, closeSocket }