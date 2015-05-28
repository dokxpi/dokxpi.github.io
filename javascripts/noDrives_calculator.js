
 function ccal()
  {
  var a = document.F.A.checked;
  var b = document.F.B.checked;
  var c = document.F.C.checked;
  var d = document.F.D.checked;
  var e = document.F.E.checked;
  var f = document.F.F.checked;
  var g = document.F.G.checked;
  var h = document.F.H.checked;
  var i = document.F.I.checked;
  var j = document.F.J.checked;
  var k = document.F.K.checked;
  var l = document.F.L.checked;
  var m = document.F.M.checked;
  var n = document.F.N.checked;
  var o = document.F.O.checked;
  var p = document.F.P.checked;
  var q = document.F.Q.checked;
  var r = document.F.R.checked;
  var s = document.F.S.checked;
  var t = document.F.T.checked;
  var u = document.F.U.checked;
  var v = document.F.V.checked;
  var w = document.F.W.checked;
  var x = document.F.X.checked;
  var y = document.F.Y.checked;
  var z = document.F.Z.checked;

  var as = 0, element = document.querySelector("#new");
  if (a) { as = as + 1; }
  if (b) { as = as + 2; }
  if (c) { as = as + 4; }
  if (d) { as = as + 8; }
  if (e) { as = as + 16; }
  if (f) { as = as + 32; }
  if (g) { as = as + 64; }
  if (h) { as = as + 128; }
  if (i) { as = as + 256; }
  if (j) { as = as + 512; }
  if (k) { as = as + 1024; }
  if (l) { as = as + 2048; }
  if (m) { as = as + 4096; }
  if (n) { as = as + 8192; }
  if (o) { as = as + 16384; }
  if (p) { as = as + 32768; }
  if (q) { as = as + 65536; }
  if (r) { as = as + 131072; }
  if (s) { as = as + 262144; }
  if (t) { as = as + 524288; }
  if (u) { as = as + 1048576; }
  if (v) { as = as + 2097152; }
  if (w) { as = as + 4194304; }
  if (x) { as = as + 8388608; }
  if (y) { as = as + 16777216; }
  if (z) { as = as + 33554432; }

  document.F.Wert.value = as;
  element.innerHTML = as;
  }

  function aaus()
  {
  document.F.A.checked = false;
  document.F.B.checked = false;
  document.F.C.checked = false;
  document.F.D.checked = false;
  document.F.E.checked = false;
  document.F.F.checked = false;
  document.F.G.checked = false;
  document.F.H.checked = false;
  document.F.I.checked = false;
  document.F.J.checked = false;
  document.F.K.checked = false;
  document.F.L.checked = false;
  document.F.M.checked = false;
  document.F.N.checked = false;
  document.F.O.checked = false;
  document.F.P.checked = false;
  document.F.Q.checked = false;
  document.F.R.checked = false;
  document.F.S.checked = false;
  document.F.T.checked = false;
  document.F.U.checked = false;
  document.F.V.checked = false;
  document.F.W.checked = false;
  document.F.X.checked = false;
  document.F.Y.checked = false;
  document.F.Z.checked = false;

  ccal();
  }

  function aan()
  {
  document.F.A.checked = true;
  document.F.B.checked = true;
  document.F.C.checked = true;
  document.F.D.checked = true;
  document.F.E.checked = true;
  document.F.F.checked = true;
  document.F.G.checked = true;
  document.F.H.checked = true;
  document.F.I.checked = true;
  document.F.J.checked = true;
  document.F.K.checked = true;
  document.F.L.checked = true;
  document.F.M.checked = true;
  document.F.N.checked = true;
  document.F.O.checked = true;
  document.F.P.checked = true;
  document.F.Q.checked = true;
  document.F.R.checked = true;
  document.F.S.checked = true;
  document.F.T.checked = true;
  document.F.U.checked = true;
  document.F.V.checked = true;
  document.F.W.checked = true;
  document.F.X.checked = true;
  document.F.Y.checked = true;
  document.F.Z.checked = true;

  ccal();
  }