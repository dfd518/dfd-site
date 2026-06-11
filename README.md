# 合同会社DFD — コーポレートサイト

北九州市を拠点とする合同会社DFDの公式コーポレートサイトです。

---

## ファイル構成

```
dfd-.site/
├── index.html       トップページ
├── company.html     会社概要
├── services.html    事業内容
├── contact.html     お問い合わせ
├── privacy.html     プライバシーポリシー
├── style.css        共通スタイル
├── script.js        共通スクリプト
└── favicon.svg      ファビコン（DFD モノグラム）
```

---

## ローカルでの確認方法

ビルド不要です。`index.html` をブラウザで直接開けば動作します。

ただし、一部ブラウザでは `file://` プロトコルだとフォントや一部挙動が制限されます。
**ローカルサーバーを立てると確実です。**

### 方法 A：VS Code の Live Server 拡張（おすすめ）

1. VS Code を開き、拡張機能「Live Server」をインストール
2. `index.html` を右クリック →「Open with Live Server」
3. ブラウザで `http://127.0.0.1:5500` が開きます

### 方法 B：Python（インストール済みの場合）

```bash
cd dfd-.site のフォルダパス
python -m http.server 8000
```

ブラウザで `http://localhost:8000` を開きます。

### 方法 C：Node.js（インストール済みの場合）

```bash
npx serve .
```

---

## Cloudflare Pages で公開する手順

### 前提

- GitHub アカウントを持っていること
- Cloudflare アカウントを持っていること（無料プランで OK）

---

### ステップ 1：GitHub にリポジトリを作成する

1. [github.com](https://github.com) にログインし、右上の「+」→「New repository」をクリック
2. Repository name に `dfd-site`（任意）を入力
3. Public または Private を選択（どちらでも公開できます）
4. 「Create repository」をクリック

---

### ステップ 2：ファイルを GitHub にアップロードする

#### Git を使う場合（推奨）

```bash
# このフォルダで実行
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/あなたのユーザー名/dfd-site.git
git push -u origin main
```

#### Git を使わない場合

1. GitHub のリポジトリページを開く
2.「Add file」→「Upload files」をクリック
3. ファイルをすべてドラッグ＆ドロップ
4.「Commit changes」をクリック

---

### ステップ 3：Cloudflare Pages に接続する

1. [dash.cloudflare.com](https://dash.cloudflare.com) にログイン
2. 左サイドバーの「Workers & Pages」→「Pages」をクリック
3. 「Connect to Git」をクリック
4. GitHub を選択し、画面の指示に従って GitHub アカウントを連携
5. 先ほど作成したリポジトリを選択して「Begin setup」をクリック

---

### ステップ 4：ビルド設定を入力する

以下のように設定します（静的サイトなのでビルドコマンドは不要です）。

| 項目 | 入力値 |
|------|--------|
| Project name | `dfd-site`（任意） |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | **空欄のまま** |
| Build output directory | **空欄のまま**（または `/`） |

「Save and Deploy」をクリックすると、自動でデプロイが始まります。

数分待つと `https://dfd-site.pages.dev`（名前は変わることがあります）でサイトが公開されます。

---

### ステップ 5：カスタムドメイン `dfd-ai.com` を設定する

#### 前提

`dfd-ai.com` のドメインを取得済みで、Cloudflare に移管済みか DNS を Cloudflare で管理していること。

Cloudflare でドメインを購入した場合は、自動的に Cloudflare の DNS 管理になっています。

#### 手順

1. Pages のプロジェクトページを開く
2.「Custom domains」タブ →「Set up a custom domain」をクリック
3. `dfd-ai.com` と入力して「Continue」
4. DNS レコードの追加を求められる場合は「Activate domain」をクリック
   - Cloudflare DNS 管理の場合は自動で設定されます
5. 数分〜最大 24 時間後に `https://dfd-ai.com` でアクセスできるようになります

> **補足：** `www.dfd-ai.com` でもアクセスできるようにするには、同じ手順で `www.dfd-ai.com` も追加してください。

---

## サイトを更新する方法

ファイルを編集したあと、以下のコマンドで GitHub に push するだけで自動デプロイされます。

```bash
git add .
git commit -m "変更内容のメモ"
git push
```

Cloudflare Pages が変更を検知して、数分で本番サイトに反映されます。

---

## 修正が必要な箇所（TODO）

コード内に `TODO` コメントが入っています。

- **郵便番号** `803-0822` は仮置きです。正式な郵便番号を確認して、全ファイルの該当箇所を修正してください（`index.html`, `company.html`, `services.html`, `contact.html`, `privacy.html`, `style.css` の TODO コメントを検索）
- **OGP 画像** `ogp.png` は未作成です。SNS でシェアされたときのサムネイル画像を `1200×630px` で作成し、ルートに `ogp.png` として置いてください
- **Google フォーム** `contact.html` にコメントアウトで埋め込み用プレースホルダーがあります。フォーム導入時はコメントを外して URL を設定してください

---

## 技術スタック

- HTML / CSS / JavaScript（フレームワーク不使用）
- Google Fonts：Shippori Mincho / Zen Kaku Gothic New / JetBrains Mono
- ホスティング：Cloudflare Pages（無料プラン）
