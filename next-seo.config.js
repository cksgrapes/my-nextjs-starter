const seoConfig = {
  title: 'サイトタイトル',
  description: '基本的なサイトディスクリプション』',
  canonical: 'https://example.com',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://example.com',
    site_name: 'サイトタイトル',
    images: [
      {
        url: 'https://example.com/assets/images/ogp.jpg',
      },
    ],
  },
  twitter: {
    handle: '@twitteraccount',
    cardType: 'summary_large_image',
  },
  facebook: {
    appId: '',
  },
}

export default seoConfig
