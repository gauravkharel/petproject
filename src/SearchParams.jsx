import { useEffect, useState } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog"];

const SearchParams = () => {
    const [pets, setPets] = useState([])
    const [location, updateLocation] = useState("");
    const [animal, updateAnimal] = useState("");
    const [breed, updateBreed] = useState("");
    
    const [breeds] = useBreedList(animal)    
    useEffect(() => {
        requestPets();
    }, [])
    //the [] at the end of the useEffect is where you declare your data dependencies. React wants to know when to run that effect again. You don't give it data dependencies, it assumes any time any hook changes that you should run the effect again. This is bad because that would mean any time setPets gets called it'd re-run render and all the hooks again. See a problem there? It'd run infinitely since requestPets calls setPets.

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        )
        const json = await res.json()
        setPets(json.pets)
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={(e) => updateLocation(e.target.value)}
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            updateAnimal(e.target.value);
                            updateBreed("");
                        }}
                        onBlur={(e) => {
                            updateAnimal(e.target.value);
                            updateBreed("");
                        }}
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        disabled={!breeds.length}
                        id="breed"
                        value={breeds}
                        onChange={(e) => updateBreed(e.target.value)}
                        onBlur={(e) => updateBreed(e.target.value)}
                    >
                        <option />
                        {breeds.map((breed) => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {
                pets.map((pet) => (
                    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
                ))
            }
        </div>
    );
};

export default SearchParams;
