import { computed, defineComponent, PropType, ref } from 'vue';
import s from './Button.module.scss'

export const Button = defineComponent({
  props:{
    onClick:{
      type:Function as PropType<(e:MouseEvent) => void>
    },
    level:{
      type:String as PropType<'important'| "normal" | "danger">,
      default:"important"
    },
    type:{
      type:String as PropType<'submit' | 'button'>,
      default:'button'
    },
    disabled:{
      type:Boolean,
      default:false
    },
    autoSelfDisabled:{
      type:Boolean,
      default:false
    }
  },
  setup: (props, context) => {
    const selfDisable = ref(false)
    const _disabled = computed(()=>{
      if(props.autoSelfDisabled === false){
        return props.disabled
      }
      if(selfDisable.value){
        return true
      }else{
        return props.disabled
      }
    })
    const onClick=(e:MouseEvent)=>{
      props.onClick?.(e)
      selfDisable.value = true
      setTimeout(()=>{
        selfDisable.value = false
      },1000)
    }
     return () => (
       <button disabled={_disabled.value} type={props.type} class={[s.button,s[props.level]]} onClick={onClick}>
          {context.slots.default?.()}
       </button>
     )
  }
})