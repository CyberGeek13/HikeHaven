import Image from "next/image";

interface MemberProps {
    name: string;
    position: string;
    image: string;
    quote: string;
    description: string;
}

const Member: React.FC<MemberProps> = ({
    name,
    position,
    image,
    quote,
    description
}) => {
    return ( 
        <div className="w-[300px] p-[30px] rounded-md bg-gray-400 flex flex-col justify-center items-center gap-[20px]">
            <div>
                <Image alt="user" src="/images/placeholder.jpg" height={150} width={150} className="rounded-full"/>
            </div>
            <div className="flex flex-col gap-[5px]">
                <span className="text-lg font-bold">John Doe</span>
                <span className="text-sm">CEO</span>
            </div>
            <div>
                Do your job wisely and don't forget to smile.
            </div>
        </div>
     );
}
 
export default Member;