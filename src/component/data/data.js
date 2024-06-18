import goods_cap01 from '../../assets/item/goods_cap01.png';
import goods_apron01 from '../../assets/item/goods_apron01.png';
import jacket_nylon01 from '../../assets/item/jacket_nylon01.png';
import goods_bag_bear from '../../assets/item/goods_bag_bear.png';
import goods_dish01 from '../../assets/item/goods_dish01.png';
import tops_allinone01 from '../../assets/item/tops_all-in-one01.png';
import goods_apron02 from '../../assets/item/goods_apron02.png';
import goods_towel01 from '../../assets/item/goods_towel01.png';
import goods_apron03 from '../../assets/item/goods_apron03.png';
import pants_long_denim01 from '../../assets/item/pants_long_denim01.png';
import pants_salopette01 from '../../assets/item/pants_salopette01.png';
import tops_shirt01 from '../../assets/item/tops_shirt01.png';
import tops_t_shirt01 from '../../assets/item/tops_t_shirt01.png';
import tops_allinone02 from '../../assets/item/tops_all-in-one02.png';
import goods_bag from '../../assets/item/goods_bag.png';
import goods_bottle from '../../assets/item/tops_all-in-one01.png';
import goods_basket from '../../assets/item/goods_basket.png';
import goods_hair_band from '../../assets/item/goods_hair_band.png';
import socks01 from '../../assets/item/socks01.png';
import shoes_sandal01 from '../../assets/item/shoes_sandal01.png';
import shoes_sandal02 from '../../assets/item/shoes_sandal02.png';


