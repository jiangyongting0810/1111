import { defineComponent, h, ref, Transition, VNode, watchEffect } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router';
import s from './Welcome.module.scss'
import logo from '../assets/icons/logo.svg'
import { useSwipe } from '../hooks/useSwipe';

console.log(logo);

export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement | null>(null)
    const {direction,swiping} = useSwipe(main)
    watchEffect(()=>{
      console.log(swiping.value,direction.value);
      
    })
     return () => (<div class={s.wrapper}>
        <header>
            <img src={logo}/>
            <h2>山竹记账</h2>
            </header>
        <main class={s.main} ref={main}>
          <RouterView name='main'>
          {({ Component: X, route: R }: { Component: VNode, route: RouteLocationNormalizedLoaded }) =>
            <Transition enterFromClass={s.slide_fade_enter_from} enterActiveClass={s.slide_fade_enter_active}
              leaveToClass={s.slide_fade_leave_to} leaveActiveClass={s.slide_fade_leave_active}>
              {X}
            </Transition>
          }
          </RouterView>
        </main>
        <footer><RouterView name='footer'/></footer>
       </div>
     )
  }
})