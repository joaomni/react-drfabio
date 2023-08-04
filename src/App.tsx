
import logo from './assets/logo-branca.png'
import card1 from './assets/1.png'
import card2 from './assets/2.png'
import card3 from './assets/3.png'
import card4 from './assets/4.png'
import card5 from './assets/5.png'
import dep1 from './assets/dep1.png'
import dep2 from './assets/dep2.png'
import dep3 from './assets/dep3.png'

import tiktok from './assets/video.mp4'

import Container from './components/Container'
import Image from './components/Image'
import Form from './components/Form'

export default function Home() {

  return (
    <>
      <Container id="fullpage">
        <main className='xl:bg-[url("./assets/main.jpg")] bg-[url("./assets/main2.jpg")]  bg-no-repeat bg-cover bg-center h-auto'>
          <header className='py-3 xl:mx-28 mx- xl:w-auto w-full'>
            <nav className='flex items-center sm:justify-between justify-center'>
              <Image 
                src={logo}
                width={300}
                height={300}
                alt='Logo Dr. Fábio Pizzini'
                className='sm:px-0 px-8'
              />
              <ul className='xl:gap-x-16 gap-y-8 font-semibold sm:mr-44 sm:flex hidden lg:text-base text-xs'>
                <li><a href="#agendar" rel="noopener noreferrer">AGENDAR CONSULTA</a></li>
                <li><a href="https://clinicapizzini.com.br/" target='_blank' rel="noopener noreferrer">CONSULTÓRIO</a></li>
                <li><a href="#avaliacao" rel="noopener noreferrer">AVALIAÇÃO</a></li>
                <li><a href="#agendar" rel="noopener noreferrer">CONTATO</a></li>
              </ul>
            </nav>
          </header>
          
          <section className='py-[4rem] flex flex-col gap-y-4'>

            <div className='w-full lg:h-[70vh] h-auto flex xl:flex-row flex-col gap-y-4'>
              <div className='lg:basis-1/2 lg:text-6xl sm:text-4xl text-3xl text-center font-bold'>
                <h1 className='xl:hidden block'>NUTROLOGIA EM
                  <br/>
                  <span className='text-[#9BBA39]'>SOROCABA</span>
                </h1>
              </div>
              <div className='lg:basis-1/2 flex justify-center'>
                <video 
                  autoPlay
                  muted
                  loop
                  className='xl:w-[40%] w-[100%] h-auto md:aspect-[9/6] aspect-[9/10]'
                >
                  <source src={tiktok} />
                </video>
              </div>
            </div>

            <div>
              <div className='flex mt-[4vh] justify-center'>
                <a className='text-[#0D6B5A] text-2xl font-bold italic bg-[white] w-max rounded-3xl p-[1rem]' href="#" target='_blank'>AGENDAR CONSULTA</a>
              </div>
            </div>

          </section>
        </main>

        <section className='bg-[url("./assets/clinic.jpeg")] bg-no-repeat bg-cover bg-center h-screen'>
          <div className='bg-black bg-opacity-[0.6] flex flex-col justify-center items-center h-full sm:px-8 px-2'>
            <div className='bg-blur flex lg:flex-row flex-col gap-y-16 justify-center items-center gap-x-16 py-8 px-12 sm:w-auto w-[98%]'>
              <Image 
                src={logo}
                width={300}
                height={300}
                alt='Logo Dr. Fábio Pizzini'
              />

              <div className='text-base italic sm:text-left text-center font-bold grid gap-y-6'>
                <ul className='grid gap-y-2'>
                  <li>EMAGRECIMENTO</li>
                  <li>SAÚDE E QUALIDADE DE VIDA</li>
                  <li>PERFORMANCE ESPORTIVA</li>
                  <li>DEFINIÇÃO E HIPERTROFIA MUSCULAR</li>
                  <li>EVELHECIMENTO SAUDÁVEL</li>
                </ul>

                <a href="#" target="_blank" rel="noopener noreferrer" className='text-[#0D6B5A] sm:text-base text-[1rem] font-bold bg-[white] w-max rounded-3xl p-[1rem] mt-[10%]'>AGENDE UMA CONSULTA</a>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-blur h-auto w-full px-8 py-12 flex flex-col items-center gap-y-8' id='avaliacao'>
          <div className='flex flex-col items-center gap-y-4'>
            <div className='xl:grid grid-cols-5 text-center max-w-max'>
              <div className="flex flex-col items-center gap-y-4">
                <div>
                  <Image 
                    src={logo}
                    width={300}
                    height={100}
                    alt='icone'
                  />
                </div>

                <div>
                  <Image 
                    src={card1}
                    width={400}
                    height={100}
                    alt='card'
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-y-4">
                <div>
                  <Image 
                    src={logo}
                    width={300}
                    height={100}
                    alt='icone'
                  />
                </div>

                <div>
                  <Image 
                    src={card2}
                    width={400}
                    height={100}
                    alt='card'
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-y-4">
                <div>
                  <Image 
                    src={logo}
                    width={300}
                    height={100}
                    alt='icone'
                  />
                </div>

                <div>
                  <Image 
                    src={card3}
                    width={400}
                    height={100}
                    alt='card'
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-y-4">
                <div>
                  <Image 
                    src={logo}
                    width={300}
                    height={100}
                    alt='icone'
                  />
                </div>

                <div>
                  <Image 
                    src={card4}
                    width={400}
                    height={100}
                    alt='card'
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-y-4">
                <div>
                  <Image 
                    src={logo}
                    width={300}
                    height={100}
                    alt='icone'
                  />
                </div>

                <div>
                  <Image 
                    src={card5}
                    width={400}
                    height={100}
                    alt='card'
                  />
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <a className='text-[#0D6B5A] sm:text-[1.3rem] text-base font-bold bg-[white] w-max rounded-3xl p-[1rem]' href="#" target='_blank'>INFORMAÇÕES WHATS</a>
            </div>
          </div>

          <hr className='w-[80%]'/>
        </section>

        <section className='text-black text-center lg:h-screen h-auto py-12 sm:px-8 px-4 xl:bg-[url("./assets/bg-desktop.jpg")] lg:bg-[url("./assets/bg-laptop.jpg")] bg-[url("./assets/about.jpg")] bg-no-repeat bg-cover bg-center'>
          
          <main className='flex-col justify-center lg:hidden flex items-center h-full gap-y-28'>
            <header>
              <h1 className='text-3xl font-bold text-[#0D6B5A]'>SOBRE NUTROLOGIA</h1>
            </header>

            <section className='flex items-center justify-center'>
              <p className='sm:text-left text-xl sm:font-light font-medium ml-8 md:w-1/2'>“Nutrologia é a especialidade médica que estuda, pesquisa e avalia os benefícios e malefícios causados pela ingestão dos nutrientes, aplicando este conhecimento para a avaliação de nossas necessidades orgânicas, visando a manutenção da saúde e redução de risco de doenças (…)</p>
            </section>

            <div>
              <a className='text-[white] sm:text-[1.3rem] font-bold bg-[#0D6B5A] w-max rounded-3xl p-[1rem]' href="#" target='_blank'>MAIS INFORMAÇÕES</a>
            </div>
          </main>

        </section>

        <section className='text-black my-28'>
          <main className='flex flex-col items-center gap-y-20'>
            <header>
              <h1 className='sm:text-[4rem] text-4xl text-[#0D6B5A] font-bold'>DEPOIMENTOS</h1>
            </header>

            <section className='flex sm:flex-row flex-col gap-y-8 justify-evenly w-full text-center'>
              <article className='flex flex-col items-center gap-y-4'>
                <div>
                  <Image 
                    src={dep1}
                    width={300}
                    height={100}
                    alt='Logo Dr. Fábio Pizzini'
                  />
                </div>

                <div>
                  <h1 className='text-2xl text-[#0D6B5A] font-semibold'>Alfredo Torres</h1>
                  <p className='font-light text-lg'>Indico de olhos fechados os dois profissionais</p>
                </div>
              </article>

              <article className='flex flex-col items-center'>
                <div>
                  <Image 
                    src={dep3}
                    width={300}
                    height={100}
                    alt='Logo Dr. Fábio Pizzini'
                  />
                </div>

                <div>
                  <h1 className='text-2xl text-[#0D6B5A] font-semibold'>Alfredo Torres</h1>
                  <p className='font-light text-lg'>Indico de olhos fechados os dois profissionais</p>
                </div>
              </article>

              <article className='flex flex-col items-center'>
                <div>
                  <Image 
                    src={dep2}
                    width={300}
                    height={100}
                    alt='Logo Dr. Fábio Pizzini'
                  />
                </div>

                <div>
                  <h1 className='text-2xl text-[#0D6B5A] font-semibold'>Alfredo Torres</h1>
                  <p className='font-light text-lg'>Indico de olhos fechados os dois profissionais</p>
                </div>
              </article>
            </section>
            
            <footer>
              <div>
                <a className='text-[white] text-[1.3rem] font-bold bg-[#0D6B5A] w-max rounded-3xl p-[1rem]' href="#" target='_blank'>INFORMAÇÕES WHATS</a>
              </div>
            </footer>
          </main>
        </section>

        <section className='flex lg:flex-row gap-y-16 flex-col items-center px-8 py-12 bg-[#092922]'>
          <div className='lg:w-1/2 flex flex-col gap-y-12 order-last lg:order-none lg:text-left text-center'>
            <Image 
              src={logo}
              width={300}
              height={100}
              alt='icone'
            />

            <h1 className='font-bold text-5xl'>
              Estamos aqui
              <br/>
              para tirarmos
              <br/>
              todas as suas
              <br/>
              dúvidas
            </h1>

            <p className='text-lg'>
              (15) 99871-9454
              <br/>
              www.clinicapizzini.com.br
              <br/>
              Comendador Pereira Inácio, 950 - 6° andar - Sala 611
              <br/>
              Jd. Vergueiro, Sorocaba - SP 18030-005
            </p>
          </div>
          <div className='lg:w-1/2 w-full'>
            <Form />
          </div>
        </section>
      </Container>
    </>
  )
}
