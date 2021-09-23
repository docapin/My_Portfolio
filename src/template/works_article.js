import React from 'react'
import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import MyLinkSet from '../components/my_link_set'
import { graphql } from 'gatsby'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
SwiperCore.use([Navigation, Pagination])

//制作実績の個別記事
export default function WorksPost({ data, pageContext }) {
  const post = data[pageContext.root]

  var slideImage = Object.keys(post).filter(key => { //スライド画像
    if(key.match(/thumbnail|img/) != null && post[key] != null){
      return true
    } else {
      return false
    }
  }).map((key) => {
    if(key.match(/thumbnail|img/)){
      return post[key]
    }
    return false
  })

  const paginationData = (pageData, i) => { //ページネーションのテキスト
    if(pageData){
      const pageDataValue = Object.keys(pageData).map((obj) => pageData[obj] )
      return pageDataValue[i].replace(/\n/g, ' ')
    } else {
      return false
    }
  }
  const PaginationTag = ({ value, text }) => { //ページネーションタグ
    return (
      <div className={'p-works-art__pagination-link' + (!value ? ' is-disabled' : '') + ' c-column__6--sp'}>
        {
          value?
          <MyLinkSet value={text} to={'/' + value}></MyLinkSet> : null
        }
      </div>
    )
  }

  const textHtml = (text, titleJudge = false) => { //テキスト
    const brTag = titleJudge ? '<span class="p-works-art__main-title-br"></span>' : '<br/>' //titleJudgeがtrueなら専用の改行タグを使う
    return {
      __html: text.replace(/\n/g, brTag)
    }
  }
  
  const dateFormat = (targetDate) => { //リリース時期
    const date = new Date(targetDate)
    return date.getFullYear() + '年' + (date.getMonth() + 1) + '月'
  }
  
  return (
    <>
      <Head title={ post.title }/>
      <Header/>
      <main className="l-main">
        <article className="l-works-art">
          <section className="p-works-art">
            <h2 className="p-works-art__cat-title">Works</h2>
            <div className="p-works-art__cat-title-sub">制作実績</div>
            
            <div className="p-works-art__main">
              <h3 className="p-works-art__main-title" dangerouslySetInnerHTML={ textHtml(post.title, true) }/>
              <Swiper
                slidesPerView={'auto'}
                loop={slideImage.length > 1 ? true : false}
                navigation
                pagination={{
                  clickable: true
                }}
                centeredSlides={true}
                className="p-works-art__slide"
              >
                { slideImage.map(( img ) => (
                  <SwiperSlide className="p-works-art__slide-list">
                    <div className="p-works-art__slide-image">
                      <img src={ img.url } alt={ post.title }/>
                    </div>
                  </SwiperSlide>
                )) }
              </Swiper>
              <div className="c-row u-margin-top--l">
                <p className="c-column__6--tab" dangerouslySetInnerHTML={ textHtml(post.text_01) }/>
                <p className="c-column__6--tab" dangerouslySetInnerHTML={ textHtml(post.text_02) }/>
              </div>
              <dl className="p-works-art__data">
                <dt>クライアント</dt>
                <dd>{ post.client }</dd>
                { post.url ?
                  <>
                    <dt>リンク</dt>
                    <dd><a href={ post.url } target="_blank" rel="noreferrer" class="c-external-link c-underline is-opacity">{ post.urlText }<img src="/external_link.svg" className="p-external-link" alt={ post.urlText + 'を確認する' }/></a></dd>
                  </>
                : null }
                <dt>リリース時期</dt>
                <dd>{ dateFormat(post.release) }</dd>
                <dt>制作期間</dt>
                <dd>{ post.schedule }</dd>
                <dt>担当範囲</dt>
                <dd>{ post.role }</dd>
                <dt>使用ツール</dt>
                <dd>{ post.tools }</dd>
              </dl>
            </div>
            <div className="c-row p-works-art__pagination">
              <PaginationTag value={ paginationData(pageContext.previous, 0) } text={ paginationData(pageContext.previous, 1) }/>
              <PaginationTag value={ paginationData(pageContext.next, 0) } text={ paginationData(pageContext.next, 1) }/>
              <div className="c-column__12 p-works-art__pagination-link-back">
                <MyLinkSet value="Worksに戻る" to="/#works"/>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer/>
    </>
  )
}

export const query = graphql`
  query($contentId: String!){
    microcmsDesign(designId: { eq: $contentId }) {
      designId
      title
      thumbnail {
        url
        width
        height
      }
      client
      url
      urlText
      release
      schedule
      role
      tools
      text_01
      text_02
      img_01 {
        url
        width
        height
      }
      img_02 {
        url
        width
        height
      }
      img_03 {
        url
        width
        height
      }
      img_04 {
        url
        width
        height
      }
      img_05 {
        url
        width
        height
      }
    }
    microcmsOthers(othersId: { eq: $contentId }) {
      othersId
      title
      thumbnail {
        url
        width
        height
      }
      client
      url
      urlText
      release
      schedule
      role
      tools
      text_01
      text_02
      img_01 {
        url
        width
        height
      }
      img_02 {
        url
        width
        height
      }
      img_03 {
        url
        width
        height
      }
    }
    microcmsWebsite(websiteId: { eq: $contentId }) {
      websiteId
      title
      thumbnail {
        url
        width
        height
      }
      client
      url
      urlText
      release
      role
      tools
      schedule
      text_01
      text_02
      img_01 {
        url
        width
        height
      }
      img_02 {
        url
        width
        height
      }
      img_03 {
        url
        width
        height
      }
      img_04 {
        url
        width
        height
      }
      img_05 {
        url
        width
        height
      }
    }
  }
`