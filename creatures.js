'use strict';
/* ============================================================
   CREATURE DATA — 20 謎の生命体
   名前はサンスクリット語からカタカナ変換・改変
   visualType: 'cloth' | 'insect0' | 'insect1' | 'insect2' | 'insect3'
============================================================ */
var CREATURE_DATA = [
  // ---- cloth 系 (霊布型) ---- 5種
  {
    id: 0, names: 'वुतन', name: 'ヴタン', type: '霊体型', element: '闇', danger: 'S',
    visualType: 'cloth',
    caption: '観測した瞬間、観測者の記憶から自らの痕跡を消去する。存在することを望まれていない。'
  },
  {
    id: 1, names: 'प्रणव', name: 'プラナヴ', type: '気息型', element: '風', danger: 'A',
    visualType: 'cloth',
    caption: '呼吸リズムを周囲の生命体から少しずつ借用する。長時間の接触は危険とされる。'
  },
  {
    id: 2, names: 'आत्मन्', name: 'アトマン', type: '魂体型', element: '光', danger: 'S',
    visualType: 'cloth',
    caption: '固有の自己を持たず、直近に観測した存在の内側を鏡のように反射し続ける。'
  },
  {
    id: 3, names: 'नागरी', name: 'ナガーリ', type: '蛇型', element: '水', danger: 'B',
    visualType: 'cloth',
    caption: '流体のように形状が変化する。密閉容器内では完全にコンテナの形状へ適合する。'
  },
  {
    id: 4, names: 'तत्त्वम्', name: 'タトヴァ', type: '真理型', element: '無', danger: 'A',
    visualType: 'cloth',
    caption: '存在と非存在の境界面に棲む。接触すると対象物の「あるべき姿」を外部に投影する。'
  },
  // ---- insect0 系 (多面核型) ---- 4種
  {
    id: 5, names: 'अग्निः', name: 'アグニス', type: '炎型', element: '炎', danger: 'A',
    visualType: 'insect0',
    caption: '中心核の温度は計測不能。周囲の可燃物を侵食しないが、常に白熱している。'
  },
  {
    id: 6, names: 'वायुम्', name: 'ヴァイユン', type: '風型', element: '風', danger: 'C',
    visualType: 'insect0',
    caption: 'リング軌道を高速で周回する粒子群から構成される。静止状態は理論上存在しない。'
  },
  {
    id: 7, names: 'क्रिश्चियन', name: 'クリシャント', type: '暗黒型', element: '闇', danger: 'S',
    visualType: 'insect0',
    caption: '可視光をほぼ完全に吸収する。移動経路に局所的な暗点を形成しながら進む。'
  },
  {
    id: 8, names: 'इन्द्रः', name: 'インドラス', type: '雷電型', element: '空', danger: 'A',
    visualType: 'insect0',
    caption: '内蔵する粒子が高度に帯電している。近接すると電子機器に重篤な誤作動が生じる。'
  },
  // ---- insect1 系 (半透明殻型) ---- 4種
  {
    id: 9, names: 'जालण्डा', name: 'ジャランダ', type: '水型', element: '水', danger: 'B',
    visualType: 'insect1',
    caption: '半透明の外殻内部に不明な何かが浮遊している。それは常に観測者の死角に位置する。'
  },
  {
    id: 10, names: 'पृथ्वी', name: 'プリトヴィ', type: '土型', element: '土', danger: 'B',
    visualType: 'insect1',
    caption: '脊椎状構造に沿って鉱物結晶が成長する。移動経路に微量の希少鉱物を析出する。'
  },
  {
    id: 11, names: 'कर्षण', name: 'カーシャン', type: '空間型', element: '空', danger: 'S',
    visualType: 'insect1',
    caption: '位置情報が量子的に不安定。複数の座標に同時存在する可能性が実験的に示唆されている。'
  },
  {
    id: 12, names: 'सोमन', name: 'ソーマン', type: '月光型', element: '光', danger: 'C',
    visualType: 'insect1',
    caption: '月齢と連動して活動量が変化する。新月には完全に静止することが繰り返し観測されている。'
  },
  // ---- insect2 系 (多面堆積型) ---- 4種
  {
    id: 13, names: 'कार्लन्', name: 'カーラン', type: '時間型', element: '時', danger: 'S',
    visualType: 'insect2',
    caption: '接触した物体の時間軸を局所的に歪める。捕獲記録の日時は常に矛盾を示す。'
  },
  {
    id: 14, names: 'मायन', name: 'マーヤン', type: '幻影型', element: '幻', danger: 'A',
    visualType: 'insect2',
    caption: '視認できる形状はすべて偽装である。真の外観についての解析は現在も未完了。'
  },
  {
    id: 15, names: 'ब्रावन्ट्', name: 'ブラヴァン', type: '無限型', element: '無', danger: 'S',
    visualType: 'insect2',
    caption: '個体数の上限が存在しない。観測するたびに確認される総個体数が増加している。'
  },
  {
    id: 16, names: 'दरवाण', name: 'ダルヴァン', type: '秩序型', element: '土', danger: 'C',
    visualType: 'insect2',
    caption: '移動軌跡が完璧な幾何学パターンに従う。いかなる行動にもランダム性が観測されない。'
  },
  // ---- insect3 系 (環冠型) ---- 3種
  {
    id: 17, names: 'विष्णा', name: 'ヴィシュナ', type: '浸透型', element: '光', danger: 'A',
    visualType: 'insect3',
    caption: '物質の分子間隙を自由に通過する。捕獲容器の素材選定には特別な注意が必要とされる。'
  },
  {
    id: 18, names: 'शिवन', name: 'シヴァーン', type: '変容型', element: '炎', danger: 'S',
    visualType: 'insect3',
    caption: 'クラウン構造が高速で崩壊と再生を繰り返す。エネルギー収支が熱力学則に従わない。'
  },
  {
    id: 19, names: 'यमन', name: 'ヤマーン', type: '境界型', element: '時', danger: 'B',
    visualType: 'insect3',
    caption: '生体の境界線付近に出没する。直接的な害はないが、接近時に周囲温度が2°C低下する。'
  }
];

