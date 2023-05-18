import { computed, defineComponent, PropType } from 'vue';
export const BalanceSymbol = defineComponent({
  props: {
    value: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const difference = computed(()=>{
      if(props.value === 'expenses'){
        return "-"
      }else{
        return '+'
      }
    })
    return () => (
      <span>{difference.value}</span>
    )
  }
})

