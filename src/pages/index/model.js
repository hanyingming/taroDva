import Taro from '@tarojs/taro'
// import request from "../../utils/request";
// import delay from "../../utils/delay";
import * as indexApi from './service'

export default {
  namespace: 'index',
  state: {

  },

  effects: {
    * effectsDemo (_, { call, put }) {
      const { status, data } = yield call(indexApi.demo, {})
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } })
      }
    },
  },

  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload }
    },
  },

}
