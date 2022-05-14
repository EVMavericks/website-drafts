import style from './menu.css'

export default function Menu(props) {
  const pageData = props.pageData
  const activate = props.activate
  const toggleHover = props.toggleHover

  const svgPaths = [
    'M726.883 712.307L15 1055.97L726.12 15L726.883 712.307Z',
    'M726.117 712.307L1438 1055.97L726.117 15V712.307Z',
    'M15.0002 1055.97L726.109 1544.63L726.883 715.376L15.0002 1055.97Z',
    'M1438 1055.97L726.117 1544.63V715.376L1438 1055.97Z',
    'M725.349 1670.43L42.6172 1192.52L725.349 2194.37V1670.43Z',
    'M725.35 1670.43L1408.08 1192.52L725.35 2194.37V1670.43Z',
  ]

  function getMenu() {
    return (
      <svg
        class={style.menu}
        width="1453"
        height="2210"
        viewBox="0 0 1453 2210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {svgPaths.map((element, index) => {
          return (
            <path
              onClick={() => activate(index)}
              onMouseOver={() => toggleHover(index)}
              onMouseOut={() => toggleHover(index)}
              class={`${pageData[index].active ? style.active : ''} ${
                pageData[index].hovered ? style.hovered : ''
              }`}
              d={element}
              fill="currentColor"
              stroke="#00FF00"
              stroke-width="20"
              stroke-linejoin="round"
            />
          )
        })}
      </svg>
    )
  }

  function getChoices(side) {
    return (
      <div
        class={
          style.choices +
          ' ' +
          (side === 'left' ? style.choices_left : style.choices_right)
        }
      >
        {pageData.map((element, index) => {
          const condition = side === 'left' ? !(index % 2) : index % 2
          let customButton

          if (condition) {
            customButton = (
              <button
                onClick={() => activate(index)}
                onMouseOver={() => toggleHover(index)}
                onMouseOut={() => toggleHover(index)}
                class={`${pageData[index].active ? style.active : ''} 
                ${pageData[index].hovered ? style.hovered : ''}`}
              >
                <span>{element.title}</span>
              </button>
            )
          }

          return customButton
        })}
      </div>
    )
  }

  return (
    <div class={style.menu_wrapper}>
      {getChoices('left')}
      {getMenu()}
      {getChoices('right')}
    </div>
  )
}
