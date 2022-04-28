import './AdminPage.scss'
import logo from '../../Images/logo.svg'
import searchIcon from '../../Images/searchIcon.svg'
import {Link, Route, Routes} from 'react-router-dom'
import DocPage from "../DocPage/DocPage";
function AdminPage(){
    return <div className={"adminPage"}>
        <header className={"header"}>
           <div className="row border-bottom">
               <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-8">
                   <div className={"d-flex justify-content-center justify-content-sm-center justify-content-md-start"}>
                       <img className={"my-auto"} src={logo} alt={"tax logo"}/>
                       <h6 className={"my-auto ms-2"}>ИЧКИ ИДОРАВИЙ ҲУЖЖАТЛАР</h6>
                   </div>
               </div>
               <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4  my-auto">
                   <div className="row">
                       <div className="col-12 col-sm-6">
                           <select className={"form-select mx-auto"}>
                               <option value="uz">O'zbekcha</option>
                               <option value="en">English</option>
                               <option value="ru">Русский</option>
                           </select>
                       </div>
                       <div className="col-12 col-sm-6 text-center">
                           <p>Фамилия Имя Отчество</p>
                           <span>ПИНФЛ 201119113</span>
                       </div>
                   </div>
               </div>
           </div>
           <div className="col-9 offset-2 text-center">
               <h3>Ҳужжат: 210 - сонли буйруқ 10.01.2019 йилда кабул килинган
                   Қушимча илова киритиш</h3>
               <div>
                  <Link to={"/"}> <button className={"d-block d-sm-block d-md-inline mx-auto mx-sm-auto mx-md-3 my-3"}>Бош саҳифа</button></Link>
                   <Link to={"/hujjatlar"}><button  className={"d-block d-sm-block d-md-inline  mx-auto mx-sm-auto mx-md-3 my-3"}>Ҳужжатлар</button></Link>
                   <Link to={"/"}><button  className={"d-block d-sm-block d-md-inline  mx-auto mx-sm-auto mx-md-3 my-3"}>Ҳисобот</button></Link>
               </div>
               <div>
                   <span className={"text-dark fw-bolder"}>Бош саҳифа — Ҳужжатлар  — Ҳужжат: 210 - сонли буйруқ 10.01.2019 йилда кабул килинган — </span><a href={"#"}>Қушимча илова киритиш</a>
               </div>
           </div>
        </header>
       <main>
           <Routes>
               <Route path={"/hujjatlar"} element={<DocPage/>}/>
           </Routes>
       </main>
        <footer>
            <div className={"row mb-4"}>
                <div className="col-12 col-sm-4 col-md-4 col-lg-6 col-xl-7 my-auto">
                    <Link className={"footerMenu"} to={"/"}>Бош сахифа</Link>
                    <Link className={"footerMenu"} to={"/"}>Дастур ҳақида</Link>
                    <Link className={"footerMenu"} to={"/"}>Ёрдам</Link>
                </div>
                <div className="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-5 my-auto">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search"/>
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <img src={searchIcon} alt="search icon"/>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <p className={"col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4"}> © 2022 Ўзбекистон Республикаси Давлат солиқ қўмитаси
                "Ички идоравий ҳужжатлар" ахборот тизими</p>
        </footer>
    </div>
}
export default AdminPage