/* ---- 属性カラーマップ ---- */
var ELEMENT_COLORS = {
  '炎': { bg: 'rgba(255,50,10,0.18)', border: '#ff4422', text: '#ff8866' },
  '水': { bg: 'rgba(0,100,255,0.18)', border: '#2288ff', text: '#66aaff' },
  '風': { bg: 'rgba(80,255,180,0.15)', border: '#44ddaa', text: '#88ffcc' },
  '土': { bg: 'rgba(160,110,40,0.20)', border: '#cc8844', text: '#ddaa66' },
  '空': { bg: 'rgba(140,50,255,0.18)', border: '#9944ff', text: '#cc88ff' },
  '光': { bg: 'rgba(255,240,100,0.18)', border: '#ddcc44', text: '#ffeeaa' },
  '闇': { bg: 'rgba(60,0,120,0.25)',   border: '#6600cc', text: '#aa66ff' },
  '時': { bg: 'rgba(0,220,220,0.15)',  border: '#00cccc', text: '#44ffff' },
  '幻': { bg: 'rgba(255,50,255,0.15)', border: '#cc44cc', text: '#ff88ff' },
  '無': { bg: 'rgba(100,100,100,0.18)',border: '#888888', text: '#cccccc' }
};

/* ---- 危険度カラーマップ ---- */
var DANGER_COLORS = {
  'S': '#ff0044',
  'A': '#ff8800',
  'B': '#ffcc00',
  'C': '#44cc44',
  'D': '#888888'
};

