import { io } from 'socket.io-client';
const URL = 'https://demo.rocket.chat\n';
const socketInstance = io(URL, {
    autoConnect: false
});
export default socketInstance
