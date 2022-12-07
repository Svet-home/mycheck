import './App.css';
import image from './smile.jpg';

import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className='app'>
      <div className='container'>
<img src={ image } alt="Happy smile" width="300px" className='smile'/>
</div>
<div className='container'>
<h1>Список продуктов</h1>
</div>
<GroceryList/>
<div className='container'>

</div>
    </div>
  );
}

export default App;
