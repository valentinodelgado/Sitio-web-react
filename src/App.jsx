import { useState } from 'react'

import ButtonComponent from './components/ButtonComponent/ButtonComponent'
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import ItemListContainerComponent from './components/ItemListContainerComponent/ItemListContainerComponent'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBarComponent />
      <ItemListContainerComponent greeting="Hello World!" />
    </div>
    );
}

export default App;
