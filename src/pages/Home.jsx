import Chatbot from "../components/Chatbot";
import HeroComponent from "../components/HeroComponent";
import InfoCardsComponent from '../components/InfoCardsComponent';
export default function Home(){
    return(
       <>
       <HeroComponent />
       <InfoCardsComponent />
       <Chatbot  embedded={true}/>
       </>
    );
} 