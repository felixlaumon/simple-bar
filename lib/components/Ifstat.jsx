import { React } from 'uebersicht'
import { getSettings } from '../settings.js'
import { WifiIcon } from './Icons.jsx'

const { useRef } = React

const Ifstat = ({ output }) => {
  const ref = useRef()
  const settings = getSettings()
  const { widgets } = settings
  const { ifstatWidget } = widgets
  if (!ifstatWidget || !output) return null
  const { up, down } = output

  return (
    <div ref={ref} className="date">
      <WifiIcon className="wifi__icon" />
      <div className="">
        ↓ {down} ↑ {up}
      </div>
    </div>
  )
}

export default Ifstat
