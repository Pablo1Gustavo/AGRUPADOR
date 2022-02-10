import Header from './components/Header';
import FormModal from './components/FormModal';
import AddGroupButton from './components/AddGroupButton';
import GroupCard from './components/GroupCard';
import Presentation from './components/Presentation';
import LocationErrorWarining from './components/LocationErrorWarning';

import {useEffect, useState} from 'react';
import api from './services/api';
import useGeolocation from "./hooks/useGeolocation";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [groups, setGroups] = useState([]);
  const location = useGeolocation();

  useEffect(() => {
    const lat = location.coordinates.latitude;
    const long = location.coordinates.longitude;

    api.get('/groups/radius/1/'+lat+'/'+long).then(response => {
      setGroups(response.data);
    });
  }, [location.loaded]);

  return (
    <div>
      <Header/>
      
      <Presentation/>

      {
      location.loaded ?
        <div className='mt-20 mb-10'>
          <div className="text-3xl text-center">
            {groups.length > 0 ? 'Grupos encontrados' : 'Não foi encontrado nenhum grupo na sua região :('}
          </div>

          <div className="flex justify-center mt-10">
            <AddGroupButton onClick={() => {setOpenModal(true)}}/> {
              openModal &&
                <FormModal close={() => {setOpenModal(false)}} location={location.coordinates}/>
            }
          </div>
        </div>
      :
        <LocationErrorWarining/>
      }
      
      {
      groups.length > 0 &&
        <div className="w-full px-12 lg:px-42 pb-10 xl:px-36 grid justify-items-center grid-cols-1 lg:grid-cols-2">
          {
            groups.map(group => (
              <GroupCard 
                key={group.id} 
                title={group.name} 
                description={group.description} 
                link_code={group.link_code}
              />
            ))
          }
        </div>
      }
    </div>
  );
}

export default App;