const data = {
  productData: [
    {
      id: 1,
      img: goods_cap01,
      title: "カラフルキャップ",
      price: 7840,
      desc: '2023 A/W 限定商品。\n\nストリートカルチャーの1つである、\n\nステッカーを街にボムる(電柱等に貼る行為)ところからインスピレーションを受け、お店で使っているステッカーを服に貼るのではなくシルクスクリーンでプリントしました。\n\n使ったインクは贅沢にステッカーで３色、背中に１色の合計４色使用です。\n\n8.0oz\n綿50%/ポリエステル50%\n\n[SIZE]\n身丈/身幅/裄丈　(cm)\n\nL　74/61/90\nXL　76/66/93\n\n※モデル180cm Lサイズ\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 2,
      img: goods_apron01,
      title: "エプロン",
      price: 12000,
      desc: 'クラシックなデザインのヴィンテージデニムジャケット。着心地が良く、どんなスタイルにも合う一着です。\n\n素材: 100% コットン\n\n[SIZE]\nS: 68/52/59\nM: 70/54/61\nL: 72/56/63\n\n※モデル180cm Mサイズ\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 3,
      img: jacket_nylon01,
      title: "ナイロンジャケット",
      price: 15600,
      desc: '上質なレザーを使用したカジュアルシューズ。どんなシーンでも活躍する万能アイテムです。\n\n素材: 牛革\n\n[SIZE]\n26cm, 27cm, 28cm\n\n※モデル180cm 27cm\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 4,
      img: goods_bag_bear,
      category: "goods",
      title: "くまさんカゴバッグ",
      price: 3500,
      desc: 'ベーシックなデザインの白Tシャツ。コーディネートの基本アイテムとして重宝します。\n\n素材: 100% コットン\n\n[SIZE]\nS: 65/47/20\nM: 68/50/21\nL: 71/53/22\n\n※モデル180cm Mサイズ\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 5,
      img: goods_dish01,
      category: "goods",
      title: "お皿とスプーンのセット",
      price: 9800,
      desc: 'シンプルでスタイリッシュなレザーウォレット。多くのカードと現金を収納できます。\n\n素材: 牛革\n\n[SIZE]\n10cm x 15cm\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 6,
      img: tops_allinone01,
      category: "tops",
      title: "レースワンピース",
      price: 6200,
      desc: '快適なフィット感を提供するスポーティなジョガーパンツ。ジムやカジュアルな外出に最適です。\n\n素材: 80% コットン, 20% ポリエステル\n\n[SIZE]\nS: 95/30\nM: 100/32\nL: 105/34\n\n※モデル180cm Mサイズ\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 7,
      img: goods_apron02,
      category: "goods",
      title: "よだれかけ",
      price: 4300,
      desc: 'エレガントなデザインのシルクスカーフ。アクセサリーとして様々なシーンで活躍します。\n\n素材: 100% シルク\n\n[SIZE]\n90cm x 90cm\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 8,
      img: goods_towel01,
      category: "goods",
      title: "あひるさんガーゼ",
      price: 24500,
      desc: '洗練されたデザインのフォーマルスーツジャケット。ビジネスシーンに最適です。\n\n素材: 70% ウール, 30% ポリエステル\n\n[SIZE]\nS: 72/48/60\nM: 74/50/62\nL: 76/52/64\n\n※モデル180cm Mサイズ\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 9,
      img: goods_apron03,
      category: "goods",
      title: "よだれかけ",
      price: 8900,
      desc: '軽やかで涼しいデザインのカジュアルサマードレス。夏のコーディネートにぴったりです。\n\n素材: 100% コットン\n\n[SIZE]\nS: 85/45\nM: 88/48\nL: 91/51\n\n※モデル170cm Mサイズ\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 10,
      img: pants_long_denim01,
      category: "bottoms",
      title: "ストレートデニム",
      price: 19800,
      desc: '寒い冬に最適な暖かいウィンターコート。保温性抜群で、デザインもスタイリッシュです。\n\n素材: 60% ウール, 40% ポリエステル\n\n[SIZE]\nS: 85/55/60\nM: 88/58/62\nL: 91/61/64\n\n※モデル180cm Mサイズ\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 11,
      img: pants_salopette01,
      category: "bottoms",
      title: "デニムサロペット",
      price: 7400,
      desc: 'スリムフィットのデニムジーンズ。カジュアルなシーンにぴったりの一着です。\n\n素材: 98% コットン, 2% ポリウレタン\n\n[SIZE]\n28, 30, 32, 34\n\n※モデル180cm 30サイズ\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 12,
      img: tops_shirt01,
      category: "tops",
      title: "ワンピース",
      price: 4500,
      desc: 'クラシックなデザインのレザーベルト。どんなパンツにも合う万能アイテムです。\n\n素材: 牛革\n\n[SIZE]\n長さ: 110cm, 120cm\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 13,
      img: tops_t_shirt01,
      category: "tops",
      title: "トレンドTシャツ",
      price: 5800,
      desc: 'トレンディなデザインのサングラス。どんな顔型にも合う万能アイテムです。\n\n素材: プラスチック, 金属\n\n[SIZE]\nフリーサイズ\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 14,
      img: tops_allinone02,
      category: "tops",
      title: "かわいいドレス",
      price: 9200,
      desc: 'スタイリッシュなデザインのバックパック。収納力が高く、通勤や通学に最適です。\n\n素材: ナイロン\n\n[SIZE]\n高さ: 45cm, 幅: 30cm, 奥行き: 15cm\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 15,
      img: shoes_sandal01,
      category: "shoes",
      title: "サンダル",
      price: 21500,
      desc: 'エレガントなデザインの腕時計。ビジネスシーンやフォーマルな場にもぴったりです。\n\n素材: ステンレススチール\n\n[SIZE]\n直径: 42mm\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 16,
      img: socks01,
      category: "socks",
      title: "かわいいソックス",
      price: 5800,
      desc: '快適な履き心地のラウンジパンツ。リラックスした時間に最適です。\n\n素材: 60% コットン, 40% ポリエステル\n\n[SIZE]\nS: 100/30\nM: 104/32\nL: 108/34\n\n※モデル180cm Mサイズ\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 17,
      img: goods_hair_band,
      category: "goods",
      title: "かわいいヘアバンド",
      price: 14500,
      desc: 'シックなデザインのハンドバッグ。多くの収納スペースがあり、使い勝手も抜群です。\n\n素材: 合成皮革\n\n[SIZE]\n高さ: 25cm, 幅: 35cm, 奥行き: 15cm\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 18,
      img: goods_basket,
      category: "goods",
      title: "バスケット",
      price: 17600,
      desc: 'エレガントなデザインのイブニングドレス。特別なイベントにぴったりです。\n\n素材: ポリエステル, スパンデックス\n\n[SIZE]\nS: 85/45\nM: 88/48\nL: 91/51\n\n※モデル170cm Mサイズ\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 19,
      img: goods_bag,
      category: "goods",
      title: "お花モチーフのショルダーバッグ",
      price: 8200,
      desc: 'カジュアルなデザインのスニーカー。どんなコーディネートにも合わせやすい一足です。\n\n素材: 合成皮革\n\n[SIZE]\n26cm, 27cm, 28cm\n\n※モデル180cm 27cm\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    },
    {
      id: 20,
      img: shoes_sandal02,
      category: "shoes",
      title: "カラフルなサンダル",
      price: 11200,
      desc: '高級感あふれるレザーグローブ。冬の必需品として重宝します。\n\n素材: 羊革\n\n[SIZE]\nS, M, L\n\n※商品によってサイズが異なります。サイズ表をご確認下さい。\n\n※イメージ画像と実物の色合いは若干異なる場合がございます。予めご了承ください。'
    }
  ],
};


export default data;