/* ---- カードミニアイコン描画 ---- */
function drawCreatureIcon(canvas, visualType, elementKey) {
  var ctx = canvas.getContext('2d');
  var W = canvas.width, H = canvas.height;
  var cx = W / 2, cy = H / 2;
  ctx.clearRect(0, 0, W, H);

  var ec = ELEMENT_COLORS[elementKey] || ELEMENT_COLORS['無'];
  var col = ec.border;
  var fillCol = ec.bg;

  ctx.strokeStyle = col;
  ctx.lineWidth = 1.5;

  if (visualType === 'cloth') {
    // 霊布: ダイヤ形 + 2つの目
    ctx.fillStyle = fillCol;
    ctx.beginPath();
    ctx.moveTo(cx, cy - 22); ctx.lineTo(cx + 15, cy); ctx.lineTo(cx, cy + 20); ctx.lineTo(cx - 15, cy);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // テンタクル線
    for (var ti = 0; ti < 4; ti++) {
      var ta = (ti / 4) * Math.PI * 2 + Math.PI / 8;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(ta) * 8, cy + 10 + Math.sin(ta) * 4);
      ctx.lineTo(cx + Math.cos(ta) * 18, cy + 16 + Math.sin(ta) * 6);
      ctx.stroke();
    }
    ctx.fillStyle = col;
    ctx.beginPath(); ctx.arc(cx - 5, cy - 4, 2.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 5, cy - 4, 2.5, 0, Math.PI * 2); ctx.fill();

  } else if (visualType === 'insect0') {
    // 多面核: 六角形 + リング + 目
    ctx.fillStyle = fillCol;
    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
      var a = i / 6 * Math.PI * 2 - Math.PI / 6;
      i === 0 ? ctx.moveTo(cx + Math.cos(a) * 14, cy + Math.sin(a) * 14)
              : ctx.lineTo(cx + Math.cos(a) * 14, cy + Math.sin(a) * 14);
    }
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, 21, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = col;
    ctx.beginPath(); ctx.arc(cx - 5, cy, 2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 5, cy, 2, 0, Math.PI * 2); ctx.fill();

  } else if (visualType === 'insect1') {
    // 半透明殻: 楕円 + フィン
    ctx.fillStyle = fillCol;
    ctx.beginPath(); ctx.ellipse(cx, cy, 12, 20, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    for (var fi = 0; fi < 4; fi++) {
      var fy = cy - 10 + fi * 7;
      ctx.beginPath(); ctx.moveTo(cx - 12, fy); ctx.lineTo(cx - 20, fy - 4); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx + 12, fy); ctx.lineTo(cx + 20, fy - 4); ctx.stroke();
    }
    ctx.fillStyle = col;
    ctx.beginPath(); ctx.arc(cx - 4, cy - 5, 2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 4, cy - 5, 2, 0, Math.PI * 2); ctx.fill();

  } else if (visualType === 'insect2') {
    // 多面堆積: 重なった三角形
    var sizes2 = [20, 14, 9];
    var offsets2 = [-10, 2, 12];
    for (var ki = 0; ki < 3; ki++) {
      var sz = sizes2[ki], oy2 = offsets2[ki];
      ctx.fillStyle = fillCol;
      ctx.beginPath();
      ctx.moveTo(cx, cy + oy2 - sz);
      ctx.lineTo(cx + sz, cy + oy2 + sz * 0.5);
      ctx.lineTo(cx - sz, cy + oy2 + sz * 0.5);
      ctx.closePath(); ctx.fill(); ctx.stroke();
    }
    ctx.fillStyle = col;
    ctx.beginPath(); ctx.arc(cx - 5, cy - 15, 2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 5, cy - 15, 2, 0, Math.PI * 2); ctx.fill();

  } else if (visualType === 'insect3') {
    // 環冠: ダブルリング + 衛星点
    ctx.beginPath(); ctx.arc(cx, cy, 20, 0, Math.PI * 2); ctx.stroke();
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(cx, cy, 12, 0, Math.PI * 2); ctx.stroke();
    ctx.lineWidth = 1.5;
    ctx.fillStyle = col;
    for (var si = 0; si < 6; si++) {
      var sa = si / 6 * Math.PI * 2;
      ctx.beginPath(); ctx.arc(cx + Math.cos(sa) * 20, cy + Math.sin(sa) * 20, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.beginPath(); ctx.arc(cx - 4, cy, 2.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 4, cy, 2.5, 0, Math.PI * 2); ctx.fill();
  }
}
