'use strict'

import githubApi from '../../datasource/api/GitHubApi'

export default {
  /**
   * マークダウンファイルを GitHub のリポジトリへ push します。
   * @param {any[]} markdowns マークダウンファイルの配列
   */
  async push(markdowns) {
    try {
      await githubApi.push(markdowns)
      return new Promise((resolve, reject) => {
        resolve('push 成功しました。')
      })
    } catch (error) {
      console.log('error', error)
      return new Promise((resolve, reject) => {
        reject('push 失敗しました。')
      })
    }
  }
}
