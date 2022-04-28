import {configureStore} from '@reduxjs/toolkit'
import doc from './doc'
import api from "./api";
export default configureStore({
    reducer : {
        doc : doc
    },
   middleware : [api]
})
