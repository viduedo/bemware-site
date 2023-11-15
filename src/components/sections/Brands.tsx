export default function Brands() {
  return (
    <section className="bg-white dark:bg-dark py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap ">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="/brands/aws.png"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="/brands/dell.png"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="/brands/microsoft.png"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="/brands/titan.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface SingleImageProps {
  href: string
  imgSrc: string
  Alt: string
}

function SingleImage(singleImageProps: SingleImageProps) {
  const { href, imgSrc, Alt } = singleImageProps

  return (
    <a
      href={href}
      className="mx-16 my-8 flex w-[150px] items-center justify-center  2xl:w-[180px]"
    >
      <img src={imgSrc} alt={Alt} className="w-full h-15" />
    </a>
  )
}
