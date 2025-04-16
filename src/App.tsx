import Card from './components/card'
import Footer from './components/footer'
import Navbar from './components/navbar'

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

function App(){

  return <div className='flex flex-col min-h-[100vh]'>
    <Navbar />
    <div className='flex-1'>
      <div className='flex flex-col justify-center items-center gap-1 mx-4'>
        <h1 className='text-4xl text-center mt-12'>LUMEN GESTÃO PÚBLICA</h1>
        <h3 className='text-xl text-center'>Tecnologia, integridade e ação na ponta</h3>
        <a
          target='_blank'
          href='https://wa.me/5517992219923'
          className={classNames(
            'bg-gray-900 text-white',
            'rounded-md px-3 py-2 text-sm font-medium',
            'mt-4'
          )}
        >
          Entre em contato
        </a>
      </div>
      <div className='flex flex-wrap gap-4 justify-center mt-8 mx-4'>
        <Card moduleName='Módulo 1 🧑‍💻' />
        <Card moduleName='Módulo 2 💻' />
        <Card moduleName='Módulo 3 👩‍💻' />
      </div>
    </div>

    <Footer />
  </div>
}

export default App
