import { defineComponent } from "vue";
import {RouterView} from"vue-router"
import {  } from "./App.scss";

export const App = defineComponent({
    setup(){
        return ()=> (

        <div>
            <RouterView/>
        </div>
        )
    }
})