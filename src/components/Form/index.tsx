export default function Form() {
  return (
    <form className="rounded-2xl py-8 px-6 bg-white" id="agendar">
      <div className="space-y-12">

        <div className="border-b border-gray-900/10">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Contato</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use um endereço permanente onde você possa receber correspondência.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Primeiro nome */}
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Primeiro nome
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Ultimo nome */}
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Último nome
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Email */}
            <div className="col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                E-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Celular
              </label>
              <div className="mt-2">
                <input
                  type='tel'
                  name="celular"
                  id="celular"
                  autoComplete="celular"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
      
      <div className="mt-6 flex items-center justify-center gap-x-6 w-full">
        <button
          type="submit"
          className="w-3/4 rounded-2xl bg-[#092922] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enviar
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button type="button" className="w-3/4 rounded-2xl px-3 py-2 text-sm font-semibold leading-6 bg-[#F3F3F3] text-gray-900">
          WhatsApp clique aqui
        </button>
      </div>
    </form>
  )
}
