// 宮崎市ごみ収集エリア（町名）マッピングデータ
const AREA_MAPPING = {
    // 南A
    "青島1-6": "南A", "青島西1-2": "南A", "跡江": "南A", "有田": "南A", "生目": "南A", 
    "生目台西1-5": "南A", "生目台東1-5": "南A", "浮田": "南A", "内海": "南A", 
    "大塚台西1-3": "南A", "大塚台東1-2": "南A", "大塚町": "南A", "大坪町(国道269西側)": "南A",
    "大坪西1-2": "南A", "鏡洲": "南A", "加江田(加江田川南)": "南A", "薫る坂1-2": "南A", 
    "北川内町": "南A", "江南1-4": "南A", "小松": "南A", "小松台北町": "南A", 
    "小松台西1-3": "南A", "小松台東1-3": "南A", "小松台南町": "南A", "桜ヶ丘町": "南A", 
    "恒久(国道269西側)": "南A", "富吉": "南A", "長嶺": "南A", "福島町": "南A", 
    "古城町(国道269西側)": "南A", "細江": "南A", "和知川原1-3": "南A",
    
    // 南B
    "青葉町": "南B", "赤江": "南B", "太田1-4": "南B", "大坪町(国道269東側)": "南B", 
    "大坪東1-3": "南B", "大淀1-4": "南B", "学園木花台北1-3": "南B", "学園木花台桜1-2": "南B", 
    "学園木花台西1-2": "南B", "学園木花台南1-3": "南B", "加江田(加江田川北)": "南B", 
    "熊野": "南B", "源藤町": "南B", "希望ヶ丘1-4": "南B", "京塚1-2": "南B", 
    "郡司分": "南B", "谷川1-3": "南B", "恒久(国道269東側)": "南B", "恒久1-6": "南B", 
    "恒久南1-4": "南B", "天満1-3": "南B", "中村西1-3": "南B", "中村東1-2": "南B", 
    "本郷1-3": "南B", "本郷北方": "南B", "本郷南方": "南B", "まなび野1-3": "南B", 
    "宮の元町": "南B", "淀川1-3": "南B",
    
    // 北A
    "池内町": "北A", "糸原": "北A", "瓜生野": "北A", "江平西1-2": "北A", "大瀬町": "北A", 
    "大橋1-3": "北A", "上北方": "北A", "上野町": "北A", "祇園1-4": "北A", "北高松町": "北A", 
    "霧島1-5": "北A", "下北方町(国道10西)": "北A", "神宮1-2": "北A", "神宮町": "北A", 
    "神宮西1-2": "北A", "神宮東1-3(国道10西)": "北A", "末広1-2": "北A", "大工1-3": "北A", 
    "高松町": "北A", "橘通西1-5": "北A", "堤内": "北A", "鶴島1-3": "北A", "西池町": "北A", 
    "西高松町": "北A", "花ヶ島町(国道10西)": "北A", "花殿町": "北A", "原町": "北A", 
    "広原": "北A", "芳士": "北A", "丸山1-2": "北A", "元宮町": "北A", "矢の先町": "北A", "吉野": "北A",
    
    // 北B
    "旭1-2": "北B", "吾妻町": "北B", "阿波岐原町": "北B", "浮城町": "北B", "永楽町": "北B", 
    "江平町1": "北B", "江平中町": "北B", "江平東1-2": "北B", "江平東町": "北B", "老松1-2": "北B", 
    "大島町": "北B", "小戸町": "北B", "川原町": "北B", "北権現町": "北B", "権現町": "北B", 
    "桜町": "北B", "潮見町": "北B", "下北方町(国道10東)": "北B", "下原町": "北B", "昭栄町": "北B", 
    "浄土江町": "北B", "昭和町": "北B", "新栄町": "北B", "神宮東1-3(国道10東)": "北B", 
    "新城町": "北B", "新別府町": "北B", "瀬頭1-2": "北B", "瀬頭町": "北B", "曽師町": "北B", 
    "大王町": "北B", "高洲町": "北B", "高千穂通1-2": "北B", "橘通東1-5": "北B", "出来島町": "北B", 
    "中西町": "北B", "波島1-2": "北B", "錦本町": "北B", "錦町": "北B", "花ヶ島町(国道10東)": "北B", 
    "稗原町": "北B", "東大宮1-4": "北B", "日ノ出町": "北B", "広島1-2": "北B", "別府町": "北B", 
    "堀川町": "北B", "前原町": "北B", "松山1-2": "北B", "丸島町": "北B", "港1-3": "北B", 
    "港東1-3": "北B", "宮崎駅東1-3": "北B", "宮田町": "北B", "宮脇町": "北B", "村角町": "北B", 
    "柳丸町": "北B", "山崎町": "北B", "大和町": "北B", "吉村町": "北B"
};

