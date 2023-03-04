import EventsList from "./EventsList"
const Events = () => {
     return (
          <>
               <div className="bg-[#f8f7ff] px-16 py-8 flex flex-col items-center justify-center">
                    <div>
                         <h1 className="text-center font-poppy text-3xl pb-8 md:text-5xl font-black md:py-8">EVENTS WE CONDUCT</h1>
                    </div>
                    <div className="flex flex-wrap items-center justify-center">
                         {
                              EventsList.map((items, key) => {
                                   return (
                                        <div key={key} className={`${items.bgImg} bg-cover w-[16rem] h-[23rem] flex items-end hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-lg m-4`}>
                                             <div className="px-4 pb-4">
                                                  <h1 className="text-white font-poppy font-semibold text-2xl">{items.name}</h1>
                                                  <h1 className="text-white font-poppy text-lg">{items.event}</h1>
                                                  <h1 className="text-white font-poppy text-md">{items.contact}</h1>
                                                  <h1 className="text-white font-poppy text-md"><a href={items.email}>{items.email}</a></h1>
                                             </div>
                                        </div>
                                   )
                              })
                         }
                    </div>
               </div>
          </>
     )
}

export default Events