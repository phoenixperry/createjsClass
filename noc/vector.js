//from http://media.tojicode.com/sfjs-vectors/#31

Vec2.create = function(a, b) {
    return new Float32Array([a, b]);
} 

Vec2.add = function(a, b, out) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
}

Vec2.subtract = function(a, b, out) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
}

Vec2.scale = function(a, v, out) {
    out[0] = a[0] * v;
    out[1] = a[1] * v;
}

Vec2.normalize = function(a, out) {
    var iLen = 1 / Vec2.length(a);
    out[0] = a[0] * iLen;
    out[1] = a[1] * iLen;
}