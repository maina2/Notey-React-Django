
import './App.css'
import Heading from './components/Heading'
import Section from './components/Section'
import { Counter } from './components/Counter';

function App() {
  

  return <h1>
    <Heading title='Hello world'/> 
    <Section>This is my paragraph</Section>
    <Counter/>
  </h1>
    
}

export default App
