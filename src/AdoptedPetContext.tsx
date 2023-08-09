import {createContext} from "react"
import {Pet} from "./APIResponseTypes"

const AdoptedPetContext = createContext<[Pet | null, (adoptedPet: Pet) => void]>([
    {
        id: 1337,
        name: "Fido",
        animal: "dog",
        description: "Lorem Ipsum",
        breed: "Beagle",
        images: [],
        city: "Seatle",
        state: "WA"
    },
    () => {},
]);

export default AdoptedPetContext