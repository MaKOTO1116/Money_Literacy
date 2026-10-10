//モーダル全体
const facilityModal = document.getElementById("facilitymodal")

//モーダルのタイトル
const facilityTitle = document.getElementById("facilityTitle")

//モーダルの説明
const explanation = document.getElementById("explanation")

//閉じるボタン
const closeButton = document.getElementById("closeButton")

//一日を終了するボタン
const endDayButton = document.getElementById("endDayButton")

//1日を終了する
const dayEndNotification = document.getElementById("dayEndNotification");

//建物ボタン
const bankButton = document.getElementById("bankButton");
const gymButton = document.getElementById("gymButton");
const libraryButton = document.getElementById("libraryButton");
const cityHallButton = document.getElementById("cityHallButton");
const stockButton = document.getElementById("stockButton");
const lotteryButton = document.getElementById("lotteryButton");
const questButton = document.getElementById("questButton");

//ステータス表示
const moneyText = document.getElementById("money");
const fatigueText = document.getElementById("fatigue");
const dayText = document.getElementById("day");
const gameTimeText = document.getElementById("time");

//play.htmlのボタンを表示する場所
const facilityActions = document.getElementById("facilityActions")

//
const modalContent = document.querySelector(".modalContent")

//マップ
const map = document.getElementById("map")

const main = document.getElementById("main")

const header = document.querySelector(".header");


//ゲームデータ
let money = 3000;//所持金
let fatigue = 0;//疲労度
let day = 10;//現在の日数
let gameTime = 30;//ゲーム終了までの残り時間
let gameOver = false//ゲーム終了したか
let todayQuests = []//今日のクエストを入れる配列
let numberOfJob = null
let thisGameCampanies = []
let thisGameJobs = []  //就職データ
let ccurrentJob = null //勤務先
let companySalary = 0         //給料
let cheangeDayFatigue = 0
let description = "説明"//説明
let stockPrice = 0 //現在の株価
let minChange = 0  //最小変動幅
let maxChange = 0  //最大変動幅
let scam = false   //詐欺の有無
let loan = 0
let todayNews = []

//ステータス
let strength = 0      //筋力
let intelligence = 0  //知能
let reward = 0 //報酬
let requiredValue = 0 //ステータスの必要値


//クエスト一覧
const Quests = [
    {
        name: "コンビニ店員",
        reward: 800,
        fatigue: 8,
        strength: 0,
        intelligence: 0
    },
    {
        name: "書店スタッフ",
        reward: 1050,
        fatigue: 9,
        strength: 0,
        intelligence: 0
    },
    {
        name: "花屋スタッフ",
        reward: 1100,
        fatigue: 10,
        strength: 0,
        intelligence: 0
    },
    {
        name: "スーパーのレジ",
        reward: 1150,
        fatigue: 11,
        strength: 0,
        intelligence: 0
    },
    {
        name: "ドラッグストア店員",
        reward: 1200,
        fatigue: 10,
       strength: 0,
        intelligence: 0
    },
    {
        name: "ポスティング",
        reward: 850,
        fatigue: 11,
        strength: 0,
        intelligence: 0
    },
    {
        name: "パン屋スタッフ",
        reward: 1250,
        fatigue: 12,
        strength: 0,
        intelligence: 0
    },
    {
        name: "品出しスタッフ",
        reward: 1300,
        fatigue: 12,
        strength: 0,
        intelligence: 0
    },
    {
        name: "清掃スタッフ",
        reward: 900,
        fatigue: 13,
        strength: 0,
        intelligence: 0
    },
    {
        name: "ホテル清掃",
        reward: 1350,
        fatigue: 13,
        strength: 0,
        intelligence: 0
    },
    {
        name: "飲食店スタッフ",
        reward: 1400,
        fatigue: 13,
        strength: 0,
        intelligence: 0
    },
    {
        name: "イベントスタッフ",
        reward: 1450,
        fatigue: 14,
        strength: 0,
        intelligence: 0
    },
    {
        name: "経理スタッフ",
        reward: 1000,
        fatigue: 16,
        strength: 0,
        intelligence: 1
        
    },
    {
        name: "配達員",
        reward: 1100,
        fatigue: 14,
        strength: 1,
        intelligence: 0
        
    },
    {
        name: "家具配送補助",
        reward: 1300,
        fatigue: 20,
        strength: 2,
        intelligence: 0
    },
    {
        name: "データ入力",
        reward: 1200,
        fatigue: 16,
        strength: 0,
        intelligence: 2
    },
    {
        name: "引っ越しスタッフ",
        reward: 950,
        fatigue: 24,
        strength: 3,
        intelligence: 0
    },
    {
        name: "動画編集",
        reward: 1500,
        fatigue: 18,
        strength: 0,
        intelligence: 3
    },
    {
        name: "建設現場スタッフ",
        reward: 1900,
        fatigue: 30,
        strength: 4,
        intelligence: 0
    },
    {
        name: "Webサイト更新",
        reward: 900,
        fatigue: 20,
        strength: 0,
        intelligence: 4
    },
    {
        name: "倉庫フォークリフト補助",
        reward: 2200,
        fatigue: 35,
        strength: 5,
        intelligence: 0
    },
    {
        name: "プログラミング補助",
        reward: 2100,
        fatigue: 23,
        strength: 0,
        intelligence: 5
    },
    {
        name: "イベント運営リーダー",
        reward: 950,
        fatigue: 30,
        strength: 3,
        intelligence: 3
    },
    {
        name: "CADオペレーター",
        reward: 2300,
        fatigue: 24,
        strength: 0,
        intelligence: 5
    },
    {
        name: "商品撮影・EC出品",
        reward: 2400,
        fatigue: 27,
        strength: 2,
        intelligence: 3
    },
    {
        name: "ドローン撮影補助",
        reward: 950,
        fatigue: 32,
        strength: 3,
        intelligence: 4
    },
    {
        name: "システムテストスタッフ",
        reward: 3000,
        fatigue: 30,
        strength: 4,
        intelligence: 5
    },
]

