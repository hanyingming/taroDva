import '@tarojs/async-await'

import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import dva from './dva'
import models from './model'
import { Provider } from '@tarojs/redux'

import './styles/base.scss'


const dvaApp = dva.createApp({
  initialState: {},
  models,
  // onError (e, dispatch) {
  //   // dispatch(action("sys/error", e));
  // },
})
const store = dvaApp.getStore()

class App extends Component {
  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0068C4',
      navigationBarTitleText: 'taro知乎',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    },
  }

  componentDidMount () {
    // dvaApp.dispatch({type: 'sys/test'})
  }

  componentDidShow () {
  }

  componentDidHide () {
  }

  componentCatchError () {
  }

  render () {
    return (<Provider store={store}>
      <Index />
    </Provider>)
  }
}

Taro.render(<App />, document.getElementById('app'))
