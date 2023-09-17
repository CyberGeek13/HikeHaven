import { useMemo } from "react";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

const useTeam = () => {
    const team = useMemo(() => [
        {
            name: "Purav Ajmera",
            position: "CEO",
            image: "/images/team/purav.jpg",
            quote: "Do your job wisely and don't forget to smile.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus luctus, nisl libero ultrices urna, eget lacinia nisl velit eget mauris. Sed euismod, diam id rhoncus luctus, nisl libero ultrices urna, eget lacinia nisl velit eget mauris.",
            linkedin: "https://www.linkedin.com/in/purav-ajmera-2602a51aa",
            instagram: "https://instagram.com/purav.13?igshid=OGQ5ZDc2ODk2ZA==",
            facebook: "https://www.facebook.com/purav.ajmera?mibextid=b06tZ0",
            email: "mailto:puravajmera2@gmail.com"
        },
        {
            name: "Sahil Yadav",
            position: "Manager",
            image: "/images/team/yadavji.jpg",
            quote: "Monkey D. Luffy is the future Pirate King.",
            description: "Jhingalala Hoo Hoo",
            linkedin: "https://www.linkedin.com/in/sahil-yadav106/",
            email: "mailto:sahiljyadav12345@gmail.com"
        }
    ], [])

    return team;
}

export default useTeam;