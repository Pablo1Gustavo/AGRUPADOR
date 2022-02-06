import './App.css';
import GroupCard from './components/GroupCard.js'

function App() {
  return (
    <div className="">

      <div className="w-full grid justify-items-center grid-cols-1 px-12 xl:grid-cols-2 xl:px-60">
        <GroupCard title='Turma 2020.1' description='Descrição' link_code='0101010101010101010101'>
        </GroupCard>
      </div>
      
    </div>
  );
}

export default App;