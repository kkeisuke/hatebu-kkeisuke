# hatebu-kkeisuke

任意アカウントのはてなブックマークデータをダウンロードし、マークダウンファイルを作成後、GitHub のリポジトリに push します。

## 構成図

![構成図](https://plantuml-server.kkeisuke.app/png/UDfLKJrFmq0CtVqh_0SwTCs0seaW0KA2BJ04SlbGqqkLN5Invf0e4mX4CnI1a61222GO2_mOa_mEBkab3TCzsyz-Vhv18knOfECGm39P78rIt3_ncPE6B3v2Ey6aYS3oRS6uZSEzhRgo2i7Q38IP7jSfBn1DZCF996cI5GPhbuamS4_h95zXiCGq449hQGpGYc8l3ZnVz3Qqce7zCd_k5ulxGqxodEIIif_YSbvyvy0ZmJ1ahi38xQoDEBRZaHDDkO8aRobxfEo9vCllrrqvkmB67QnQkw8LMscgpOssMmbc7oGVI4gICr2rzNBQee5TIgMbGFO6kjpErJuDB1UVvVoTickIP_LIotQqfkexgScLsvpag-BzjzgS4j5ClQXw3dQs5Vz6UIHviJO80mNLL_y1QApH3000.png)

## コミット先

https://github.com/kkeisuke/hatebu-kkeisuke-client

## デプロイ先

https://hatebu.kkeisuke.com/

## セットアップ & ビルド

環境変数は `env.js.sample` から `env.js` を作成し、`GITHUB_API_TOKEN` を追加します。

```shell
# webpack ビルド
# ビルド先：dist/index.js
npm run build

# 指定日時以降の markdown ファイルをローカルに作成します。
# 日時を省略した場合は前日が指定されます。
# 例：npm run date 20180705
npm run date <日時>

# 指定日時以降の markdown ファイルを GitHub に push します。
# 日時を省略した場合は前日が指定されます。
# 例：npm run push 20180705
npm run push <日時>

# 全ブックマークデータを対象に markdown ファイルをローカルに作成します。
npm run all
```

## 環境

```js
"engines": {
  "node": "10.6.0"
},
```
