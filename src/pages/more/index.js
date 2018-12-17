import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({more}) => ({
  ...more,
}))
export default class More extends Component {
  config = {
    navigationBarTitleText: 'more',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="more-page">
        more
      </View>
    )
  }
}
