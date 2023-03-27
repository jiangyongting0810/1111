import { defineComponent } from 'vue';
import s from './WelcomeLayout.module.scss'
import pig from '../../assets/icons/pig.svg'
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const First = () =>{
    const slots = {
      icon:() =><img  src={pig} />,
      title:() =><h2>每日提醒<br/>不遗漏每一笔账单</h2>,
      buttons:() =>
      <>
      <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
      <RouterLink to="/welcome/2" >下一页</RouterLink>
      <RouterLink to="/start" >跳过</RouterLink>
      </>
    }
     return <WelcomeLayout v-slots={slots}></WelcomeLayout>
} 
  
First.displayName = 'First'