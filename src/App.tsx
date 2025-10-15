import { BuilderComponent, builder } from '@builder.io/react';

builder.init('065b75e8053a4a039743d2b93d607518'); // Replace with your actual Builder.io API key

function App() {
  return (
    <div>
      <h1>If you see this, React is rendering</h1>
      <BuilderComponent model="page" />
    </div>
  );
}

export default App;
