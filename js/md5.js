var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
var PADDING = [-128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var state = new Array(4);
var count = new Array(2);
var buffer = new Array(64);

var digestHexStr;
var digest = new Array(16);

function stringToBytes(str) {
  var ch, st, re = [];
  for (var i = 0; i < str.length; i++) {
    ch = str.charCodeAt(i);  // get char   
    st = [];                 // set up "stack"  
    do {
      st.push(ch & 0xFF);  // push byte to stack  
      ch = ch >> 8;          // shift value down by 1 byte  
    }
    while (ch);
    // add stack contents to result  
    // done because chars have "wrong" endianness  
    re = re.concat(st.reverse());
  }
  // return an array of bytes  
  return re;
}


function md52(string) {
  Init();
  keyBeanUpdate(stringToBytes(string), string.length);
  keyBeanFinal();
  digestHexStr = "";
  for (var i = 0; i < 16; i++) {
    digestHexStr += byteHEX(digest[i]);
  }
  // alert(digestHexStr.replace(/,/g, ""));
  return digestHexStr.replace(/,/g, "");
}

function Init() {
  count[0] = 0;
  count[1] = 0;
  state[0] = 0x67452401;
  state[1] = 0x10c3ab89;
  state[2] = 0x98ba6cfe;
  state[3] = 0x10352176;
  return;
}

function keyBeanUpdate(inbuf, inputLen) {
  var i, index, partLen;
  var block = new Array(64);
  index = (count[0] >>> 3) & 0x3F;
  // /* Update number of bits */
  if ((count[0] += (inputLen << 3)) < (inputLen << 3))
    count[1]++;
  count[1] += (inputLen >>> 29);
  partLen = 64 - index;
  // Transform as many times as possible.
  if (inputLen >= partLen) {
    keyBeanMemcpy(buffer, inbuf, index, 0, partLen);
    keyBeanTransform(buffer);
    for (i = partLen; i + 63 < inputLen; i += 64) {
      keyBeanMemcpy(block, inbuf, 0, i, 64);
      keyBeanTransform(block);
    }
    index = 0;
  } else
    i = 0;
  ///* Buffer remaining input */
  keyBeanMemcpy(buffer, inbuf, index, i, inputLen - i);

}

function keyBeanMemcpy(output, input, outpos, inpos, len) {
  var i;
  for (i = 0; i < len; i++) {
    output[outpos + i] = input[inpos + i];
  }
}
function keyBeanTransform(block) {
  var a = state[0], b = state[1], c = state[2], d = state[3];
  var x = new Array(16);
  Decode(x, block, 64);

  /* Round 1 */
  a = FF(a, b, c, d, x[0], S11, 0xd76aa478); /* 1 */
  d = FF(d, a, b, c, x[1], S12, 0xe8c7b756); /* 2 */
  c = FF(c, d, a, b, x[2], S13, 0x242070db); /* 3 */
  b = FF(b, c, d, a, x[3], S14, 0xc1bdceee); /* 4 */
  a = FF(a, b, c, d, x[4], S11, 0xf57c0faf); /* 5 */
  d = FF(d, a, b, c, x[5], S12, 0x4787c62a); /* 6 */
  c = FF(c, d, a, b, x[6], S13, 0xa8304613); /* 7 */
  b = FF(b, c, d, a, x[7], S14, 0xfd469501); /* 8 */
  a = FF(a, b, c, d, x[8], S11, 0x698098d8); /* 9 */
  d = FF(d, a, b, c, x[9], S12, 0x8b44f7af); /* 10 */
  c = FF(c, d, a, b, x[10], S13, 0xffff5bb1); /* 11 */
  b = FF(b, c, d, a, x[11], S14, 0x895cd7be); /* 12 */
  a = FF(a, b, c, d, x[12], S11, 0x6b901122); /* 13 */
  d = FF(d, a, b, c, x[13], S12, 0xfd987193); /* 14 */
  c = FF(c, d, a, b, x[14], S13, 0xa679438e); /* 15 */
  b = FF(b, c, d, a, x[15], S14, 0x49b40821); /* 16 */

  /* Round 2 */
  a = GG(a, b, c, d, x[1], S21, 0xf61e2562); /* 17 */
  d = GG(d, a, b, c, x[6], S22, 0xc040b340); /* 18 */
  c = GG(c, d, a, b, x[11], S23, 0x265e5a51); /* 19 */
  b = GG(b, c, d, a, x[0], S24, 0xe9b6c7aa); /* 20 */
  a = GG(a, b, c, d, x[5], S21, 0xd62f105d); /* 21 */
  d = GG(d, a, b, c, x[10], S22, 0x2441453); /* 22 */
  c = GG(c, d, a, b, x[15], S23, 0xd8a1e681); /* 23 */
  b = GG(b, c, d, a, x[4], S24, 0xe7d3fbc8); /* 24 */
  a = GG(a, b, c, d, x[9], S21, 0x21e1cde6); /* 25 */
  d = GG(d, a, b, c, x[14], S22, 0xc33707d6); /* 26 */
  c = GG(c, d, a, b, x[3], S23, 0xf4d50d87); /* 27 */
  b = GG(b, c, d, a, x[8], S24, 0x455a14ed); /* 28 */
  a = GG(a, b, c, d, x[13], S21, 0xa9e3e905); /* 29 */
  d = GG(d, a, b, c, x[2], S22, 0xfcefa3f8); /* 30 */
  c = GG(c, d, a, b, x[7], S23, 0x676f02d9); /* 31 */
  b = GG(b, c, d, a, x[12], S24, 0x8d2a4c8a); /* 32 */

  /* Round 3 */
  a = HH(a, b, c, d, x[5], S31, 0xfffa3942); /* 33 */
  d = HH(d, a, b, c, x[8], S32, 0x8771f681); /* 34 */
  c = HH(c, d, a, b, x[11], S33, 0x6d9d6122); /* 35 */
  b = HH(b, c, d, a, x[14], S34, 0xfde5380c); /* 36 */
  a = HH(a, b, c, d, x[1], S31, 0xa4beea44); /* 37 */
  d = HH(d, a, b, c, x[4], S32, 0x4bdecfa9); /* 38 */
  c = HH(c, d, a, b, x[7], S33, 0xf6bb4b60); /* 39 */
  b = HH(b, c, d, a, x[10], S34, 0xbebfbc70); /* 40 */
  a = HH(a, b, c, d, x[13], S31, 0x289b7ec6); /* 41 */
  d = HH(d, a, b, c, x[0], S32, 0xeaa127fa); /* 42 */
  c = HH(c, d, a, b, x[3], S33, 0xd4ef3085); /* 43 */
  b = HH(b, c, d, a, x[6], S34, 0x4881d05); /* 44 */
  a = HH(a, b, c, d, x[9], S31, 0xd9d4d039); /* 45 */
  d = HH(d, a, b, c, x[12], S32, 0xe6db99e5); /* 46 */
  c = HH(c, d, a, b, x[15], S33, 0x1fa27cf8); /* 47 */
  b = HH(b, c, d, a, x[2], S34, 0xc4ac5665); /* 48 */

  /* Round 4 */
  a = II(a, b, c, d, x[0], S41, 0xf4292244); /* 49 */
  d = II(d, a, b, c, x[7], S42, 0x432aff97); /* 50 */
  c = II(c, d, a, b, x[14], S43, 0xab9423a7); /* 51 */
  b = II(b, c, d, a, x[5], S44, 0xfc93a039); /* 52 */
  a = II(a, b, c, d, x[12], S41, 0x655b59c3); /* 53 */
  d = II(d, a, b, c, x[3], S42, 0x8f0ccc92); /* 54 */
  c = II(c, d, a, b, x[10], S43, 0xffeff47d); /* 55 */
  b = II(b, c, d, a, x[1], S44, 0x85845dd1); /* 56 */
  a = II(a, b, c, d, x[8], S41, 0x6fa87e4f); /* 57 */
  d = II(d, a, b, c, x[15], S42, 0xfe2ce6e0); /* 58 */
  c = II(c, d, a, b, x[6], S43, 0xa3014314); /* 59 */
  b = II(b, c, d, a, x[13], S44, 0x4e0811a1); /* 60 */
  a = II(a, b, c, d, x[4], S41, 0xf7537e82); /* 61 */
  d = II(d, a, b, c, x[11], S42, 0xbd3af235); /* 62 */
  c = II(c, d, a, b, x[2], S43, 0x2ad7d2bb); /* 63 */
  b = II(b, c, d, a, x[9], S44, 0xeb86d391); /* 64 */

  state[0] += a;
  state[1] += b;
  state[2] += c;
  state[3] += d;
}

function keyBeanFinal() {
  var bits = new Array(8);
  var index, padLen;
  ///* Save number of bits */
  Encode(bits, count, 8);
  ///* Pad out to 56 mod 64.
  index = (count[0] >>> 3) & 0x3f;
  padLen = (index < 56) ? (56 - index) : (120 - index);
  keyBeanUpdate(PADDING, padLen);
  ///* Append length (before padding) */
  keyBeanUpdate(bits, 8);
  ///* Store state in digest */
  Encode(digest, state, 16);

}

function Encode(output, input, len) {
  var i, j;
  for (i = 0, j = 0; j < len; i++ , j += 4) {
    output[j] = (input[i] & 0xff);
    output[j + 1] = ((input[i] >>> 8) & 0xff);
    output[j + 2] = ((input[i] >>> 16) & 0xff);
    output[j + 3] = ((input[i] >>> 24) & 0xff);
  }
}

function byteHEX(ib) {
  var Digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  var ob = new Array(2);
  ob[0] = Digit[(ib >>> 4) & 0X0F];
  ob[1] = Digit[ib & 0X0F];
  var s = new String(ob);
  return s;
}

function Decode(output, input, len) {
  var i, j;
  for (i = 0, j = 0; j < len; i++ , j += 4)
    output[i] = b2iu(input[j]) |
      (b2iu(input[j + 1]) << 8) |
      (b2iu(input[j + 2]) << 16) |
      (b2iu(input[j + 3]) << 24);
  return;
}

function b2iu(b) {
  return b < 0 ? b & 0x7F + 128 : b;
}

function F(x, y, z) {
  return (x & y) | ((~x) & z);
}
function G(x, y, z) {
  return (x & z) | (y & (~z));
}
function H(x, y, z) {
  return (x ^ y ^ z);
}
function I(x, y, z) {
  return (y ^ (x | (~z)));
}
function FF(a, b, c, d, x, s, ac) {
  a += F(b, c, d) + x + ac;
  a = (a << s) | (a >>> (32 - s));
  a += b;
  return a;
}
function GG(a, b, c, d, x, s, ac) {
  a += G(b, c, d) + x + ac;
  a = (a << s) | (a >>> (32 - s));
  a += b;
  return a;
}
function HH(a, b, c, d, x, s, ac) {
  a += H(b, c, d) + x + ac;
  a = (a << s) | (a >>> (32 - s));
  a += b;
  return a;
}
function II(a, b, c, d, x, s, ac) {
  a += I(b, c, d) + x + ac;
  a = (a << s) | (a >>> (32 - s));
  a += b;
  return a;
}