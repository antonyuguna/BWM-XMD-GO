const { Server } = require('socket.io');

const server = new Server();

// Mock emit
let emitCount = 0;
server.emit = function() { emitCount++; }
server.to = function(rooms) {
    return {
        emit: () => {
            emitCount++;
        }
    }
}

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

const operatorIds = Array.from({length: 100000}, (_, i) => `operator_${i}`);
const requestData = { data: 'test' };

const start1 = process.hrtime.bigint();
emitNewRequest_original(server, operatorIds, requestData);
const end1 = process.hrtime.bigint();
console.log(`Original: ${(end1 - start1) / 1000000n} ms`);

const start2 = process.hrtime.bigint();
emitNewRequest_optimized(server, operatorIds, requestData);
const end2 = process.hrtime.bigint();
console.log(`Optimized: ${(end2 - start2) / 1000000n} ms`);
