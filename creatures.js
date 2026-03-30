'use strict';
/* ============================================================
   CREATURE DATA — 50 謎の生命体
   名前はサンスクリット語からカタカナ変換・改変
   visualType: 'cloth' | 'insect0' | 'insect1' | 'insect2' | 'insect3'
              | 'crystal' | 'blob' | 'wire'
============================================================ */
var CREATURE_DATA = [

  // ================================================================
  //  cloth 系 (霊布型) ── 10種
  // ================================================================
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
  {
    id: 20, names: 'चक्रन्', name: 'チャクラン', type: '循環型', element: '空', danger: 'A',
    visualType: 'cloth',
    caption: '七つの不可視の渦を内包する。それぞれが独立したリズムで脈動し、干渉し合っている。'
  },
  {
    id: 21, names: 'प्राणस्', name: 'プラーナス', type: '生命型', element: '風', danger: 'B',
    visualType: 'cloth',
    caption: '生命活動の余剰エネルギーを収集して徘徊する。弱った生物の周辺に特に多く出現する。'
  },
  {
    id: 22, names: 'संसार', name: 'サンサール', type: '輪廻型', element: '時', danger: 'S',
    visualType: 'cloth',
    caption: '死滅と再生を数ミリ秒単位で繰り返す。観測者は毎回異なる個体を見ていることになる。'
  },
  {
    id: 23, names: 'निर्वाण', name: 'ニルヴァン', type: '解脱型', element: '無', danger: 'A',
    visualType: 'cloth',
    caption: '一切の欲求を持たない。それゆえ捕獲の意義を問われると、実験者は必ず沈黙する。'
  },
  {
    id: 24, names: 'आनन्द', name: 'アーナンダ', type: '歓喜型', element: '光', danger: 'C',
    visualType: 'cloth',
    caption: '接触した物体から微弱な幸福感を放出させる。長期接触による依存性の報告が複数ある。'
  },

  // ================================================================
  //  insect0 系 (多面核型) ── 7種
  // ================================================================
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
  {
    id: 25, names: 'वरुणस्', name: 'ヴァルナス', type: '水天型', element: '水', danger: 'A',
    visualType: 'insect0',
    caption: '降雨の直前に出現率が上昇する。捕獲後、翌日必ず雨が降ったという記録が複数残る。'
  },
  {
    id: 26, names: 'मित्रसुन्', name: 'ミトラスン', type: '契約型', element: '光', danger: 'B',
    visualType: 'insect0',
    caption: '一度目視した相手を「認識済み」として記録する。再会時には反応パターンが変化する。'
  },
  {
    id: 27, names: 'रुद्राण', name: 'ルドラーン', type: '嵐型', element: '風', danger: 'S',
    visualType: 'insect0',
    caption: '半径3メートル以内の気流を乱す。その乱流パターンは毎回まったく同一であることが判明した。'
  },

  // ================================================================
  //  insect1 系 (半透明殻型) ── 7種
  // ================================================================
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
  {
    id: 28, names: 'अश्विन्', name: 'アシュヴィン', type: '双星型', element: '空', danger: 'B',
    visualType: 'insect1',
    caption: '必ず二体一組で行動する。片方が捕獲されると、もう片方は三秒後に消失する。'
  },
  {
    id: 29, names: 'गन्धर्व', name: 'ガンダルヴァ', type: '音霊型', element: '風', danger: 'A',
    visualType: 'insect1',
    caption: '移動時に可聴域外の音波を発する。近傍の動植物に影響が出るが、発生源の特定が困難。'
  },
  {
    id: 30, names: 'अप्सरान्', name: 'アプサラーン', type: '水精型', element: '水', danger: 'C',
    visualType: 'insect1',
    caption: '鏡面または水面の反射像として先に目撃される。実体の確認は反射の発見から遅れる。'
  },

  // ================================================================
  //  insect2 系 (多面堆積型) ── 7種
  // ================================================================
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
  {
    id: 31, names: 'रक्षाण', name: 'ラクシャーン', type: '守護型', element: '光', danger: 'B',
    visualType: 'insect2',
    caption: '他の生命体の危険を察知して周囲に展開する。ただし保護対象の選定基準は不明。'
  },
  {
    id: 32, names: 'गणेशन्', name: 'ガネーシャン', type: '障害型', element: '土', danger: 'A',
    visualType: 'insect2',
    caption: '進路上に不可視の障壁を生成する。壁の消滅条件は現在も特定できていない。'
  },
  {
    id: 33, names: 'कालिण', name: 'カーリャン', type: '暗黒型', element: '闇', danger: 'S',
    visualType: 'insect2',
    caption: '接触した光源の出力を永続的に低下させる。蓄積により室内全体が暗化する事例がある。'
  },

  // ================================================================
  //  insect3 系 (環冠型) ── 5種
  // ================================================================
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
  },
  {
    id: 34, names: 'वज्रन्', name: 'ヴァジュラン', type: '金剛型', element: '炎', danger: 'A',
    visualType: 'insect3',
    caption: 'リング構造の硬度は既知の物質を超える。しかし何故か本人は攻撃行動をとらない。'
  },
  {
    id: 35, names: 'सरस्वन्', name: 'サラスヴァン', type: '知識型', element: '光', danger: 'B',
    visualType: 'insect3',
    caption: '周囲の音声・光信号を記録し続ける。捕獲後の解析から、言語的なパターンが検出された。'
  },

  // ================================================================
  //  crystal 系 (結晶体型) ── 5種  ※新規
  // ================================================================
  {
    id: 36, names: 'स्फटन्', name: 'スパタック', type: '水晶型', element: '光', danger: 'B',
    visualType: 'crystal',
    caption: '六方晶系の構造をもつ完全無欠の結晶体。光を当てると内部で見たことのない色が生成される。'
  },
  {
    id: 37, names: 'कृश्यन्', name: 'クリシャン', type: '暗晶型', element: '闇', danger: 'A',
    visualType: 'crystal',
    caption: '結晶面が光を反射せず、逆に周囲の光を引き込む。内部は別の空間につながっている説がある。'
  },
  {
    id: 38, names: 'वज्रिन्', name: 'ヴァジュリン', type: '雷晶型', element: '空', danger: 'S',
    visualType: 'crystal',
    caption: '結晶軸に沿って常時放電している。電荷は外部から供給されていないとみられる。'
  },
  {
    id: 39, names: 'मणिकन्', name: 'マニーカン', type: '宝石型', element: '炎', danger: 'C',
    visualType: 'crystal',
    caption: '表面温度が常に37.0°C。体温を持つ鉱物として分類するか、生命体として扱うか議論が続く。'
  },
  {
    id: 40, names: 'हिमावन्', name: 'ヒマーヴァン', type: '氷晶型', element: '水', danger: 'B',
    visualType: 'crystal',
    caption: '−5°C以下でのみ安定する。常温環境では十秒ごとに形状を再構成し続ける。'
  },

  // ================================================================
  //  blob 系 (液体核型) ── 5種  ※新規
  // ================================================================
  {
    id: 41, names: 'अमृतन्', name: 'アムリタン', type: '不死型', element: '光', danger: 'A',
    visualType: 'blob',
    caption: '分割しても分割後の各個体が独立して再生する。現在確認されている最小分割数は1024。'
  },
  {
    id: 42, names: 'सोमलिन्', name: 'ソーマリン', type: '液体型', element: '水', danger: 'B',
    visualType: 'blob',
    caption: '固体・液体・気体の相転移を任意のタイミングで行う。ただし捕獲時は必ず液体状態をとる。'
  },
  {
    id: 43, names: 'रसायन', name: 'ラサーヤン', type: '液錬型', element: '幻', danger: 'A',
    visualType: 'blob',
    caption: '触れた素材を同じ体積の別素材に変換する。変換規則はランダムではなく、何らかの意図がある。'
  },
  {
    id: 44, names: 'मधुन्', name: 'マドゥーン', type: '蜜液型', element: '土', danger: 'C',
    visualType: 'blob',
    caption: '表面から分泌される物質が強力な粘着性を持つ。他の生物体の痕跡が内部から検出されている。'
  },
  {
    id: 45, names: 'विषाणन्', name: 'ヴィサーナン', type: '毒液型', element: '闇', danger: 'S',
    visualType: 'blob',
    caption: '接触した有機物を分解する。その速度は既知のいかなる酵素反応も超える。近接厳禁。'
  },

  // ================================================================
  //  wire 系 (骨格線型) ── 4種  ※新規
  // ================================================================
  {
    id: 46, names: 'नादन्', name: 'ナーダーン', type: '音振型', element: '風', danger: 'B',
    visualType: 'wire',
    caption: '骨格構造全体が弦楽器のように振動する。固有周波数は個体ごとに異なり、音は可聴域外。'
  },
  {
    id: 47, names: 'श्रुतिन्', name: 'シュルーティン', type: '聴覚型', element: '空', danger: 'A',
    visualType: 'wire',
    caption: '全宇宙の音を受信する受像機として機能する。近傍では過去の音声が再生されることがある。'
  },
  {
    id: 48, names: 'आकाशन्', name: 'アーカーシャン', type: '虚空型', element: '無', danger: 'S',
    visualType: 'wire',
    caption: '骨格の占める「体積」はゼロに限りなく近い。捕獲しても捕獲したことが証明できない。'
  },
  {
    id: 49, names: 'विओमन्', name: 'ヴィオマーン', type: '天空型', element: '空', danger: 'C',
    visualType: 'wire',
    caption: '重力に無関係に浮遊する。骨格線の交点に蓄えられたエネルギーが反重力源とみられる。'
  }

];

