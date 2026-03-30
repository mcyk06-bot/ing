'use strict';
/* ============================================================
   CREATURES 3D — Three.js ビルド関数
   依存: THREE.js (グローバル)
   index.html の matStd / mkMesh / makeDropShadow が
   先に定義されていればそれを流用、なければここで定義する。
============================================================ */

/* ----------------------------------------------------------
   ローカルヘルパー (index.html のグローバル版があればそちら優先)
---------------------------------------------------------- */
var _c3d_matStd = (typeof matStd !== 'undefined') ? matStd : function(col, rough, metal, opts) {
  var o = Object.assign({ color: col, roughness: rough, metalness: metal }, opts || {});
  return new THREE.MeshStandardMaterial(o);
};
var _c3d_mkMesh = (typeof mkMesh !== 'undefined') ? mkMesh : function(geo, mat) {
  var m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
};

var _c3d_shadowTexCache = null;
function _c3d_getShadowTex() {
  if (_c3d_shadowTexCache) return _c3d_shadowTexCache;
  var S = 256, cv = document.createElement('canvas');
  cv.width = cv.height = S;
  var cx2 = cv.getContext('2d');
  var gr = cx2.createRadialGradient(S/2, S/2, 0, S/2, S/2, S/2);
  gr.addColorStop(0,    'rgba(0,0,0,0.92)');
  gr.addColorStop(0.18, 'rgba(0,0,0,0.80)');
  gr.addColorStop(0.40, 'rgba(0,0,0,0.52)');
  gr.addColorStop(0.65, 'rgba(0,0,0,0.22)');
  gr.addColorStop(0.85, 'rgba(0,0,0,0.07)');
  gr.addColorStop(1.0,  'rgba(0,0,0,0)');
  cx2.fillStyle = gr;
  cx2.fillRect(0, 0, S, S);
  _c3d_shadowTexCache = new THREE.CanvasTexture(cv);
  return _c3d_shadowTexCache;
}
var _c3d_makeDropShadow = (typeof makeDropShadow !== 'undefined') ? makeDropShadow : function(rx, rz, opacity) {
  opacity = (opacity !== undefined) ? opacity : 0.58;
  var mat = new THREE.MeshBasicMaterial({
    map: _c3d_getShadowTex(), transparent: true,
    opacity: opacity, depthWrite: false
  });
  var shd = new THREE.Mesh(new THREE.PlaneGeometry(rx * 2.4, rz * 2.4), mat);
  shd.rotation.x = -Math.PI / 2;
  shd.position.y = 0.004;
  return shd;
};

/* ----------------------------------------------------------
   共通: ワンダーAI メタデータを設定
---------------------------------------------------------- */
function _c3d_setWanderMeta(g, R2, speed, alertSpeed) {
  g.userData.isCreature   = true;
  g.userData.phase        = R2() * Math.PI * 2;
  g.userData.baseY        = 0;
  g.userData.wanderTarget = new THREE.Vector3(0, 0, 0);
  g.userData.wanderSpeed  = speed || (0.008 + R2() * 0.005);
  g.userData.alertSpeed   = alertSpeed || (0.030 + R2() * 0.015);
  g.userData.wanderTimer  = 2.0 + R2() * 4.0;
  g.userData.wanderFacing = 0;
  g.userData.isAlert      = false;
}

