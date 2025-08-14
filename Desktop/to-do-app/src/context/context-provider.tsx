import { supabase } from "@/libs/supabase";
import { createContext, useContext } from "react"
type CONTEXTTYPES = null | string;
interface BODY{
    email:string,
    password:string,
    phone:string,
}
export const DataSender = createContext<CONTEXTTYPES>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {

    // SIGN IN WITH EMAIL & PASSWORD
    const CREATE_ACCOUNTWITHCREDENTIALS = async (body:BODY) => {
        try {
            let res = await supabase.auth.signUp(body);
        } catch (error) {
            console.log('error',error);
        }
    }

    // SIGN IN WITH GOOGLE
    const CREATE_ACCOUNT_WITH_GOOGLE=async (body:BODY)=>{
        supabase.auth.signUp({options:  })

    }



    return (
        <DataSender.Provider value={"Hello Friends"}>
            {children}
        </DataSender.Provider>
    )




}
export default ContextProvider