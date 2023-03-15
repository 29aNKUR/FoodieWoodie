import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  // const [isVisible , setIsVisible] = useState(false); //we are initializing with false because we dont want desc to show on page loading. It also take false as the default value
  return (
    <div className="border border-black m-2 p-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <>
          <button
            onClick={() => setIsVisible(false) }
            className="cursor-pointer underline"
          >
            Hide
          </button>
          <p>{desc}</p>
        </>
      ) : (
        <>
          <button
            onClick={() => setIsVisible(true)}
            className="cursor-pointer underline"
          >
            Show
          </button>
          
        </>
      )}
      {/* && logical conjunction for a set of boolean operands will be true if and only if all the operands are true. otherwise it will be false */}
      {/* {isVisible && <p>{desc}</p>} */}
    </div>
    
  );
};

const Instamart = () => {
  //Not a good practice
  // const [sectionConfig , setSectionConfig] = useState({
  //   showAbout:false,
  //   showTeam:false,
  //   showCareers:false,
  // })

  const [isVisibleSection, setIsVisibleSection] = useState("about");

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        desc={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."
        }
        // isVisible={sectionConfig.showAbout}
        // setIsVisible={()=>
        // setSectionConfig({
        //   showAbout:true,
        //   showTeam:false,
        //   showCareers:false,
        // })}
        isVisible={isVisibleSection === "about"}
        setIsVisible={(isVisible)=>{
          (isVisible)?setIsVisibleSection("about"):setIsVisibleSection("")
        }
      
        }
      />

      <Section
        title={"Team Instamart"}
        desc={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        // isVisible={sectionConfig.showTeam}
        // setIsVisible={()=>setSectionConfig({
        //   showAbout:false,
        //   showTeam:true,
        //   showCareers:false,
        // })}
        isVisible={isVisibleSection === "team"}
        setIsVisible={(isVisible) => {(isVisible)?setIsVisibleSection("team"):setIsVisibleSection("")}}
      />

      <Section
        key="careers"
        title={"Careers"}
        desc={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        // isVisible={sectionConfig.showCareers}
        // setIsVisible={()=>setSectionConfig({
        //   showAbout:false,
        //   showTeam:false,
        //   showCareers:true
        // })}
        isVisible={isVisibleSection === "careers"}
        setIsVisible={(isVisible) => {(isVisible)?setIsVisibleSection("careers"):setIsVisibleSection("")}
      }
      />
    </div>
  );
};

export default Instamart;