/* ============================================================
   1. CLOTH CREATURE  (霊布型)
   visualType: 'cloth'
============================================================ */
function buildCreature(R2) {
  var g = new THREE.Group();
  var bodyH   = 1.5 + R2() * 0.4;
  var clothCol = R2() > 0.5 ? 0xe8e4dc : 0xd0ccc4;
  var clothMat = _c3d_matStd(clothCol, 0.95, 0.0);

  // 内部形状
  var inner = _c3d_mkMesh(new THREE.SphereGeometry(0.28, 10, 8),
    _c3d_matStd(0x111111, 1.0, 0.0));
  inner.position.y = bodyH * 0.62; g.add(inner);

  // メインドレープ
  var drape = _c3d_mkMesh(new THREE.SphereGeometry(0.35, 12, 10), clothMat.clone());
  drape.scale.set(1.0, 1.4, 0.88); drape.position.y = bodyH * 0.62; g.add(drape);

  // 布の折り目
  var nFolds = 5 + Math.floor(R2() * 4);
  for (var fi = 0; fi < nFolds; fi++) {
    var angle = (fi / nFolds) * Math.PI * 2 + R2() * 0.5;
    var foldH = bodyH * (0.55 + R2() * 0.4);
    var foldW = 0.18 + R2() * 0.14;
    var fold  = _c3d_mkMesh(new THREE.BoxGeometry(foldW, foldH, foldW * 0.5), clothMat.clone());
    var fr = 0.12 + R2() * 0.1;
    fold.position.set(Math.cos(angle) * fr, foldH / 2, Math.sin(angle) * fr);
    fold.rotation.y = angle + R2() * 0.4;
    fold.rotation.z = (R2() - 0.5) * 0.18;
    g.add(fold);
  }

  // 尖頂
  var top = _c3d_mkMesh(new THREE.CylinderGeometry(0.02, 0.25, bodyH * 0.25, 10), clothMat.clone());
  top.position.y = bodyH * 0.78 + bodyH * 0.12; g.add(top);

  // 眼
  var eyeGeo = new THREE.SphereGeometry(0.028, 8, 6);
  var eyeColOptions = [0xff4444, 0xffcc00, 0x44ffcc, 0xff44ff, 0xffffff];
  var eyeCol = eyeColOptions[Math.floor(R2() * eyeColOptions.length)];
  var eyeMat = new THREE.MeshStandardMaterial({
    color: eyeCol, emissive: new THREE.Color(eyeCol), emissiveIntensity: 6.0
  });
  var eyeL = new THREE.Mesh(eyeGeo, eyeMat);
  var eyeR = new THREE.Mesh(eyeGeo, eyeMat.clone());
  eyeL.position.set(-0.08, bodyH * 0.68, 0.22); g.add(eyeL);
  eyeR.position.set( 0.08, bodyH * 0.68, 0.22); g.add(eyeR);
  var eyePl = new THREE.PointLight(eyeCol, 1.2, 2.5, 2.0);
  eyePl.position.set(0, bodyH * 0.68, 0.3); g.add(eyePl);

  _c3d_setWanderMeta(g, R2, 0.008 + R2() * 0.005);
  g.userData.bodyH  = bodyH;
  g.userData.eyePl  = eyePl;

  g.add(_c3d_makeDropShadow(0.42, 0.42, 0.72));
  return g;
}

