import { Fade } from "react-awesome-reveal"
import EventHeads from "./EventHeads"
import OtherHeads from "./OtherHeads"
const Heads = () => {
     return (
          <>
               <div className="bg-[#f8f7ff] md:px-16 pt-12 md:pt-24">
                    <div>
                         <h1 className="text-center mb-4 md:mb-8 text-3xl font-poppy-bold tracking-widest font-extrabold text-black md:text-5xl">HEADS OF <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">COMPOSITE'23</span></h1>
                    </div>
                    <div className="flex items-center justify-evenly flex-wrap">
                         <Fade delay={15} className="m-4 group bg-royal bg-cover w-[18rem] h-[24rem] flex items-end hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-lg"
                         >
                              <div className="px-4 pb-4 md:group-hover:block md:hidden">
                                   <h1 className="text-white font-poppy font-semibold text-3xl">Mr Royal Praveen Dsouza</h1>
                                   <h1 className="text-white font-poppy text-lg">Staff Co-Ordinator</h1>
                                   <h1 className="text-white font-poppy text-md">8904635906</h1>
                                   <h1 className="text-white font-poppy text-md"><a href="mailto:royal.dsouza@gmail.com">royal.dsouza@gmail.com</a></h1>
                              </div>
                         </Fade>
                         <Fade delay={15} className="m-4 bg-praveen bg-cover group w-[18rem] h-[24rem] flex items-end hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-lg"
                         >
                              <div className="px-4 pb-4 md:group-hover:block md:hidden">
                                   <h1 className="text-white font-poppy font-semibold text-3xl">Mr Praveen N</h1>
                                   <h1 className="text-white font-poppy text-lg">Asst Staff Co-Ordinator</h1>
                                   <h1 className="text-white font-poppy text-md">9663561307</h1>
                                   <h1 className="text-white font-poppy text-md"><a href="mailto:pnbayar@gmail.com">pnbayar@gmail.com</a></h1>
                              </div>
                         </Fade>
                         <Fade delay={15} className="m-4 bg-kenneth bg-cover group w-[18rem] h-[24rem] flex items-end hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-lg"
                         >
                              <div className="px-4 pb-4 md:group-hover:block md:hidden">
                                   <h1 className="text-white font-poppy font-semibold text-3xl">Kenneth Rebello</h1>
                                   <h1 className="text-white font-poppy text-lg">Student Co-Ordinator</h1>
                                   <h1 className="text-white font-poppy text-md">8317390275</h1>
                                   <h1 className="text-white font-poppy text-md"><a href="mailto:kennethrebello253@gmail.com">kennethrebello253@gmail.com</a></h1>
                              </div>
                         </Fade>
                         <Fade delay={15} className="m-4 bg-neha bg-cover group w-[18rem] h-[24rem] flex items-end hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-lg"
                         >
                              <div className="px-4 pb-4 md:group-hover:block md:hidden">
                                   <h1 className="text-white font-poppy font-semibold text-3xl">Neha Dinakar Ail </h1>
                                   <h1 className="text-white font-poppy text-lg">Student Co-Ordinator</h1>
                                   <h1 className="text-white font-poppy text-md">8606762515</h1>
                                   <h1 className="text-white font-poppy text-md"><a href="mailto:mail2nehaail@gmail.com">mail2nehaail@gmail.com</a></h1>
                              </div>
                         </Fade>
                    </div>
               </div>
               <div className="bg-[#f8f7ff] md:px-16 pt-12 md:pt-24">
                    <div>
                         <h1 className="text-center mb-4 md:mb-8 text-3xl font-poppy-bold tracking-widest font-extrabold text-black md:text-5xl">PROGRAM <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">DRAFTING HEADS</span></h1>
                    </div>
                    <div className="flex items-center justify-center flex-wrap">
                         <Fade delay={15} className="m-4 bg-siril group bg-cover  w-[18rem] h-[24rem] flex items-end hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-lg"
                         >
                              <div className="px-4 pb-4 md:group-hover:block md:hidden">
                                   <h1 className="text-white font-poppy font-semibold text-3xl">Mr Siril Joseph</h1>
                                   <h1 className="text-white font-poppy text-lg">Program Drafting Head</h1>
                                   <h1 className="text-white font-poppy text-md">8078196920</h1>
                                   <h1 className="text-white font-poppy text-md"><a href="mailto:siriljoseph02@gmail.com">siriljoseph02@gmail.com</a></h1>
                              </div>
                         </Fade>
                         <Fade delay={15} className="m-4 bg-maya group bg-cover  w-[18rem] h-[24rem] flex items-end hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-lg"
                         >
                              <div className="px-4 pb-4 md:group-hover:block md:hidden">
                                   <h1 className="text-white font-poppy font-semibold text-3xl">Ms Maya V</h1>
                                   <h1 className="text-white font-poppy text-lg">Program Drafting Head</h1>
                                   <h1 className="text-white font-poppy text-md">9633374308</h1>
                                   <h1 className="text-white font-poppy text-md"><a href="mailto:mayavakkadavath27@gmail.com">mayavakkadavath27@gmail.com
                                   </a></h1>
                              </div>
                         </Fade>
                    </div>
               </div>
               <div className="bg-[#f8f7ff] md:px-16 py-12 md:py-24 flex flex-col items-center justify-center">
                    <div>
                         <h1 className="text-center mb-4 md:mb-8 font-poppy text-3xl md:text-5xl font-black">EVENT HEADS</h1>
                    </div>
                    <div className="flex flex-wrap items-center justify-center">
                         {
                              EventHeads.map((items, key) => {
                                   return (
                                        <Fade delay={15} key={key} className={`${items.bgImg} group bg-cover w-[16rem] h-[23rem] flex items-end hover:scale-[1.02] duration-700 cursor-pointer hover:shadow-lg m-4`}>
                                             <div className="px-2 pb-2 md:group-hover:block md:hidden">
                                                  <h1 className="text-white font-poppy font-semibold text-2xl">{items.name}</h1>
                                                  <h1 className="text-white font-poppy text-lg">{items.event}</h1>
                                                  <h1 className="text-white font-poppy text-md">{items.contact}</h1>
                                                  <h1 className="text-white font-poppy text-[0.8rem]"><a href="mailto:`${items.email}`">{items.email}</a></h1>
                                             </div>
                                        </Fade>
                                   )
                              })
                         }
                    </div>
               </div>
               <div className="bg-[#f8f7ff] md:px-16 py-12 md:pb-24 flex flex-col items-center justify-center">
                    <div>
                         <h1 className="text-center mb-4 md:mb-8 font-poppy text-3xl md:text-5xl font-black uppercase">committee heads</h1>
                    </div>
                    <div className="flex flex-wrap items-center justify-center">
                         {
                              OtherHeads.map((items, key) => {
                                   return (
                                        <Fade delay={15} key={key} className={`${items.bgImg} group bg-cover w-[16rem] h-[23rem] flex items-end hover:scale-[1.02] duration-700 cursor-pointer hover:shadow-lg m-4`}>
                                             <div className="px-2 pb-2 md:group-hover:block md:hidden">
                                                  <h1 className="text-white font-poppy font-semibold text-2xl">{items.name}</h1>
                                                  <h1 className="text-white font-poppy text-lg">{items.event}</h1>
                                                  <h1 className="text-white font-poppy text-md">{items.contact}</h1>
                                                  <h1 className="text-white font-poppy text-[0.8rem]"><a href="mailto:`${items.email}`">{items.email}</a></h1>
                                             </div>
                                        </Fade>
                                   )
                              })
                         }
                    </div>
               </div>

          </>
     )
}

export default Heads