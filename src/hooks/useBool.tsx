import { ref } from "vue"

export const useBool = (initialvalue:boolean) =>{
  const bool = ref(initialvalue)
  return{
    ref:bool,
    toogle:()=> bool.value = !bool.value,
    on:()=>bool.value = true,
    off:()=>bool.value = false,
  }
}