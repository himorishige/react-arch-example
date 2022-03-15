# はじめに

Container/Presentational、Co-location のサンプル構成のリポジトリ。ロジックや要素が少ないためそれぞれの利点は見えづらいのですが部分的な参照としていただければと思います。

## セットアップ

Vite 環境を利用した React アプリケーション

### インストール

```bash
$ yarn install
```

### 開発サーバーの起動

```bash
$ yarn dev
```

### Storybook の起動

```bash
$ yarn storybook
```

### Test の実行

```bash
$ yarn test
```

## Container/Presentational

1 つのコンポーネントをロジックを担当する「Container」層と UI を担当する「Presenter」層とで分割して管理する構成です。

### 参考コンポーネント

API から取得したデータを表示するコンポーネントを想定しています。Container 層（もしくはさらに上位の Page）で API へ接続してデータを取得。Props で Presenter 層へ渡しています。

```bash
./src/components/ContainerPresenter
├── Container.test.tsx
├── Container.tsx # container層（ロジック担当）
├── Presenter.stories.tsx
├── Presenter.test.tsx
├── Presenter.tsx # presentational層（UI担当）
└── index.ts
```

### メリット

- ロジックと UI が分離され可読性・保守性が高くなる
- Storybook（UI カタログ）には Presenter 層のみを対象とすることで外部ロジックのモックアップなど不要になり管理・構築が容易になる
- ロジックのテストコードは Container 層のみで完結できる

### デメリット

- コードの記載量が大幅に増える
- ファイル数、コード量が増えるためバンドルサイズが大きくなる

## Co-location

ファイルやロジックを細かく分ける方法とは逆のアプローチとして、描画を行うコンポーネントとデータ取得のロジックはなるべく近くに配置することで管理する構成です。

複数のコンポーネントで利用する場合は上位の階層に動かすといった方法を取ります。

[ファイル構成 - React](https://ja.reactjs.org/docs/faq-structure.html)

[State Colocation will make your React app faster](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster)

### 参考コンポーネント

```bash
./src/components/Colocate
├── Colocate.stories.tsx
├── Colocate.test.tsx
├── Colocate.tsx
└── index.ts
```

API からの取得について上位の Page コンポーネントで行い Props で渡すという手法が一般的ですが、`Colocate.tsx`でしか利用しない前提のため`Colocate.tsx`で実行、出力するようにしています。

### メリット

- ロジックが描画部分と近くにあるため可読性が高くなる
- 記載量が少なく複数のソースコード間を移動する必要がないため開発速度があがる
- コードの記載量が減りバンドルサイズが小さくなる

### デメリット

- Storybook（UI カタログ）には API モックなどロジックに関わる部分が必要となる
- テストコードが外部に依存するためモックロジックが必要となる
- 他のコンポーネントでもロジックを利用することになった場合など常にリファクタリングを必要とする
