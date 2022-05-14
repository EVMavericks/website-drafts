import style from './info.css'
import Markdown from 'preact-markdown'
import welcome from './welcome.md'
import origin_story from './origin_story.md'
import mission_statement from './mission_statement.md'
import lionpaper from './lionpaper.md'
import about from './about.md'
import official_links from './official_links.md'

const markdownGroup = {
  welcome: welcome,
  origin_story: origin_story,
  mission_statement: mission_statement,
  lionpaper: lionpaper,
  about: about,
  official_links: official_links,
}

export default function Info(props) {
  const menuOption = props.menuOption

  return (
    <div class={style.info}>
      <div class={style.title}>
        <h2>{menuOption.title}</h2>
      </div>
      <div class={style.markdown}>
        {Markdown(markdownGroup[menuOption.name])}
      </div>
    </div>
  )
}
