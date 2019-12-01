# hatebu-kkeisuke

任意アカウントの「はてなブックマーク」データをダウンロードし、markdown ファイルを作成後、GitHub のリポジトリに push します。

## 構成図

![構成図](https://plantuml-server.kkeisuke.app/svg/RPB1IiD048RlynHpwwala8Eq9oke27fBFQnccovDDoNPKBrc1QiNHR4zAEZ1cuY27grzcB71nt0tsTOAdlBlpCVF_mzff8ebAkj707wB9t4lmzt3BW-oY2Vxo59C5o_mkqnnoR2vir5kgYVuwqArieDo50e5VZCAuqYmSi0g3JL7ONCmI1UerU1lSnM9pd4vb9Ksk1eAfLm4fm6MMR2UYB2hwcikX8TjIVgKz0Vbi_d5UFuv0HahZX7lA8mxAoqG-opf1V5GujVqhXXT0fS1MdZLtkwDkulleP01FshBxzbqVlxm3sZQU4jZaoL_8trFMfCUGSqiiMwJLA2jxU4gGlh6YlobPEr-QUowUrZSlXVZLyglI9zG_cYh6k_Isg7kUCRQNc92-jbmVy-mk2zYAmjZ-zdRsZJyDUadqcU_fu26aUQl-040.svg)

## コミット先

https://github.com/kkeisuke/hatebu-kkeisuke-client

## デプロイ先

https://hatebu.kkeisuke.com/

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
