
import Taro from '@tarojs/taro'

import request from "../../utils/request";
import delay from "../../utils/delay";
import * as moreApi from './service';

export default {
  namespace: 'more',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(moreApi.demo, {});
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