//会社一覧
const Companies = [
    {
        name: "さくら食品",
        description: "お菓子や飲み物を販売している食品メーカー。比較的安定した業績。",
        stockPrice: 120,
        previousStockPrice: 120,
        minChange: -2,
        maxChange: 2,
        type: "stable",
        owned: 0,
        newsType: "food",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 4000,
        requiredStrength: 1,
        requiredIntelligence: 1,
        startFatigue: 15,
    },
    {
        name: "あおぞら電力",
        description: "電気を供給している会社。株価の変動は小さい。",
        stockPrice: 180,
        previousStockPrice: 180,
        minChange: -3,
        maxChange: 3,
        type: "stable",
        owned: 0,
        newsType: "electric",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 4500,
        requiredStrength: 1,
        requiredIntelligence: 1,
        startFatigue: 14,
    },
    {
        name: "フレッシュ農園",
        description: "野菜や果物を生産・販売している会社。安定した人気がある。",
        stockPrice: 90,
        previousStockPrice: 90,
        minChange: -2,
        maxChange: 3,
        type: "stable",
        owned: 0,
        newsType: "food",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 4500,
        requiredStrength: 1,
        requiredIntelligence: 1,
        startFatigue: 15,
    },
    {
        name: "スマイル薬品",
        description: "薬屋健康食品を販売している会社。値動きは比較的穏やか。",
        stockPrice: 320,
        previousStockPrice: 320,
        minChange: -3,
        maxChange: 4,
        type: "stable",
        owned: 0,
        newsType: "medical",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 4800,
        requiredStrength: 0,
        requiredIntelligence: 1,
        startFatigue: 17,
    },
    {
        name: "レインボー銀行",
        description: "預金や融資を行っている銀行。",
        stockPrice: 500,
        previousStockPrice: 500,
        minChange: -5,
        maxChange: 5,
        type: "stable",
        owned: 0,
        newsType: "bank",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 5000,
        requiredStrength: 0,
        requiredIntelligence: 3,
        startFatigue: 20,
    },
    {
        name: "ブルー運輸",
        description: "全国へ荷物を運ぶ物流会社",
        stockPrice: 150,
        previousStockPrice: 150,
        minChange: -4,
        maxChange: 5,
        type: "normal",
        owned: 0,
        newsType: "transport",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 5000,
        requiredStrength: 2,
        requiredIntelligence: 1,
        startFatigue: 20,
    },
    {
        name: "オレンジ百貨店",
        description: "様々な商品を販売している百貨店",
        stockPrice: 220,
        previousStockPrice: 220,
        minChange: -5,
        maxChange: 5,
        type: "normal",
        owned: 0,
        newsType: "store",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 5000,
        requiredStrength: 1,
        requiredIntelligence: 2,
        startFatigue: 20,
    },
    {
        name: "グリーン建設",
        description: "住宅や公共施設を建設している会社。",
        stockPrice: 260,
        previousStockPrice: 260,
        minChange: -5,
        maxChange: 6,
        type: "normal",
        owned: 0,
        newsType: "construction",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 5400,
        requiredStrength: 3,
        requiredIntelligence: 1,
        startFatigue: 20,
    },
    {
        name: "ライト出版",
        description: "本や教材を出版している会社。",
        stockPrice: 130,
        previousStockPrice: 130,
        minChange: -3,
        maxChange: 5,
        type: "normal",
        owned: 0,
        newsType: "publishing",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 5400,
        requiredStrength: 0,
        requiredIntelligence: 3,
        startFatigue: 20,
    },
    {
        name: "サンライズホテル",
        description: "全国でホテルを運営している会社。",
        stockPrice: 270,
        previousStockPrice: 270,
        minChange: -6,
        maxChange: 7,
        type: "normal",
        owned: 0,
        newsType: "hotel",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 5600,
        requiredStrength: 1,
        requiredIntelligence: 2,
        startFatigue: 20,
    },
    {
        name: "ネクストAI",
        description: "AIサービスを開発している会社。株価が大きく動きやすい。",
        stockPrice: 400,
        previousStockPrice: 400,
        minChange: -8,
        maxChange: 10,
        type: "growth",
        owned: 0,
        newsType: "ai",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 6000,
        requiredStrength: 0,
        requiredIntelligence: 4,
        startFatigue: 20,
    },
    {
        name: "スターゲームズ",
        description: "ゲームを開発・販売している会社。人気作品の数々を生み出してきた。",
        stockPrice: 300,
        previousStockPrice: 300,
        minChange: -8,
        maxChange: 10,
        type: "growth",
        owned: 0,
        newsType: "game",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 6100,
        requiredStrength: 1,
        requiredIntelligence: 3,
        startFatigue: 20,
    },
    {
        name: "フューチャーロボ",
        description: "ロボットを開発している会社。株価の変動は大きめ。",
        stockPrice: 450,
        previousStockPrice: 450,
        minChange: -10,
        maxChange: 12,
        type: "growth",
        owned: 0,
        newsType: "robot",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 6300,
        requiredStrength: 1,
        requiredIntelligence: 4,
        startFatigue: 20,
    },
    {
        name: "エコカー工業",
        description: "自動車を開発・製造してる会社。",
        stockPrice: 380,
        previousStockPrice: 380,
        minChange: -8,
        maxChange: 9,
        type: "growth",
        owned: 0,
        newsType: "car",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 5800,
        requiredStrength: 2,
        requiredIntelligence: 3,
        startFatigue: 20,
    },
    {
        name: "ドリーム宇宙",
        description: "宇宙開発を行っている会社。株価の変動が非常に大きい。",
        stockPrice: 600,
        previousStockPrice: 600,
        minChange: -12,
        maxChange: 15,
        type: "growth",
        owned: 0,
        newsType: "space",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 6400,
        requiredStrength: 2,
        requiredIntelligence: 3,
        startFatigue: 20,
    },
    {
        name: "インフィニティ未来開発",
        description: "新しい技術の研究を行っている会社。将来性が期待されている。",
        stockPrice: 350,
        previousStockPrice: 350,
        minChange: -9,
        maxChange: 11,
        type: "growth",
        owned: 0,
        newsType: "technology",
        newsEffect: 0,
        //就職情報
        employment: true,
        salary: 6600,
        requiredStrength: 1,
        requiredIntelligence: 5,
        startFatigue: 20,
    },
    {
        name: "ラッキー投資株式会社",
        description: "[絶対に儲かる]を宣言している投資会社。",
        stockPrice: 300,
        previousStockPrice: 300,
        minChange: -5,
        maxChange: 13,
        type: "scam",
        owned: 0,
        newsType: "scam",
        newsEffect: 0,
        //就職情報
        employment: false,
    },
    {
        name: "ハッピー資産運用",
        description: "[一週間で資産2倍]を約束している会社。",
        stockPrice: 340,
        previousStockPrice: 340,
        minChange: -4,
        maxChange: 12,
        type: "scam",
        owned: 0,
        newsType: "scam",
        newsEffect: 0,
        //就職情報
        employment: false,
    },
    {
        name: "ゴールド未来投資",
        description: "[株価が減少することがない]と宣言している会社。",
        stockPrice: 300,
        previousStockPrice: 300,
        minChange: 0,
        maxChange: 10,
        type: "scam",
        owned: 0,
        newsType: "scam",
        newsEffect: 0,
        //就職情報
        employment: false,
    },
    {
        name: "ドリームマネー株式会社",
        description: "[何もしなくても毎日利益が増える]と歌っている会社。",
        stockPrice: 280,
        previousStockPrice: 280,
        minChange: 6,
        maxChange: 15,
        type: "scam",
        owned: 0,
        newsType: "scam",
        newsEffect: 0,
        //就職情報
        employment: false,
    },
    
]

//-------------
//ニュース一覧
//-------------

const foodNews =[ //食品
    {
        text: "全国的に暑い日が続き、飲み物がよく売れています。",
        newsType: "food",
        change: 3,
    },
    {
        text: "健康的な食事を始める人が増えています。",
        newsType: "food",
        change: 2,
    },
    {
        text: "お菓子の売上が好調です。",
        newsType: "food",
        change: 2,
    },
    {
        text: "食品メーカーが新商品を開発しました。",
        newsType: "food",
        change: 3,
    },
    {
        text: "台風で農作物に大きな被害が出ています。",
        newsType: "food",
        change: -4,
    },
    {
        text: "食品の原材料価格が上昇しています。",
        newsType: "food",
        change: -3,
    },
    {
        text: "長雨で野菜の収穫量が減っています。",
        newsType: "food",
        change: -3,
    },
    {
        text: "害虫による農作物への被害が広がっています。",
        newsType: "food",
        change: -2,
    },
]

