import EventHeads from "./EventHeads"
const Heads = () => {
     return (
          <>
               <div className="bg-[#f8f7ff] md:px-16 md:py-8">
                    <div>
                         <h1 className="text-center font-poppy text-3xl pb-8 md:text-5xl font-black md:py-8">HEADS OF COMPOSITE</h1>
                    </div>
                    <div className="flex items-center justify-evenly flex-wrap">
                         <div className="m-4 bg-royal bg-cover  w-[18rem] h-[24rem] flex items-end hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-lg">
                              <div className="px-4 pb-4">
                                   <h1 className="text-white font-poppy font-semibold text-4xl">Royal Praveen</h1>
                                   <h1 className="text-white font-poppy text-lg">Staff Co-Ordinator</h1>
                                   <h1 className="text-white font-poppy text-md">9452203271</h1>
                                   <h1 className="text-white font-poppy text-md"><a href="mailto:imdelbingeorge@gmail.com">royal.dsouza@gmail.com</a></h1>
                              </div>
                         </div>
                         <div className="m-4 bg-siril bg-cover  w-[18rem] h-[24rem] flex items-end hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-lg">
                              <div className="px-4 pb-4">
                                   <h1 className="text-white font-poppy font-semibold text-4xl">Siril Joseph</h1>
                                   <h1 className="text-white font-poppy text-lg">Student Co-Ordinator</h1>
                                   <h1 className="text-white font-poppy text-md">9452203271</h1>
                                   <h1 className="text-white font-poppy text-md"><a href="mailto:imdelbingeorge@gmail.com">imdelbingeorge@gmail.com</a></h1>
                              </div>
                         </div>
                         <div className="m-4 bg-neha bg-cover  w-[18rem] h-[24rem] flex items-end hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-lg">
                              <div className="px-4 pb-4">
                                   <h1 className="text-white font-poppy font-semibold text-4xl">Neha Ail</h1>
                                   <h1 className="text-white font-poppy text-lg">Student Co-Ordinator</h1>
                                   <h1 className="text-white font-poppy text-md">9452203271</h1>
                                   <h1 className="text-white font-poppy text-md"><a href="mailto:imdelbingeorge@gmail.com">imdelbingeorge@gmail.com</a></h1>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="bg-[#f8f7ff] px-16 py-8 flex flex-col items-center justify-center">
                    <div>
                         <h1 className="text-center font-poppy text-3xl pb-8 md:text-5xl font-black md:py-8">EVENT HEADS</h1>
                    </div>
                    <div className="flex flex-wrap items-center justify-center">
                         {
                              EventHeads.map((items, key) => {
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

export default Heads