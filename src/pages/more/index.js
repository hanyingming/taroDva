import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import styles from './index.module.scss'

@connect(state => ({
  more: state.more
}))
class More extends Component {
  config = {
    navigationBarTitleText: 'more',
  };

  componentDidMount = () => {

  };

  render () {
    return (
      <View className={styles.morePage}>
        more
      </View>
    )
  }
}
export default More
