'use strict'

import axios from 'axios'

export default {
  /**
   * はてなブックマークデータを取得します。
   * @param {string} timestamp yyyymmddhhmmss書式での日付を指定。指定以降のブックマークデータを取得します。
   * @return {string} はてなブックマークデータ
   */
  async fetchHatebuData(timestamp = '') {
    try {
      timestamp = timestamp ? `?timestamp=${timestamp}` : ''
      const path = `${HATEB_URL}${timestamp}`

      console.log(`${path} ダウンロード開始します`)
      const hatebu = await axios.get(path)
      console.log('API からデータを取得しました')

      return hatebu.data
    } catch (error) {
      console.log(error)
      console.log('API から取得できませんでした')

      return []
    }
  }
}
