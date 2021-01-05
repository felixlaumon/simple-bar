import { React } from 'uebersicht'
import { getSettings } from '../settings.js'
import { TerminalIcon } from './Icons.jsx'

const { useRef } = React

const Load = ({ output }) => {
  const ref = useRef()
  const settings = getSettings()
  const { widgets } = settings
  const { loadWidget } = widgets
  if (!loadWidget || !output) return null

  return (
    <div ref={ref} className="date">
      <TerminalIcon className="wifi__icon" />
      <div className="">
        {output}
      </div>
    </div>
  )
}

export default Load
