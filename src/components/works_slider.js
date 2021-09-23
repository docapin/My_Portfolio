import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import MyLinkSet from '../components/my_link_set'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination])

//Worksのスライダー部分
export default function Slider({ type, category }) {
  const slideData = useStaticQuery(graphql`
  {
    allMicrocmsOthers {
      edges {
        node {
          othersId
          thumbnail {
            url
            width
            height
          }
          title
        }
      }
    }
    allMicrocmsDesign {
      edges {
        node {
          designId
          thumbnail {
            url
            width
            height
          }
          title
        }
      }
    }
    allMicrocmsWebsite {
      edges {
        node {
          websiteId
          thumbnail {
            url
            width
            height
          }
          title
        }
      }
    }
  }
  `)

  const targetSlide = slideData[category]
  const targetId = Object.keys(targetSlide.edges[0].node).find(key => key.indexOf(('Id') !== -1))

  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        loop={targetSlide.edges.length > 1 ? true : false} //スライド1枚ならループなし
        navigation
        pagination={{
          clickable: true
        }}
      >
        { type === 'index' ?
          targetSlide.edges.map(({ node }) => (
            <SwiperSlide className="p-works__slide-list">
              <MyLinkSet value={
                <>
                  <div className="p-works__slide-thumbnail">
                    <img
                      src={ node.thumbnail.url + '?fit=fill&fill-color=f2f2f2&w=720&h=450&q=60' }
                      alt={ node.title }
                      className="p-works__slide-thumbnail-image"
                    />
                  </div>
                  <div className="p-works__slide-title">
                    { node.title }
                  </div>
                </>
              } to={ node[targetId] } className="p-works__slide-list-link"></MyLinkSet>
            </SwiperSlide>
          ))
        : null }
      </Swiper>
    </>
  )
}