import Taro, { Component } from '@tarojs/taro'
import { ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtButton } from 'taro-ui'
import styles from './index.module.scss'

@connect(state => ({
  home: state.home
}))
class Home extends Component {
  config = {
    navigationBarTitleText: '首页',
  };

  componentDidMount = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'home/getWorkCountryList'
    })
  };

  onScrolltoupper = e => {
    console.warn(e)
  }
  onScroll = e => {
    console.warn(e, 'scroll')
  }

  render () {
    // const { home } = this.props
    return (
      <ScrollView
        className={styles.homePage}
        scrollY
        scrollWithAnimation
        scrollTop='0'
        lowerThreshold='50'
        upperThreshold='50'
        onScrolltoupper={this.onScrolltoupper}
        onScroll={this.onScroll}
      >
        <AtButton type='primary'>按钮文案</AtButton>


      </ScrollView>
    )
  }
}

export default Home
