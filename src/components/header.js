import React, { useState } from 'react'
import TitleName from './title_name'
import pageScroll from './scroll_event'
import MyLinkSet from './my_link_set'

export default function Header({ indexJudge }) {
  const [judgeClick, setClass] = useState(false)
  const toggleclass = () => {
    setClass(!judgeClick)
  }

  const HeaderLink = ({ url, elements, otherClassName }) => {
    //indexの判定
    const judgeUrl = indexJudge === true ? 'body' : url

    return(
      <>
        { indexJudge === true ?
          //indexJudgeがtrueならページ内スクロール
          <button className={ otherClassName ? otherClassName : 'p-header__nav-menu-link' } onClick={() => {
              if(url === '/' && judgeClick === false){
                  pageScroll(url)
                } else {
                  pageScroll(url)
                  toggleclass()
                }
              }
            } role="link" aria-label={ url === '/' ? 'toppage link': null }>
            { elements }
          </button> :
          <MyLinkSet value={ elements } to={ judgeUrl } className={ otherClassName ? otherClassName : 'p-header__nav-menu-link' }/>
        }
      </>
    )
  }

  return (
    <header className="l-header">
      <div className="p-header">
        <button className={'p-header__sp-btn' + (judgeClick ? ' is-active' : '')} onClick={ toggleclass } aria-label="menu button">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={'p-header__nav' + (judgeClick ? ' is-active' : '')}>
          <h1 className="p-header__nav-logo">
            <HeaderLink url="/" elements={
                <TitleName/>
            } otherClassName="p-header__nav-logo-link"/>
          </h1>
          <ul className="p-header__nav-menu">
            <li className="p-header__nav-menu-list">
              <HeaderLink url="/#profile" elements={
                <>
                  <span className="p-header__nav-menu-list-label">Profile</span>
                  <span className="p-header__nav-menu-list-text">自己紹介</span>
                </>
              }/>
            </li>
            <li className="p-header__nav-menu-list">
              <HeaderLink url="/#works" elements={
                <>
                  <span className="p-header__nav-menu-list-label">Works</span>
                  <span className="p-header__nav-menu-list-text">制作実績</span>
                </>
              }/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}