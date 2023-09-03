import { useMemo } from "react";

const useHikes = () => {
    const hikes = useMemo(() => [
        {
            id: 1,
            name: "Hike 1",
            description: "Hike 1 description",
            location: "Maharashtra",
            distance: 10,
            elevation: 1000,
            price: 100,
            date: "2021-01-01",
            availDates: ["2021-01-01", "2021-01-02", "2021-01-03"],
            difficulty: "easy",
            image: "https://images.unsplash.com/reserve/91JuTaUSKaMh2yjB1C4A_IMG_9284.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
            tags: "maharashtra"
        },
        {
            id: 2,
            name: "Hike 2",
            description: "Hike 3 description",
            location: "Maharashtra",
            distance: 30,
            elevation: 3000,
            price: 300,
            date: "2021-01-03",
            availDates: ["2021-01-01", "2021-01-02", "2021-01-03"],
            difficulty: "hard",
            image: "https://images.unsplash.com/photo-1550486686-a496af34a2d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
            tags: "maharashtra"
        },
        {
            id: 3,
            name: "Hike 3",
            description: "Hike 4 description",
            location: "Maharashtra",
            distance: 40,
            elevation: 4000,
            price: 400,
            date: "2021-01-04",
            availDates: ["2021-01-01", "2021-01-02", "2021-01-03"],
            difficulty: "easy",
            image: "https://images.unsplash.com/photo-1519309621146-2a47d1f7103a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2946&q=80",
            tags: "maharashtra"
        },
        {
            id: 4,
            name: "Hike 4",
            description: "Hike 1 description",
            location: "Maharashtra",
            distance: 10,
            elevation: 1000,
            price: 100,
            date: "2021-01-01",
            availDates: ["2021-01-01", "2021-01-02", "2021-01-03"],
            difficulty: "easy",
            image: "https://images.unsplash.com/reserve/91JuTaUSKaMh2yjB1C4A_IMG_9284.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
            tags: "maharashtra"
        },
        {
            id: 5,
            name: "Hike 5",
            description: "Hike 2 description",
            location: "Maharashtra",
            distance: 20,
            elevation: 2000,
            price: 200,
            date: "2021-01-02",
            availDates: ["2021-01-01", "2021-01-02", "2021-01-03"],
            difficulty: "medium",
            image: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80",
            tags: "maharashtra"
        },
        {
            id: 6,
            name: "Hike 6",
            description: "Hike 2 description",
            location: "Maharashtra",
            distance: 20,
            elevation: 2000,
            price: 200,
            date: "2021-01-02",
            availDates: ["2021-01-01", "2021-01-02", "2021-01-03"],
            difficulty: "medium",
            image: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80",
            tags: "maharashtra"
        },
        {
            id: 7,
            name: "Hike 7",
            description: "Hike 3 description",
            location: "Maharashtra",
            distance: 30,
            elevation: 3000,
            price: 300,
            date: "2021-01-03",
            availDates: ["2021-01-01", "2021-01-02", "2021-01-03"],
            difficulty: "hard",
            image: "https://images.unsplash.com/photo-1550486686-a496af34a2d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
            tags: "maharashtra"
        },
        {
            id: 8,
            name: "Hike 8",
            description: "Hike 4 description",
            location: "Maharashtra",
            distance: 40,
            elevation: 4000,
            price: 400,
            date: "2021-01-04",
            availDates: ["2021-01-01", "2021-01-02", "2021-01-03"],
            difficulty: "easy",
            image: "https://images.unsplash.com/photo-1519309621146-2a47d1f7103a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2946&q=80",
            tags: "maharashtra"
        },
        {
            id: 9,
            name: "Hike 9",
            description: "Hike 1 description",
            location: "Maharashtra",
            distance: 10,
            elevation: 1000,
            price: 100,
            date: "2021-01-01",
            availDates: ["2021-01-01", "2021-01-02", "2021-01-03"],
            difficulty: "easy",
            image: "https://images.unsplash.com/reserve/91JuTaUSKaMh2yjB1C4A_IMG_9284.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
            tags: "maharashtra"
        },
        {
            id: 10,
            name: "Hike 10",
            description: "Hike 2 description",
            location: "Maharashtra",
            distance: 20,
            elevation: 2000,
            price: 200,
            date: "2021-01-02",
            availDates: ["2021-01-01", "2021-01-02", "2021-01-03"],
            difficulty: "medium",
            image: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80",
            tags: "maharashtra"
        },
        {
            id: 11,
            name: "Hike 11",
            description: "Hike 3 description",
            location: "Maharashtra",
            distance: 30,
            elevation: 3000,
            price: 300,
            date: "2021-01-03",
            availDates: ["2021-01-01", "2021-01-02", "2021-01-03"],
            difficulty: "hard",
            image: "https://images.unsplash.com/photo-1550486686-a496af34a2d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
            tags: "maharashtra"
        },
        {
            id: 12,
            name: "Hike 12",
            description: "Hike 4 description",
            location: "Maharashtra",
            distance: 40,
            elevation: 4000,
            price: 400,
            date: "2021-01-04",
            availDates: ["2021-01-01", "2021-01-02", "2021-01-03"],
            difficulty: "easy",
            image: "https://images.unsplash.com/photo-1519309621146-2a47d1f7103a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2946&q=80",
            tags: "maharashtra"
        }
    ],[])

    return hikes;
}

export default useHikes;