const TOWN_NAMES = Object.keys(AREA_MAPPING);

// スケジュールの定義（第◯何曜日などの条件を含む）
// 条件: {type: 'weekly', days: [曜日配列(0-6)]} または {type: 'monthly', day: 曜日(0-6), weeks: [第何週の配列(1-5)]}
const GOMI_SCHEDULES = {
    "南A": {
        name: "南A エリア",
        rules: {
            "燃やせるごみ": { type: 'weekly', days: [2, 5] }, // 火金
            "燃やせないごみ・金属類": { type: 'monthly', day: 1, weeks: [3] }, // 第3月
            "ペットボトル・プラスチック製容器包装": { type: 'weekly', days: [3] }, // プラ: 水 (ペットは別途条件があるが、宮崎市はプラとペットを分けて記載。ここではプラをベースにし、特定の日はペットにする)
            "ペットボトル": { type: 'monthly', day: 4, weeks: [1, 3] }, // 第1・3木
            "空き缶・空きびん": { type: 'monthly', day: 4, weeks: [2, 4] }, // 第2・4木
            "資源物": { type: 'monthly', day: 3, weeks: [1] }, // 第1水
            "古紙・衣類": { type: 'monthly', day: 1, weeks: [1, 2, 3, 4] }
        }
    },
    "南B": {
        name: "南B エリア",
        rules: {
            "燃やせるごみ": { type: 'weekly', days: [2, 5] },
            "燃やせないごみ・金属類": { type: 'monthly', day: 1, weeks: [4] },
            "ペットボトル・プラスチック製容器包装": { type: 'weekly', days: [3] },
            "ペットボトル": { type: 'monthly', day: 4, weeks: [2, 4] },
            "空き缶・空きびん": { type: 'monthly', day: 4, weeks: [1, 3] },
            "資源物": { type: 'monthly', day: 3, weeks: [2] },
            "古紙・衣類": { type: 'monthly', day: 4, weeks: [1, 2, 3, 4] }
        }
    },
    "北A": {
        name: "北A エリア",
        rules: {
            "燃やせるごみ": { type: 'weekly', days: [1, 4] }, // 月木
            "燃やせないごみ・金属類": { type: 'monthly', day: 3, weeks: [1] },
            "ペットボトル・プラスチック製容器包装": { type: 'weekly', days: [5] }, // プラ: 金
            "ペットボトル": { type: 'monthly', day: 2, weeks: [1, 3] },
            "空き缶・空きびん": { type: 'monthly', day: 2, weeks: [2, 4] },
            "資源物": { type: 'monthly', day: 3, weeks: [3] },
            "古紙・衣類": { type: 'monthly', day: 5, weeks: [1, 2, 3, 4] }
        }
    },
    "北B": {
        name: "北B エリア",
        rules: {
            "燃やせるごみ": { type: 'weekly', days: [1, 4] },
            "燃やせないごみ・金属類": { type: 'monthly', day: 3, weeks: [2] },
            "ペットボトル・プラスチック製容器包装": { type: 'weekly', days: [5] },
            "ペットボトル": { type: 'monthly', day: 2, weeks: [2, 4] },
            "空き缶・空きびん": { type: 'monthly', day: 2, weeks: [1, 3] },
            "資源物": { type: 'monthly', day: 3, weeks: [4] },
            "古紙・衣類": { type: 'monthly', day: 2, weeks: [1, 2, 3, 4] }
        }
    }
};

