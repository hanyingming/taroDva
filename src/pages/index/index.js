import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtTabBar } from 'taro-ui'
import Home from '../home/index'
import Discovery from '../discovery/index'
import More from '../more/index'
import styles from './index.module.scss'

@connect(state => ({
  index: state.index
}))
class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentTab: 0
    }
  }
  config = {
    navigationBarTitleText: 'index',
    enablePullDownRefresh: false,
  };

  componentDidMount = () => {

  };

  handleTabSwitch = currentTab => {
    this.setState({
      currentTab
    })
  }

  render () {
    const { currentTab } = this.state

    return (
      <View className={styles.indexPage}>
        <View className={styles.mainWrapper}>
          <View style={{ display: currentTab === 0 ? 'block' : 'none' }} className={styles.viewWrapper}>
            <Home />
          </View>
          <View style={{ display: currentTab === 1 ? 'block' : 'none' }} className={styles.viewWrapper}>
            <Discovery />
          </View>
          <View style={{ display: currentTab === 2 ? 'block' : 'none' }} className={styles.viewWrapper}>
            <More />
          </View>
        </View>
        <AtTabBar
          fixed
          tabList={[
            { title: '自定义图标', iconPrefixClass: 'fa', iconType: 'clock', text: 'new' },
            { title: '拍照', iconType: 'camera' },
            { title: '文件夹', iconType: 'folder', text: '100', max: '99' }]}
          onClick={this.handleTabSwitch}
          current={currentTab}
        />
      </View>
    )
  }
}
export default Index
