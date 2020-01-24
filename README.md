# hatebu-kkeisuke

任意アカウントの「はてなブックマーク」データをダウンロードし、markdown ファイルを作成後、GitHub のリポジトリに push します。

## 構成図

![構成図](https://plantuml-server.kkeisuke.app/svg/ZLD1QnGn6BtdLtpWeNfOVy0Sf4kHRa6aKF0ozP3ToSwacqcMJ4BrEX6iNXJ5xS52HVOcqeBrrjeV4tVrP_WbCnr7yU2SNl9UtlVbVPdDob1jR2a8sQXcNCwffYMKIgf9eLN9m6ZB-bHLq4mTSfd3b8hg3sfC9xDSAokpBIMKXbltuqT8Ec9QpIpiJGgMMS7qOw0LL3ShaXRKC4bXkBiJcMP9qcrkHdOSjt9kI3eKkHASnWtQOBBHgc0udrStqe19wjt2ky--Fe_ROw5oagwN9pykFlhwgw-NtXqrZN33EiOzy-xIkq-HcGYE1SmXDwPjkiM4TDt3GFEyC8DxRTi9x4lldWUN-dhrQh7wTaoaCWm4cnfGqzwz0HwgZDqzg12LLCymM0dVhqxMHwy9anc4O_r2WSSwxTKJu39ZJ_Rbp-khrSiF_n1Y4abdZ5tLNxmxzSxXnN7SoC8WDDKeGsO9z3NUlGkWFelQm7VERGm9hDzVh1VdlduJWWkHNWRpQDrAG-xe6n8vZkDODd6CbJ6g3874oM0Mp0W-VOfeP7E59zxY6BnxyJiA4YO50pllXu2Fvc_3ED2-uTxk46u_iWos7kpSwVdXVF_3Bhm224UXUnsutbOzeqs4-1Fz0W00.svg)

## コミット先

https://github.com/kkeisuke/hatebu-kkeisuke-client

## デプロイ先

https://hatebu.kkeisuke.com/

## 検索サイト、ツール

https://github.com/kkeisuke/hatebu-kkeisuke-search  
https://github.com/kkeisuke/hatebu-kkeisuke-cli

## セットアップ & ビルド

環境変数は `env.js.sample` から `env.js` を作成し、`GITHUB_API_TOKEN` などを追加します。

```shell
# webpack ビルド
# ビルド先：dist/index.js
npm run build

# 指定日時以降の markdown ファイルをローカルに作成します。
# 日時を省略した場合は前日が指定されます。
# 例：npm run date 20180705
npm run date <日時>

# 指定日時以降の markdown ファイルを GitHub に push します。
# 日時を省略した場合は前日が指定されます。
# 例：npm run push 20180705
npm run push <日時>

# 指定日時以降の markdown を Algolia index に追加します。
# 日時を省略した場合は前日が指定されます。
# 例：npm run algolia 20191201
npm run algolia <日時>

# 全ブックマークデータを対象に markdown ファイルをローカルに作成します。
npm run all
```

## 環境

```js
"engines": {
  "node": "10.6.0"
},
```
