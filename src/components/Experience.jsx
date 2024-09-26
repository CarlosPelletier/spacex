import { ChevronRight } from 'lucide-react';
import astronautImg from '../assets/images/astronaut-transparent.png'
import { checklistItems } from '../constants';

const Experience = () => {
  return (
    <section className='mt-20 pb-10 border-b border-neutral-800'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wider'>Lujo y comodidad 
            <span className='bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text'>{' '}en órbita</span>
        </h2>
        <div className='flex flex-wrap justify-center'>
            <div className='p-2 lg:pt-12 xl:pt-2 w-full lg:w-1/2 lg:flex justify-center'>
                <img className='lg:max-h-[calc(100vh-5rem)]' src={astronautImg} alt="astronaut face" />
            </div>
            <div className='pt-12 xl:px-16 w-full lg:w-1/2'>
                {checklistItems.map((item, index) => (
                    <div key={index} className='flex mb-12'>
                        <div className='text-green-700 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                        <ChevronRight />
                        </div>
                        <div>
                            <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                            <p className='text-md text-neutral-500'>{item.description}</p>
                        </div>
                    

                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export { Experience };