const electricNews =[ //電力
    {
        text: "厳しい暑さが続き、エアコンの利用が増えています。",
        newsType: "electric",
        change: 3,
    },
    {
        text: "寒波の影響で暖房の利用が増えています。",
        newsType: "electric",
        change: 3,
    },
    {
        text: "新しい住宅が増え、電気の利用が伸びています。",
        newsType: "electric",
        change: 2,
    },
    {
        text: "工場の稼働が増え、電力需要が高まっています。",
        newsType: "electric",
        change: 4,
    },
    {
        text: "電気を作るための燃料価格が上がっています。",
        newsType: "electric",
        change: -3,
    },
    {
        text: "発電所で設備トラブルが発生しました。",
        newsType: "electric",
        change: -3,
    },
    {
        text: "節電を呼びかける動きが広まっています。",
        newsType: "electric",
        change: -2,
    },
    {
        text: "大規模な停電が発生しました。",
        newsType: "electric",
        change: -4,
    },
]

const medicalNews = [ //医療
    {
        text: "風邪が流行し、薬を買う人が増えています。",
        newsType: "medical",
        change: 3,
    },
    {
        text: "花粉が多く飛び始め、花粉症対策の商品がよく売れています。",
        newsType: "medical",
        change: 2,
    },
    {
        text: "健康診断を受ける人が増え、健康食品の売れ行きが伸びています。",
        newsType: "medical",
        change: 2,
    },
    {
        text: "熱中症対策の商品を買う人が増えています。",
        newsType: "medical",
        change: 3,
    },
    {
        text: "薬の材料が不足し、一部の商品が作れなくなっています。",
        newsType: "medical",
        change: -4,
    },
    {
        text: "商品の不具合が見つかり、回収が始まっています。",
        newsType: "medical",
        change: -3,
    },
    {
        text: "海外から安い薬が多く輸入されています。",
        newsType: "medical",
        change: -2,
    },
    {
        text: "薬の値段が下がり、利益が減ると予想されます。",
        newsType: "medical",
        change: -3,
    },
]

const bankNews =[ //銀行
    {
        text: "家を買う人が増え、お金を借りる人が増えています。",
        newsType: "bank",
        change: 3,
    },
    {
        text: "新しくお店や会社を始める人が増えています。",
        newsType: "bank",
        change: 2,
    },
    {
        text: "景気が良くなり、投資を始める人が増えています。",
        newsType: "bank",
        change: 4,
    },
    {
        text: "貯金を始める人が増えています。",
        newsType: "bank",
        change: 2,
    },
    {
        text: "お金を返せない人が増えています。",
        newsType: "bank",
        change: -4,
    },
    {
        text: "会社の倒産が増え、お金を貸しにくい状況になっています。",
        newsType: "bank",
        change: -3,
    },
    {
        text: "景気が悪くなり、お金を借りる人が減っています。",
        newsType: "bank",
        change: -2,
    },
    {
        text: "銀行から預金を引き出す人が増えています。",
        newsType: "bank",
        change: -3,
    },
]

const transportNews = [ //運送
    {
        text: "ネット通販の利用が増え、荷物の運送が増えています。",
        newsType: "transport",
        change: 3,
    },
    {
        text: "企業の出荷量が増えています。",
        newsType: "transport",
        change: 2,
    },
    {
        text: "新しい配送センターが完成しました。",
        newsType: "transport",
        change: 3,
    },
    {
        text: "物流サービスの利用者が上昇しています。",
        newsType: "transport",
        change: 4,
    },
    {
        text: "ガソリン価格が上昇しています。",
        newsType: "transport",
        change: -3,
    },
    {
        text: "大型台風で配送が遅れています。",
        newsType: "transport",
        change: -4,
    },
    {
        text: "ドライバー不足が深刻になっています。",
        newsType: "transport",
        change: -3,
    },
    {
        text: "高速道路の通行止めが相次いでいます。",
        newsType: "transport",
        change: -2,
    },
]

const storeNews = [ //百貨店
    {
        text: "買い物をする人が増え、多くのお店がにぎわっています。",
        newsType: "store",
        change: 4,
    },
    {
        text: "ボーナスが支給され、高額な買い物をする人が増えています。",
        newsType: "store",
        change: 3,
    },
    {
        text: "大型連休で家族連れの買い物客が増えています。",
        newsType: "store",
        change: 3,
    },
    {
        text: "新商品が人気となり、お店に多くの人が集まっています。",
        newsType: "store",
        change: 2,
    },
    {
        text: "物価が上がり、買い物を控える人が増えています。",
        newsType: "store",
        change: -3,
    },
    {
        text: "衣類や雑貨を買う人が減っています。",
        newsType: "store",
        change: -2,
    },
    {
        text: "生活必需品以外の買い物を控える人が増えています。",
        newsType: "store",
        change: -4,
    },
    {
        text: "節約をする家庭が増えています。",
        newsType: "store",
        change: -3,
    },
]

const constructionNews = [ //建設
    {
        text: "新しい住宅の建設が増えています。",
        newsType: "construction",
        change: 3,
    },
    {
        text: "公共工事の受注が増えました。",
        newsType: "construction",
        change: 4,
    },
    {
        text: "都市開発プロジェクトが始まりました。",
        newsType: "construction",
        change: 3,
    },
    {
        text: "建設需要が高まっています。",
        newsType: "construction",
        change: 2,
    },
    {
        text: "建築資材の価格が上昇しています。",
        newsType: "construction",
        change: -3,
    },
    {
        text: "大雨の影響で工事が中断しています。",
        newsType: "construction",
        change: -3,
    },
    {
        text: "建設作業員が不足しています。",
        newsType: "construction",
        change: -3,
    },
    {
        text: "大型工事の中断が発表されました。",
        newsType: "construction",
        change: -4,
    },
]

const publishingNews = [ //出版
    {
        text: "新しい教材が大ヒットしています。",
        newsType: "publishing",
        change: 4,
    },
    {
        text: "人気作家の新刊が発売されました。",
        newsType: "publishing",
        change: 3,
    },
    {
        text: "電子書籍の利用者が増えている。",
        newsType: "publishing",
        change: 2,
    },
    {
        text: "学校向け教材の注文が増えています。",
        newsType: "publishing",
        change: 3,
    },
    {
        text: "紙の価格が上昇しています。",
        newsType: "publishing",
        change: -2,
    },
    {
        text: "本の売上が減少しています。",
        newsType: "publishing",
        change: -3,
    },
    {
        text: "漫画の人気シリーズの発売が延期されました。",
        newsType: "publishing",
        change: -3,
    },
    {
        text: "印刷工場でトラブルが発生しました。",
        newsType: "publishing",
        change: -4,
    },
]

const hotelNews = [ //ホテル
    {
        text: "観光客が増え、ホテルの予約が好調です。",
        newsType: "hotel",
        change: 4,
    },
    {
        text: "修学旅行や社員旅行をする人が増えています。",
        newsType: "hotel",
        change: 2,
    },
    {
        text: "海外からの旅行者が増えています。",
        newsType: "hotel",
        change: 3,
    },
    {
        text: "夏休みで宿泊客が増えています。",
        newsType: "hotel",
        change: 2,
    },
    {
        text: "感染症の流行で旅行客が減っています。",
        newsType: "hotel",
        change: -4,
    },
    {
        text: "宿泊料金の値下げ競争が始まりました。",
        newsType: "hotel",
        change: -3,
    },
    {
        text: "台風でホテルの予約のキャンセルが相次いでいます。",
        newsType: "hotel",
        change: -3,
    },
    {
        text: "従業員不足で一部のホテルが営業を休止しています。",
        newsType: "hotel",
        change: -2,
    },
]

