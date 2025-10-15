import { BuilderComponent, builder } from '@builder.io/react';

builder.init('065b75e8053a4a039743d2b93d607518');

function App() {
  return (
    <div>
      <h1>If you see this, React is rendering</h1>
      <BuilderComponent model="page" />
      <p>If no Builder content appears, check your model name and published status.</p>
    </div>
  );
}

export default App;
