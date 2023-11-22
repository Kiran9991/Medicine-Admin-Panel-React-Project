import React, { useState } from 'react';

import MedicineForm from './components/MedicineForm';
import MedicineList from './components/medicines/MedicineList';
import MedicinesProvider from './components/contexts/MedicinesProvider';
import Header from './components/Layouts/Header';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <MedicinesProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <MedicineForm/>
      <MedicineList/>
      </main>
    </MedicinesProvider>
  );
}

export default App;
