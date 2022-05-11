import style from './app.css'
import { useState } from 'preact/hooks'

import Info from './info/info'
import Menu from './menu/menu'

export default function App() {
  const data = [
    { name: 'welcome', title: 'Welcome', active: true, hovered: false },
    {
      name: 'about',
      title: 'About',
      active: false,
      hovered: false,
    },
    {
      name: 'mission_statement',
      title: 'Mission Statement',
      active: false,
      hovered: false,
    },
    { name: 'lionpaper', title: 'Lionpaper', active: false, hovered: false },
    { name: 'origin_story', title: 'Origin Story', active: false, hovered: false },
    {
      name: 'official_links',
      title: 'Official Links',
      active: false,
      hovered: false,
    },
  ]

  const [pageData, setPageData] = useState(data)

  function activate(menuOption) {
    let newPageData = [...pageData]
    newPageData = newPageData.map((element) => {
      element.active = false
      return element
    })

    newPageData[menuOption].active = !pageData[menuOption].active
    setPageData(newPageData)
  }

  function toggleHover(menuOption) {
    const newPageData = [...pageData]
    newPageData[menuOption].hovered = !pageData[menuOption].hovered
    setPageData(newPageData)
  }

  function getMenuOption() {
    return pageData.find((element) => element.active)
  }

  return (
    <div class={style.page_wrapper}>
      <section class={style.header_wrapper}>
        <div class={style.header_logo_background}>
          <img class={style.logo} src="../assets/roary_bw.png" />
        </div>

        <div class={style.header_text_background}>
          <h1>EVMavericks</h1>
        </div>
      </section>

      <section class={style.content_wrapper}>
        <div class={style.social_wrapper}>
          <a href="https://discord.gg/EVMavericks " target="_blank">
            <i class={style.icon + ' ' + style.discord}></i>
          </a>
          <a href="https://twitter.com/EVMavericks" target="_blank">
            <i class={style.icon + ' ' + style.twitter}></i>
          </a>
        </div>
        <Menu
          activate={activate}
          toggleHover={toggleHover}
          pageData={pageData}
        />
        <Info menuOption={getMenuOption()} />
      </section>
    </div>
  )
}
