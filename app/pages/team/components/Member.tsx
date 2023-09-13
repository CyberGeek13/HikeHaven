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
        <div className="w-[300px] p-[30px] rounded-md bg-gray-100 shadow-lg hover:shadow-2xl transition duration-200 flex flex-col justify-center items-center gap-[20px]">
            <div>
                <Image alt="user" src={image} height={150} width={150} className="rounded-xl"/>
            </div>
            <div className="flex flex-col gap-[5px]">
                <span className="text-lg font-bold">{name}</span>
                <span className="text-sm">{position}</span>
            </div>
            <div>
                {quote}
            </div>
        </div>
     );
}
 
export default Member;