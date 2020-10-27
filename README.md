## アプリについて

ポートフォリオ用に作成したタスク管理アプリケーションです。  
こちらはクライアント部分になり、API サーバーのコードは<a href="https://github.com/yuuta-wata/Todo-App-Server" alt="Todo-App-Server">こちら</a>になります。

## 実装機能

**ランディングページ**

- ログインフォーム
  - ログイン失敗時にエラー表示
- テストユーザーログインボタン
- 新規登録ボタン

**ユーザー新規登録ページ**

- 新規登録フォーム
  - 新規登録失敗時にエラー表示
- ランディングページへ戻るボタン

**ホームページ**

- ログインユーザーのニックネームを表示

  - ニックネーム取得失敗時にエラー表示

- タスク投稿フォーム

  - タスク投稿失敗時にエラー表示

- 投稿タスク一覧

  - データが無い場合、投稿を促すメッセージを表示

- 投稿タスク削除ボタン

  - 削除失敗時にエラー表示

- アカウント削除ページ移動ボタン
- ログアウトボタン

**アカウント削除ページ**

- アカウント削除フォーム
  - アカウント削除失敗時にエラー表示
- ホームページへ戻るボタン

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
REACT_APP_DEVELOPMENT_REFRESH_TOKEN_URL=http://localhost:4000/refresh_token/

```

**4**、アプリを起動します。  
yarn をインストールしてない方は別途インストールをお願いします。

```bash
% cd Todo-App-Client
% yarn
% yarn start
```

3000 番ポートで起動します。

### (備考)

~storybook を使用していますが、2020 年 4 月 11 日現在コンパイルエラーで起動しません。  
只今修正中です。~  
修正しました。(2020/4/30)
