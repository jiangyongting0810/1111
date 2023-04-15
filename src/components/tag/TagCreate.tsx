import { defineComponent, PropType, reactive, toRaw } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Button } from '../../shared/Button';
import { EmojiSelect } from '../../shared/EmojiSelect';
import { Icon } from '../../shared/Icon';
import { Rules, validate } from '../../shared/validate';
import s from './Tag.module.scss';
import { TagForm } from './TagForm';
export const TagCreate = defineComponent({
  
  setup: (props, context) => {
    const formDate = reactive({
      name:'',
      sign:''
    })
    const errors = reactive<{[k in keyof typeof formDate]?:string[]}>({})
    const onSubmit = (e:Event) =>{
      const rules:Rules<typeof formDate> =[
        {key:'name',type:"required",message:'必填'},
        {key:'name',type:"pattern",regex:/^.{0,4}$/,message:'只能填1到4个字符'},
        {key:'sign',type:"required",message:'必填'}
      ]
      Object.assign(errors,{
        name:undefined,
        sign:undefined
      })
      Object.assign(errors,validate(formDate,rules))
      console.log(errors);
      
      e.preventDefault()
    }
    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <Icon name="back" onClick={() => { }} />,
        default: () => (
          <TagForm/>
        )
      }}</MainLayout>
    )
  }
})