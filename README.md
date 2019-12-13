# UIテンプレート(React x TypeScript)

## 概要

React x TypeScript ベースのUI(フロントエンド)開発テンプレートになります。

## 環境構築

1. [Node.js](http://nodejs.org/)のインストール  
   ([yarn](https://yarnpkg.com/lang/ja/)のインストールは上記手順後、`npm i -g yarn`を実行)
1. 本ディレクトリで`npm i`、`yarn`の場合は`yarn`を実行

※動作確認環境

```
Windows10
node v10.15.3
npm v6.4.1
yarn v1.19.1
```

## 構成

```
UIPlate
├─ .storybook              // Storybook設定ファイル等
├─ public                  // 開発環境で出力されるディレクトリ
|  ├─ mock.json            // apiモックデータ
|  ├─ shift.js             // 出力ソース
|  └─ index.html           // 確認用HTML
├─ node_modules
├─ src
|  ├─ App.tsx              // ルート
|  └─ index.tsx            // エントリーポイント
├─ stories                 // Storybook用ディレクトリ
├─ storybook-static        // Storybook出力ディレクトリ
├─ test                    // UT用ディレクトリ
|
├─ .eslintrc               // eslint設定ファイル
├─ package.json            // npm設定ファイル
├─ tsconfig.json             // TypeScript設定ファイル
├─ webpack.config.analyze.js  // index.js解析用
└─ webpack.config.js  // Webpack設定ファイル
```

## インストールパッケージ

dependencies

|パッケージ名|バージョン|概要|
|:--|:--|:--|
|@material-ui/core|^4.7.2| MaterialUI|
|@material-ui/icons|^4.5.1| 〃|
|react|^16.12.0| React(UIライブラリ)|
|react-dom|^16.12.0| React(UIライブラリ)|
|reset-css|^^5.0.1| ID採番用|
|styled-components|^4.4.1| CSS in JSライブラリ|

devDependencies

|パッケージ名|バージョン|概要|
|:--|:--|:--|
|@storybook/addon-actions|^5.2.8| storybook(コンポーネントガイド作成)|
|@storybook/addon-links|^5.2.8| 〃|
|@storybook/addons|^5.2.8| 〃|
|@storybook/react|^5.2.8| 〃|
|@types/enzyme|^3.10.4| 型定義|
|@types/enzyme-adapter-react-16|^1.0.5| 〃|
|@types/jest|^24.0.23| 〃|
|@types/react|^16.9.16| 〃|
|@types/react-dom|^16.9.4| 〃|
|@types/styled-components|^4.4.1| 〃|
|@typescript-eslint/eslint-plugin|^2.11.0| ESLint x TypeScript用|
|@typescript-eslint/parser|^2.11.0| 〃|
|babel-loader|^8.0.6| storybook用|
|concurrently|^5.0.1| npm-scripts複数実行用|
|css-loader|^3.3.2| JSでCSSを取り込む用|
|enzyme|^3.10.0| UT用ライブラリ|
|enzyme-adapter-react-16|^1.15.1| 〃|
|eslint|^6.7.2| ESLint(静的チェッカー)|
|eslint-config-airbnb|^18.0.1| 〃|
|eslint-plugin-import|^2.19.1| 〃|
|eslint-plugin-jsx-a11y|^6.2.3| 〃|
|eslint-plugin-react|^7.17.0| 〃|
|file-loader|^5.0.2| アイコンファイルを取り込む用|
|husky|^3.1.0| git hookでPre-commit時にESLint + Prettier設定用|
|jest|^0.15.1| UT用ライブラリ|
|json-server|^24.9.0| APIモックサーバ|
|lint-staged|^9.5.0| git hookでPre-commit時にESLint + Prettier設定用|
|prettier-eslint|^9.0.1| prettier(コード自動フォーマッター)|
|prettier-eslint-cli|^5.0.0| 〃|
|style-loader|^1.0.1| CSSをインラインスタイルに書き込む用|
|ts-jest|^24.2.0| Jest x TypeScript用|
|ts-loader|^6.2.1| webpack x TypeScript用|
|typescript|^3.7.3| TypeScript(AltJS)|
|url-loader|^3.0.0| アイコンファイルを取り込む用|
|webpack|^4.41.2| webpack(bundle)|
|webpack-bundle-analyzer|^3.6.0| dress.js解析用|
|webpack-cli|^3.3.10| webpack(bundle)|
|webpack-dev-server|^3.9.0| webpack開発用サーバ|

※dependencies と devDependencies の違い

- dependencies：ソースコードと一緒にバンドル(出力)されるもの(例：jQuery、React、Bootstrap)
- devDependencies：ソースコードをバンドル(出力)する際に必要なもの（例：gulp、webpack、babel）

## npm scripts

|scripts|実行コマンド|概要|
|:--|:--|:--|
|build:prd|`webpack --config webpack.config.js`| ビルド|
|format|`prettier-eslint --write $PWD/'src/**/*.{ts,tsx}`| 自動フォーマット|
|lint|`eslint src/**/*.{ts,tsx}`| 静的チェック|
|fix|`eslint src/**/*.{ts,tsx} --fix`| 静的チェック＆自動フォーマット（フォーマット弱め）|
|precommit|`lint-staged`| git hookでPre-commit時にESLint + Prettier設定用|
|test|`jest`| UT実行|
|start|`concurrently \"webpack-dev-server --config webpack.config.js --hot\" \"json-server --watch public/mock.json -p 3003\"`|// 開発用サーバ起動(起動中は変更検知して自動ビルド)＆モックサーバ起動|
|storybook|`start-storybook -p 6006 -s ./public`| Storybookサーバ起動(起動中は変更検知して自動ビルド)|
|build-storybook|`build-storybook`| Storybookビルド|
|analyze|`webpack --config webpack.config.analyze.js`|shift.js解析結果起動|
