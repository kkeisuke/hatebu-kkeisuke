'use strict'

import fs from 'fs'
import moment from 'moment'

const MD_FILE_PATH = 'tmp'

export default {
  /**
   * Markdown ファイルを作成します。
   * @param {any} dairyData { 日付: [はてなブックマーク] }
   */
  createMarkdownFile(dairyData) {
    const dates = Object.keys(dairyData)
    // 日毎
    dates.forEach(date => {
      // Markdown 作成
      const markdown = this.createMarkdown(date, dairyData[date])
      // .md ファイル作成
      fs.writeFile(`./${MD_FILE_PATH}/${date}.md`, markdown, error => {
        if (error) {
          console.log(`${date}.md ファイルが作成できませんでした`)
          console.log(error)
        } else {
          console.log(`${date}.md ファイルを作成しました`)
        }
      })
    })
  },
  /**
   * GitHub用にマークダウンデータを作成します。
   * @param {any} dairyData { 日付: [はてなブックマーク] }
   * @return {any[]} markdowns GitHub に push する配列
   */
  createMarkdownsForGitHub(dairyData) {
    const dates = Object.keys(dairyData)
    const markdowns = []
    // 日毎
    dates.forEach(date => {
      // Markdown 作成
      markdowns.push({
        path: `${GITHUB_PATH}/${date}.md`,
        content: this.createMarkdown(date, dairyData[date])
      })
      console.log(`${date}.md を作成しました`)
    })

    return markdowns
  },
  /**
   * Markdown 文字列を作成します。
   * @param {string} date 日付
   * @param {any[]} bookmarks はてなブックマークデータ [{ タイトル, url, コメント, 日付 }]
   * @return {string} Markdown 文字列
   */
  createMarkdown(date, bookmarks) {
    let markdown = ''

    // タイトル、日付
    markdown = '---\n'
    markdown += `title: ${date}\n`
    markdown += `date: ${date}\n`
    // ブックマーク数
    markdown += `description: B! ${bookmarks.length}\n`
    markdown += '---\n\n'

    // ブックマーク毎
    bookmarks.forEach(bookmark => {
      const comment = bookmark.comment ? `${bookmark.comment}\n` : ''
      const date = moment(bookmark.date).format('YYYY/MM/DD HH:mm:ss')
      markdown += `#### ${bookmark.title}\n${bookmark.url}<br>\n${date}<br>\n${comment}\n\n`
    })

    return markdown
  }
}
