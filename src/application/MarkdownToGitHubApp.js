'use strict'

import hatebuService from '../domain/service/HatebuService'
import markdownService from '../domain/service/MarkdownService'
import gitHubService from '../domain/service/GitHubService'

export default {
  /**
   * マークダウンファイルを作成し、GitHub のリポジトリへ push します。
   * @param {string} date 日付（指定がない場合は昨日のデータを取得しマークダウンファイルを作成します）
   */
  async push(date) {
    try {
      const dairyDatas = await hatebuService.getHatebuDailyData(date)
      const markdowns = markdownService.createMarkdownsForGitHub(dairyDatas)
      const msg = await gitHubService.push(markdowns)
      console.log(msg)
    } catch (error) {
      console.log(error)
    }
  }
}
