import style from './info.css'
import Markdown from 'preact-markdown'
import welcome from './welcome.md'
import about from './about.md'
import mission_statement from './mission_statement.md'
import roadmap from './roadmap.md'
import community_team from './community_team.md'
import official_links from './official_links.md'

const markdownGroup = {
  welcome: welcome,
  about: about,
  mission_statement: mission_statement,
  roadmap: roadmap,
  community_team: community_team,
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
