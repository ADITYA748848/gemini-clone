import { createContext} from "react";
import runChat from "../config/gemini";

export const Context =createContext();
const ContextProvider =(props)=>{

    const [input,setInput] = useState("");
    const [recentPrompts,setRecentPrompt]= useState("");
    const [prevPrompts,setprevPrompt]= useState([]);
    const [showResult,setShowPrompt]= useState("");
    const [loading,setloading]=useState (false);
    const [resultData,setResultData]=useState("");

    
    const onSent = async (prompt)=>{
        await runChat(input)

    }
   
    const contextValue ={
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompts,
        showResult,
        loading,
        resultData,
        input,
        setInput

    }
    return(
        <Context.Provider>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
