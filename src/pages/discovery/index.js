import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({discovery}) => ({
  ...discovery,
}))
export default class Discovery extends Component {
  config = {
    navigationBarTitleText: 'discovery',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="discovery-page">
        discovery
      </View>
    )
  }
}
