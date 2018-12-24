
import Taro from '@tarojs/taro'

// import request from "../../utils/request";
// import delay from "../../utils/delay";
import * as homeApi from './service'

const COMMON_LOADING = 'commonLoading'
const COMMON_LOAD_SUCCESS = 'commonLoadSuccess'
const COMMON_LOAD_FAIL = 'commonLoadFail'

export default {
  namespace: 'home',
  state: {
    workCountryList: {
      data: {
        content: []
      }
    }
  },

  effects: {
    // 获取工作国家列表
    * getWorkCountryList ({ payload }, { call, put }) {
      yield put({
        type: COMMON_LOADING,
        stateKey: 'workCountryList'
      })
      const data = yield call(homeApi.getWorkCountryList, payload)
      if (data && data.code === 200) {
        yield put({
          type: COMMON_LOAD_SUCCESS,
          stateKey: 'workCountryList',
          result: {
            content: data.data,
            dataMessage: data.message,
            dataCode: data.code
          }
        })
      } else {
        yield put({
          type: COMMON_LOAD_FAIL,
          stateKey: 'workCountryList',
          error: data
        })
        // message.error(data && data.message || '请求失败');
      }
    },
  },

  reducers: {
    /**
     * 通用加载中 reducer
     * @param state
     * @param action
     * @returns {{}}
     */
    [COMMON_LOADING] (state, action) {
      return {
        ...state,
        [action.stateKey]: {
          ...state[action.stateKey],
          loading: true,
          loaded: false
        }
      }
    },

    /**
     * 通用加载完成 reducer
     * @param state
     * @param action
     * @returns {{}}
     */
    [COMMON_LOAD_SUCCESS] (state, action) {
      return {
        ...state,
        [action.stateKey]: {
          ...state[action.stateKey],
          loading: false,
          loaded: true,
          data: action.result
        }
      }
    },

    /**
     * 通用加载失败 reducer
     * @param state
     * @param action
     * @returns {{}}
     */
    [COMMON_LOAD_FAIL] (state, action) {
      return {
        ...state,
        [action.stateKey]: {
          ...state[action.stateKey],
          loading: false,
          loaded: false,
          error: action.error
        }
      }
    },

    /**
     * 设置页码
     * @param state
     * @param action
     */
    setPagination (state, action) {
      return {
        ...state,
        [action.stateKey]: {
          ...state[action.stateKey],
          pagination: {
            ...state[action.stateKey].pagination,
            ...action.payload
          }
        }
      }
    },

    /**
     * 重置数据
     * @param state
     * @param action
     * @returns {{}}
     */
    resetData (state, action) {
      return {
        ...state,
        [action.stateKey]: {
          data: {}
        }
      }
    },
  },

}
