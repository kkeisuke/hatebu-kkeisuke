'use strict'

import hatebuService from '../domain/service/HatebuService'
import markdownService from '../domain/service/MarkdownService'

export default {
  /**
   * マークダウンファイル作成
   * @param {string} date 日付（指定がない場合は昨日のデータを取得しマークダウンファイルを作成します）
   */
  async createHatebuToMarkdown(date) {
    const dairyDatas = await hatebuService.getHatebuDailyData(date)
    markdownService.createMarkdownFile(dairyDatas)
  },
  /**
   * 全期間のマークダウンファイル作成
   */
  async createHatebuToMarkdownAll() {
    const dairyDatas = await hatebuService.getHatebuDailyDataAll()
    markdownService.createMarkdownFile(dairyDatas)
  }
}
