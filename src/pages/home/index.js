import Taro, { Component } from '@tarojs/taro';
import { ScrollView } from '@tarojs/components';
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

  onScrolltoupper = (e) => {
    console.warn(e);
  }
  onScroll = (e) => {
    console.warn(e, 'scroll');
  }

  render() {
    const { home } = this.props;
    console.warn(home.workCountryList, '/..')
    return (
      <ScrollView
        className="home-page"
        scrollY
        scrollWithAnimation
        scrollTop='0'
        lowerThreshold='50'
        upperThreshold='50'
        onScrolltoupper={this.onScrolltoupper}
        onScroll={this.onScroll}
      >
        你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello
        你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello 你好，hello
        你好，hello 你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello
        你好，hello 你好，hello 你好，hello

      </ScrollView>
    )
  }
}
