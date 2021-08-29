import smoothScroll from 'smoothscroll-polyfill'

export default function pageScroll(targetUrl) { //ページ内スクロール
  smoothScroll.polyfill()
  const target = /^\/$/.test(targetUrl) === false ? targetUrl.replace(/[/]/g, '') : 'body'
  const scrollPosition = target ? document.querySelector(target).getBoundingClientRect().top : 0
  const headerOffset = 856 + (window.innerWidth * 0.2) >= window.innerWidth ? document.querySelector('.p-header__nav-logo-link').getBoundingClientRect().height : 0
  window.scrollTo({
    top: scrollPosition - headerOffset + window.pageYOffset,
    behavior: 'smooth'
  })
}