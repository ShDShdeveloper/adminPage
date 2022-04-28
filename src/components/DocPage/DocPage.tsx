import './DocPage.scss'
import Form from "../form/form";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {getDocs} from "../../store/doc";

function DocPage({docs, getDocs} : {docs: any, getDocs: any}){
     useEffect( ()=>{
        getDocs()
    }, [])
    const doc = docs[0]
    return <main className={"main"}>
        <div className="docInfo">
            <div className="row justify-content-around">
                <div className={"col-12"}>
                    <span className={"title"}>Ҳужжат номи: </span>
                    <span className={"text"}>{doc.name}</span>
                </div>
                <div className={"col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"}>
                    <span className={"title"}>Тасдиқланган сана: </span>
                    <span className={"text"}>{doc.approvedDate}</span>
                </div>
                <div className={"col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"}>
                    <span className={"title"}>Рақам берилган сана: </span>
                    <span className={"text"}>{doc.dateOfIssue}</span>
                </div>
                <div className={"col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"}>
                    <span className={"title"}>Кучга кириш санаси: </span>
                    <span className={"text"}>{doc.effectiveDate}</span>
                </div>
                <div className={"col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"}>
                    <span className={"title"}>Кучини йўқотиш санаси: </span>
                    <span className={"text"}> --</span>
                </div>
                <div className={"col-12 col-sm-6 col-md-6"}>
                    <span className={"title"}>Ҳужжат рақами: </span>
                    <span className={"text"}>{doc.documentNumber}</span>
                </div>
                <div className={"col-12 col-sm-6 col-md-6"}>
                    <span className={"title"}>Ҳужжат тури: </span>
                    <span className={"text"}>{doc.documentType}</span>
                </div>
                <div className="col-12">
                    <span className={"title"}>Ҳужжатни таййорлаган тузулма: </span>
                    <span className={"text"}>{doc.organization}</span>
                </div>
                <div className="col-12">
                    <span className={"title"}>Ким томонидан тасдиқланган: </span>
                    <span className={"text"}>{doc.byWhom}</span>
                </div>
            </div>
        </div>
        <h2 className={"text-center my-4 fw-bold"}>4-Илова</h2>
        <hr className={"text-secondary mx-3"}/>
        <Form/>
    </main>
}
 export default connect(({doc: {docs}})=>({docs}), {getDocs})(DocPage)