const aiNews = [ //AI
    {
        text: "新しいAIサービスが大人気です。",
        newsType: "ai",
        change: 4,
    },
    {
        text: "多くの企業がAIを導入しています。",
        newsType: "ai",
        change: 3,
    },
    {
        text: "AIサービスへの投資が増えています。",
        newsType: "ai",
        change: 3,
    },
    {
        text: "最新AIモデルの発表が話題です。",
        newsType: "ai",
        change: 2,
    },
    {
        text: "AIサービスで大規模な障害が発生しました。",
        newsType: "ai",
        change: -4,
    },
    {
        text: "AIによる個人情報の流出が問題になっています。",
        newsType: "ai",
        change: -3,
    },
    {
        text: "AI規制が強化される見通しです。",
        newsType: "ai",
        change: -3,
    },
    {
        text: "AIの開発費の増加で利益が減っています。",
        newsType: "ai",
        change: -2,
    },
]

const gameNews = [ //ゲーム
    {
        text: "新作ゲームが大ヒットしています。",
        newsType: "game",
        change: 4,
    },
    {
        text: "人気ゲームの大型アップデートが好評です。",
        newsType: "game",
        change: 3,
    },
    {
        text: "ゲーム大会が開催され、注目を集めています。",
        newsType: "game",
        change: 3,
    },
    {
        text: "新しいゲーム機向けのタイトルが発表されました。",
        newsType: "game",
        change: 3,
    },
    {
        text: "新作ゲームの発売が延期されました。",
        newsType: "game",
        change: -4,
    },
    {
        text: "ゲーム内で重大な不具合が見つかりました。",
        newsType: "game",
        change: -3,
    },
    {
        text: "ゲームの利用者数が減少しています。",
        newsType: "game",
        change: -3,
    },
    {
        text: "人気タイトルのサービス終了が発表されました。",
        newsType: "game",
        change: -2,
    },
]

const robotNews =[ //ロボット
    {
        text: "工場でロボットの導入が進んでいます。",
        newsType: "robot",
        change: 4,
    },
    {
        text: "新型ロボットが高い評価を受けています。",
        newsType: "robot",
        change: 3,
    },
    {
        text: "介護ロボットの需要が増えています。",
        newsType: "robot",
        change: 2,
    },
    {
        text: "海外からロボットの大型受注を獲得しました。",
        newsType: "robot",
        change: 3,
    },
    {
        text: "ロボット工場で火災が発生しました。",
        newsType: "robot",
        change: -4,
    },
    {
        text: "部品不足で生産が遅れています。",
        newsType: "robot",
        change: -3,
    },
    {
        text: "開発中のロボットに不具合が見つかりました。",
        newsType: "robot",
        change: -3,
    },
    {
        text: "海外メーカーとのロボット開発の競争が激しくなっています。",
        newsType: "robot",
        change: -2,
    },
]

const carNews = [ //自動車
    {
        text: "新型車の販売が良好です。",
        newsType: "car",
        change: 4,
    },
    {
        text: "海外で自動車の売上が伸びています。",
        newsType: "car",
        change: 3,
    },
    {
        text: "電気自動車の人気が高まっています。",
        newsType: "car",
        change: 3,
    },
    {
        text: "新しい自動車工場の建設が決まりました。",
        newsType: "car",
        change: 2,
    },
    {
        text: "大規模なリコールが発表されました。",
        newsType: "car",
        change: -4,
    },
    {
        text: "自動車部品の不足が続いています。",
        newsType: "car",
        change: -3,
    },
    {
        text: "海外で販売台数が減少しています。",
        newsType: "car",
        change: -3,
    },
    {
        text: "工場の生産が一時停止しました。",
        newsType: "car",
        change: -2,
    },
]

const spaceNews = [ //宇宙
    {
        text: "新しい人工衛星の打ち上げに成功しました。",
        newsType: "space",
        change: 4,
    },
    {
        text: "宇宙開発への投資が増えています。",
        newsType: "space",
        change: 3,
    },
    {
        text: "月探査計画が正式に始まりました。",
        newsType: "space",
        change: 3,
    },
    {
        text: "海外から大型契約を受注しました。",
        newsType: "space",
        change: 2,
    },
    {
        text: "ロケットの打ち上げに失敗しました。",
        newsType: "space",
        change: -4,
    },
    {
        text: "ロケット開発費の増加で利益が減っています。",
        newsType: "space",
        change: -3,
    },
    {
        text: "宇宙開発計画の延期が発表されました。",
        newsType: "space",
        change: -3,
    },
    {
        text: "重要な部品の調達が遅れています。",
        newsType: "space",
        change: -2,
    },
]

const technologyNews = [ //未来開発
    {
        text: "新技術の開発に成功しました。",
        newsType: "technology",
        change: 4,
    },
    {
        text: "研究成果が世界的に注目されています。",
        newsType: "technology",
        change: 3,
    },
    {
        text: "大企業との新技術の共同開発が始まりました。",
        newsType: "technology",
        change: 3,
    },
    {
        text: "新しい特許を取得し、新しい技術の実用化が期待されています。",
        newsType: "technology",
        change: 2,
    },
    {
        text: "研究開発が予定より遅れています。",
        newsType: "technology",
        change: -4,
    },
    {
        text: "重要な実験に失敗しました。",
        newsType: "technology",
        change: -2,
    },
    {
        text: "研究費の削減が発表されました。",
        newsType: "technology",
        change: -3,
    },
    {
        text: "競合企業に新技術で先を越されました。",
        newsType: "technology",
        change: -2,
    },
]


const newsLists = [
    foodNews,
    electricNews,
    medicalNews,
    bankNews,
    transportNews,
    storeNews,
    constructionNews,
    publishingNews,
    hotelNews,
    aiNews,
    gameNews,
    robotNews,
    carNews,
    spaceNews,
    technologyNews,
]




//モーダルを開く関数
function openFacility(name, text){
    //タイトルを変更
    facilityTitle.textContent = name;
    //説明を変更する
    explanation.textContent = text;
    //前のボタンを消去する
    facilityActions.innerHTML = "";
    //モーダルを表示
    facilityModal.style.display = "flex";
}

//今日のクエストを決める関数
function createTodayQuests() {
    todayQuests = Quests
        .filter(quest =>
            strength >= quest.strength &&
            intelligence >= quest.intelligence &&
            100 - fatigue >= quest.fatigue
        )
        .sort(() => Math.random() - 0.5)
        .slice(0, 6)  
        .map(quest => {
            const newQuest = { ...quest}
            if(quest.strength > 0 || quest.intelligence > 0){
                newQuest.reward = Math.floor(Math.random() * 8101) + 8900
                newQuest.fatigue = Math.floor(Math.random() * 26) + 75
            }else {
               newQuest.reward = Math.floor(Math.random() * 1501) + 8500
               newQuest.fatigue = Math.floor(Math.random() * 11) + 65
            }
            return newQuest
        })  
}

