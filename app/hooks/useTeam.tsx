import { useMemo } from "react";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

const useTeam = () => {
    const team = useMemo(() => [
        {
            name: "Purav Ajmera",
            position: "Trek Leader",
            image: "/images/team/purav.jpg",
            quote: "It's not the mountain we conquer, but ourselves.",
            description: "A Trek Leader is the compass of adventure, guiding and inspiring groups through the wilderness. They prioritize safety, bring nature to life with knowledge, and foster camaraderie. These passionate leaders handle logistics, adapt to challenges, and champion environmental responsibility, making every trek an unforgettable experience.",
            linkedin: "https://www.linkedin.com/in/purav-ajmera-2602a51aa",
            instagram: "https://instagram.com/purav.13?igshid=OGQ5ZDc2ODk2ZA==",
            facebook: "https://www.facebook.com/purav.ajmera?mibextid=b06tZ0",
            email: "mailto:puravajmera2@gmail.com"
        },
        
    ], [])

    return team;
}

export default useTeam;