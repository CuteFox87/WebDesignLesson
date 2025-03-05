# Web0x1 當機等候網頁

type: Web
Author: 陳柄佑
Date: March 4, 2025

# ChatGPT 等候頁面

資訊二甲 陳柄佑

## 專案概述

- 目標網站： ChatGPT 網頁版
- 專案目的：在使用者瀏覽網站時，當系統因高流量或技術問題暫時無法提供服務時，容易引起使用者的焦慮與不滿。為了提升使用者體驗，本專案設計了一個專業且具有品牌一致性的當機等候頁面，以安撫使用者情緒、提供透明的等待資訊，並確保使用者在等待過程中不會因資訊不足而過度焦慮或選擇離開。

## 設計內容

- **與 chatGPT 相同主題顏色和 icon**
    - 採用 ChatGPT 原有簡單不單調風格設計
    - 網頁風格
        ```css
        body {
            background-color: #212121;
            color: white;
            overflow: hidden;
        }
        ```
        
    - title and icon
        
        ```html
        <link rel="icon" href="https://cdn.oaistatic.com/assets/favicon-miwirzcw.ico" sizes="32x32">
        <title>ChatGPT</title>
        ```
        
- **Navigation Bar**
    - 網頁截圖
        
    - Navigation Bar HTML
        
        ```html
        <div class="navbar">
            <div class="nav-group">
              <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3v18m9-9H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            <div class="nav-group">
              <button class="model-selector">
                ChatGPT
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 9l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            <div class="nav-group">
              <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16v16H4V4z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button>
                <img alt="User" src="https://lh3.googleusercontent.com/a/AEdFTp6bNj0mPGiwTJsAjjFr0O9K-Ed-mi8ifKLoqM3xbQ=s96-c">
              </button>
            </div>
        </div>
        ```
        
    - Navigation Bar CSS
        
        ```css
        .navbar {
            position: sticky;
            top: 0;
            padding: 12px;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 10;
            height: 64px;
            background-color: #212121;
        }
        
        .navbar .nav-group {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .navbar button {
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background: none;
            cursor: pointer;
            color: white;
        }
        
        .navbar button:hover {
            background-color: rgba(255, 255, 255, 0.05);
        }
        
        .navbar .model-selector {
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 6px 12px;
            font-size: 1.125rem;
            font-weight: bold;
            cursor: pointer;
            color: rgb(255, 255, 255);
        }
        
        .navbar img {
            border-radius: 50%;
            width: 32px;
            height: 32px;
        }
        ```
        
- Content
    - 錯誤訊息
        - 告知使用者現在系統無法使用
        
    - 可愛的小狐狸
        - 單純因為很可愛，讓使用者被這狐狸可愛給療育
        - 這張圖是透過 DALL·E 生成
        - You can look at this small cute fox rotating.
            
    - 資訊相關冷笑話
        - 能夠讓 GPT 工程師們在繁忙壓力大的生活下，透過資訊冷笑話會心一笑
        - 可以透過刷新頁面隨機抽冷笑話
        - jokes list
            
            ```html
            const jokes = [
                "What’s a computer’s favorite drink in winter?<br> → Hot Java.",
                "Why was the server shivering?<br> → Because it was in a cold storage.",
                "Why was the IT guy cold?<br> → Because he left his Windows open.",
                "Why don’t programmers like nature?<br> → It has too many bugs.",
                "Why was the function so sad?<br> → Because it didn’t return anything.",
                "Why did the database administrator break up with his girlfriend?<br> → She had too many connections.",
                "Why was the AI model feeling cold?<br> → Because it wasn’t trained properly.",
                "Why don’t programmers go ice fishing?<br> → They don’t like frozen threads.",
                "Why did the Linux user freeze outside?<br> → He refused to use Windows.",
                "Why do programmers love winter?<br> → Because they get to code in layers.",
                "Why did the web developer wear a scarf?<br> → Because he didn’t want to catch a CSS (Cold Style Syndrome).",
                "Why was the Wi-Fi signal so weak in winter?<br> → Too many frozen packets.",
                "Why did the JavaScript function go skiing?<br> → It wanted to avoid a callback avalanche.",
                "Why do cybersecurity experts hate winter?<br> → Too many phishing holes in the ice.",
                "Why did the programmer bring a blanket to work?<br> → Because he was stuck in an infinite loop and couldn’t escape the cold.",
                "Why don’t Python developers get cold easily?<br> → Because they always have a warm interpreter.",
                "Why was the cloud server freezing?<br> → It ran out of hot backups.",
                "What’s the worst winter joke a developer can hear?<br> → 'Our server room’s heating just failed.'",
                "Why did the programmer hate snow days?<br> → Too many crashes in the system.",
                "Why did the computer science student wear gloves in winter?<br> → To prevent pointer errors.",
                "Why was the developer’s coffee always cold?<br> → Too many runtime errors kept him busy."
            ];
            ```
            
        - Or you can read this random cold joke.
            
        - select jokes randomly
            
            ```jsx
            document.getElementById('joke_content').innerHTML = jokes[Math.floor(Math.random() * jokes.length)];
            ```
            
    - Refresh Page Button
        - 可以讓使用者刷新頁面用
        - Refresh Button JS
            
            ```jsx
            document.getElementById('reload').addEventListener('click', () => {location.reload();});
            ```
            
    - Content HTML
    
    ```html
    <div class="parent">
        <div class="box">
            <div class="inside-box">
                <h1>Something Error</h1>
                <p>Sorry, something went wrong. Please try again later. 
                    <br>You can look at this small cute fox rotating.</p>
                <div style="width: 100px; height: 100px;">
                    <img src="https://media.discordapp.net/attachments/1095711686486401025/1345462150277107753/nyanfox.png?ex=67c4a2c6&is=67c35146&hm=010ff5ad9afc3af2e065f6b3dbeaf70e694b4a0c5cda92164251e08d7ac4fbce&=&format=webp&quality=lossless" alt="Rotating Fox" class="rotate_fox">
                </div>
                <div>
                    <p>Or you can read this random cold joke.</p>
                </div>
                <div class="joke">
                    <p id="joke_content"></p>
                <hr>
                <button id="reload">Try Again</button>
            </div>
        </div>
    </div>
    ```
    
    - Content CSS
    
    ```css
    
    .box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40%;
        height: 70%;
        padding: 12px;
        border-radius: 8px;
        background-color: #424242;
        box-sizing: border-box;
    }
    
    .rotate_fox {
        width: 100%;
        height: 100%;
        animation: spin 5s linear infinite;
    }
    
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    
    .inside-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 80%;
        padding: 12px;
        border-radius: 8px;
        background-color: #424242;
        box-sizing: border-box;
    }
    
    .inside-box img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
    .joke {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        margin-top: 12px;
    }
    ```
    

## 未來改進方向

- 響應式設計
    - 本次作業時間比較緊湊，無法做到適應不同裝置響應式設計
- 更多有趣的笑話

## Repo Link

[https://github.com/CuteFox87/WebDesignLesson](https://github.com/CuteFox87/WebDesignLesson)

## Web Page Link

[ChatGPT](https://cutefox87.github.io/WebDesignLesson/)