//クエストセンターの処理
function QuestsScreen() {
    facilityActions.innerHTML = ""

    const questsreceiveButton = document.createElement("button")
    const JobButton = document.createElement("button")

    questsreceiveButton.textContent = "クエストを受ける"
    JobButton.textContent = "就職する"

    facilityActions.appendChild(questsreceiveButton)
    facilityActions.appendChild(JobButton)

    questsreceiveButton.addEventListener("click", () => {
        showQuestList()
    })

    JobButton.addEventListener("click", () => {
        showJobList()
    })

}
//クエスト一覧を表示する関数
function showQuestList(){
    facilityActions.innerHTML = ""
    const numberOfJob = todayQuests.some(quest => 100 - fatigue >= quest.fatigue)
    
    if(numberOfJob){
        todayQuests.forEach(quest => {
            if(100 - fatigue < quest.fatigue){
                return
            }
            const jobButton = document.createElement("button")
            jobButton.textContent = quest.name
            closeButton.textContent = "戻る"

            jobButton.addEventListener("click", () =>{
                facilityActions.innerHTML = ""
                facilityTitle.style.display = "none"
                explanation.style.display = "none"

                const questName = document.createElement("h1")
                const rewardText = document.createElement("h3")
                const fatigueText = document.createElement("h3")
                const orderButton = document.createElement("button")

                

                questName.textContent = quest.name
                rewardText.textContent = "報酬" + quest.reward + "円"
                fatigueText.textContent = "疲労度" + quest.fatigue + "%" 
                orderButton.textContent = "クエストを受注する"


                facilityActions.appendChild(questName)
                facilityActions.appendChild(rewardText)
                facilityActions.appendChild(fatigueText)
                facilityActions.appendChild(orderButton)

                orderButton.addEventListener("click",async () => {

                    if (quest.reward <9000){
                        reportScreen("詐欺でした！", "1日分の体力を使いました", 2000)
                        fatigue += 100
                        updateStatus()
                        showQuestList()
                    }else {
                        money += quest.reward
                        fatigue += quest.fatigue
                        if (fatigue > 100) {
                            fatigue = 100
                        }
                        updateStatus()

                        const index = todayQuests.indexOf(quest)

                        if (index !== -1) {
                            todayQuests.splice(index, 1)
                        }

                        const newQuest = Quests
                            .filter(quest =>
                                !todayQuests.includes(quest) &&
                                strength >= quest.strength &&
                                intelligence >= quest.intelligence &&
                                100 - fatigue >= quest.fatigue
                            )
                            .sort(() => Math.random() -0.5)[0]

                        if (newQuest) {
                            const copiedQuest = { ...newQuest }
                            if(quest.strength > 0 || quest.intelligence > 0){
                                newQuest.reward = Math.floor(Math.random() * 8101) + 8900
                                newQuest.fatigue = Math.floor(Math.random() * 26) + 75
                            }else {
                                newQuest.reward = Math.floor(Math.random() * 1501) + 8500
                                newQuest.fatigue = Math.floor(Math.random() * 11) + 65
                            }
                            todayQuests.push(copiedQuest)
                        }

                        reportScreen("クエストを達成しました!", "報酬" + quest.reward + "円を獲得しました", 2000)
                        showQuestList() 
                    }
                    
                })

                closeButton.onclick = function(){
                    facilityTitle.style.display = "block"
                    explanation.style.display = "block"
                    showQuestList()
                }


            })
            facilityActions.appendChild(jobButton)
            closeButton.onclick = function(){
                closeButton.textContent = "閉じる"
                QuestsScreen()
            }
        })

    }else {
        facilityActions.innerHTML = ""
        const OrdersNotAccepted = document.createElement("h2")
        OrdersNotAccepted.textContent = "現在受注できるクエストがありません。"
        closeButton.textContent = "戻る"
        facilityActions.appendChild(OrdersNotAccepted)
        closeButton.onclick = function(){
            closeButton.textContent = "閉じる"
            QuestsScreen()
        }
    }
}

//就職可能な会社を表示する
function showJobList() {
    facilityActions.innerHTML = ""

    const findWorkConditions = thisGameJobs.some(job => {
    return strength >= job.requiredStrength && intelligence >= job.requiredIntelligence
    })

    if (ccurrentJob != null) {
                    const companyText = document.createElement("h3")
                    const salaryText = document.createElement("h3")
                    companyText.textContent = "勤務先: " + ccurrentJob
                    salaryText.textContent = "給料: " + companySalary
                    facilityActions.appendChild(companyText)
                    facilityActions.appendChild(salaryText)
                }
    thisGameJobs.forEach(job => {
    closeButton.textContent = "戻る"    
        if(strength >= job.requiredStrength && intelligence >= job.requiredIntelligence){
            
            
            const jobButton = document.createElement("button")

            
            jobButton.textContent = job.name

            
            facilityActions.appendChild(jobButton)
            jobButton.addEventListener("click", () => {
                if (ccurrentJob == null){
                    facilityActions.innerHTML = ""
                    facilityTitle.style.display = "none";
                    explanation.style.display = "none"

                    const jobNameText = document.createElement("h1")
                    const descriptionText = document.createElement("h3")
                    const salary = document.createElement("h3")
                    const tomorrowFatigue =document.createElement("h3")  
                    const findWorkButton = document.createElement("button")  
                      

                    jobNameText.textContent = job.name
                    descriptionText.textContent = job.description
                    salary.textContent = "報酬" + job.salary + "円"
                    tomorrowFatigue.textContent = "翌日の疲労度" + job.startFatigue + "%"
                    findWorkButton.textContent = "就職する"

                    facilityActions.appendChild(jobNameText)
                    facilityActions.appendChild(descriptionText)
                    facilityActions.appendChild(salary)
                    facilityActions.appendChild(tomorrowFatigue)
                    facilityActions.appendChild(findWorkButton)

                    findWorkButton.addEventListener("click",async () => {
                        await reportScreen(job.name + "に就職しました", null, 2000)

                        ccurrentJob = job.name
                        companySalary = job.salary
                        cheangeDayFatigue = job.startFatigue

                        showJobList()
                    })
                }else {
                    if (job.name == ccurrentJob) {
                        facilityActions.innerHTML = ""
                        facilityTitle.style.display = "none";
                        explanation.style.display = "none"

                        const jobNameText = document.createElement("h1")
                        const descriptionText = document.createElement("h3")
                        const salary = document.createElement("h3")
                        const tomorrowFatigue =document.createElement("h3") 
                        const retirementButton = document.createElement("button")
                        

                        jobNameText.textContent = job.name
                        descriptionText.textContent = job.description
                        salary.textContent = "報酬" + job.salary + "円"
                        tomorrowFatigue.textContent = "翌日の疲労度" + job.startFatigue + "%"
                        retirementButton.textContent = "退職する"

                        facilityActions.appendChild(jobNameText)
                        facilityActions.appendChild(descriptionText)
                        facilityActions.appendChild(salary)
                        facilityActions.appendChild(tomorrowFatigue)
                        facilityActions.appendChild(retirementButton)

                        retirementButton.addEventListener("click", async () => {
                            await reportScreen(job.name + "を辞めました", null, 2000)

                            ccurrentJob = null

                            showJobList()
                        })
                    }else {
                        facilityActions.innerHTML = ""
                        facilityTitle.style.display = "none";
                        explanation.style.display = "none"
                        const jobNameText = document.createElement("h1")
                        const descriptionText = document.createElement("h3")
                        const salary = document.createElement("h3")
                        const tomorrowFatigue =document.createElement("h3")
                        const findWorkButton = document.createElement("button")
                        

                        jobNameText.textContent = job.name
                        descriptionText.textContent = job.description
                        salary.textContent = "報酬" + job.salary + "円"
                        tomorrowFatigue.textContent = "翌日の疲労度" + job.startFatigue + "%"
                        findWorkButton.textContent = "就職する"

                        facilityActions.appendChild(jobNameText)
                        facilityActions.appendChild(descriptionText)
                        facilityActions.appendChild(salary)
                        facilityActions.appendChild(tomorrowFatigue)
                        facilityActions.appendChild(findWorkButton)
                        
                        findWorkButton.addEventListener("click",async () => {
                            reportScreen("他の会社に就職しています", null, 2000)

                            showJobList()
                        })
                    }
                    
                }
                closeButton.onclick = function(){
                    facilityTitle.style.display = "block";
                    explanation.style.display = "block";
                    showJobList()
                }
                
            }) 
            
            

        }
        
    })
    if (findWorkConditions == false){
        const report = document.createElement("h3")
        report.textContent = "現在就職できる会社がありません"
        facilityActions.appendChild(report)
    }
    closeButton.onclick = function(){
        closeButton.textContent = "閉じる";
        QuestsScreen()
    }
}

