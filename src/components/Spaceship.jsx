import dragonShuttle from '../assets/images/dragon-shuttle-full.png'

const Spaceship = () => {
  return (
    <section className='max-w-7xl mx-auto pt-20 px-6 border-b border-neutral-800'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl tracking-wider text-center'>
        Conoce al
        <span className='bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text'>{' '} dragon</span>
      </h2>
      <div className='flex flex-wrap justify-center'>
        <div className='pt-12 xl:px-16 w-full lg:w-1/2 flex items-center'>
          <p className='text-justify'>El Dragon es una nave espacial capaz de llevar hasta 7 pasajeros desde la órbita de la tierra al espacio exterior y de regreso, es la primera nave espacial privada en llevar humanos a la estación espacial.</p>
        </div>
        <div className='p-2 lg:pt-12 xl:pt-2 w-full lg:w-1/2 lg:flex justify-center'>
          <img src={dragonShuttle} alt="Dragon shuttle" />
        </div>
      </div>
    </section>
  )
}

export { Spaceship };