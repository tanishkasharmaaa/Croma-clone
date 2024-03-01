import {Routes,Route} from 'react-router-dom'
import Electronics from '../pages/Electronics'
import Appliances from '../pages/Appliances'
import Gaming from '../pages/Gaming'
import ComputerTablets from '../pages/Computer&Tablets'
import HealthFitness from '../pages/HealthFitness';
import CameraAccessories from '../pages/Cameras&Accessories'
import Location from '../components/location'
function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path='/electronics' element={<Electronics/>}/>
                <Route path='/appliances' element={<Appliances/>}/>
                <Route path='/gaming' element={<Gaming/>}/>
                <Route path='/computers&tablets' element={<ComputerTablets/>}/>
                <Route path='/health&fitness' element={<HealthFitness/>}/>
                <Route path='/camera&accessories' element={<CameraAccessories/>}/>
                <Route path='/location' element={<Location/>}/>
                
            </Routes>
        </div>
    )
}
export default AllRoutes