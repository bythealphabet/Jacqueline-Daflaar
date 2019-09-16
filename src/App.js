import React from 'react';
import 'bulma/css/bulma.css'
import './App.css';

import Layout from './components/Layout/Layout'
import Content from './container/Content'

function App() {
  return (
    <Layout>
        <Content />
    </Layout>  
  );
}

export default App;