// スタイルとアイコンのマッピング
const GOMI_STYLE_MAP = {
    "燃やせるごみ": { class: "color-burn", icon: "🔥" },
    "燃やせないごみ・金属類": { class: "color-metal", icon: "🛠️" },
    "ペットボトル・プラスチック製容器包装": { class: "color-pet", icon: "🧴" }, // 今回は統合名にするがアイコンは🧴
    "ペットボトル": { class: "color-pet", icon: "🧴" },
    "空き缶・空きびん": { class: "color-can", icon: "🥫" },
    "資源物": { class: "color-resource", icon: "📦" },
    "古紙・衣類": { class: "color-paper", icon: "📰" },
    "なし": { class: "color-none", icon: "✨" }
};

const dayNames = ["日", "月", "火", "水", "木", "金", "土"];

// --- 日付・曜日計算ユーティリティ ---
// 指定した日付が「第何週か」を取得する（その月の第1回目の該当曜日を第1週とする標準的な数え方）
function getWeekOfMonth(date) {
    const d = date.getDate();
    return Math.ceil((d - 1 - date.getDay() + 7) / 7 + (date.getDay() === 0 ? 0 : 0)); // 簡易的な計算ではなく正確にする
}
function getNthDayOfWeek(date) {
    // 日付(1-31)から、その曜日がその月で何回目かを計算する
    return Math.ceil(date.getDate() / 7);
}

// 特定の日付におけるごみの種類を判定する関数
function getGomiTypesForDate(areaKey, targetDate) {
    if (!areaKey || !GOMI_SCHEDULES[areaKey]) return ["なし"];

    const rules = GOMI_SCHEDULES[areaKey].rules;
    const targetDay = targetDate.getDay(); // 0-6
    const targetNthWeek = getNthDayOfWeek(targetDate); // 1-5

    let result = [];

    // 1. 月ごとの特定週のごみをチェック
    for (const [gomiName, rule] of Object.entries(rules)) {
        if (rule.type === 'monthly' && rule.day === targetDay && rule.weeks.includes(targetNthWeek)) {
            result.push(gomiName);
        }
    }
    // 2. 毎週のごみをチェック
    for (const [gomiName, rule] of Object.entries(rules)) {
        if (rule.type === 'weekly' && rule.days.includes(targetDay)) {
            result.push(gomiName);
        }
    }

    return result.length > 0 ? result : ["なし"];
}

