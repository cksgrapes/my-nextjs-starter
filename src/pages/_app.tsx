import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '~/next-seo.config'
import '~/src/styles/main.scss'

const tagManagerArgs = {
  gtmId: 'GTM-XXXXXXX',
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
