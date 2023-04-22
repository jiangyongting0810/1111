import axios from 'axios';
import { defineComponent, PropType, reactive } from 'vue';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../shared/Button';
import { Form, FormItem } from '../shared/Form';
import { Icon } from '../shared/Icon';
import { validate } from '../shared/validate';
import s from './SignInPage.module.scss';
export const SignInPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const formData = reactive({
      email:'',
      code:''
    })
    const errors = reactive({
      email:[],
      code:[]
    })
    const onClickSendValidationCode = async ()=>{
      console.log('11111')
      const response = await axios.post('/api/v1/validation_codes', { email: formData.email })      
      console.log(response);
    }
    const onSubmit = (e:Event)=>{
      // console.log('submit')
      e.preventDefault()
      Object.assign(errors,{
        email:[],code:[]
      })
      Object.assign(errors,validate(formData,[
        { key: 'email', type: 'required', message: '必填' },
        { key: 'email', type: 'pattern', regex: /.+@.+/, message: '必须是邮箱地址' },
        { key: 'code', type: 'required', message: '必填' },
      ]))
      // console.log(formData)
      // console.log(errors)
    }
    return () => (
      <MainLayout>{
        {
          title:()=>'登录',
          icon:()=><Icon name='back'/>,
          default:()=>(
          <div class={s.wrapper}>
            <div class={s.logo}>
              <Icon name='logo' class={s.icon}/>
              <h1 class={s.appName}>山竹记账</h1>
            </div>
            <Form onSubmit={onSubmit}>
              <FormItem 
                label='邮箱地址' 
                placeholder='请输入邮箱然后点记发送验证码' 
                type='text' 
                v-model={formData.email} 
                error={errors.email?.[0]}/>
              <FormItem label='验证码' 
                placeholder='请输入六位验证码'  
                type='validationCode' 
                onClick={onClickSendValidationCode}
                v-model={formData.code} 
                error={errors.code?.[0]}/>
              <FormItem style={{paddingTop:"96px"}}>
                <Button>登录</Button>
              </FormItem>
            </Form>
          </div>
          )
        }
      }
      </MainLayout>
    )
  }
})