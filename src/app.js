import '@tarojs/async-await'

import Taro, {Component} from '@tarojs/taro'
import Index from './pages/index'
import dva from './dva'
import models from './model'
import {Provider} from '@tarojs/redux'

import './styles/base.scss'


const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    // dispatch(action("sys/error", e));
  },
});
const store = dvaApp.getStore();

class App extends Component {



  config = {
    pages: [
      'pages/index/index',
      // 'pages/home/index',
      // 'pages/discovery/index',
      // 'pages/more/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0068C4',
      navigationBarTitleText: 'taro知乎',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    },
    // tabBar: {
    //   color: "#626567",
    //   selectedColor: "#2A8CE5",
    //   backgroundColor: "#FBFBFB",
    //   borderStyle: "white",
    //   list: [{
    //     pagePath: "pages/home/index",
    //     text: "首页",
    //     iconPath: "./asset/images/index.png",
    //     selectedIconPath: "./asset/images/index_focus.png"
    //   }, {
    //     pagePath: "pages/discovery/index",
    //     text: "发现",
    //     iconPath: "./asset/images/discovery.png",
    //     selectedIconPath: "./asset/images/discovery_focus.png"
    //   },
    //     {
    //       pagePath: "pages/more/index",
    //       text: "我的",
    //       iconPath: "./asset/images/burger.png",
    //       selectedIconPath: "./asset/images/burger_focus.png"
    //     }]
    // }
  }

  componentDidMount() {
    // dvaApp.dispatch({type: 'sys/test'})
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentCatchError() {
  }

  render() {

    return (<Provider store={store}>
      <Index/>
      </Provider>);
  }
}

Taro.render(<App/>, document.getElementById('app'))
