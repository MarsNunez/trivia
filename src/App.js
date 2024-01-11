import { useState } from "react";
import GetName from "./components/GetName";
import Questions from "./components/Question";

function App() {
  const [name, setName] = useState("Sin nombre");
  const [showNameComponent, setShowNameComponent] = useState(true);

  return (
    <div>
      <nav className="text-yellow-500 font-semibold text-2xl bg-red-600 text-center py-5">
        Juego de Trivia 🧠
      </nav>
      {showNameComponent && (
        <GetName
          setName={setName}
          setShowNameComponent={setShowNameComponent}
        />
      )}
      {!showNameComponent && <Questions name={name} />}
    </div>
  );
}

export default App;
