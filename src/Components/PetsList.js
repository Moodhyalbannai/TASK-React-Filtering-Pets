import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";
import Selector from "./Selector";
import Searchbar from "./Searchbar";

const PetsList = ({ pets }) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const filteredPetsList = pets.filter((pet) => {
    return (
      pet.name.toLocaleLowerCase().includes(query.toLowerCase()) &&
      (type === "" ||
        pet.type.toLocaleLowerCase().includes(type.toLocaleLowerCase()))
    );
  });

  const petsListAfterMap = filteredPetsList.map((pet) => (
    <PetItem pet={pet} key={pet.id} />
  ));

  // const filterPetsByName = pets.filter((pet)=>{
  //   pet.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  // }).map((pet) => <PetItem pet={pet} key={pet.id} />);

  // const filterPetsByType = pets.filter((pet)=>{
  //   pet.type.toLocaleLowerCase().includes(type.toLocaleLowerCase())
  // }).map((pet) => <PetItem pet={pet} key={pet.id} />);

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <Searchbar query={query} setQuery={setQuery} />
              </div>
              <br />
              Type:
              <Selector type={type} setType={setType} />
              {petsListAfterMap}
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{PetsList}</div>
      </div>
    </section>
  );
};

export default PetsList;
