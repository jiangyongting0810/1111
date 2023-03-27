import { defineComponent } from 'vue';
import s from './WelcomeLayout.module.scss'
import clock from '../../assets/icons/clock.svg'
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const Second = () =>(
        <WelcomeLayout>
          {{
            icon:<img  src={clock} />,
            title:<h2>会挣钱<br/>还要会省钱</h2>,
            buttons:  
            <>
            <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
            <RouterLink to="/welcome/3" >下一页</RouterLink>
            <RouterLink to="/start" >跳过</RouterLink>
            </>
          }}
        </WelcomeLayout>
     )
  
     Second.displayName = 'Second'