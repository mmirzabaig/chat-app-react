import { socket } from '../index.js';
const subscribeToTimer = async (cb) => {
  await socket.on('timer', async  (timestamp) => {
    await console.log(timestamp, 'mirza');
   return cb(null, timestamp);
  });

 await socket.emit('subscribeToTimer', 1000);
}
export { subscribeToTimer };
