import { LANGS, TEXTS } from "../../constants";
import './style.css'

export const LangSwitcher = ({
  onChange,
  value,
}) => {
  const usClassName = `us ${value === LANGS.US ? 'selected' : ''}`
  const ruClassName = `ru ${value === LANGS.RU ? 'selected' : ''}`

  const handleUs = () => onChange('US')
  const handleRu = () => onChange('RU')

  return (
     <div className="langSwitcher">
        <div onClick={handleUs} className={usClassName}>
          {TEXTS.langs.US}
        </div>
        <div className="divider"></div>
        <div onClick={handleRu} className={ruClassName}>
          {TEXTS.langs.RU}
        </div>
      </div>
  )
}
