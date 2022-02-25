import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <form>
        <p>How you feel today:</p>
        <div className="radio-wrapper">
          <div>
            <input type="radio" name="feeling" value="Brilliant! I have so much energy" />
            <span>Brilliant! I have so much energy</span>
          </div>
          <div>
            <input type="radio" name="feeling" value="Always can be worse" />
            <span>Always can be worse</span>
          </div>
          <div>
            <input type="radio" name="feeling" value="I am in the middle of the road" />
            <span>I am in the middle of the road</span>
          </div>
          <div>
            <input type="radio" name="feeling" value="Please, end my misery" />
            <span>Please, end my misery</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
