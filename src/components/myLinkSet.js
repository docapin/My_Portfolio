import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

//内部リンク用コンポーネント
export default function MyLinkSet({ value, to, className }) {
  return (
    <AniLink cover direction="right" duration={1} bg="#40806e" to={to} className={className}>
      { value }
    </AniLink>
  )
}