//就職できる６つの会社を選択
function choiceCompanies() {
    thisGameJobs = []
    
    const availableJob = Companies.filter(company => {
        return company.employment === true
    })

    availableJob
        .sort(() => Math.random() - 0.5)
        .slice(0, 6)
        .forEach(company => {
            thisGameJobs.push(company)
        })
}

function createTodayCompanies() {
    thisGameCampanies = []

    //種類ごとに分ける
    const stableCompanies = Companies.filter(company => company.type === "stable")
    const normalCompanies = Companies.filter(company => company.type === "normal")
    const growthCompanies = Companies.filter(company => company.type === "growth")

    //ランダムに1社ずつ選ぶ
    const stable = stableCompanies[Math.floor(Math.random() * stableCompanies.length)]
    const normal = normalCompanies[Math.floor(Math.random() * normalCompanies.length)]
    const growth = growthCompanies[Math.floor(Math.random() * growthCompanies.length)]

    //Companiesに追加
    thisGameCampanies.push(stable)
    thisGameCampanies.push(normal)
    thisGameCampanies.push(growth)

    const otherCompanies = Companies.filter(company =>
        !thisGameCampanies.includes(company) &&
        (
            company.type === "normal" ||
            company.type === "growth" ||
            company.type === "scam"
        )
    )

    const other = otherCompanies[Math.floor(Math.random() * otherCompanies.length)]
    thisGameCampanies.push(other)

}

//証券会社 会社一覧
function showCompanyList(){
    facilityActions.innerHTML = ""
    thisGameCampanies.forEach(companies => { //4つの会社を表示
            const companiesButton = document.createElement("button")
            companiesButton.textContent = companies.name
            facilityActions.appendChild(companiesButton)
            companiesButton.addEventListener("click", () => {
                showCompanyDetail(companies)
            })
            
    })
}

//証券会社　それぞれの会社の詳細
function showCompanyDetail(companies) {
    facilityActions.innerHTML = ""
    facilityTitle.style.display = ("none")
    explanation.style.display = ("none")

                
    const companiesName = document.createElement("h1")
    const differenceText = document.createElement("h3")
    const difference = companies.stockPrice - companies.previousStockPrice
    const descriptionText = document.createElement("h3")
    const stockPriceText = document.createElement("h3")
    const ownedText = document.createElement("h3")
    const amountInput = document.createElement("input")
    const buyButton = document.createElement("button")
    const sellButton = document.createElement("button")

    if (difference > 0) {
        differenceText.textContent = "前日比:+" + difference + "円" 
    }else if (difference < 0) {
        differenceText.textContent = "前日比:" + difference + "円" 
    }else {
        differenceText.textContent = "前日比:±0円"
    }

    companiesName.textContent = companies.name
    descriptionText.textContent =  companies.description
    stockPriceText.textContent = "現在の株価" + companies.stockPrice + "円" 
    ownedText.textContent = "保有株数:" + companies.owned + "株"
    amountInput.type = "number"
    amountInput.min = 1
    amountInput.step = 1
    amountInput.value = 1
    buyButton.textContent = "購入する"
    sellButton.textContent = "販売する"
    closeButton.textContent = "戻る"

    facilityActions.appendChild(companiesName)
    facilityActions.appendChild(descriptionText)
    facilityActions.appendChild(stockPriceText)
    facilityActions.appendChild(differenceText)
    facilityActions.appendChild(ownedText)
    facilityActions.appendChild(amountInput)
    facilityActions.appendChild(buyButton)
    facilityActions.appendChild(sellButton)
    
    buyButton.addEventListener("click",async () => {//buyButtonが押されたときのお知らせ
        const amount = Number(amountInput.value)
        const totalPrice = companies.stockPrice * amount
        const buyRiport = document.createElement("h2")
        if(amount > 0){
            if (money >= companies.stockPrice * amount) { //うまく購入できたときの報告
                if (companies.type === "scam") {
                    //詐欺会社
                }else {
                    companies.owned += amount                            
                }
                money -= totalPrice

                reportScreen(companies.name + "の株を" + amountInput.value + "つ購入しました。", null, 2000)
                updateStatus()
                closeButton.textContent = "閉じる"

                showCompanyDetail(companies)
            }else { //うまく購入できなかったときの報告
                reportScreen("お金が足りません", null, 1000)
            }    
        }else{
            reportScreen("入力した数値が正しくありません", null, 1000)

            closeButton.textContent = "閉じる"

            showCompanyDetail(companies)
        }
        
    })


    sellButton.addEventListener("click",async () => {//sellButtonが押されたときのおしらせ
        const amount = Number(amountInput.value)
        const sellRiport = document.createElement("h2")
        if(amount > 0){
            if (companies.owned >= amount) {//うまく売れたときの報告
                
                companies.owned -= amount
                money += companies.stockPrice * amount

                reportScreen(companies.name + "の株を" + amountInput.value + "つ売りました。", companies.stockPrice * amount + "円を獲得しました。", 2000)
                updateStatus()
                closeButton.textContent = "閉じる"

                showCompanyDetail(companies)
            }else { //うまく売れなかったときの報告
                reportScreen("その数の株を持っていません", null, 2000)
                updateStatus()
                closeButton.textContent = "閉じる"

                showCompanyDetail(companies)
            }
        }else {
            reportScreen("入力した数値が正しくありません", null, 1000)

            closeButton.textContent = "閉じる"

            showCompanyDetail(companies)
        }
        
    })
    closeButton.onclick = function(){
        facilityTitle.style.display = "block"
        explanation.style.display = "block"
        closeButton.textContent = "閉じる"
        showCompanyList()  
    }          
}