/* ============================================================
   2. INSECT CREATURE  (虫型 / 多面核・半透明殻・多面堆積・環冠)
   visualType: 'insect0' | 'insect1' | 'insect2' | 'insect3'
============================================================ */
function buildInsect(R2, forcedType) {
  var g = new THREE.Group();
  var type = (forcedType !== undefined) ? forcedType : Math.floor(R2() * 4);
  var s    = 0.55 + R2() * 0.45;
  var legMeshes  = [];
  var eyeMeshes  = [];
  var eyeEmissiveBase = 7.5 + R2() * 2.5;
  var eyeMatGlow = new THREE.MeshStandardMaterial({
    color: 0xff2a2a, emissive: new THREE.Color(0xff0000),
    emissiveIntensity: eyeEmissiveBase, roughness: 0.12, metalness: 0.25
  });

  var OBJ_COLS = [
    0xf8f4ee, 0xfafafa, 0xe8e4dc, 0xd4d0cc,
    0xc8c4c0, 0xf0ece4, 0xe4dcd4, 0x0c0c0a, 0x1a1816
  ];
  function rndObjCol() { return OBJ_COLS[Math.floor(R2() * OBJ_COLS.length)]; }
  var colMain = rndObjCol();
  var colDark = R2() > 0.5 ? 0x0c0c0a : OBJ_COLS[Math.floor(R2() * (OBJ_COLS.length - 2) + 2)];
  var shellMat = _c3d_matStd(colMain, 0.12 + R2() * 0.22, 0.45 + R2() * 0.35);
  var darkMat  = _c3d_matStd(colDark, 0.18 + R2() * 0.22, 0.35 + R2() * 0.35);
  var glassMat = new THREE.MeshStandardMaterial({
    color: colMain, roughness: 0.06, metalness: 0.08,
    transparent: true, opacity: 0.58 + R2() * 0.22
  });
  var accentCols = [0x00ffdd, 0xff0066, 0xffee00, 0x0088ff, 0xcc00ff, 0x00ff88];
  var accent = accentCols[Math.floor(R2() * accentCols.length)];
  var accentMat = new THREE.MeshStandardMaterial({
    color: accent, emissive: new THREE.Color(accent),
    emissiveIntensity: 2.2 + R2() * 1.6, roughness: 0.16, metalness: 0.22
  });

  function addTendril(angle, radius, len, thickness, phaseOffset) {
    var lg = new THREE.Group();
    lg.position.set(Math.cos(angle) * radius, 0.12 * s, Math.sin(angle) * radius);
    lg.rotation.y = angle + Math.PI / 2;
    var seg1 = _c3d_mkMesh(new THREE.BoxGeometry(thickness, len * 0.55, thickness * 0.8), darkMat.clone());
    seg1.position.set(0, -len * 0.18, 0); seg1.rotation.z = (R2() - 0.5) * 0.55;
    lg.add(seg1);
    var seg2 = _c3d_mkMesh(new THREE.BoxGeometry(thickness * 0.85, len * 0.55, thickness * 0.65), shellMat.clone());
    seg2.position.set(0, -len * 0.60, 0.06 * s); seg2.rotation.z = (R2() - 0.5) * 0.75;
    lg.add(seg2);
    var tip = _c3d_mkMesh(new THREE.BoxGeometry(thickness * 1.2, thickness * 0.55, thickness * 0.25), accentMat.clone());
    tip.position.set(0, -len * 0.88, 0.04 * s);
    lg.add(tip);
    lg.userData.legPhaseOffset = phaseOffset;
    legMeshes.push(lg);
    g.add(lg);
  }

  function addEyesCluster(y, z, count, spread) {
    var em = eyeMatGlow.clone();
    for (var i = 0; i < count; i++) {
      var ex = (R2() - 0.5) * spread;
      var ey = y + (R2() - 0.5) * spread * 0.5;
      var ez = z + (R2() - 0.5) * spread * 0.4;
      var e = _c3d_mkMesh(new THREE.SphereGeometry((0.03 + R2() * 0.028) * s, 10, 8), em);
      e.position.set(ex, ey, ez);
      g.add(e); eyeMeshes.push(e);
    }
  }

  var coreY = (0.30 + R2() * 0.16) * s;
  var coreR = (0.18 + R2() * 0.22) * s;
  var baseR = (0.22 + R2() * 0.18) * s;

  if (type === 0) {
    var core = _c3d_mkMesh(new THREE.IcosahedronGeometry(coreR, 0), shellMat);
    core.position.y = coreY; core.rotation.set(R2()*1.2, R2()*1.2, R2()*1.2); g.add(core);
    var ring = _c3d_mkMesh(new THREE.TorusGeometry(coreR*1.05, coreR*0.10, 10, 48), accentMat.clone());
    ring.position.y = coreY; ring.rotation.x = Math.PI/2 + (R2()-0.5)*0.35; ring.rotation.y = (R2()-0.5)*0.6; g.add(ring);
    addEyesCluster(coreY + 0.02*s, -coreR*0.9, 2 + Math.floor(R2()*2), 0.18*s);
    for (var i = 0; i < 6; i++) addTendril((i/6)*Math.PI*2+(R2()-0.5)*0.25, baseR, (0.55+R2()*0.35)*s, 0.05*s, i*(Math.PI/3));

  } else if (type === 1) {
    var cap = _c3d_mkMesh(new THREE.SphereGeometry(coreR*1.15, 14, 10), glassMat);
    cap.scale.set(1.2, 0.7, 1.4); cap.position.y = coreY + 0.02*s; g.add(cap);
    var spineN = 5 + Math.floor(R2() * 4);
    for (var si = 0; si < spineN; si++) {
      var t = si / Math.max(1, spineN-1);
      var finW = (0.08 + R2()*0.06)*s, finH = (0.18 + R2()*0.22)*s;
      var fin = _c3d_mkMesh(new THREE.BoxGeometry(finW, finH, 0.015*s), accentMat.clone());
      fin.position.set((R2()-0.5)*0.06*s, coreY+finH*0.25, (t-0.5)*coreR*2.4);
      fin.rotation.y = (R2()-0.5)*0.6; fin.rotation.x = (R2()-0.5)*0.4; g.add(fin);
    }
    addEyesCluster(coreY + 0.04*s, -coreR*0.85, 3 + Math.floor(R2()*2), 0.22*s);
    for (var j = 0; j < 8; j++) addTendril((j/8)*Math.PI*2+(R2()-0.5)*0.3, baseR*1.05, (0.50+R2()*0.45)*s, 0.045*s, j*(Math.PI/4));

  } else if (type === 2) {
    var c1 = _c3d_mkMesh(new THREE.OctahedronGeometry(coreR*0.9, 0), shellMat.clone());
    c1.position.y = coreY; c1.rotation.set(R2(), R2(), R2()); g.add(c1);
    var c2 = _c3d_mkMesh(new THREE.TetrahedronGeometry(coreR*0.55, 0), darkMat.clone());
    c2.position.y = coreY + coreR*0.65; c2.rotation.set(R2(), R2(), R2()); g.add(c2);
    var shardN = 10 + Math.floor(R2() * 10);
    for (var sh = 0; sh < shardN; sh++) {
      var aa = (sh / shardN) * Math.PI * 2;
      var rad = coreR * (1.10 + R2()*0.55);
      var shard = _c3d_mkMesh(new THREE.BoxGeometry(coreR*0.38, coreR*0.06, coreR*0.06), accentMat.clone());
      shard.position.set(Math.cos(aa)*rad, coreY+(R2()-0.5)*coreR*0.35, Math.sin(aa)*rad);
      shard.rotation.y = aa + Math.PI/2; shard.rotation.x = (R2()-0.5)*0.8; g.add(shard);
    }
    addEyesCluster(coreY + 0.03*s, -coreR*0.75, 2, 0.16*s);
    for (var k = 0; k < 6; k++) addTendril((k/6)*Math.PI*2+(R2()-0.5)*0.2, baseR*0.95, (0.72+R2()*0.55)*s, 0.05*s, k*(Math.PI/3));

  } else {
    var crown = _c3d_mkMesh(new THREE.TorusGeometry(coreR*1.25, coreR*0.12, 10, 52), accentMat.clone());
    crown.position.y = coreY + coreR*0.15;
    crown.rotation.x = (R2()-0.5)*0.7; crown.rotation.z = (R2()-0.5)*0.7; g.add(crown);
    var voidCore = _c3d_mkMesh(new THREE.SphereGeometry(coreR*0.62, 12, 10), darkMat.clone());
    voidCore.position.y = coreY; g.add(voidCore);
    var satN = 4 + Math.floor(R2() * 4);
    for (var st = 0; st < satN; st++) {
      var a4 = (st/satN)*Math.PI*2 + (R2()-0.5)*0.4;
      var sat = _c3d_mkMesh(new THREE.OctahedronGeometry(coreR*0.18, 0), shellMat.clone());
      sat.position.set(Math.cos(a4)*coreR*1.35, coreY+(R2()-0.5)*coreR*0.35, Math.sin(a4)*coreR*1.35);
      sat.rotation.set(R2(), R2(), R2()); g.add(sat);
    }
    addEyesCluster(coreY + 0.04*s, -coreR*0.70, 4 + Math.floor(R2()*2), 0.26*s);
    for (var t2 = 0; t2 < 10; t2++) addTendril((t2/10)*Math.PI*2+(R2()-0.5)*0.22, baseR*1.10, (0.48+R2()*0.40)*s, 0.042*s, t2*(Math.PI/5));
  }

  g.add(_c3d_makeDropShadow(0.48*s, 0.48*s, 0.72));
  _c3d_setWanderMeta(g, R2, 0.014 + R2()*0.008, 0.038 + R2()*0.018);
  g.userData.isInsect        = true;
  g.userData.insectType      = type;
  g.userData.insectScale     = s;
  g.userData.bodyH           = 0.62 * s;
  g.userData.legMeshes       = legMeshes;
  g.userData.eyeMeshes       = eyeMeshes;
  g.userData.eyeEmissiveBase = eyeEmissiveBase;
  return g;
}

