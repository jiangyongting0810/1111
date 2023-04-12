import { defineComponent, reactive } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Button } from '../../shared/Button';
import { Icon } from '../../shared/Icon';
import { Rules, validata } from '../../shared/validata';
import { TagForm } from './TagForm';
import s from './Tag.module.scss';

export const TagEdit = defineComponent({
  
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
      Object.assign(errors,validata(formDate,rules))
      console.log(errors);
      
      e.preventDefault()
    }
    return () => (
      <MainLayout>{{
        title: () => '修改标签',
        icon: () => <Icon name="back" onClick={() => { }} />,
        default: () => <>
          <TagForm/>
          <div class={s.actions}>
            <Button level='danger' class={s.removeTags} onClick={()=>{}}>删除标签</Button>
            <Button level='danger' class={s.removeTagsAndItems} onClick={()=>{}}>删除标签和记账</Button>
          </div>
        </>
      }}</MainLayout>
    )
  }
})