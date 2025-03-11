// 日付ごとのタスクを保存するオブジェクト
let tasks = {};

// タスクを追加する関数
function addTask() {
    // 日付を取得
    let date = document.getElementById("date-picker").value;
    // タスク入力フィールドを取得
    let taskInput = document.getElementById("task-input");

    // 日付とタスクが入力されている場合
    if (date && taskInput.value.trim() !== "") {
        // 日付がtasksオブジェクトにまだ存在しない場合、配列を作成
        if (!tasks[date]) {
            tasks[date] = [];
        }
        // タスクをその日付に追加
        tasks[date].push(taskInput.value);
        // 入力フィールドを空にリセット
        taskInput.value = "";
        // タスクリストを再表示
        displayTasks();
    }
}

// タスクを画面に表示する関数
function displayTasks() {
    // タスクリストの親要素を取得
    let taskList = document.getElementById("task-list");
    // 現在のリストをクリア
    taskList.innerHTML = "";

    // tasksオブジェクトの各日付についてループ
    for (let date in tasks) {
        // 日付とタスクをリストアイテムとして作成
        let li = document.createElement("li");
        li.innerHTML = `<strong>${date}</strong>: ${tasks[date].join(", ")}
                        <button onclick="removeTask('${date}')">削除</button>`;
        // リストに新しいアイテムを追加
        taskList.appendChild(li);
    }
}

// タスクを削除する関数
function removeTask(date) {
    // 指定された日付のタスクを削除
    delete tasks[date];
    // タスクリストを再表示
    displayTasks();
}

// プロジェクトの進捗を更新する関数
function updateProgress() {
  // 入力された進捗度を取得
  let progressValue = document.getElementById("progress-input").value;
  let progressFill = document.getElementById("progress-fill");

  // 進捗度を0〜100の範囲に制限
  progressValue = Math.max(0, Math.min(100, progressValue));

  // 進捗バーの幅を更新
  progressFill.style.width = progressValue + "%";
  progressFill.innerText = progressValue + "%";

  // 進捗度に応じてバーの色を変更
  if (progressValue < 50) {
      progressFill.style.backgroundColor = "#ff9800"; // オレンジ
  } else if (progressValue >= 80) {
      progressFill.style.backgroundColor = "#28a745"; // 緑
  } else {
      progressFill.style.backgroundColor = "#007bff"; // 青
  }
}

// 投稿を追加する関数
function addPost() {
    // 入力された投稿内容を取得
    const postContent = document.getElementById('post-input-field').value.trim();
    
    // 投稿内容が入力されていない場合、警告を表示
    if (!postContent) {
        alert('投稿内容を入力してください');
        return;
    }

    // 投稿先のリストを決定
    let targetList;
    
    // 選択されたカテゴリに基づいてリストを設定
    const selectedCategory = document.getElementById('category-select').value;

    if (selectedCategory === 'イベント') {
        targetList = document.getElementById('event-list');
    } else if (selectedCategory === 'ニュース') {
        targetList = document.getElementById('news-list');
    } else if (selectedCategory === 'お知らせ') {
        targetList = document.getElementById('notice-list');
    }

    // 新しい投稿をリストに追加
    if (targetList) {
        const newPost = document.createElement('li');
        newPost.textContent = postContent;
        targetList.appendChild(newPost);
    }

    // 投稿後に入力フィールドをリセット
    document.getElementById('post-input-field').value = '';
}

// 検索機能の実装
function search() {
  // 入力された検索キーワードを取得
  const searchInput = document.getElementById('search-input').value;
  
  // キーワードが入力されている場合、アラートを表示
  if (searchInput.trim() !== "") {
      alert("検索キーワード: " + searchInput);
  } else {
      alert("検索キーワードを入力してください！");
  }
}




