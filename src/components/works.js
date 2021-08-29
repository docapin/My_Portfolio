import React from 'react'
import WorksSlider from './works_slider'
import WorksSec from './works_section'

export default function Works() {
  return (
    <section className="l-works" id="works">
      <div className="p-works">
        <h2 className="p-works__title">Works</h2>
        <div className="p-works__title-sub">制作実績</div>
        <WorksSec
          typeValue="WebSite"
          text01value={
            '「Webサイト」カテゴリには、私が制作を担当したWebサイトを掲載しています。'
          }
          text02value={
            '本カテゴリは、デザインだけでなくコーディングの比重も大きいものが区分されています。'
          }
          sliderArea={
            <WorksSlider type="index" category="allMicrocmsWebsite" />
          }
        />
        <WorksSec
          typeValue="Design"
          text01value={
            '「デザイン」カテゴリには、私がデザインを担当した制作物を掲載しています。br Webサイト以外にも、チラシといった印刷物も掲載しています。'
          }
          text02value={
            '一部コーディングを担当した制作物も含まれますが、CMSのテンプレートを利用するなど、コーディングの比重が小さいものはこのカテゴリに掲載しています。'
          }
          sliderArea={
            <WorksSlider type="index" category="allMicrocmsDesign" />
          }
        />
        <WorksSec
          typeValue="Others"
          text01value={
            '「その他」カテゴリには、デザインとWebサイトカテゴリでは分類できない、イラストや動画といった制作物を掲載しています。'
          }
          text02value={
            'デザインカテゴリでも制作したイラストを掲載していますが、イラスト自体がメインとなるものは本カテゴリに掲載しています。'
          }
          sliderArea={
            <WorksSlider type="index" category="allMicrocmsOthers" />
          }
        />
      </div>
    </section>
  )
}