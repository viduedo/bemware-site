import { FloatingWhatsApp } from "react-floating-whatsapp"
import { Inter } from "next/font/google"
import Navbar from "@/components/sections/Navbar"
import Hero from "@/components/sections/Hero"
import AboutUs from "@/components/sections/AboutUs"
import Brands from "@/components/sections/Brands"
import Services from "@/components/sections/Services"
import ContactUs from "@/components/sections/ContactUs"
import Footer from "@/components/sections/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center mt-[80px]">
        <Hero />
        <Brands />
        <Services />
        <AboutUs />
        <ContactUs />
        <FloatingWhatsApp
          phoneNumber="+5513996104220"
          accountName="BemWare"
          notificationSound={true}
          statusMessage="Tempo médio de resposta: 1 hora"
          chatMessage="Olá! Como podemos ajudar?"
          avatar="/whatsapp/avatar-wpp.jpg"
          placeholder="Digite uma mensagem..."
        />
      </main>
      <Footer />
    </>
  )
}
