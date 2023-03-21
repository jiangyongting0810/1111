import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import s from './Welcome.module.scss'
import logo from '../assets/icons/logo.svg'

console.log(logo);

export const Welcome = defineComponent({
  setup: (props, context) => {
     return () => (<div class={s.wrapper}>
        <header>
            <img src={logo}/>logo</header>
            <h1>山竹记账</h1>
        <main><RouterView/></main>
        <footer>buttons</footer>
       </div>
     )
  }
})