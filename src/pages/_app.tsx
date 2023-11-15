import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Analytics } from "@vercel/analytics/react"
import { NextSeo } from "next-seo"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Bemware: Soluções em TI"
        description="Empresa especializada em tecnologia da informação"
        canonical="https://www.bemware.com.br/"
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://www.bemware.com.br/",
          siteName: "Bemware: Soluções em TI",
          images: [
            {
              url: "https://www.bemware.com.br/logo.png",
              alt: "Logo",
              type: "image/png",
            },
            {
              url: "https://www.bemware.com.br/hero.png",
              alt: "Hero",
              type: "image/png",
            },
            {
              url: "https://www.bemware.com.br/brands/aws.png",
              alt: "Amazon AWS",
              type: "image/png",
            },
            {
              url: "https://www.bemware.com.br/brands/dell.png",
              alt: "Dell",
              type: "image/png",
            },
            {
              url: "https://www.bemware.com.br/brands/microsoft.png",
              alt: "Microsoft",
              type: "image/png",
            },
            {
              url: "https://www.bemware.com.br/brands/titan.png",
              alt: "Titan",
              type: "image/png",
            },
            {
              url: "https://www.bemware.com.br/aboutus.jpg",
              alt: "Quem Somos",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}
