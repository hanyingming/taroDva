import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import styles from './index.module.scss'

@connect(({ discovery }) => ({
  ...discovery,
}))
class Discovery extends Component {
  config = {
    navigationBarTitleText: 'discovery',
  };

  componentDidMount = () => {

  };

  render () {
    return (
      <View className={styles.discoveryPage}>
        discovery
      </View>
    )
  }
}
export default Discovery
