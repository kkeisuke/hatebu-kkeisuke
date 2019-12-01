'use strict'

import algoliaApi from '../../datasource/api/AlgoliaApi'

export default {
  /**
   * Algolia へデータを追加します
   * @param {any[]} markdowns GitHub に push する配列と同じ配列
   */
  async addObjectsToHatebuIndex(markdowns) {
    await algoliaApi.addObjects(ALGOLIA_INDEX, markdowns)
  }
}
