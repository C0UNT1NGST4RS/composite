import EventsList from "./EventsList"
import { useState } from "react";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";
const Events = () => {
     const [selectedComponent, setSelectedComponent] = useState(null);
     const [show, setShow] = useState(false);


     const handleClick = (componentName) => {
          setShow(true)
          setSelectedComponent(componentName);
     };
     return (
          <>
               <div className="bg-[#f8f7ff] pt-6 md:px-16 md:pt-12 flex flex-col items-center justify-center">
                    <div>
                         <h1 id="svg-div" className="text-center mb-4 md:mb-8 text-3xl font-poppy-bold tracking-widest font-extrabold text-black md:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400"> EVENTS </span> WE CONDUCT</h1>
                    </div>
                    <div className="flex flex-wrap items-center justify-center">
                         {
                              EventsList.map((items, key) => {
                                   return (
                                        <Fade delay={15} key={key}>
                                             <Link smooth={true} to={items.path} onClick={() => handleClick(items.path)} key={key} className={`${items.bgImg} bg-cover w-[16rem] h-[23rem] flex items-end hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-lg m-4`}>
                                                  <div className="px-4 pb-4">
                                                       <h1 className="text-white font-poppy font-semibold text-2xl text-left">{items.name}</h1>
                                                       <h1 className="text-white font-poppy text-lg text-left">{items.event}</h1>
                                                  </div>
                                             </Link>
                                        </Fade>
                                   )
                              })
                         }
                    </div>
                    <div id="open">
                         {selectedComponent == "open" && show == true ?
                              <div onClick={() => { setShow(true) }} className="px-5 py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                   <div className="font-poppy">
                                        <div>
                                             <h1 className="text-3xl font-bold pb-2">Arcadia (Open Gaming Event)</h1>
                                             <h1 className="text-md ">Laniel Charles Dias, 7892849393</h1>
                                             <h1 className="text-md ">Frank Stalin Dsouza, 7022678809</h1>
                                        </div>
                                   </div>
                                   {/* <p className="text-lg font-poppy text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in fugiat debitis ducimus illo? Nemo totam iure quasi suscipit ullam molestias. Nobis reiciendis quam nam quod iusto, architecto velit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil blanditiis quibusdam possimus, id corrupti dolor non! Sit rem laboriosam quibusdam iure corrupti? Iste quibusdam nostrum saepe expedita accusamus illum!</p> */}
                                   <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                   <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside lowercase">
                                        <li>NFS MOST WANTED : (PRE- REGISTRATION) (SOLO)  50 RS PER ENTRY.</li>
                                        <li>ROCKET LEAGUE	: (PRE- REGISTRATION) (2 VS 2) MAX TEAMS 16 TEAMS 50RS ENTRY.</li>
                                        <li>VALORANT TOURNAMENT : (PRE- REGISTRATION) 300RS TEAM Entry.</li>
                                        <li>FRUIT NINJA : ( ON SPOT REGISTRATION) 10 RS PER TRY TO BEAT GET 50 BACK ON WIN.</li>
                                        <li>CALL OF DUTY MOBILE : (PRE- REGISTRATION) 40rs solo entry.</li>
                                        <li>SUBWAY SURFERS : ( ON SPOT REGISTRATION) 20 RS Entry Winners GET 80RS.</li>
                                   </ul>
                                   <a
                                        className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                        href="#"
                                   >
                                        Register Now
                                   </a>
                              </div>
                              : ("")
                         }
                    </div>
                    <div id="close">
                         {selectedComponent == "close" && show == true ?
                              <div className="px-5 py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                   <div className="font-poppy">
                                        <div>
                                             <h1 className="text-3xl font-bold pb-2">Arcadia (Closed Gaming Event)</h1>
                                             <h1 className="text-md ">Joel James, 9108770492</h1>
                                             <h1 className="text-md ">  Sonal Riva Gonsalves, 7204206754</h1>
                                        </div>
                                   </div>
                                   {/* <p className="text-lg font-poppy text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in fugiat debitis ducimus illo? Nemo totam iure quasi suscipit ullam molestias. Nobis reiciendis quam nam quod iusto, architecto velit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil blanditiis quibusdam possimus, id corrupti dolor non! Sit rem laboriosam quibusdam iure corrupti? Iste quibusdam nostrum saepe expedita accusamus illum!</p> */}
                                   <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                   <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">
                                        <li>Teams must pre register before the given deadline. Spot Registration is not allowed.</li>
                                        <li>Each team will consist of 3 players. The match round will be 3v3.</li>
                                        <li>Only 1 team per College is allowed.</li>
                                        <li>A maximum of 16 teams are allowed for registrations.</li>
                                        <li>Participants must carry their ID cards mandatorily.</li>
                                        <li>The teams must be present at least 10 minutes before the tournament begins.</li>
                                        <li>Participants are allowed to bring their own Headphones, Keyboard and mouse on the day of the event.
                                        </li>
                                        <li>
                                             The Organizers won’t be responsible for the damage or loss of your belongings.
                                        </li>
                                        <li>Login Accounts will be provided by the Organizers on the day of the event.
                                        </li>
                                        <li>Cheating/Abusive actions will result in disqualification.
                                        </li>
                                        <li>The maps will be decided on the day of the event.</li>
                                        <li>Attackers and Defenders will be decided by coin toss.
                                        </li>
                                        <li>All team captains must take note of the scoreboard after their matches
                                        </li>
                                        <li>All matches except the Grand Finals will be a Best-of-One. The Grand Finals will be played as a Best-of-Three.
                                        </li>
                                        <li>Teams can participate in the open gaming event after their closed Tournament ends.
                                        </li>
                                        <li>Judges' decisions are final.</li>
                                   </ul>
                                   <a
                                        className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                        href="#"
                                   >
                                        Register Now
                                   </a>
                              </div>
                              : ("")
                         }
                    </div>
                    <div id="man">
                         {selectedComponent == "man" && show == true ?
                              <div onClick={() => { setShow(true) }} className="px-5 py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                   <div className="font-poppy">
                                        <div>
                                             <h1 className="text-3xl font-bold pb-2">{"Elsify{}"}</h1>
                                             <h1 className="text-md ">Bhushan Bangera, 7204624083</h1>
                                             <h1 className="text-md ">Elkan Pais, 9483916991</h1>
                                        </div>
                                   </div>
                                   {/* <p className="text-lg font-poppy text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in fugiat debitis ducimus illo? Nemo totam iure quasi suscipit ullam molestias. Nobis reiciendis quam nam quod iusto, architecto velit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil blanditiis quibusdam possimus, id corrupti dolor non! Sit rem laboriosam quibusdam iure corrupti? Iste quibusdam nostrum saepe expedita accusamus illum!</p> */}
                                   <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                   <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">

                                        <li>   Only one member from each college team can participate in this event.
                                        </li>
                                        <li>Students who have registered for this event are not permitted to participate in any other event.
                                        </li>
                                        <li> The participants must bring all relevant equipment.
                                        </li>
                                        <li>No professional aid will be accepted.
                                        </li>
                                        <li> All participants are required to be present at the reporting time for each round of the event. Any delay or absence may result in disqualification from the round.
                                        </li>
                                        <li> Code of conduct must be followed. Participants must behave professionally and respectfully towards each other, the event organizers, and the event venue staff. Any behavior that is deemed inappropriate or disruptive may result in expulsion from the event.
                                        </li>
                                        <li>Decision of the judges will be made final.
                                        </li>
                                   </ul>
                                   <a
                                        className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                        href="#"
                                   >
                                        Register Now
                                   </a>
                              </div>
                              : ("")
                         }
                    </div>
                    <div id="expos">
                         {selectedComponent == "expos" && show == true ?
                              <div onClick={() => { setShow(true) }} className="px-5 py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                   <div className="font-poppy">
                                        <div>
                                             <h1 className="text-3xl font-bold pb-2">Exi-Bit</h1>
                                             <h1 className="text-md ">Vivian Dsouza, 8073425253</h1>
                                             <h1 className="text-md ">Lishma, 7899026237</h1>
                                        </div>
                                   </div>
                                   {/* <p className="text-lg font-poppy text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in fugiat debitis ducimus illo? Nemo totam iure quasi suscipit ullam molestias. Nobis reiciendis quam nam quod iusto, architecto velit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil blanditiis quibusdam possimus, id corrupti dolor non! Sit rem laboriosam quibusdam iure corrupti? Iste quibusdam nostrum saepe expedita accusamus illum!</p> */}
                                   <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                   <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">
                                        <li>Models can be either web application, IOT, app development or any hardware related components.
                                        </li>
                                        <li> Maximum number of participants per team is 2.
                                        </li>
                                        <li> All necessary equipment should be brought by the participants.
                                        </li>
                                        <li>  No professional assistance will be entertained.
                                        </li>
                                        <li> All participants should be present at the venue at the given time and be there until the event gets over.
                                        </li>
                                   </ul>
                                   <a
                                        className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                        href="#"
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