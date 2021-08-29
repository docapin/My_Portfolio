import * as React from "react"
import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import MyLinkSet from '../components/myLinkSet'

const NotFoundPage = () => {
  return (
    <>
      <Head/>
      <Header/>
      <main className="l-main">
        <section className="l-not-found">
          <div className="p-not-found">
            <h2 className="p-not-found__title">404エラー</h2>
            <p className="u-margin-top--4xl">ご指定のページが見つかりませんでした。<br/>
            削除または変更されたページの可能性があります。</p>
            <div className="u-margin-top--6xl">
              <MyLinkSet to="/" value="トップページに戻る"/>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default NotFoundPage
