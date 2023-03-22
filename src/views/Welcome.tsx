import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import s from './Welcome.module.scss'
import logo from '../assets/icons/logo.svg'

console.log(logo);

export const Welcome = defineComponent({
  setup: (props, context) => {
     return () => (<div class={s.wrapper}>
        <header>
            <img src={logo}/>
            <h2>山竹记账</h2>
            </header>
        <main class={s.main}><RouterView/></main>
        <footer></footer>
       </div>
     )
  }
})