/* ---- 属性カラーマップ ---- */
var ELEMENT_COLORS = {
  '炎': { bg: 'rgba(255,50,10,0.18)',  border: '#ff4422', text: '#ff8866' },
  '水': { bg: 'rgba(0,100,255,0.18)',  border: '#2288ff', text: '#66aaff' },
  '風': { bg: 'rgba(80,255,180,0.15)', border: '#44ddaa', text: '#88ffcc' },
  '土': { bg: 'rgba(160,110,40,0.20)', border: '#cc8844', text: '#ddaa66' },
  '空': { bg: 'rgba(140,50,255,0.18)', border: '#9944ff', text: '#cc88ff' },
  '光': { bg: 'rgba(255,240,100,0.18)',border: '#ddcc44', text: '#ffeeaa' },
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

  } else if (visualType === 'crystal') {
    // 結晶体: スパイク放射 + 中心六角形
    ctx.fillStyle = fillCol;
    // 中心六角
    ctx.beginPath();
    for (var ci = 0; ci < 6; ci++) {
      var ca = ci / 6 * Math.PI * 2;
      ci === 0 ? ctx.moveTo(cx + Math.cos(ca) * 8, cy + Math.sin(ca) * 8)
               : ctx.lineTo(cx + Math.cos(ca) * 8, cy + Math.sin(ca) * 8);
    }
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // スパイク
    ctx.lineWidth = 1.5;
    var spikeCnt = 8;
    for (var sp = 0; sp < spikeCnt; sp++) {
      var spa = sp / spikeCnt * Math.PI * 2;
      var spikeLen = (sp % 2 === 0) ? 22 : 15;
      var spikeW = (sp % 2 === 0) ? 3.5 : 2;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(spa) * 8, cy + Math.sin(spa) * 8);
      ctx.lineTo(cx + Math.cos(spa - 0.12) * spikeW + Math.cos(spa) * spikeLen,
                 cy + Math.sin(spa - 0.12) * spikeW + Math.sin(spa) * spikeLen);
      ctx.lineTo(cx + Math.cos(spa + 0.12) * spikeW + Math.cos(spa) * spikeLen,
                 cy + Math.sin(spa + 0.12) * spikeW + Math.sin(spa) * spikeLen);
      ctx.closePath(); ctx.stroke();
    }
    // 光の点
    ctx.fillStyle = col;
    ctx.beginPath(); ctx.arc(cx, cy, 2.5, 0, Math.PI * 2); ctx.fill();

  } else if (visualType === 'blob') {
    // 液体核: 不定形アメーバ + 内部点
    ctx.fillStyle = fillCol;
    ctx.beginPath();
    var blobPts = 7;
    for (var bi = 0; bi < blobPts; bi++) {
      var ba = bi / blobPts * Math.PI * 2;
      var br = 12 + (bi % 3 === 0 ? 7 : bi % 2 === 0 ? -5 : 3);
      var bx = cx + Math.cos(ba) * br;
      var by = cy + Math.sin(ba) * br;
      if (bi === 0) ctx.moveTo(bx, by);
      else ctx.bezierCurveTo(
        cx + Math.cos(ba - 0.5) * (br + 5), cy + Math.sin(ba - 0.5) * (br + 5),
        cx + Math.cos(ba + 0.2) * (br - 3), cy + Math.sin(ba + 0.2) * (br - 3),
        bx, by
      );
    }
    ctx.closePath(); ctx.fill(); ctx.stroke();
    // 内部の核
    ctx.fillStyle = col;
    ctx.beginPath(); ctx.arc(cx, cy, 4.5, 0, Math.PI * 2); ctx.fill();
    // 眼
    ctx.fillStyle = '#ff2222';
    ctx.beginPath(); ctx.arc(cx - 5, cy - 3, 2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 5, cy - 3, 2, 0, Math.PI * 2); ctx.fill();

  } else if (visualType === 'wire') {
    // 骨格線型: 軽量なポリゴンフレーム
    ctx.lineWidth = 1.2;
    // 外枠 (八角形)
    ctx.beginPath();
    for (var wi = 0; wi < 8; wi++) {
      var wa = wi / 8 * Math.PI * 2 - Math.PI / 8;
      wi === 0 ? ctx.moveTo(cx + Math.cos(wa) * 20, cy + Math.sin(wa) * 20)
               : ctx.lineTo(cx + Math.cos(wa) * 20, cy + Math.sin(wa) * 20);
    }
    ctx.closePath(); ctx.stroke();
    // 内側フレーム (四角)
    ctx.beginPath();
    for (var wi2 = 0; wi2 < 4; wi2++) {
      var wa2 = wi2 / 4 * Math.PI * 2 + Math.PI / 4;
      wi2 === 0 ? ctx.moveTo(cx + Math.cos(wa2) * 11, cy + Math.sin(wa2) * 11)
                : ctx.lineTo(cx + Math.cos(wa2) * 11, cy + Math.sin(wa2) * 11);
    }
    ctx.closePath(); ctx.stroke();
    // 接続線
    for (var wi3 = 0; wi3 < 4; wi3++) {
      var wa3o = wi3 / 4 * Math.PI * 2 - Math.PI / 8;
      var wa3i = wi3 / 4 * Math.PI * 2 + Math.PI / 4;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(wa3o) * 20, cy + Math.sin(wa3o) * 20);
      ctx.lineTo(cx + Math.cos(wa3i) * 11, cy + Math.sin(wa3i) * 11);
      ctx.stroke();
    }
    // 頂点ドット
    ctx.fillStyle = col;
    for (var wi4 = 0; wi4 < 8; wi4++) {
      var wa4 = wi4 / 8 * Math.PI * 2 - Math.PI / 8;
      ctx.beginPath(); ctx.arc(cx + Math.cos(wa4) * 20, cy + Math.sin(wa4) * 20, 1.8, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.beginPath(); ctx.arc(cx, cy, 2.5, 0, Math.PI * 2); ctx.fill();
  }
}
