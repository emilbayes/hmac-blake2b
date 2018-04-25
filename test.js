var sodium = require('sodium-universal')
var hmac = require('.')
var test = require('tape')

test('hmac', function (assert) {
  var mac = Buffer.alloc(hmac.BYTES)
  var key = Buffer.alloc(hmac.KEYBYTES)
  sodium.randombytes_buf(key)

  var data = Buffer.from('some data')

  hmac(mac, data, key)

  var expected = Buffer.from('3faf3c4632c98bc9c5ac7467a6c7448a5a57eb36c6d62ff5f1394e649ceff861dbb89fa0acd69f8d56081714732aaa8a181ec2c68afd2beaa6555220a8fc70dc', 'hex')
  assert.ok(expected.equals(mac))
  assert.end()
})
