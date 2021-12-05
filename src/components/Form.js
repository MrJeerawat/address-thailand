import React from 'react'
import { useForm } from "react-hook-form";
import styled from 'styled-components';
const WrapperForm = styled.div`
    display: flex;
    align-items: center;
`;
const FormStyle = styled.form`
    display: block;
    justify-content: center;
    align-items: center;
    padding: 15px;
`;
const Form = ({generateAddress,resetAddress,sendAddress}) => {

    const { register, handleSubmit, } = useForm();
    const onSubmit = (data) =>{

        console.log(data);
    }
//ในคอมโพเน้น Form
//generateAddress อันนี้รับอำเภอไปgenerate จ. 
//sendAddress ให้ log obj ที่generate มา แต่บอก undefine
    const handleAddress = async (e) =>{
        
        await generateAddress(e.target.value)
        await sendAddress()

        if(e.target.value === ''){
            resetAddress()
        }
    }
    return (
        <WrapperForm>
            <FormStyle onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("amphoe")} onChange={(e)=>handleAddress(e)}/>
                    <input  {...register("district")}/>
                    <input  {...register("province")}/>
                    <input  {...register("zipcode")}/>
                    <input type="submit" />
            </FormStyle>
        </WrapperForm>
    )
}

export default Form
