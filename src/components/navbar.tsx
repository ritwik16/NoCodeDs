import { Disclosure} from '@headlessui/react'



const navigation = [
  { name: 'Supervised', href: '#', current: true },
  { name: 'Unsupervised', href: '#', current: false },
  { name: 'Deep Learning', href: '#', current: false },
  { name: 'Auto ML', href: '#', current: false },
  { name: 'Analysis', href: '#', current: false },
  { name: 'Deployment', href: '#', current: false },
]
let active: boolean;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {

  return (
    <div className="bg-black">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto px-2 sm:px-6 lg:px-12" >
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md text-white p-2">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block h-6 w-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" aria-hidden="true" />
                      </svg>

                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block h-6 w-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" aria-hidden="true" />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
                {/* logo div */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                  <h1 className="text-white font-['jockey-one'] font-medium text-2xl">
                    No Code DS
                  </h1>
                  </div>
                </div>
                {/* dashboard etc  div */}
                <div className="absolute inset-y-0 right-0 flex flex-1 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 justify-end">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            'rounded-md px-3 py-2 text-sm font-medium text-white'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'text-primary' : 'text-gray-300 hover:hover:text-primary',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

    </div>
  );
}

