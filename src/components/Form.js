import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { WrapperForm, FormStyle, WrapperTitle, Title, Span, Input, WrapperButton, ButtonStyle, WrapperInput } from '../styles'
const Form = ({ generateAddress, resetAddress, currentAddress }) => {
    const [amphoe, setAmphoe] = useState('')
    const [district, setDistrict] = useState('')
    const [province, setProvince] = useState('')
    const [zipcode, setZipcode] = useState('')


    const { register, handleSubmit, setValue, defaultValues, reset } = useForm();
    const onSubmit = (data) => {

        alert(JSON.stringify(data));
    }

    const handleAddress = async (e) => {
        await generateAddress(e.target.value)
        if (e.target.value === '') {
            resetAddress()
            reset(defaultValues)
        }
    }
    useEffect(() => {
        if (currentAddress.length !== 0) {
            setAmphoe(currentAddress.amphoe)
            setDistrict(currentAddress.district)
            setProvince(currentAddress.province)
            setZipcode(currentAddress.zipcode)
            
            setValue('amphoe', amphoe)
            setValue('district', district)
            setValue('province', province)
            setValue('zipcode', zipcode)
        }
    }, [amphoe, district, province, zipcode, currentAddress])


    return (
        <WrapperForm>
            <FormStyle onSubmit={handleSubmit(onSubmit)} >
                <WrapperTitle ><Title>แบบฟอร์มที่อยู่ประเทศไทย</Title></WrapperTitle>
                <WrapperInput><Span>ตำบล</Span>
                    <Input  {...register("district")} onChange={(e) => handleAddress(e)} autoComplete='off' />
                </WrapperInput>
                <WrapperInput><Span>เขต/อำเภอ</Span>
                    <Input  {...register("amphoe")} autoComplete='off' />
                </WrapperInput>
                <WrapperInput><Span>จังหวัด</Span>
                    <Input  {...register("province")} autoComplete='off' />
                </WrapperInput>
                <WrapperInput><Span>รหัสไปรษณีย์</Span>
                    <Input  {...register("zipcode")} autoComplete='off' />
                </WrapperInput>
                <WrapperButton>
                    <ButtonStyle type="submit"> บันทึกข้อมูล </ButtonStyle>
                </WrapperButton>
            </FormStyle>
        </WrapperForm>
    )
}

export default Form
