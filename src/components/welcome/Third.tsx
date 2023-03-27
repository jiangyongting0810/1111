import { defineComponent } from 'vue';
import s from './WelcomeLayout.module.scss'
import cloud from '../../assets/icons/cloud.svg'
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const Third = () =>(

       <WelcomeLayout>
         {{
           icon:<img src={cloud} />,
           title:<h2>每日提醒<br/>不遗漏每一笔账单</h2>,
           buttons:  
           <>
           <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
           <RouterLink to="/welcome/4" >下一页</RouterLink>
           <RouterLink to="/start" >跳过</RouterLink>
           </>
         }}
       </WelcomeLayout>

)

Third.displayName = 'Third'