# hatebu-kkeisuke

任意アカウントの「はてなブックマーク」データをダウンロードし、markdown ファイルを作成後、GitHub のリポジトリに push します。

## 構成図

![構成図](https://plantuml-server.kkeisuke.app/png/ZLD1RzCm6BtxLtmIXy6X_80SqAe9hPCcD6aI738EJkCcfevTEOu6rnY9mWK4eZqm2JJr149COiUD_HYl7J-3pqvQ0k90Jiz-dz_t-JrdkpHKcweGX6oLOoudLDC22YNLCDUgO61qnRfKcTDK7NEPmOYAyWygeSDnfbKbqnqbb8PRzyD7I3nWMeqhE1pcBAq4qu-1bb2kLoJEgM6IGlzWBp3DaiIxt0og96nbt92uBp8bE0qRjC5agws2_cHIhaiz9h6pCsU_kleiR2T2PIHUBKvkpayViSJLfyxEdVtSpC8DMvCx-tlEFdVsmjalWHmAZctCCJUc7Rt5X6pk03tDizpqxhN3Ht0adNtXLUghvUlPyiUSI6KO23Ooe4QTsmCyK2cx-wH4L50zHdibN5-UhAPl29Cf-6FTHfx7Fgq14N2PigT7ykVLvVBLftyKeX_HHXYdghyx-z5Pw-mKGqSMUdwefj8x5q6tnjdt7jJVGgtdDygj3H6iFfolPcUkVkkDgnV1koa9qcsfTnzrlIFp4CgYiIDHngZ26nBoGI-O4Npq3D6WoXIUU8SnEFlojnN4XmMzQj8r0P_Etu8XqwxWuK4VRZ-i6632TpfwcEz_oFbN0B2hEWUt4UAlymi0.png)

## コミット先

https://github.com/kkeisuke/hatebu-kkeisuke-client

## デプロイ先（ブログ）

https://hatebu.kkeisuke.com/

## 検索Webアプリ、CLIツール

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
  "node": "14.15.0"
},
```
