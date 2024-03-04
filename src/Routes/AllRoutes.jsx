import {Routes,Route} from 'react-router-dom'
import Electronics from '../pages/Electronics'
import Appliances from '../pages/Appliances'
import Gaming from '../pages/Gaming'
import ComputerTablets from '../pages/Computer&Tablets'
import HealthFitness from '../pages/HealthFitness';
import CameraAccessories from '../pages/Cameras&Accessories'
import Login from '../components/login'
import { Home } from '../pages/Home'
import { Finance } from '../pages/Finance'
import { Search } from '../components/search'
import SinglePage from '../pages/singlePageAppliances'
import SinglePageCamera from '../pages/singlePageCamera'
import SinglePageComputer from '../pages/singlePageComputer'
import SinglePageElectronics from '../pages/singlePageElectronics'
import SinglePageHealth from '../pages/singlePageHealth'
import SinglePageGaming from '../pages/singlePageGaming'
import SinglePageAll from '../pages/singlePageAll'
import  Shop  from '../pages/ShopPage'
import { ThanksPage } from '../pages/ThanksPage'
function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/electronics' element={<Electronics/>}/>
                <Route path='/appliances' element={<Appliances/>}/>
                <Route path='/gaming' element={<Gaming/>}/>
                <Route path='/computers&tablets' element={<ComputerTablets/>}/>
                <Route path='/health&fitness' element={<HealthFitness/>}/>
                <Route path='/camera&accessories' element={<CameraAccessories/>}/>
                <Route path='/login' element={<Login/>}/>
               <Route path='/finance' element={<Finance/>} />
               <Route path='/search' element={<Search/>}></Route>
               <Route path='/appliances/:id' element={<SinglePage/>}/>
               <Route path='camera/:id' element={<SinglePageCamera/>}/>
               <Route path='/computer/:id' element={<SinglePageComputer/>}/>
               <Route path='/electronics/:id' element={<SinglePageElectronics/>}/>
               <Route path='/health/:id' element={<SinglePageHealth/>}/>
               <Route path='/gaming/:id' element={<SinglePageGaming/>}/>
               <Route path='/searchItem/:id' element={<SinglePageAll/>}/>
               <Route path='/shopping' element={<Shop/>}/>
               <Route path='/thanks' element={<ThanksPage/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes