import EventsList from "./EventsList"
import { useState } from "react";
import { Link } from "react-scroll";
const Events = () => {
     const [selectedComponent, setSelectedComponent] = useState(null);
     const [show, setShow] = useState(false);


     const handleClick = (componentName) => {
          setShow(true)
          setSelectedComponent(componentName);
     };
     return (
          <>
               <div className="bg-[#f8f7ff] px-16 pt-24 flex flex-col items-center justify-center">
                    <div>
                         {/* <h1 className="text-center font-poppy text-3xl pb-8 md:text-5xl font-black md:py-8"> */}
                         <h1 class="text-center mb-4 text-3xl font-poppy-bold tracking-widest font-extrabold text-gray-900 md:text-5xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400"> EVENTS </span> WE CONDUCT</h1>

                         {/* </h1> */}
                    </div>
                    <div className="flex flex-wrap items-center justify-center">
                         {
                              EventsList.map((items, key) => {
                                   return (
                                        <Link smooth={true} to={items.path} onClick={() => handleClick(items.path)} key={key} className={`${items.bgImg} bg-cover w-[16rem] h-[23rem] flex items-end hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-lg m-4`}>
                                             <div className="px-4 pb-4">
                                                  <h1 className="text-white font-poppy font-semibold text-2xl text-left">{items.name}</h1>
                                                  <h1 className="text-white font-poppy text-lg text-left">{items.event}</h1>
                                             </div>
                                        </Link>

                                   )
                              })
                         }
                    </div>
                    <div id="web">
                         {selectedComponent == "web" && show == true ?
                              <div onClick={() => { setShow(false) }} className="p-12 ">
                                   <div className="font-poppy mb-2">
                                        <h1 className="text-3xl font-bold">Web Odyssey</h1>
                                        <h1 className="text-md ">Event Head Name, 92347249273</h1>
                                   </div>
                                   <p className="text-md font-poppy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in fugiat debitis ducimus illo? Nemo totam iure quasi suscipit ullam molestias. Nobis reiciendis quam nam quod iusto, architecto velit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil blanditiis quibusdam possimus, id corrupti dolor non! Sit rem laboriosam quibusdam iure corrupti? Iste quibusdam nostrum saepe expedita accusamus illum!</p>
                                   <h1 className="text-xl font-poppy py-3">Rules to be followed:</h1>
                                   <ul className="mb-8 font-poppy">
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate alias voluptates </li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate alias voluptates </li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate alias voluptates </li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate alias voluptates </li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate alias voluptates </li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate alias voluptates </li>
                                   </ul>
                                   <a
                                        className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                        href="home"
                                   >
                                        Register Now
                                   </a>
                              </div>
                              : ("")
                         }
                    </div>

               </div>
          </>
     )
}

export default Events