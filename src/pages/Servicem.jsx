import data from '../ServicemData'
import Card from '../component/ServicemCards'

export default function Servicem(){

    const cards=data.map(item=>{
        return(
          <Card
            key={item.id}
            {...item}
            />
        ) 
      })

    return(
        
            <main className="block w-screen">
            <div className="flex flex-col items-center">
                <p className="text-green text-xs py-3 font-bold">P L A N S</p>
                <h2 className="text-2xl font-serif font-semibold">Our Services</h2>
                <p className="text-center text-sm pt-2 leading-relaxed font-light">Lorem ipsum, dolor sit amet consectetur<br />
                    adipisicing elit.</p>
            </div>

            <div className="flex flex-col px-6 space-y-12 sm:space-y-0 mb-12 sm:flex-row sm:space-x-24 sm:my-9 place-content-center">
                {cards}
                {/* <div className="shadow-xl px-5 py-12">
                    <div className="flex flex-col items-center">
                        <p>Basic</p>
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold">$100</h1>
                            <p className="text-sm font-normal text-grayer ml-2"> /month</p>
                        </div>
                        <p className="text-center text-sm text-grayer py-3">Lorem ipsum, dolor sit amet<br />
                            consectetur adipisicing elit. Suscipit<br />
                            nemo hic quos, ab, dolor aperiam</p>
                    </div>
                    <form className="text-sm py-3 pl-3">
                        <p className=""><span className="text-green text-2xl px-2">✓</span>Lorem ipsum, dolor sit</p>
                        <p className=""><span className="text-green text-2xl px-2">✓</span>Lorem ipsum, dolor sit</p>
                        <p className=""><span className="text-green text-2xl px-2">✓</span>Lorem ipsum, dolor sit</p>
                        <p className=""><span className="text-green text-2xl px-2">✓</span>Lorem ipsum, dolor sit</p>
                        <p className=""><span className="text-green text-2xl px-2">✓</span>Lorem ipsum, dolor sit</p>
                    </form>
                    <div className="flex flex-col items-center">
                        <input className="border rounded mt-3 h-10 bg-neutral text-white px-3 text-center" type="button" defaultValue="Learn More" required></input>
                    </div>
                </div>

                <div className="shadow-xl px-5 py-12">
                    <div className="flex flex-col items-center">
                        <p>Plus</p>
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold">$250</h1>
                            <p className="text-sm font-normal text-grayer ml-2"> /month</p>
                        </div>
                        <p className="text-center text-sm text-grayer py-3">Lorem ipsum, dolor sit amet<br />
                            consectetur adipisicing elit. Suscipit<br />
                            nemo hic quos, ab, dolor aperiam</p>
                    </div>
                    <form className="text-sm py-3 pl-3">
                        <p className=""><span className="text-green text-2xl px-2">✓</span>Lorem ipsum, dolor sit</p>
                        <p className=""><span className="text-green text-2xl px-2">✓</span>Lorem ipsum, dolor sit</p>
                        <p className=""><span className="text-green text-2xl px-2">✓</span>Lorem ipsum, dolor sit</p>
                        <p className=""><span className="text-green text-2xl px-2">✓</span>Lorem ipsum, dolor sit</p>
                        <p className=""><span className="text-green text-2xl px-2">✓</span>Lorem ipsum, dolor sit</p>
                    </form>
                    <div className="flex flex-col items-center">
                        <input className="border rounded mt-3 h-10 bg-neutral text-white px-3 text-center" type="button" defaultValue="Learn More" required></input>
                    </div>
                </div>

                <div className="shadow-xl px-5 py-12">
                    <div className="flex flex-col items-center">
                        <p>Pro</p>
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold">$400</h1>
                            <p className="text-sm font-normal text-grayer ml-2"> /month</p>
                        </div>
                        <p className="text-center text-sm text-grayer py-3">Lorem ipsum, dolor sit amet<br />
                            consectetur adipisicing elit. Suscipit<br />
                            nemo hic quos, ab, dolor aperiam</p>
                    </div>
                    <form className="text-sm py-3 pl-3">
                        <p className=""><span className="text-green text-2xl px-2">✓</span>Lorem ipsum, dolor sit</p>
                        <p className=""><span className="text-green text-2xl px-2">✓</span>Lorem ipsum, dolor sit</p>
                        <p className=""><span className="text-green text-2xl px-2">✓</span>Lorem ipsum, dolor sit</p>
                        <p className=""><span className="text-green text-2xl px-2">✓</span>Lorem ipsum, dolor sit</p>
                        <p className=""><span className="text-green text-2xl px-2">✓</span>Lorem ipsum, dolor sit</p>
                    </form>
                    <div className="flex flex-col items-center">
                        <input className="border rounded mt-3 h-10 bg-neutral text-white px-3 text-center" type="button" defaultValue="Learn More" required></input>
                    </div>
                </div> */}
            </div>
        </main>       
        
    )
    }