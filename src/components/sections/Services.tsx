import {
  AiOutlineCloudServer,
  AiOutlineCustomerService,
  AiOutlineMail,
  AiOutlineHdd,
  AiOutlineLock,
  AiOutlineRadiusUpleft,
  AiOutlineCode,
  AiOutlineTeam,
  AiOutlineRocket,
} from "react-icons/ai"

export default function Services() {
  return (
    <section id="services" className="pb-12 dark:bg-dark lg:pb-[90px] ">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[810px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Nossos Serviços
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]">
                O Que Oferecemos
              </h2>
              <p className="text-base font-mono text-dark-6 border-2  border-dashed border-violet-500 p-4">
                Na era digital de hoje, os <b>serviços de TI</b> tornaram-se um
                componente essencial das operações comerciais. As empresas
                dependem fortemente da sua infraestrutura de TI para manter
                fluxos de trabalho eficientes, aumentar a produtividade e
                permanecerem competitivas nos seus respetivos mercados.
              </p>
              <br />
              <p className="text-base font-mono text-dark-6 border-2 border-dashed border-violet-500 p-4">
                <b>
                  A necessidade de serviços de TI não se limita às grandes
                  corporações!
                </b>
                <br /> Mesmo as pequenas e médias empresas necessitam de suporte
                de TI para gerir as suas operações diárias sem problemas.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <ServiceCard
            title="UX/DESIGN"
            details="Realizamos o design de seu website/aplicativo antes de produzir o software. Pensando em uma melhor experiência de usuário."
            icon={
              <AiOutlineRadiusUpleft className="w-36 h-36 text-purple-600" />
            }
          />
          <ServiceCard
            title="Sistemas Personalizados"
            details="Trabalhamos com desenvolvimento de software, produzindo sistemas personalizados como websites/aplicativos únicos."
            icon={<AiOutlineCode className="w-36 h-36 text-purple-600" />}
          />
          <ServiceCard
            title="Hospedagem de Sistemas"
            details="Realizamos a hospedagem de seus sistemas em nossa plataforma, de uma maneira que fique sempre disponível a um custo mensal que cabe no seu bolso."
            icon={<AiOutlineRocket className="w-36 h-36 text-purple-600" />}
          />
          <ServiceCard
            title="Computação em Nuvem"
            details="Ajustamos seu modelo de negócio a estruturas de datacenter em cloud, somos especialistas no assunto"
            icon={
              <AiOutlineCloudServer className="w-36 h-36 text-purple-600" />
            }
          />
          <ServiceCard
            title="E-mail Corporativo"
            details="Oferecemos planos de e-mail para a sua organização. O controle e gestão dos e-mails ficam por nossa conta."
            icon={<AiOutlineMail className="w-36 h-36 text-purple-600" />}
          />
          <ServiceCard
            title="Servidor de Arquivos"
            details="Realizamos implantação de servidor de arquivos com AD/DS, para armazenamento eficiente e seguro das informações. Realizamos o controle e gestão dos usuários de rede."
            icon={<AiOutlineHdd className="w-36 h-36 text-purple-600" />}
          />

          <ServiceCard
            title="VPN"
            details="Implantamos conexões VPN para comunicações restritas e seguras entre filiais de sua empresa, assim se torna mais fácil e segura a transferência de dados."
            icon={<AiOutlineLock className="w-36 h-36 text-purple-600" />}
          />
          <ServiceCard
            title="Suporte Técnico"
            details="Oferecemos o suporte técnico para o seu negócio com atendimento in-loco ou remoto."
            icon={
              <AiOutlineCustomerService className="w-36 h-36 text-purple-600" />
            }
          />
          <ServiceCard
            title="Terceirização de TI"
            details="Terceirização total da TI de sua empresa, através da gestão de custos, fornecedores de ti, planejamento e atendimento de problemas técnicos."
            icon={<AiOutlineTeam className="w-36 h-36 text-purple-600" />}
          />
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: any
  title: string
  details: string
}

function ServiceCard(serviceCardProps: ServiceCardProps) {
  const { icon, title, details } = serviceCardProps
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark">
            {title}
          </h4>
          <p className="text-dark-6">{details}</p>
        </div>
      </div>
    </>
  )
}