/* ============================================================
   3. CRYSTAL CREATURE  (結晶体型)
   visualType: 'crystal'
   鋭い角柱クラスター + 発光コア + 細かいシャード群
============================================================ */
function buildCrystal(R2) {
  var g = new THREE.Group();
  var s = 0.5 + R2() * 0.5;

  // 属性由来のアクセントカラー
  var accentCols = [0x88ffff, 0xffdd00, 0x00aaff, 0xff88ff, 0xaaffaa, 0xff6600];
  var accent = accentCols[Math.floor(R2() * accentCols.length)];

  // マテリアル
  var cryMat = new THREE.MeshStandardMaterial({
    color: 0xd8eeff, roughness: 0.04, metalness: 0.1,
    transparent: true, opacity: 0.72 + R2() * 0.18
  });
  var glowMat = new THREE.MeshStandardMaterial({
    color: accent, emissive: new THREE.Color(accent),
    emissiveIntensity: 3.5 + R2() * 2.5,
    roughness: 0.05, metalness: 0.15,
    transparent: true, opacity: 0.85
  });
  var darkCryMat = new THREE.MeshStandardMaterial({
    color: 0x112233, roughness: 0.12, metalness: 0.55,
    transparent: true, opacity: 0.88
  });

  // 中央発光コア
  var coreSize = (0.12 + R2() * 0.10) * s;
  var core = _c3d_mkMesh(new THREE.OctahedronGeometry(coreSize, 0), glowMat);
  core.position.y = (0.32 + R2() * 0.12) * s;
  core.rotation.set(R2(), R2(), R2());
  g.add(core);

  // コアの発光ライト
  var corePl = new THREE.PointLight(accent, 1.8, 3.5, 2.0);
  corePl.position.copy(core.position);
  g.add(corePl);

  // メインクリスタル柱 (3〜6本)
  var pillarN = 3 + Math.floor(R2() * 4);
  for (var pi = 0; pi < pillarN; pi++) {
    var pa = (pi / pillarN) * Math.PI * 2 + R2() * 0.4;
    var pr = (0.06 + R2() * 0.10) * s;
    var ph = (0.35 + R2() * 0.45) * s;
    var pw = (0.04 + R2() * 0.06) * s;
    // 四角柱 + 先端を細くして疑似的な針状に
    var pillar = _c3d_mkMesh(new THREE.CylinderGeometry(pw * 0.2, pw, ph, 4), cryMat.clone());
    pillar.position.set(Math.cos(pa) * pr, ph / 2, Math.sin(pa) * pr);
    pillar.rotation.y = pa + R2() * 0.6;
    pillar.rotation.z = (R2() - 0.5) * 0.55;
    g.add(pillar);
  }

  // サブクリスタル (細かいシャード, 6〜12本)
  var shardN = 6 + Math.floor(R2() * 7);
  for (var shi = 0; shi < shardN; shi++) {
    var sha = R2() * Math.PI * 2;
    var shr = (0.08 + R2() * 0.18) * s;
    var shh = (0.08 + R2() * 0.22) * s;
    var shw = (0.015 + R2() * 0.025) * s;
    var mat = R2() > 0.55 ? glowMat.clone() : darkCryMat.clone();
    var shard = _c3d_mkMesh(new THREE.CylinderGeometry(shw * 0.15, shw, shh, 4), mat);
    shard.position.set(Math.cos(sha) * shr, (R2() * 0.28 + 0.04) * s, Math.sin(sha) * shr);
    shard.rotation.y = sha; shard.rotation.z = (R2() - 0.5) * 1.1;
    g.add(shard);
  }

  // 眼 (2〜4個)
  var eyeN = 2 + Math.floor(R2() * 3);
  var eyeMat = new THREE.MeshStandardMaterial({
    color: 0xff2222, emissive: new THREE.Color(0xff0000),
    emissiveIntensity: 8.0 + R2() * 3.0
  });
  for (var ei = 0; ei < eyeN; ei++) {
    var ea = (ei / eyeN) * Math.PI * 2;
    var er = coreSize * (0.5 + R2() * 0.4);
    var eye = new THREE.Mesh(new THREE.SphereGeometry(0.018 * s, 8, 6), eyeMat.clone());
    eye.position.set(
      Math.cos(ea) * er + core.position.x,
      core.position.y + (R2() - 0.5) * coreSize * 0.6,
      Math.sin(ea) * er + core.position.z - coreSize * 0.6
    );
    g.add(eye);
  }

  g.add(_c3d_makeDropShadow(0.40*s, 0.40*s, 0.60));
  _c3d_setWanderMeta(g, R2, 0.006 + R2() * 0.006, 0.025 + R2() * 0.012);
  g.userData.bodyH  = core.position.y;
  g.userData.eyePl  = corePl;
  g.userData.isCrystal = true;
  g.userData.coreRef   = core;
  return g;
}

