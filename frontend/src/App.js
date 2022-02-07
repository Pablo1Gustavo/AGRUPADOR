import './App.css';
import GroupCard from './components/GroupCard'
import FormModal from './components/FormModal'
import AddGroupButton from './components/AddGroupButton';
import Header from './components/Header';

import {useState, useEffect} from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Header/>
      
      <div>
        <div className="text-center text-3xl mt-20">
          Grupos encontrados
        </div>

        <div className="flex justify-center mt-10">
          <AddGroupButton onClick={() => {setOpenModal(true)}}/> {
            openModal &&
              <FormModal onClick={() => {setOpenModal(false)}}/>
          }
        </div>
      </div>

      <div className="w-full mt-10 grid justify-items-center grid-cols-1 px-12 xl:grid-cols-2 xl:px-60">
        <GroupCard title='Turma 2020.1' description='Descrição' link_code='0101010101010101010101'/>
        <GroupCard title='Medicina' description='Descrição' link_code='0101010101010101010101'/>
        <GroupCard title='Engenharia Civil' description='Descrição' link_code='0101010101010101010101'/>
        <GroupCard title='Sistemas 2021.1' description='Descrição' link_code='0101010101010101010101'/>
      </div>
    </div>
  );
}

export default App;