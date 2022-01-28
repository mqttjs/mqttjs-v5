import test from 'ava';
import aedes from 'aedes';
import { createServer } from 'node:net';
import { connect } from '../dist/index.js';

test.before('set up aedes broker', async t => {
  t.context.broker = aedes();
  t.context.server = createServer(t.context.broker.handle);
  await new Promise(resolve => t.context.server.listen(1883, resolve));
});

/* TODO */
test('should send a CONNECT packet to the broker and receive a CONNACK', async t => {
  const client = await connect({
    brokerUrl: 'mqtt://localhost',
  });
});