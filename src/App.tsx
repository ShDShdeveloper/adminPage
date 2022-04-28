import 'bootstrap/dist/css/bootstrap.min.css'
import AdminPage from "./components/AdminPage/AdminPage";
import {BrowserRouter} from 'react-router-dom'
function App(){
    return <BrowserRouter>
        <div className={"container"}>
        <AdminPage/>
    </div>
    </BrowserRouter>
}
export default App