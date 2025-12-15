// src/App.jsx
import HomePage from './pages/HomePage';
import Layout from './components/Layout';

function App() {
  return (
    // Wrap the entire application with a main layout component
    <Layout>
      <HomePage />
       
    </Layout>
     
  );
}

export default App;