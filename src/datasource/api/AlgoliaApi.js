'use strict'

import algoliasearch from 'algoliasearch'

export default {
  /**
   * Algolia へデータを追加します
   * @param {string} indexName Algolia の index 名
   * @param {any[]} markdowns GitHub に push する配列と同じ配列
   */
  async addObjects(indexName, markdowns) {
    const client = algoliasearch(ALGOLIA_APPLICATION, ALGOLIA_API_KEY)
    const index = client.initIndex(indexName)
    try {
      const contents = await index.addObjects(markdowns)
      console.log(indexName)
      console.log(contents)
      console.log('Algolia へデータを追加しました')
    } catch (error) {
      console.error(error)
      console.error('Algolia へのデータ追加を失敗しました')
    }
  }
}
