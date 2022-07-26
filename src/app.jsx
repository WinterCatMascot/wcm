import { useEffect, useState } from 'preact/hooks'
import { Article } from './components/Article/Article'
import { LangSwitcher } from './components/LangSwitcher/LangSwitcher'
import { CODES, CODES_ARR, LANGS, TEXTS } from './constants'

import './app.css'
import './fonts.css'

export const App =() => {
  const [lang, setLang] = useState(LANGS.US)
  const handleChangeLang = (lang) => {
    window.localStorage.setItem('lang', lang)
    setLang(lang)
  }
  const localTexts = TEXTS[lang]

  const [openArtcile, setOpenArticle] = useState(null)
  const createOpenHandler = (code) => () => {
    window.history.pushState({}, '', CODES[code])
    setOpenArticle(code)
  }

  useEffect(() => {
    const urlCode = window.location.pathname.slice(1)
    if (CODES_ARR.includes(window.location.pathname.slice(1))) {
      const newCode = CODES[urlCode] ?? null
      setOpenArticle(newCode)
    }
  }, [])

  useEffect(() => {
    const localLang = window.localStorage.getItem('lang')
    if (localLang) {
      setLang(localLang)
    }
  }, [])

  if (!localTexts) {
    return (
      <main className="main">
        <div className="header">
          <LangSwitcher value={lang} onChange={handleChangeLang} />
        </div>
        <div className='langErr'>{TEXTS.langErr}</div>
      </main>
    )
  }

  return (
    <main className="main">
      <div className="header">
        <LangSwitcher value={lang} onChange={handleChangeLang} />
      </div>

      <div className="name">
        {TEXTS.name}
      </div>

      <div className="articles">
        <Article
          open={openArtcile === CODES.donations}
          onOpen={createOpenHandler(CODES.donations)}
          title={localTexts.donations.title}
          text={localTexts.donations.text}
          paddingTop={false}
        />
        <Article
          open={openArtcile === CODES.projects}
          onOpen={createOpenHandler(CODES.projects)}
          title={localTexts.projects.title}
          text={localTexts.projects.text}
        />
        <Article
          open={openArtcile === CODES.about}
          onOpen={createOpenHandler(CODES.about)}
          title={localTexts.about.title}
          text={localTexts.about.text}
        />
      </div>
    </main>
  )
}
