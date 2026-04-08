export default function renderAnimalInfo(animal) {
    const infoDiv = document.querySelector(".animal-info");
    const infoDynCont = document.createElement("div");
    infoDynCont.classList.add("info-dyn-cont");
    //=====================================================//
    //Rendera ut bilden på djuret
    //Skriv ut djurets namn och typ av djur. Följ det här formatet: "Gina the Giraffe"
    //=====================================================//
    const imgAndName = document.createElement("div");
    const img = document.createElement("img");
    img.src = `../images/${animal.imageUrl}`;
    img.alt = `Image of ${animal.name} the ${animal.kindOfAnimal}`;
    const name = document.createElement("h3");
    name.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
    imgAndName.appendChild(img);
    imgAndName.appendChild(name);
    infoDynCont.appendChild(imgAndName);
    //=====================================================//
    //Skriv ut djurets jobb och om djuret är anställd just nu eller inte.
    //Följ formatet: "Trash Analyst - Currently (not) employed"
    //Använd template literals
    //=====================================================//
    const titleStatusDiv = document.createElement("div");
    const titleAndStatus = document.createElement("p");
    if (!animal.employmentEndDate) {
        titleAndStatus.textContent = `${animal.job} - Currently employed`;
    }
    else {
        titleAndStatus.textContent = `${animal.job} - Currently not employed`;
    }
    titleStatusDiv.appendChild(titleAndStatus);
    infoDynCont.appendChild(titleStatusDiv);
    //=====================================================//
    //Skriv ut djurets ålder (age). EJ året de är födda. Utan hur gamla de är.
    //Följ formatet:  Age: 9 years old.
    //Använd template literals
    //Bonus om du skriver ut rubriken "Age" med CSS.
    //=====================================================//
    const ageDiv = document.createElement("div");
    const ageNmr = Number(animal.birthYear);
    const year = new Date().getFullYear();
    const age = document.createElement("p");
    age.classList.add("animal-age");
    age.textContent = `${year - ageNmr} years old.`;
    ageDiv.appendChild(age);
    infoDynCont.appendChild(ageDiv);
    //=====================================================//
    //Skriv ut en lista på djurets färdigheter
    //Följ formatet:    Skills:
    //                  Flying
    //                  Eating
    //Bonus om du skriver ut rubriken "Skills" med CSS.
    //=====================================================//
    if (animal.skills) {
        const skillsUl = document.createElement("ul");
        skillsUl.classList.add("animal-skill");
        let skillsArray;
        if (Array.isArray(animal.skills)) {
            skillsArray = animal.skills;
        }
        else {
            skillsArray = [animal.skills];
        }
        skillsArray.forEach((skill) => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsUl.appendChild(li);
        });
        infoDynCont.appendChild(skillsUl);
    }
    infoDiv.replaceChildren(infoDynCont);
}
