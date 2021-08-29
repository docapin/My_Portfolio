import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function Profile() {
  const profileQuery = useStaticQuery(graphql`
    query MyQuery {
      microcmsProfile {
        about
        name
        name_kana
        portrait {
          url
        }
        skills
        skills_feature
      }
    }
  `)
  const profileData = profileQuery.microcmsProfile

  return (
    <section className="l-profile" id="profile">
      <div className="p-profile">
        <h2 className="p-profile__title">Profile</h2>
        <div className="p-profile__title-sub">自己紹介</div>
        <div className="c-row p-profile__info">
         <div className="c-column__7--tab p-profile__info-text">
            <div className="p-profile__info-name"><ruby>{ profileData.name }<rt>{ profileData.name_kana }</rt></ruby></div>
            <div className="p-profile__info-about" dangerouslySetInnerHTML={{
              __html: profileData.about.replace(/\n/g, '<br>')
            }}/>
          </div>
          <div className="c-column__5--tab p-profile__info-img">
            <img src={ profileData.portrait.url } alt="プロフィール画像"/>
          </div>
        </div>
        <div className="p-profile__skills">
            <h3 class="p-profile__skills-title">Skills<span className="p-profile__skills-title-sub">使用ツール・スキル</span></h3>
            <p className="u-font-size--s u-margin-top--s">使用できるツール・スキルの中で、業務経験のあるものは黄色いラベルで表しています。</p>
            <ul className="p-profile__skills-list" dangerouslySetInnerHTML={{
              __html: profileData.skills_feature.replace(/<ul>|<\/ul>/g, '').replace(/<li>/g, '<li class="p-profile__skills-list-feature">') + profileData.skills.replace(/<ul>|<\/ul>/g, '').replace(/<li>/g, '<li class="p-profile__skills-list-normal">')
            }}/>
        </div>
      </div>
    </section>
  )
}