/* ============================================================
   4. BLOB CREATURE  (液体核型)
   visualType: 'blob'
   球体クラスター + 不定形に変形したような有機的構造
============================================================ */
function buildBlob(R2) {
  var g    = new THREE.Group();
  var s    = 0.5 + R2() * 0.55;

  // ベースカラー (半透明ゼリー系)
  var blobCols = [0x88ddcc, 0x99ccff, 0xccbb88, 0xffaacc, 0xaaffaa, 0xffcc88];
  var blobCol  = blobCols[Math.floor(R2() * blobCols.length)];
  var accentCols = [0x00ffaa, 0xff2266, 0xffee00, 0x22aaff, 0xff88ff];
  var accent = accentCols[Math.floor(R2() * accentCols.length)];

  var blobMat = new THREE.MeshStandardMaterial({
    color: blobCol, roughness: 0.05, metalness: 0.0,
    transparent: true, opacity: 0.52 + R2() * 0.28
  });
  var innerMat = new THREE.MeshStandardMaterial({
    color: accent, emissive: new THREE.Color(accent),
    emissiveIntensity: 2.8 + R2() * 2.0, roughness: 0.08, metalness: 0.0,
    transparent: true, opacity: 0.72
  });
  var membraneMat = new THREE.MeshStandardMaterial({
    color: blobCol, roughness: 0.0, metalness: 0.0,
    transparent: true, opacity: 0.25 + R2() * 0.18, side: THREE.DoubleSide
  });

  // メイン球体 (変形スケールで有機感)
  var mainR = (0.25 + R2() * 0.15) * s;
  var main  = _c3d_mkMesh(new THREE.SphereGeometry(mainR, 16, 12), blobMat.clone());
  main.scale.set(1.0 + R2()*0.35, 0.75 + R2()*0.35, 1.0 + R2()*0.35);
  main.position.y = mainR * (0.9 + R2() * 0.3);
  g.add(main);

  // 内部核 (発光)
  var innerR = mainR * (0.35 + R2() * 0.25);
  var inner  = _c3d_mkMesh(new THREE.SphereGeometry(innerR, 10, 8), innerMat);
  inner.position.copy(main.position);
  inner.position.y += (R2() - 0.5) * mainR * 0.3;
  g.add(inner);

  // 発光ポイントライト
  var corePl = new THREE.PointLight(accent, 1.5, 3.0, 2.0);
  corePl.position.copy(inner.position);
  g.add(corePl);

  // 衛星バブル (3〜6個)
  var satN = 3 + Math.floor(R2() * 4);
  for (var si = 0; si < satN; si++) {
    var sa  = (si / satN) * Math.PI * 2 + R2() * 0.6;
    var sd  = mainR * (0.80 + R2() * 0.55);
    var sr  = mainR * (0.20 + R2() * 0.30);
    var sy  = main.position.y + (R2() - 0.5) * mainR * 0.8;
    var sat = _c3d_mkMesh(new THREE.SphereGeometry(sr, 12, 9), blobMat.clone());
    sat.scale.set(1.0 + R2()*0.4, 0.8 + R2()*0.4, 1.0 + R2()*0.4);
    sat.position.set(Math.cos(sa) * sd, sy, Math.sin(sa) * sd);
    g.add(sat);
  }

  // 外膜リング (薄い透明シート)
  var ringN = 2 + Math.floor(R2() * 2);
  for (var ri = 0; ri < ringN; ri++) {
    var rRad = mainR * (1.15 + ri * 0.22 + R2() * 0.15);
    var rTube = mainR * (0.025 + R2() * 0.02);
    var ringMesh = _c3d_mkMesh(new THREE.TorusGeometry(rRad, rTube, 8, 36), membraneMat.clone());
    ringMesh.position.copy(main.position);
    ringMesh.rotation.x = R2() * Math.PI;
    ringMesh.rotation.y = R2() * Math.PI;
    g.add(ringMesh);
  }

  // 眼 (3〜5個, 表面に分布)
  var eyeN = 3 + Math.floor(R2() * 3);
  var eyeMat = new THREE.MeshStandardMaterial({
    color: 0xff2222, emissive: new THREE.Color(0xff0000),
    emissiveIntensity: 9.0 + R2() * 3.5
  });
  for (var ei = 0; ei < eyeN; ei++) {
    var ea  = (ei / eyeN) * Math.PI * 2;
    var eEl = (R2() - 0.35) * Math.PI; // elevation
    var eRad = mainR;
    var eye = new THREE.Mesh(new THREE.SphereGeometry(0.022 * s, 8, 6), eyeMat.clone());
    eye.position.set(
      Math.cos(ea) * Math.cos(eEl) * eRad + main.position.x,
      main.position.y + Math.sin(eEl) * eRad,
      Math.sin(ea) * Math.cos(eEl) * eRad + main.position.z - eRad * 0.1
    );
    g.add(eye);
  }

  g.add(_c3d_makeDropShadow(0.45*s, 0.45*s, 0.65));
  _c3d_setWanderMeta(g, R2, 0.010 + R2() * 0.007, 0.028 + R2() * 0.014);
  g.userData.bodyH    = main.position.y;
  g.userData.eyePl    = corePl;
  g.userData.isBlob   = true;
  g.userData.mainBlobRef = main;
  g.userData.innerRef    = inner;
  return g;
}

