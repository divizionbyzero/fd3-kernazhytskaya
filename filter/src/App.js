import React from "react";

import "./styles/styles.scss";
import Filter from "./components/Filter";

function App() {

  const strings = [ 
    {text: 'частнопредпринимательский', code: '1'},
    {text: 'переосвидетельствоваться', code: '2'},
    {text: 'субстанционализироваться', code: '3'},
    {text: 'высокопревосходительство', code: '4'},
    {text: 'делопроизводительница', code: '5'},
    {text: 'монастырский', code: '6'},
    {text: 'клаустрофобия', code: '7'},
    {text: 'бургомистрство', code: '8'}
  ];

  return (
    <div className="App">
      <Filter strings={strings} />
    </div>
  );
}

export default App;
