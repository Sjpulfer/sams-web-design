// This example is in src/App.jsx
// Replace with your Public API Key
import { BuilderComponent } from '@builder.io/react';
function App() {

  return (
    <>
       <BuilderComponent
        apiKey="9e964dc98f1747cdacf399fc5708e161"
        model="page"
      >
        <div className="loading">Loading...</div>
      </BuilderComponent>
    </>
  )
}

export default App