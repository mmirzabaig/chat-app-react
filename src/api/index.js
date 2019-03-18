import { socket } from '../index.js';
const subscribeToTimer = async (cb) => {
  await socket.on('timer', async  (timestamp) => {
   return cb(null, timestamp);
  });
  await socket.on('someEvent', async (data) => {
  await console.log(data, 'fej;oiawjefo;iawjho;iawj;oiawjfe;onafewoeowa');
  })

 await socket.emit('subscribeToTimer', 1000);
}
export { subscribeToTimer };
