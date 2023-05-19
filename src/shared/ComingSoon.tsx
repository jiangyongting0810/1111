import { defineComponent, PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Button } from './Button'
import { Center } from './Center'
import s from './ComingSoon.module.scss'
import { Icon } from './Icon'
export const ComingSoon = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const router = useRouter()
    const onclick = ()=>{
      router.back()
    }
    return () => (
      <div>
        <Center class={s.pig_wrapper}>
          <Icon name="pig" class={s.pig} />
        </Center>
        <p class={s.text}>敬请期待</p>
        <p class={s.link} onClick={onclick}>
          <Button onClick={onclick}>
          返回
          </Button>
        </p>
      </div>
    )
  }
})