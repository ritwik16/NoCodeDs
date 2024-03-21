
const navList = [
    { name: 'DataSets', href: '#', current: true },
    { name: 'Preprocess', href: '#', current: false },
    { name: 'Feature Selection', href: '#', current: false },
    { name: 'Model Selection', href: '#', current: false },
    { name: 'Hyperparameter Tuning', href: '#', current: false },
    { name: 'Predict', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
export default function LeftPart(){
    return(
        <div className="w-1/4 h-screen bg-grey flex flex-col text-black pt-4 font-['jockey-one']">
            <div className="px-4">
                <p className="font-bold text-xl">
                    Supervised Learning
                </p>
            </div>
            <hr className="border-t-2 border-black mt-2"/>
            <div>
                      {navList.map((item) => (
                        <div className="my-4">
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            'rounded-md px-3 py-2 text-xl text-black-lite'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                        </div>
                      ))}
                    </div>

        </div>
    );
}