/* eslint-disable camelcase */
const { randombytes_buf } = require('sodium-universal/randombytes')
const hmac = require('.')

const mac = Buffer.alloc(hmac.BYTES)
const key = Buffer.alloc(hmac.KEYBYTES)
randombytes_buf(key)

const data = Buffer.from('some data')

hmac(mac, data, key)
