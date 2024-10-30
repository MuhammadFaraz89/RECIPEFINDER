import { useState } from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";

const recipeData = [
  { id: 1, name: "Spaghetti", category: "Italian" },
  { id: 2, name: "Chicken Curry", category: "Pakistani" },
  { id: 3, name: "Sushi", category: "Japanese" },
  { id: 4, name: "Tacos", category: "Mexican" },
  { id: 5, name: "Biryani", category: "Pakistani" },
  { id: 6, name: "Afghani Pulao", category: "Afghani" },
  { id: 7, name: "Paella", category: "Spanish" },
  { id: 8, name: "Butter Chicken", category: "Indian" },
  { id: 9, name: "Peking Duck", category: "Chinese" },
  { id: 10, name: "Ratatouille", category: "French" },
  { id: 11, name: "Falafel", category: "Middle Eastern" },
  { id: 12, name: "Goulash", category: "Hungarian" },
  { id: 13, name: "Kimchi", category: "Korean" },
  { id: 14, name: "Ceviche", category: "Peruvian" },
  { id: 15, name: "Pasta Primavera", category: "Italian" },
  { id: 16, name: "Moussaka", category: "Greek" },
  { id: 17, name: "Chili Con Carne", category: "Tex-Mex" },
  { id: 18, name: "Samosa", category: "Indian" },
  { id: 19, name: "Baklava", category: "Turkish" },
  { id: 20, name: "Tandoori Chicken", category: "Indian" },
  { id: 21, name: "Pho", category: "Vietnamese" },
  { id: 22, name: "Poutine", category: "Canadian" },
  { id: 23, name: "Currywurst", category: "German" },
  { id: 24, name: "Ramen", category: "Japanese" },
  { id: 25, name: "Chow Mein", category: "Chinese" },
  { id: 26, name: "Borscht", category: "Ukrainian" },
  { id: 27, name: "Sushi Rolls", category: "Japanese" },
  { id: 28, name: "Tiramisu", category: "Italian" },
  { id: 29, name: "Chimichurri Steak", category: "Argentinian" },
  { id: 30, name: "Dolma", category: "Turkish" },
];

function App() {
  const [recipes, setRecipes] = useState(recipeData);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  // two functions one for handle search and seccond one for handle filter
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryFilter = (e) => {
    setFilterCategory(e.target.value);
  };

  // now show the filtered recipes
  // if no search or filter then show all recipes
  // const filteredRecipes = searchTerm === "" && filterCategory === ""? recipes : filteredRecipes
  const filteredRecipes = recipes
    .filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    })
    .filter((recipe) => {
      return filterCategory ? recipe.category === filterCategory : true;
    });

  return (
    <>
      <div className="container">
        <h1>Recipe Finder</h1>
        <SearchBar
          searchTerm={searchTerm}
          onSearch={handleSearch}
          filterCategory={filterCategory}
          onFilterCategory={handleCategoryFilter}
        />
        <RecipeList recipes={filteredRecipes} />
      </div>
    </>
  );
}

export default App;