//株価の変動
function updateStockPrises() {
    thisGameCampanies.forEach(company => {
        company.previousStockPrice = company.stockPrice
        const change = 
            Math.floor(
                Math.random() *
                (company.maxChange - company.minChange  + 1)
            ) + company.minChange
        
        company.stockPrice = 
            Math.round(
                company.stockPrice * (1 + (change + company.newsEffect)/100) 
            )
        
        if (company.stockPrice < 1) { 
            company.stockPrice = 1
        }
    })
}

function showBankScreen() {
    facilityActions.innerHTML = ""

    const loanText = document.createElement("h3")
    const amountInput = document.createElement("input")
    const borrowButton = document.createElement("button")
    const returnButton = document.createElement("button")

    if (loan == 0) {
        loanText.textContent = "現在借りているお金はありません。"
    }else {
        loanText.textContent = loan + "円お金を借りています。"
    }
    amountInput.type = "number"
    amountInput.min = 0
    amountInput.step = 10
    amountInput.value = 1000
    borrowButton.textContent = "お金を借りる"
    returnButton.textContent = "お金を返す"

    facilityActions.appendChild(loanText)
    facilityActions.appendChild(amountInput)
    facilityActions.appendChild(borrowButton)
    facilityActions.appendChild(returnButton)

    borrowButton.addEventListener("click",async () =>{
        const amount = Number(amountInput.value)
        if(amount > 0) {
            money += amount
            loan += amount

            reportScreen(amountInput.value + "円を借りました。", null, 2000)
            updateStatus()
            showBankScreen()
        }else{
            reportScreen("入力した数値が正しくありません", null, 1000)

            closeButton.textContent = "閉じる"

            showCompanyDetail(companies)
        }
        
    })
    returnButton.addEventListener("click",async () => {
        const amount = Number(amountInput.value)
        if(amount > 0) {
           if (loan > 0 && loan >= amount){
                money -= amount
                loan -= amount

                reportScreen(amountInput.value + "円を返しました", null, 2000)
                updateStatus()
                showBankScreen()
            }else {
                reportScreen("入力した数値が正しくありません ", null, 2000)
                updateStatus()
                showBankScreen()
            } 
        }else {
            reportScreen("入力した数値が正しくありません", null, 1000)

            closeButton.textContent = "閉じる"

            showCompanyDetail(companies)
        }
        
        
    })
}

//ローンに利息つける
function updateLoan(){
    if (loan > 0){
        loan = 
            Math.round(
                loan + loan * 2 / 100
            )    
    }
}

//ニュースを決める関数
function selectTodayNews() {
    todayNews = []

    //証券会社にあったニュースを集める
    const availableNewsLists = newsLists.filter(list => {
        return thisGameCampanies.some(company => 
            company.newsType === list[0].newsType
        )
    })

    //ニュースの数を０~４にする
    const newsCount = Math.min(
        Math.floor(Math.random() * 5),
        availableNewsLists.length
    )

    //ニュースの並びをランダムにする
    availableNewsLists
        .sort(() => Math.random() - 0.5)
        .slice(0, newsCount)
        .forEach(list => {
            const randomIndex = Math.floor(Math.random() * list.length)
            todayNews.push(list[randomIndex])
        })
}

//ニュース効果のリセットと反映
function newsReflection() {
    //すべての会社のニュース効果をリセット
    if (todayNews.length > 0) {
            Companies.forEach(company => {
            company.newsEffect = 0
        })

        //今日のニュースの効果を会社に反映
        todayNews.forEach(news => {
            Companies.forEach(company => {
                if (company.newsType == news.newsType){
                    company.newsEffect = news.change
                }
            })
        })
    }
    
}

//市役所画面
function cityHallscreen() {
    facilityActions.innerHTML = ""

    const newsPaperButton = document.createElement("button")
    const newsButton = document.createElement("button")

    newsPaperButton.textContent = "新聞を見る"
    newsButton.textContent = "ニュースを見る"

    facilityActions.appendChild(newsPaperButton)
    facilityActions.appendChild(newsButton)

    newsPaperButton.addEventListener("click", () => {
        facilityActions.innerHTML = ""
        closeButton.textContent = "戻る"
        const newsPaperDiv = document.createElement("div")
        const title1 = document.createElement("h2")
        const Sentence1 = document.createElement("p")
        const title2 = document.createElement("h2")
        const Sentence2 = document.createElement("p")
        const title3 = document.createElement("h2")
        const Sentence3 = document.createElement("p")
        const title4 = document.createElement("h2")
        const Sentence4 = document.createElement("p")

        newsPaperDiv.id = "newsPaperDiv"
        title1.textContent = "仕事の選択肢を増やそう!"
        Sentence1.textContent = "ジムで体を鍛えたり、図書館で勉強したりすると、仕事に必要な能力を高めることができます。体を鍛えたり勉強したりして、より多くの仕事に挑戦しましょう！"
        title2.textContent = "[うまい話]に注意！"
        Sentence2.textContent = "「絶対にもうかる」「必ず利益が出る」など、簡単にお金が増える話には注意しましょう。投資には利益が出る一方で、損をする可能性もあります。情報をよく確認して判断しましょう。"
        title3.textContent = "ブラックな仕事に気を付けよう！"
        Sentence3.textContent = "仕事を選ぶときは、給料だけでなく、疲労度や仕事内容もしっかり確認しましょう。\n" +
                                "現在の最低賃金は9,000円です。これより低い給料の仕事には注意が必要です。\n" +
                                "自分に合った条件の仕事を選びましょう。"
        title4.textContent = "生活費を忘れずに！"
        Sentence4.textContent = "このゲームでは、1日を終了するごとに1,000円の生活費がかかります。収入と支出を考えて、お金を使いましょう。"
        
        newsPaperDiv.appendChild(title1)
        newsPaperDiv.appendChild(Sentence1)
        newsPaperDiv.appendChild(title2)
        newsPaperDiv.appendChild(Sentence2)
        newsPaperDiv.appendChild(title3)
        newsPaperDiv.appendChild(Sentence3)
        newsPaperDiv.appendChild(title4)
        newsPaperDiv.appendChild(Sentence4)
        facilityActions.appendChild(newsPaperDiv)
        closeButton.onclick = function(){
            closeButton.textContent = "閉じる"
            cityHallscreen()
        }
    })
    
    newsButton.addEventListener("click", () => {
        facilityActions.innerHTML = ""
        closeButton.textContent = "戻る"
        if (todayNews.length > 0) {
            todayNews.forEach(news => {
                const newsText = document.createElement("h3")
                newsText.textContent = news.text
                facilityActions.appendChild(newsText)
            })
        }else {
            const newsText = document.createElement("h3")
            newsText.textContent = "ニュースはありません。"
            facilityActions.appendChild(newsText)
        }


        closeButton.onclick = function(){
            closeButton.textContent = "閉じる"
            cityHallscreen()
        }
    })
}

//宝くじが画面
function lotteryScreen(){
    facilityActions.innerHTML = ""

    const buyButton = document.createElement("button")
    buyButton.textContent = "宝くじを購入する"
    facilityActions.appendChild(buyButton)

    buyButton.addEventListener("click",async () => {
        if (money >= 200){
            facilityActions.style.display = "none"
            facilityTitle.style.display = "none"
            explanation.style.display = "none"
            closeButton.style.display = "none"

            money -= 200
            const lottery = Math.floor(Math.random() * 600)

            if (lottery == 0) {
                money += 10000

                reportScreen("当選！", "１００００円を獲得しました！", 2000)
            }else {
                const report = document.createElement("h3")
                reportScreen("はずれ", "今回は当たりませんでした", 1000)  
            }            
        }else {
            reportScreen("お金が足りません", null, 1000)
        }
        updateStatus()
    })
}

