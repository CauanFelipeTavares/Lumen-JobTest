export default function Card({
  moduleName
}: {
  moduleName: string
}){

  return <div className="relative flex flex-col my-6 bg-slate-700 shadow-sm border border-slate-900 rounded-lg w-96">
    <div className="p-4">
      <h6 className="mb-2 text-white text-xl font-semibold">
        { moduleName }
      </h6>
      <p className="leading-normal">
        Lorem ipsum dolor sit amet. Aut labore galisum et deserunt deserunt 33 ipsam recusandae et labore sint nam amet nostrum aut galisum vero. Non autem laboriosam aut laborum totam sed ratione modi. Vel velit rerum est placeat quia rem saepe perferendis eum nobis molestiae!
      </p>
    </div>
    <div className="px-4 pb-4 pt-0 mt-2">
      <button
        className="rounded-md bg-slate-900 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-600 hover:bg-slate-600 hover:cursor-pointer active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
        type="button"
        onClick={() => window.open('https://wa.me/5517992219923')}
      >
        Conheça
      </button>
    </div>
  </div>

}