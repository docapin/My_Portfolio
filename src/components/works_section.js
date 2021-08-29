import React from 'react'

//Worksのセクション
export default function WorksSec({ typeValue, text01value, text02value, sliderArea }) {
  const typeObj = {
    Design: 'デザイン',
    WebSite: 'Webサイト',
    Others: 'その他'
  }

  const textHtml= (text) => { //テキストの改行処理
    return {
      __html: text.replace(/br/g, '<br/>')
    }
  }

  return (
    <div className="p-works__sec">
      <h3 className="p-works__head">
        <span className={'p-works__head-main p-works__head-main--' + typeValue.toLowerCase()}>{ typeValue.substring(0, 1).toUpperCase() + typeValue.substring(1) }
          <span className="p-works__head-sub">{ typeObj[typeValue] }</span>
        </span>
      </h3>
      <div className="p-works__info">
        <div className="c-row p-works__info-text">
          <p className="c-column__6--tab" dangerouslySetInnerHTML={ textHtml(text01value) }/>
          <p className="c-column__6--tab" dangerouslySetInnerHTML={ textHtml(text02value) }/>
        </div>
        { sliderArea }
      </div>
    </div>
  )
}