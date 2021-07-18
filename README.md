## アプリについて

ポートフォリオ用に作成したタスク管理アプリ(WEB 版)です。  
こちらはクライアント部分になり、API サーバーのコードは<a href="https://github.com/yuuta-wata/Todo-App-Server" alt="Todo-App-Server">こちら</a>になります。

## 開発環境

- MacBook Pro

  - macOs Catalina V.10.15.7

- node.js

  - V.12.14.1

- yarn

  - V.1.22.4

## 状態管理

- WEB 版では Redux は使用しない。
- ReactHooks を使用する。
  - グローバルで管理する場合
    - useContext
  - モジュール内で管理する場合
    - useReducer
  - ローカルスコープで管理する場合
    - useState

## 実装機能

- ログイン/ログアウト機能
- アカウント新規作成機能
- テストユーザーログイン機能
- タスク投稿機能
- タスク投稿一覧機能
- タスク削除機能
- トークン認証機能
- レスポンシブ対応

## 使用技術

**言語**

- HTML
- CSS
- TypeScript

**フレームワーク**

- React.js

**クエリ**

- GraphQL

**Paas**

- Netlify

## ローカルでの起動方法

**１**、先に API サーバーである<a href="https://github.com/yuuta-wata/Todo-App-Server" alt="Todo-App-Server">Todo-App-Server</a>をローカルで起動してください。  
起動方法はページ先の README に記載しています。

**２**、お好きなディレクトリにクローンしてください。

```bash
% git clone https://github.com/yuuta-wata/Todo-App-Client.git
```

**3**、Todo-App-Client ディレクトリ直下に.env.development.local ファイルを作成し,下記をコピペしてください。  
(注).env ファイルは通常公開しません、今回はポートフォリオ作成なので公開しています。

```
REACT_APP_DEVELOPMENT_GRAPHQL_URL=http://localhost:4000/graphql

```

**4**、アプリを起動します。  
yarn の場合

```bash
% cd Todo-App-Client
% yarn
% yarn start
```

docker の場合

```bash
% cd Todo-App-Client
docker-compose up

```

3000 番ポートで起動します。

## StoryBook の起動

```bash
yarn storybook

```
