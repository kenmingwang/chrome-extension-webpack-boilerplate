/* global chrome */

import React from "react";
import icon from "../../img/icon-128.png"
import { hot } from "react-hot-loader";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import '../../css/react-jinke-player.css'
import { Lrc } from 'react-lrc';

// function f(){
//   return(
//       fetch('https://api.bilibili.com/x/player/playurl?cid=432005850&bvid=BV19u411d7kB&qn=64&fnval=16')
//       .then(res => res.json()))
// };

// // var bg = chrome.extension.getBackgroundPage();
// // bg.test(); // 访问bg的函数
// // alert(bg.document.body.innerHTML); // 访问bg的DOM

// var res = f();
// console.log(res);

const LR = `[id:$00000000]
[ar:南拳妈妈]
[ti:下雨天]
[by:]
[hash:464d9355e1b64c55512af09142593a0d]
[al:]
[sign:]
[qq:]
[total:253080]
[offset:0]
[00:00.60]南拳妈妈
-
下雨天
[00:01.53]词：梁心颐
[00:01.53]曲：张杰
[00:01.53]下雨天了怎么办
[00:05.03]我好想你
[00:09.75]不敢打给你
[00:11.69]我找不到原因
[00:17.08]为什么失眠的声音
[00:21.34]变得好熟悉
[00:24.22]沉默的场景
[00:25.92]做你的代替
[00:27.83]陪我等雨停
[00:32.66]期待让人越来越沉溺
[00:39.65]谁和我一样
[00:41.65]等不到他的谁
[00:46.93]爱上你我总在学会
[00:51.27]寂寞的滋味
[00:54.13]一个人撑伞
[00:55.83]一个人擦泪
[00:57.73]一个人好累
[01:01.15]怎样的雨
[01:02.90]怎样的夜
[01:04.80]怎样的我能让你更想念
[01:08.55]雨要多大
[01:10.40]天要多黑
[01:12.30]才能够有你的体贴
[01:16.25]其实
[01:17.25]没有我你分不清那些差别
[01:21.01]结局还能多明显
[01:24.13]别说你会难过
[01:26.38]别说你想改变
[01:31.61]被爱的人不用道歉
[02:08.27]期待让人越来越疲惫
[02:15.24]谁和我一样
[02:17.29]等不到他的谁
[02:22.56]爱上你我总在学会
[02:26.95]寂寞的滋味
[02:29.72]一个人撑伞
[02:31.42]一个人擦泪
[02:33.47]一个人好累
[02:36.84]怎样的雨
[02:38.44]怎样的夜
[02:40.44]怎样的我能让你更想念
[02:44.24]雨要多大
[02:46.04]天要多黑
[02:47.94]才能够有你的体贴
[02:52.19]其实没有我你分不清那些差别
[02:56.69]结局还能多明显
[02:59.76]别说你会难过
[03:02.19]别说你想改变
[03:07.29]被爱的人不用道歉
[03:12.58]怎样的雨
[03:14.32]怎样的夜
[03:16.51]怎样的我能让你更想念
[03:19.76]雨要多大
[03:21.61]天要多黑
[03:23.46]才能够有你的体贴
[03:27.80]其实没有我你分不清那些差别
[03:32.35]结局还能多明显
[03:35.38]别说你会难过
[03:37.58]别说你想改变
[03:42.90]被爱的人不用道歉`

const audioList1 = [
  {
    name: '下雨天',
    singer: 'Azusa',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc:
      'https://upos-sz-mirrorcosov.bilivideo.com/upgcxcode/50/58/432005850/432005850-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1636940326&gen=playurlv2&os=cosovbv&oi=1754218863&trid=cabf89adad3d4db5a5d30807d22bce44u&platform=pc&upsig=39c105a3da5e2eea7f07a61a8bf065ca&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=0&bvc=vod&nettype=0&orderid=0,1&agrr=0&bw=24278&logo=80000000',
    lyric: LR
  }
]

const options = {
  audiolist: audioList1,
  mode: 'full'
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.audio = {},
      this.state = {
        unmount: false,
        params: {
          ...options,
          getAudioInstance: (audio) => {
            this.audio = audio
          },
        },
      }
  };

  updateParams(params) {
    const data = {
      ...this.state.params,
      ...params,
    }
    this.setState({
      params: data,
    })
  }

  componentDidMount() {

    var url = 'https://upos-sz-mirrorcosov.bilivideo.com/upgcxcode/50/58/432005850/432005850-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1636938820&gen=playurlv2&os=cosovbv&oi=1754218863&trid=10cdf176621846f2a433e38a438f96eau&platform=pc&upsig=9493d107b70ecde80b9def98a52791df&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=0&bvc=vod&nettype=0&orderid=0,1&agrr=0&bw=24278&logo=80000000'
    
    chrome.runtime.sendMessage({ purpose: "ping" }, function (response) {
      console.log(response)
      var res = response;

      console.log('component did mount')
      console.log(res)
      console.log('calling res')

      url = res.data.dash.audio[0].baseUrl
      console.log(url)
      return true
    });

    this.updateParams({
      clearPriorAudioLists: true,
      audioLists: [
        {
          name: '下雨天',
          singer: 'Azusa',
          cover: 'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
          musicSrc: url,
          lyric: LR
        }
      ]
    })
  }

  lineRenderer({ line: { startMillisecond, content }, index, active }) {
    // console.log(content)
    return (
      <div style={{ textAlign: 'center', color: active ? 'green' : 'inherit' }}>
        {content}
      </div>
    )
  }


  onCurrentLineChange({ line: { startMillisecond, content }, index, }) {
    return (
      console.log(index, startMillisecond, content)
    )
  }

  render() {
    const { params, unmount } = this.state
    return (
      <div>
        <section>
          <div>
            <Lrc
              lrc={LR}
              lineRenderer={this.lineRenderer}
              currentMillisecond={this.audio.currentTime * 1000}
              onCurrentLineChange={this.onCurrentLineChange} />
          </div>
        </section>
        <div>
          {unmount ? null : (
            <ReactJkMusicPlayer
              {...params}
              onAudioProgress={(audioInfo) => {
                console.log('onAudioProgress: ', audioInfo)
                this.updateParams({ audioInfo })
              }}
            />
          )}
        </div>
      </div>
    )
  }
}
export default hot(module)(App)
