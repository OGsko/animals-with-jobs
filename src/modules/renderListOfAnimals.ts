//Titta i index.html och hitta den UL där listan på djur ska skrivas ut.
//Rendera ut en lista över djurens namn på skärmen
//Varje list-item ska ha en event-lyssnare som kallar på "renderAnimalInfo"
//Typa upp funktionens parameter

import { Animal } from "./IAnimal.ts";
import renderAnimalInfo from "./renderAnimalInfo.ts"

export default function renderListOfAnimals(animal: Animal[]) {
    const animalNameList = document.querySelector(".list-of-animals ul") as HTMLElement

    animal.forEach((animalName: Animal) => {
        const li = document.createElement("li")
        li.textContent = animalName.name
        animalNameList.appendChild(li)
        li.addEventListener("click", () => {
            renderAnimalInfo(animalName)    
        })
        
    });
}
