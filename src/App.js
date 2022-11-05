import Bright1 from "./Images/Bright1.jpg";
import Bright2 from "./Images/Bright2.jpeg";
import Tomb1 from "./Images/Tomb1.png";
import Cards from "./Components/Cards";

function App() {
  return (
    <div className="App">
      <Cards movie="Bright" yearAndAuthor="2017,David Ayer" images={Bright1} />
      <Cards
        movie="125min"
        yearAndAuthor="2018,Roar Uthaug"
        images={Bright2}
      />
      <Cards movie="Tomb Raider" yearAndAuthor="2018,Roar Uthaug" images={Tomb1} />
    </div>
  );
}

export default App;
