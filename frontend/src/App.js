import Header from './components/Header';
import FormModal from './components/FormModal';
import AddGroupButton from './components/AddGroupButton';
import GroupCard from './components/GroupCard';
import Presentation from './components/Presentation';
import LocationErrorWarining from './components/LocationErrorWarning';

import {useState} from 'react';
import useGeolocation from "./hooks/useGeolocation";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const location = useGeolocation();
  const groups = [''];

  return (
    <div>
      <Header/>

      <Presentation/>

      {
      location.loaded ?
        <div>
          <div className="mt-20 text-3xl text-center">
            {groups.length > 0 ? 'Grupos encontrados' : 'Não foi encontrado nenhum grupo na sua região :('}
          </div>

          <div className="flex justify-center mt-10">
            <AddGroupButton onClick={() => {setOpenModal(true)}}/> {
              openModal &&
                <FormModal onClick={() => {setOpenModal(false)}}/>
            }
          </div>
        </div>
      :
        <LocationErrorWarining/>
      }
      
      {
      groups.length > 0 &&
        <div className="w-full px-12 lg:px-42 py-10 xl:px-36 grid justify-items-center grid-cols-1 lg:grid-cols-2">
          <GroupCard title='Turma 2020.1' description='Descrição' link_code='0101010101010101010101'/>
          <GroupCard title='Medicina' description='Descrição' link_code='0101010101010101010101'/>
          <GroupCard title='Engenharia Civil' description='Descrição' link_code='0101010101010101010101'/>
          <GroupCard title='Sistemas 2021.1' description='Descrição' link_code='0101010101010101010101'/>
        </div>
      }
    </div>
  );
}

export default App;