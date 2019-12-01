'use strict'

import hatebuService from '../domain/service/HatebuService'
import markdownService from '../domain/service/MarkdownService'
import algoliaService from '../domain/service/AlgoliaService'

export default {
  /**
   * Algolia へデータを追加します
   * @param {string} date 日付（指定がない場合は昨日のデータを取得します）
   */
  async addObjects(date) {
    const dairyDatas = await hatebuService.getHatebuDailyData(date)
    const markdowns = markdownService.createMarkdownsForGitHub(dairyDatas)
    algoliaService.addObjectsToHatebuIndex(markdowns)
  }
}
