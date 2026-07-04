const { Server } = require('socket.io');

const server = new Server();

function emitNewRequest_original(server, operatorIds, requestData) {
    operatorIds.forEach(id => {
        server.to(`operator_${id}`).emit('request_created', requestData);
    });
}

function emitNewRequest_optimized(server, operatorIds, requestData) {
    if (!operatorIds || operatorIds.length === 0) return;
    const rooms = operatorIds.map(id => `operator_${id}`);
    server.to(rooms).emit('request_created', requestData);
}

const operatorIds = Array.from({length: 10000}, (_, i) => `operator_${i}`);
const requestData = { data: 'test_large_payload_'.repeat(100) };

console.log("Warmup...");
emitNewRequest_original(server, operatorIds, requestData);
emitNewRequest_optimized(server, operatorIds, requestData);

let start = process.hrtime.bigint();
for (let i = 0; i < 100; i++) {
    emitNewRequest_original(server, operatorIds, requestData);
}
let end = process.hrtime.bigint();
console.log(`Original: ${(end - start) / 1000000n} ms`);

start = process.hrtime.bigint();
for (let i = 0; i < 100; i++) {
    emitNewRequest_optimized(server, operatorIds, requestData);
}
end = process.hrtime.bigint();
console.log(`Optimized: ${(end - start) / 1000000n} ms`);
