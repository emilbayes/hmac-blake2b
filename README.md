# `hmac-blake2b`

[![Build Status](https://github.com/emilbayes/hmac-blake2b/actions/workflows/npm.yml/badge.svg)](https://github.com/emilbayes/hmac-blake2b/actions/workflows/npm.yml)

> HMAC based on BLAKE2b

Even though BLAKE2b is designed to also work as a MAC, specifications like
[Noise](http://noiseprotocol.org/noise.html#hash-functions-and-hashing) call for
a HMAC.

## Usage

```js
const { randombytes_buf } = require('sodium-universal/randombytes')
const hmac = require('.')

const mac = Buffer.alloc(hmac.BYTES)
const key = Buffer.alloc(hmac.KEYBYTES)
randombytes_buf(key)

const data = Buffer.from('some data')

hmac(mac, data, key)

```

## API

### `hmac.BYTES`

Size of the output MAC in bytes

### `hmac.KEYBYTES`

[RFC2104](https://www.ietf.org/rfc/rfc2104.txt) recommended size of the key in
bytes.

### `hmac(out, data, key)`

Computes a HMAC from `data` with `key` and writes it into `out`.

* `out` must be a `Buffer` or `Uint8Array` of length `hmac.BYTES`
* `data` must be a `Buffer`, `Uint8Array` or `Array` of `Buffer`s or
  `Uint8Array`s.
* `key` must be a `Buffer` or `Uint8Array`. Per the HMAC spec `key` can be as
  small as 1 byte, in which case it is right-padded with `NUL` bytes, or any
  size larger than `hmac.KEYBYTES` in which case it is hashed down to fit. The
  recommended size by the spec is `hmac.KEYBYTES`

## Install

```sh
npm install hmac-blake2b
```

## License

[ISC](LICENSE)
