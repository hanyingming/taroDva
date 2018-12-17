import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect((state) => ({
  home: state.home
}))
export default class Home extends Component {
  config = {
    navigationBarTitleText: '首页',
  };

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/getWorkCountryList'
    })
  };

  render() {
    const { home } = this.props;
    console.warn(home.workCountryList, '/..')
    return (
      <View className="home-page">
        你好，hello
      </View>
    )
  }
}
