import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FcHome, FcIdea, FcDecision, FcPhone } from "react-icons/fc"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const Links = [
    { name: "Home", ref: "home", icon: <FcHome /> },
    { name: "Soluções", ref: "services", icon: <FcIdea /> },
    { name: "Sobre", ref: "aboutus", icon: <FcDecision /> },
    { name: "Contato", ref: "contactus", icon: <FcPhone /> },
  ]

  const scrollToSection = (elementId: string) => {
    if (elementId == "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="shadow-md w-full fixed top-0 z-50">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
        {/** Logo Aqui */}
        <div className="flex cursor-pointer items-center gap-1">
          <Link href={"/"}>
            <Image src="/logo.png" width={150} height={150} alt="Logo" />
          </Link>
        </div>

        {/** Menu Icon */}
        <div
          onClick={() => {
            setOpen(!open)
          }}
          className="absolute right-8 top-7 cursor-pointer md:hidden bg-gray-100 rounded p-1 duration-300 hover:-translate-y-2"
        >
          {open ? (
            <AiOutlineClose className="w-7 h-7" />
          ) : (
            <AiOutlineMenu className="w-7 h-7" />
          )}
        </div>

        {/** Links aqui */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
          bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
           transition-all duration-300 ease-in ${
             open ? "top-12 shadow-md" : "top-[-490px]"
           }`}
        >
          {Links.map((link, i) => (
            <li
              className="text-gray-700 hover:text-gray-400 font-semibold my-7 md:my-0 md:ml-8"
              key={i}
            >
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  scrollToSection(link.ref)
                }}
              >
                <div className="mr-1">{link.icon}</div>
                <span>{link.name}</span>
              </div>
            </li>
          ))}
          <Link
            className="btn bg-violet-600 hover:bg-violet-500 duration-300 hover:-translate-y-1 hover:scale-110 text-white 
          py-1 px-3 md:ml-8 rounded md:static font-semibold"
            href="https://desk.bemware.com.br/"
            target="_blank"
          >
            Suporte Técnico
          </Link>
        </ul>
      </div>
    </div>
  )
}
