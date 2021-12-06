import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import {WrapperForm,FormStyle,WrapperTitle,Title,Span,Input,WrapperButton,ButtonStyle,WrapperInput} from '../styles'
const Form = ({ generateAddress, resetAddress, currentAddress }) => {

    const [addressValues, setAddressValues] = useState([{amphoe:'',district:'',province:'',zipcode:''}])
    const { register, handleSubmit, } = useForm();
    const onSubmit = (data) => {
        alert(
            'ตำบล :' + data.amphoe + '\n' +
            'อำเภอ : ' + data.district + '\n' +
            'จังหวัด :' + data.province + '\n' +
            'รหัสไปรษณีย์ :' + data.zipcode + '\n'
        )
        console.log(data);
    }
    const handleAddress = async (e) => {
        await generateAddress(e.target.value)
        if (e.target.value === '') {
            resetAddress()
        }
    }
    useEffect(()=>{
        if(currentAddress){
            setAddressValues(currentAddress)
        }
    },[currentAddress])
    return (
        <WrapperForm>
            <FormStyle onSubmit={handleSubmit(onSubmit)} >
                <WrapperTitle ><Title>แบบฟอร์มที่อยู่ประเทศไทย</Title></WrapperTitle>
                <WrapperInput><Span>ตำบล</Span>
                    <Input  {...register("amphoe")} value={addressValues.amphoe} onChange={(e) => handleAddress(e)} autoComplete='new' />
                </WrapperInput>
                <WrapperInput><Span>เขต/อำเภอ</Span>
                    <Input  {...register("district")} value={addressValues.district} autoComplete='new' />
                </WrapperInput>
                <WrapperInput><Span>จังหวัด</Span>
                    <Input  {...register("province")} value={addressValues.province} autoComplete='new' />
                </WrapperInput>
                <WrapperInput><Span>รหัสไปรษณีย์</Span>
                    <Input  {...register("zipcode")} value={addressValues.zipcode} autoComplete='new' />
                </WrapperInput>
                <WrapperButton>
                    <ButtonStyle type="submit"> บันทึกข้อมูล </ButtonStyle>
                </WrapperButton>
            </FormStyle>
        </WrapperForm>
    )
}

export default Form
