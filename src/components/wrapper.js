import React from 'react'

//gatsby-plugin-transition-linkの遷移先がheaderに埋まらないようにするwrapper要素
export default function Wrapper({ children }) {
  return (
    <div className="l-wrapper">
      { children }
    </div>
  )
}