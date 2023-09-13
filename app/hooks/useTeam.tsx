import { useMemo } from "react";

const useTeam = () => {
    const team = useMemo(() => [
        {
            name: "Purav Ajmera",
            position: "CEO",
            image: "/images/team/purav.jpg",
            quote: "Do your job wisely and don't forget to smile.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus luctus, nisl libero ultrices urna, eget lacinia nisl velit eget mauris. Sed euismod, diam id rhoncus luctus, nisl libero ultrices urna, eget lacinia nisl velit eget mauris."
        },
        {
            name: "Sahil Yadav",
            position: "Manager",
            image: "/images/team/yadavji.jpg",
            quote: "Monkey D. Luffy is the future Pirate King.",
            description: "Jhingalala Hoo Hoo"
        }
    ], [])

    return team;
}

export default useTeam;