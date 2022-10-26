!(function (e) {
  var i = /iPhone/i,
    o = /iPod/i,
    t = /iPad/i,
    n = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
    d = /Android/i,
    s = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
    b =
      /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
    r = /IEMobile/i,
    h = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
    l = /BlackBerry/i,
    a = /BB10/i,
    p = /Opera Mini/i,
    f = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
    u = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
    c = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
    v = function (e, i) {
      return e.test(i);
    },
    w = function (e) {
      var w = e || navigator.userAgent,
        A = w.split("[FBAN");
      return (
        void 0 !== A[1] && (w = A[0]),
        void 0 !== (A = w.split("Twitter"))[1] && (w = A[0]),
        (this.apple = {
          phone: v(i, w),
          ipod: v(o, w),
          tablet: !v(i, w) && v(t, w),
          device: v(i, w) || v(o, w) || v(t, w),
        }),
        (this.amazon = {
          phone: v(s, w),
          tablet: !v(s, w) && v(b, w),
          device: v(s, w) || v(b, w),
        }),
        (this.android = {
          phone: v(s, w) || v(n, w),
          tablet: !v(s, w) && !v(n, w) && (v(b, w) || v(d, w)),
          device: v(s, w) || v(b, w) || v(n, w) || v(d, w),
        }),
        (this.windows = {
          phone: v(r, w),
          tablet: v(h, w),
          device: v(r, w) || v(h, w),
        }),
        (this.other = {
          blackberry: v(l, w),
          blackberry10: v(a, w),
          opera: v(p, w),
          firefox: v(u, w),
          chrome: v(f, w),
          device: v(l, w) || v(a, w) || v(p, w) || v(u, w) || v(f, w),
        }),
        (this.seven_inch = v(c, w)),
        (this.any =
          this.apple.device ||
          this.android.device ||
          this.windows.device ||
          this.other.device ||
          this.seven_inch),
        (this.phone =
          this.apple.phone || this.android.phone || this.windows.phone),
        (this.tablet =
          this.apple.tablet || this.android.tablet || this.windows.tablet),
        "undefined" == typeof window ? this : void 0
      );
    },
    A = function () {
      var e = new w();
      return (e.Class = w), e;
    };
  "undefined" != typeof module && module.exports && "undefined" == typeof window
    ? (module.exports = w)
    : "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof window
    ? (module.exports = A())
    : "function" == typeof define && define.amd
    ? define("isMobile", [], (e.isMobile = A()))
    : (e.isMobile = A());
})(this);