/* ============================================================
   5. WIRE CREATURE  (骨格線型)
   visualType: 'wire'
   幾何学的な細線フレーム構造 + 発光ノード
============================================================ */
function buildWire(R2) {
  var g = new THREE.Group();
  var s = 0.5 + R2() * 0.55;

  // カラー
  var wireCols = [0x00ffcc, 0x88aaff, 0xffcc00, 0xff66aa, 0xaaffaa, 0xff8800];
  var wc  = wireCols[Math.floor(R2() * wireCols.length)];
  var wc2 = wireCols[Math.floor(R2() * wireCols.length)];

  var wireMat = new THREE.MeshStandardMaterial({
    color: wc, emissive: new THREE.Color(wc),
    emissiveIntensity: 1.8 + R2() * 1.4, roughness: 0.22, metalness: 0.55
  });
  var nodeMat = new THREE.MeshStandardMaterial({
    color: wc2, emissive: new THREE.Color(wc2),
    emissiveIntensity: 5.5 + R2() * 3.0, roughness: 0.1, metalness: 0.3
  });
  var eyeMat = new THREE.MeshStandardMaterial({
    color: 0xff2222, emissive: new THREE.Color(0xff0000),
    emissiveIntensity: 10.0 + R2() * 4.0
  });

  var WIRE_R = 0.015 * s;
  function addEdge(ax, ay, az, bx, by, bz) {
    var dx = bx-ax, dy = by-ay, dz = bz-az;
    var len = Math.sqrt(dx*dx + dy*dy + dz*dz);
    if (len < 0.001) return;
    var mid = new THREE.Vector3((ax+bx)/2, (ay+by)/2, (az+bz)/2);
    var edge = _c3d_mkMesh(new THREE.CylinderGeometry(WIRE_R, WIRE_R, len, 5), wireMat.clone());
    edge.position.copy(mid);
    var dir = new THREE.Vector3(dx, dy, dz).normalize();
    var up  = new THREE.Vector3(0, 1, 0);
    if (Math.abs(dir.y) > 0.999) up.set(1, 0, 0);
    edge.quaternion.setFromUnitVectors(up, dir);
    g.add(edge);
  }
  function addNode(x, y, z, r) {
    var nd = _c3d_mkMesh(new THREE.SphereGeometry(r || WIRE_R * 2.5, 8, 6), nodeMat.clone());
    nd.position.set(x, y, z);
    g.add(nd);
  }

  // フレームの種類 (3タイプをランダム選択)
  var frameType = Math.floor(R2() * 3);
  var centerY = (0.28 + R2() * 0.15) * s;
  var frameR  = (0.20 + R2() * 0.16) * s;

  if (frameType === 0) {
    // 正八面体フレーム
    var verts0 = [
      [0, frameR, 0], [0, -frameR, 0],
      [frameR, 0, 0], [-frameR, 0, 0],
      [0, 0, frameR],  [0, 0, -frameR]
    ];
    var edges0 = [
      [0,2],[0,3],[0,4],[0,5],
      [1,2],[1,3],[1,4],[1,5],
      [2,4],[4,3],[3,5],[5,2]
    ];
    for (var vi = 0; vi < verts0.length; vi++) {
      addNode(verts0[vi][0], verts0[vi][1] + centerY, verts0[vi][2], WIRE_R * 3);
    }
    for (var ei = 0; ei < edges0.length; ei++) {
      var va = verts0[edges0[ei][0]], vb = verts0[edges0[ei][1]];
      addEdge(va[0], va[1]+centerY, va[2], vb[0], vb[1]+centerY, vb[2]);
    }

  } else if (frameType === 1) {
    // 二重テトラ + 中心リング
    var tetR = frameR * 0.95;
    var verts1 = [];
    for (var ti = 0; ti < 3; ti++) {
      var ta = (ti / 3) * Math.PI * 2;
      verts1.push([Math.cos(ta)*tetR, centerY - tetR*0.5, Math.sin(ta)*tetR]);
      verts1.push([Math.cos(ta+Math.PI/3)*tetR*0.75, centerY + tetR*0.7, Math.sin(ta+Math.PI/3)*tetR*0.75]);
    }
    for (var tvi = 0; tvi < verts1.length; tvi++) {
      addNode(verts1[tvi][0], verts1[tvi][1], verts1[tvi][2], WIRE_R * 2.8);
    }
    // 下三角
    addEdge(verts1[0][0],verts1[0][1],verts1[0][2], verts1[2][0],verts1[2][1],verts1[2][2]);
    addEdge(verts1[2][0],verts1[2][1],verts1[2][2], verts1[4][0],verts1[4][1],verts1[4][2]);
    addEdge(verts1[4][0],verts1[4][1],verts1[4][2], verts1[0][0],verts1[0][1],verts1[0][2]);
    // 上三角
    addEdge(verts1[1][0],verts1[1][1],verts1[1][2], verts1[3][0],verts1[3][1],verts1[3][2]);
    addEdge(verts1[3][0],verts1[3][1],verts1[3][2], verts1[5][0],verts1[5][1],verts1[5][2]);
    addEdge(verts1[5][0],verts1[5][1],verts1[5][2], verts1[1][0],verts1[1][1],verts1[1][2]);
    // 縦接続
    for (var tci = 0; tci < 3; tci++) {
      addEdge(verts1[tci*2][0],verts1[tci*2][1],verts1[tci*2][2],
              verts1[tci*2+1][0],verts1[tci*2+1][1],verts1[tci*2+1][2]);
    }

  } else {
    // 螺旋ケージ (等間隔頂点を螺旋で接続)
    var aN = 10 + Math.floor(R2() * 6);
    var spiralVerts = [];
    for (var ai = 0; ai < aN; ai++) {
      var at  = ai / aN;
      var aAng = at * Math.PI * 4; // 2ターン
      var aH  = (at - 0.5) * frameR * 2.2 + centerY;
      var aR  = frameR * (0.6 + Math.sin(at * Math.PI) * 0.4);
      spiralVerts.push([Math.cos(aAng)*aR, aH, Math.sin(aAng)*aR]);
    }
    for (var avi = 0; avi < spiralVerts.length; avi++) {
      addNode(spiralVerts[avi][0], spiralVerts[avi][1], spiralVerts[avi][2], WIRE_R * 2);
      if (avi > 0) {
        addEdge(
          spiralVerts[avi-1][0], spiralVerts[avi-1][1], spiralVerts[avi-1][2],
          spiralVerts[avi][0],   spiralVerts[avi][1],   spiralVerts[avi][2]
        );
      }
      // クロス接続
      if (avi + Math.floor(aN/3) < spiralVerts.length && R2() > 0.55) {
        var ci2 = avi + Math.floor(aN / 3);
        addEdge(
          spiralVerts[avi][0], spiralVerts[avi][1], spiralVerts[avi][2],
          spiralVerts[ci2][0], spiralVerts[ci2][1], spiralVerts[ci2][2]
        );
      }
    }
  }

  // 眼 (2〜3個)
  var eyeN = 2 + Math.floor(R2() * 2);
  for (var wi = 0; wi < eyeN; wi++) {
    var wea = (wi / eyeN) * Math.PI * 2;
    var wer = frameR * (0.3 + R2() * 0.3);
    var eye = new THREE.Mesh(new THREE.SphereGeometry(0.020 * s, 8, 6), eyeMat.clone());
    eye.position.set(Math.cos(wea) * wer, centerY + (R2() - 0.5) * frameR * 0.4, Math.sin(wea) * wer - frameR * 0.2);
    g.add(eye);
  }

  // 発光ライト
  var wPl = new THREE.PointLight(wc, 1.2, 2.8, 2.0);
  wPl.position.set(0, centerY, 0);
  g.add(wPl);

  g.add(_c3d_makeDropShadow(0.36*s, 0.36*s, 0.55));
  _c3d_setWanderMeta(g, R2, 0.012 + R2() * 0.008, 0.032 + R2() * 0.016);
  g.userData.bodyH   = centerY;
  g.userData.eyePl   = wPl;
  g.userData.isWire  = true;
  g.userData.frameType = frameType;
  return g;
}

/* ============================================================
   DISPATCHER: visualType → ビルド関数
   index.html のスポーンコードから呼び出す統一インターフェイス
   使い方:
     var mesh = buildCreature3D(crDef.visualType, R2);
============================================================ */
function buildCreature3D(visualType, R2) {
  if (visualType === 'cloth') {
    return buildCreature(R2);
  } else if (visualType === 'crystal') {
    return buildCrystal(R2);
  } else if (visualType === 'blob') {
    return buildBlob(R2);
  } else if (visualType === 'wire') {
    return buildWire(R2);
  } else {
    // insect0 〜 insect3
    var t = parseInt(visualType.replace('insect', ''), 10);
    return buildInsect(R2, isNaN(t) ? 0 : t);
  }
}
