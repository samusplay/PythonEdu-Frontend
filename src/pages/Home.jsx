import Chatbot from "../components/Chatbot";
import HeroComponent from "../components/HeroComponent";
import InfoCardsComponent from '../components/InfoCardsComponent';

export default function Home(){
    return(
       <>
       <main className="max-w-6xl mx-auto px-2 md:px-8">
         <HeroComponent />
         <InfoCardsComponent />
         <Chatbot embedded={true}/>
       </main>
       </>
    );
} 