document.addEventListener("DOMContentLoaded", () => {
    const dateDisplay = document.getElementById("date-display");
    const todayGomiType = document.getElementById("today-gomi-type");
    const todayGomiIcon = document.getElementById("today-gomi-icon");
    const nextGomiType = document.getElementById("next-gomi-type");
    const nextGomiIcon = document.getElementById("next-gomi-icon");
    const scheduleList = document.getElementById("schedule-list");
    
    // 検索・エリアエリアDOM
    const searchInput = document.getElementById("area-search");
    const searchResults = document.getElementById("search-results");
    const currentAreaName = document.getElementById("current-area-name");

    // 日付設定
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDayOfWeek = tomorrow.getDay();

    dateDisplay.textContent = `きょうは ${today.getMonth() + 1}月${today.getDate()}日(${dayNames[currentDayOfWeek]})`;

    // LocalStorage読み込み
    let currentAreaKey = localStorage.getItem("miyazaki_gomi_area_key");
    const savedTown = localStorage.getItem("miyazaki_gomi_town_name");
    
    if (currentAreaKey && savedTown) {
        searchInput.value = savedTown;
        updateDisplay(currentAreaKey, savedTown);
    } else {
        resetDisplay();
    }

    // --- 検索機能の実装 ---
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim();
        searchResults.innerHTML = ""; // クリア
        
        if (query.length === 0) {
            searchResults.classList.add("hidden");
            return;
        }

        // 部分一致で町名を検索
        const matchedTowns = TOWN_NAMES.filter(town => town.includes(query));
        
        if (matchedTowns.length > 0) {
            searchResults.classList.remove("hidden");
            // 最大5件まで表示
            matchedTowns.slice(0, 5).forEach(town => {
                const li = document.createElement("li");
                li.textContent = `${town} (${AREA_MAPPING[town]})`;
                li.addEventListener("click", () => {
                    // 町名を選択した時の処理
                    selectTown(town);
                });
                searchResults.appendChild(li);
            });
        } else {
            searchResults.classList.add("hidden");
        }
    });

    // フォーカスが外れたら少し遅らせて候補を隠す
    searchInput.addEventListener("blur", () => {
        setTimeout(() => searchResults.classList.add("hidden"), 200);
    });

    function selectTown(townName) {
        searchInput.value = townName;
        searchResults.classList.add("hidden");
        const areaKey = AREA_MAPPING[townName];
        
        // 保存
        localStorage.setItem("miyazaki_gomi_area_key", areaKey);
        localStorage.setItem("miyazaki_gomi_town_name", townName);
        
        updateDisplay(areaKey, townName);
    }

    // --- 表示の更新処理 ---
    function updateDisplay(areaKey, townName) {
        if (!areaKey || !GOMI_SCHEDULES[areaKey]) {
            resetDisplay();
            return;
        }

        const areaData = GOMI_SCHEDULES[areaKey];
        currentAreaName.textContent = `${areaData.name} (設定元: ${townName})`;
        
        // 1. 今日のごみ判定
        const todayGomis = getGomiTypesForDate(areaKey, today);
        renderGomiCard(todayGomiType, todayGomiIcon, todayGomis);

        // 2. 明日のごみ判定
        const tomorrowGomis = getGomiTypesForDate(areaKey, tomorrow);
        renderGomiCard(nextGomiType, nextGomiIcon, tomorrowGomis);

        // 3. 週間スケジュールの更新 (今日から向こう1週間の予定を表示)
        scheduleList.innerHTML = "";
        
        for (let i = 0; i < 7; i++) {
            const listDate = new Date(today);
            listDate.setDate(today.getDate() + i);
            const listDay = listDate.getDay();
            const listNthWeek = getNthDayOfWeek(listDate);
            
            const gomis = getGomiTypesForDate(areaKey, listDate);

            const li = document.createElement("li");
            const dateStr = `${listDate.getMonth() + 1}/${listDate.getDate()}(${dayNames[listDay]})`;

            const gomiBadges = gomis.map(gomi => {
                let displayLabel = gomi === "なし" ? "収集なし" : gomi;
                const styleInfo = GOMI_STYLE_MAP[gomi] || GOMI_STYLE_MAP["なし"];
                return `<span class="schedule-badge ${styleInfo.class}">${styleInfo.icon} ${displayLabel}</span>`;
            }).join("");

            li.innerHTML = `
                <span class="schedule-day">${dateStr}</span>
                <span class="schedule-item-multi">
                    ${gomiBadges}
                </span>
            `;
            scheduleList.appendChild(li);
        }
    }

    function renderGomiCard(typeEl, iconEl, gomis) {
        // 現在のgomi-typeクラスをリセットして複数対応のレイアウトはCSSに任せる
        typeEl.className = "gomi-type";
        typeEl.innerHTML = gomis.map(gomi => {
            const styleInfo = GOMI_STYLE_MAP[gomi] || GOMI_STYLE_MAP["なし"];
            const displayObj = gomi === "なし" ? "収集なし" : gomi;
            return `<div class="${styleInfo.class}">${displayObj}</div>`;
        }).join("");

        iconEl.innerHTML = gomis.map(gomi => {
            const styleInfo = GOMI_STYLE_MAP[gomi] || GOMI_STYLE_MAP["なし"];
            return `<span>${styleInfo.icon}</span>`;
        }).join("");
    }

    function resetDisplay() {
        if(todayGomiType) {
            todayGomiType.innerHTML = `<div class="color-none">町名を検索</div>`;
            todayGomiIcon.innerHTML = `<span>🔍</span>`;
        }
        nextGomiType.innerHTML = `<div class="color-none">リストから選択</div>`;
        nextGomiIcon.innerHTML = `<span>👆</span>`;
        currentAreaName.textContent = "未設定";
        scheduleList.innerHTML = "<li>町名を検索・設定すると表示されます</li>";
    }
});
