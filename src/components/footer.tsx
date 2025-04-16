export default function Footer(){

  return <footer className="w-full mt-auto shadow-sm dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {(new Date).getFullYear()} Lumen Inc. Todos os direitos reservados.
    </span>
    <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <h3>
        Entre em
        <a className="ml-1 underline" href="https://wa.me/5517992219923" target="_blank">contato</a>
      </h3>
    </div>
    </div>
  </footer>

  
  

}