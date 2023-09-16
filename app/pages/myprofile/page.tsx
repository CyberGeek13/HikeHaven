import getCurrentUser from "@/app/actions/getCurrentUser";
import Image from "next/image";
import ChangeUserName from "./components/ChangeUserName";

const MyProfile = async () => {
    const currentUser = await getCurrentUser();
    return ( 
        <div className="mt-[200px] flex flex-col items-center">
            <Image alt="Avatar" className=" rounded-full" src={currentUser?.image || '/images/placeholder.jpg'} height={100} width={100}/>
            <div className="text-2xl font-semibold mt-5">{currentUser?.name}</div>
            <div className="text-xl font-semibold mt-5">{currentUser?.email}</div>
            <div className="text-xl font-semibold mt-5">{currentUser?.phone}</div>
            <ChangeUserName user={currentUser}/>
        </div>
     );
}
 
export default MyProfile;