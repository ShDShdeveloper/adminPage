import './form.scss'
import save from '../../Images/saveIcon.svg'
import savebtn from '../../Images/savebtn.svg'
import addIcon from '../../Images/add.svg'
import removeIcon from '../../Images/remove.svg'
import {getDocs} from "../../store/doc";
import {saveApp} from "../../store/doc";
import React, {useEffect, useState} from "react";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import {connect} from "react-redux";
const ReactQuill = require('react-quill');


function Form({saveApp, docs, getDocs}: {saveApp:any, docs: any, getDocs: any}) {
   useEffect(()=>{
       getDocs()
   }, [])
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm();
    const [appNum, setAppnum] = useState([1, 1])
    // const [doc, setDoc] = useState(docs[0])
    useEffect(() => {
        register("name", { required: true, minLength: 10 });
        appNum.map((item, index)=>register(`bodyText${index+1}`, { required: true, minLength: 10 }))
    }, [register]);
    const onSubmit = (data : any) => {
        const app = docs[0].Apps
        const a = [...app, data]
        const doc = docs[0]
        const newDoc = {...doc, Apps: a}
        saveApp(newDoc)

    };
    const modules = {
        toolbar: [
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike',],
            ['link', 'image'],
            [{ 'align': [] }],
        ],
        clipboard: {
            matchVisual: false,
        },
    }
    function remove(){
        let num = [...appNum]
        num.pop()
        setAppnum(num)
    }
    function add(){
        let num = [...appNum]
        num.push(1)
        setAppnum(num)
    }


    function clear(){
            setValue("name", '')
            appNum.map((item, index)=>{
            setValue(`whereBodyText${index+1}`, '')
            setValue(`linkBodyText${index+1}`, '')
            setValue(`appNum${index+1}`, '')
            setValue(`bodyText${index+1}`, '')
        })
    }
    return (
        <div className={"formBox"}>
            <form action="#" id={"app"} onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className={"col-10 col-sm-11 position-relative"}>
                        <p className={"text position-absolute"}>Ҳужжат боши*</p>
                        <ReactQuill
                            placeholder={"Ёзинг....."}
                            modules = {modules}
                            className = {"inputOne"}
                            onChange={(name : string)=>setValue("name", name)}
                        />
                    </div>

                    <div className={"col-1 my-auto"}>
                        <img src={save} alt="save icon"/> <br/>
                    </div>
                </div>
                <hr/>
                {
                    appNum.map((item, index)=><div key={index}>
                        <div className={"row"}>
                            <div className={"col-10 col-sm-11"}>
                                <div className={"my-2 d-flex flex-wrap justify-content-start justify-content-sm-around"}>
                                    <div>
                                        <input className={"form-check-input my-1"} type="radio" value={"Амалдаги банд ўрнига"} {...register(`whereBodyText${index+1}`, {required: true})}/>
                                        <label htmlFor="replace">Амалдаги банд ўрнига</label>
                                    </div>
                                    <div>
                                        <input className={"form-check-input my-1"} id={"delete"} value={"Амалдаги бандни чиқариш"} type="radio" {...register(`whereBodyText${index+1}`, {required: true})}/>
                                        <label htmlFor="delete">Амалдаги бандни чиқариш</label>
                                    </div>
                                    <div>
                                        <input className={"form-check-input my-1"} id={"new"} value={"Янги банд қўшиш"} type="radio" {...register(`whereBodyText${index+1}`, {required: true})}/>
                                        <label htmlFor="new">Янги банд қўшиш</label>
                                    </div>
                                    <div className={"position-relative my-1"}>
                                        <input className={"linkInput"} type="text" {...register(`linkBodyText${index+1}`, {required: true})}/>
                                        <p className={"link"}>Cсылкани киритинг*</p>
                                    </div>
                                </div>
                                <div>
                                    <div className={"appNum"}>
                                        <input {...register(`appNum${index+1}`)} type="text"/>
                                        <p className={"link"}>Банд рақами</p>
                                    </div>
                                    <ReactQuill
                                        placeholder={"Ёзинг....."}
                                        modules = {modules}
                                        className = {"inputOne"}
                                        onChange={(body: string)=>setValue(`bodyText${index+1}`, body)}
                                    />
                                </div>
                            </div>
                            <div className={"col-1 my-auto"}>
                                <img title={"Maydonni o'chirish uchun shu tugmani bosing"} onClick={remove} className={`my-1 ${index>0 ? "d-inline" : "d-none"}`} src={removeIcon} alt="add icon"/> <br/>
                                <img title={"Saqlamoqchi bo'lsangiz ushbu tugmani bosing"} className={"my-1"} src={save} alt="save icon"/> <br/>
                                <img title={"Maydon qo'shish uchun shu tugmani bosing"} onClick={add} className={`my-1 ${index>10 ? "d-none" : "d-inline"}`} src={addIcon} alt="add icon"/> <br/>

                            </div>
                        </div>
                    </div>)
                }
            </form>
            <div className={"text-center"}>
                <p className={"error"}>{(errors.header) && "Маьлумотларни тулик киритинг!!!"}</p>

                <button className={"btn btn-primary rounded-pill px-4 py-2 my-2 mx-2"} type={"submit"} form={"app"}><img className={"me-2 my-auto"} src={savebtn} alt="save icon"/>Сақлаш</button>
                <button className={"btn btn-outline-primary rounded-pill px-4 py-2 mx-2 my-2"} onClick={clear}>Бекор қилиш</button>
            </div>
        </div>
    );
}
export default connect(({doc: {docs}})=>({docs}), {getDocs, saveApp})(Form)
