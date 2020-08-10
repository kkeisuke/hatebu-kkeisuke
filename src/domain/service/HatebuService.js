'use strict'

import { parse } from 'hatebu-mydata-parser'
import groupBy from 'lodash/groupBy'
import moment from 'moment'

import hatebuApi from '../../datasource/api/HatebuApi'

export default {
  /**
   * はてなブックマークデータを取得します。
   * @param {string} date 日付（指定がない場合は昨日のデータを取得します）
   * @return {Promise<any>} { 日付: [はてなブックマーク] }
   */
  async getHatebuDailyData(date) {
    const hatebuData = await hatebuApi.fetchHatebuData(date || moment().subtract(1, 'days').format('YYYYMMDD'))

    return this.parseData(hatebuData)
  },
  /**
   * 全期間のはてなブックマークデータを取得します。
   * @return {Promise<any>} { 日付: [はてなブックマーク] }
   */
  async getHatebuDailyDataAll() {
    const hatebuData = await hatebuApi.fetchHatebuData()

    return this.parseData(hatebuData)
  },
  /**
   * hatebu-mydata-parser でパース後に日毎データに整形
   * @param {string} hatebuData はてなブックマークデータ
   * @return {Promise<any>} { 日付: [はてなブックマーク] }
   */
  parseData(hatebuData) {
    return new Promise((resolve, reject) => {
      const parsedDatas = groupBy(parse(hatebuData), (item) => {
        return moment(item.date).format('YYYY-MM-DD')
      })
      if (parsedDatas && Object.keys(parsedDatas).length) {
        resolve(parsedDatas)
      } else {
        reject('はてなブックマークデータがありませんでした。')
      }
    })
  }
}
