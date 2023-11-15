import Image from "next/image"

export default function Hero() {
  return (
    <div
      className="p-4 grid grid-cols-1
  md:grid-cols-2 items-center"
    >
      <div>
        <h4 className="font-bold text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Olá, Somos a Bemware!
        </h4>
        <h1 className="font-extrabold text-[45px]">
          Empresa<br></br>Especializada em<br></br>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 ">
            Tecnologia da Informação
          </span>
        </h1>
        <h1 className="text-orange-500 mt-3">Seja bem-vindo ao nosso site</h1>

        <div className="mt-6 flex gap-7">
          {/**
           * <button
            className="bg-gradient-to-r from-blue-600 to-purple-600  px-3 py-1
              text-white pb-2 rounded-full
              hover:scale-105 transition-all duration-300"
          >
            Resumo
          </button>
          <button
            className=" px-3
              text-blue-600 pb-1 rounded-full
              border-blue-600 border-[1px]
              border-gradient-to-r from-blue-600 to-purple-600 
              hover:scale-105 transition-all duration-300"
          >
            <Saiba mais>
          </button>
           * 
           */}

          <div
            className="bg-gradient-to-r from-blue-600 to-purple-600  px-6 py-2
              text-white font-semibold pb-2 rounded-full
              hover:scale-105 transition-all duration-300 cursor-default"
          >
            Soluções Inteligentes e Profissionais!
          </div>
        </div>
      </div>
      <div className="pt-14 pb-0 px-12">
        <Image
          priority={true}
          src="/hero.png"
          width={500}
          height={500}
          alt="hero"
        />
      </div>
    </div>
  )
}