//施設の報告画面
async function reportScreen(text, text2, time) {
    facilityActions.style.display = "none";
    facilityTitle.style.display = "none";
    explanation.style.display = "none"
    closeButton.style.display = "none"


    const reportText2 = document.createElement("h2")
    const reportText = document.createElement("h2")
    reportText.textContent = text
    modalContent.appendChild(reportText)
    if (!(text2 == null)) {
        
        reportText2.textContent = text2
        
    }
    modalContent.appendChild(reportText2)
    await sleep(time)

    modalContent.removeChild(reportText)
    modalContent.removeChild(reportText2)

    facilityActions.style.display = "block";
    facilityTitle.style.display = "block";
    explanation.style.display = "block"
    closeButton.style.display = ""
}

//各施設をクリックしたとき
bankButton.addEventListener("click", () => {
    openFacility(
        "お金貸し屋",
        "ここではお金を借りたり返却したりできます。"
    );
    showBankScreen()
    
});

gymButton.addEventListener("click", () => {
    openFacility(
        "ジム",
        "体力を鍛えることができます。"
    );
    
    //ボタンを作る
    const exerciseButton = document.createElement("button")
    //ボタンの文字
    exerciseButton.textContent = "運動する"

    exerciseButton.onclick = function(){//クリックされたとき
        if (money >= 500 && fatigue <= 75) {
            reportScreen("運動しました！", null ,500)
            strength += 1
            fatigue += 25
            money -= 500
            if (fatigue > 100) {
                fatigue = 100;
            }
            updateStatus()
        }else if(fatigue >= 75){
            reportScreen("あなたは疲れすぎています", null ,1000)
            updateStatus()
        }else{
            reportScreen("お金が足りません", null ,1000)
            updateStatus()
        }
        
    }
        


    //ボタンを表示e
    facilityActions.appendChild(exerciseButton)
});

libraryButton.addEventListener("click", () => {

    openFacility(
        "図書館",
        "勉強して知識を身につけます。"
    );

    //ボタンを作る
    const studyButton = document.createElement("button")
    //ボタンの文字
    studyButton.textContent = "勉強する"
        //クリックされたとき
    studyButton.onclick = function() {
        if(money >= 500 && fatigue <= 80) {
            reportScreen("勉強しました！", null ,500)
            intelligence += 1
            fatigue += 20
            money -= 500
            if (fatigue > 100) {
                fatigue = 100;
            }
            updateStatus()
        }else if(fatigue >= 75){
            reportScreen("あなたは疲れすぎています", null ,1000)
            updateStatus()
        }else{
            reportScreen("お金が足りません", null ,1000)
            updateStatus()
        }
        
    }
    
    //ボタンを表示
    facilityActions.appendChild(studyButton)
});

cityHallButton.addEventListener("click", () => {
    
    openFacility(
        "市役所",
        "ゲームの情報を見ることができます。"
    );
    cityHallscreen()

});

stockButton.addEventListener("click", () => {

    openFacility(
        "証券会社",
        "株を買ったり売ったりできます。"
    );
    showCompanyList()
    
});

lotteryButton.addEventListener("click", () => {

    openFacility(
        "宝くじ売り場",
        "宝くじを購入できます。"
    );
    lotteryScreen()

});

questButton.addEventListener("click", () => {
    openFacility(
        "クエストセンター",
        "クエストを受けることができます。"
    );
    QuestsScreen()
});


//閉じるボタン
closeButton.addEventListener("click", () => {
    if(closeButton.textContent == "閉じる"){
        facilityModal.style.display = "none";
    }
})

//◯秒待つをできるようにする関数
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//ステータスを更新する関数
async function updateStatus(){
    moneyText.textContent = "所持金:" + money + "円"
    fatigueText.textContent = "疲労度:" + fatigue + "%"
    dayText.textContent = "残りの日数:" + day + "日目"
    gameTimeText.textContent = "残り時間:" + gameTime + "分"

    if(fatigue >= 100){
        endDay()
    }
}

//残り時間を管理する関数
function updateTime (){
    if(gameOver){
        return
    }
    gameTime--//残り時間を減らす
    updateStatus()//画像を更新する
    if(gameTime <= 0 || day <= 0){//時間が0になったら
        gameOver = true
        const endGameReport = document.createElement("h1")
        main.innerHTML = ""
        if(money >= 100000 && loan == 0){
           header.style.display = "none";
           endGameReport.textContent = "ゲームクリア"
        }else {
            header.style.display = "none";
            endGameReport.textContent = "ゲームオーバー"
        }

        const endGameClass = document.createElement("div")
        const message = document.createElement("h2") 
        const result = document.createElement("div")
        const finalBalance = document.createElement("h3")
        const finalLoan = document.createElement("h3")

        endGameClass.id = "endGameClass"
        result.id = "result"
        
        message.textContent = "今回のプレイを振り返ろう！\n" +
                              "クエスト・投資・借金などを上手に利用してお金を増やせたかな？"
        finalBalance.textContent = "最終所持金:" + money + "円"
        finalLoan.textContent = "借金:" + loan + "円"

        main.appendChild(endGameClass)
        endGameClass.appendChild(endGameReport)
        endGameClass.appendChild(message)
        endGameClass.appendChild(result)
        result.appendChild(finalBalance)
        result.appendChild(finalLoan)
    }
}

//1日を終了する関数
async function endDay(){
    
    //次の日へ 
    day--
    //疲労度を0にする
    if (ccurrentJob != null) {
        fatigue = cheangeDayFatigue
    }else {
        fatigue = 0
    }
    
    money -= 1000
    if (ccurrentJob != null){
        money += companySalary
    }

    //画像更新
    createTodayQuests()

    updateStockPrises()//株価変動
    updateLoan() //ローンに利息をつける
    updateStatus()
    updateTime()

    selectTodayNews()
    newsReflection()
    log("日数が残り" + day + "日になりました")
    await sleep(4000)
    log("生活費を支払いました")
    await sleep(4000)
    if(ccurrentJob !== null) {
        log("給料を受け取りました")
        console.log(ccurrentJob)
    }
}

endDayButton.addEventListener("click", () => {
    
    if(fatigue >= 20){
        endDay()
    }else{
        log("疲労度が20以上でないと1日を終了できません")
    }
})

async function log(text){
    dayEndNotification.innerHTML = ""
    const dayEndReport = document.createElement("h2")
    dayEndReport.textContent = text
    dayEndNotification.appendChild(dayEndReport)
    dayEndNotification.classList.add("show")
    await sleep(3000)
    dayEndNotification.classList.remove("show");
}

//すべての会社のニュース効果をリセットする

createTodayCompanies()

createTodayQuests()//最初に１日のクエストを設定する
updateStatus()//最初に画面を更新

selectTodayNews()//ニュースを決める
newsReflection()

choiceCompanies()//就職できる会社を選ぶ

setInterval(updateTime,60000);//1分頃に時間を進める