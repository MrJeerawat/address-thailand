import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const WrapperForm = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@200&display=swap');
    font-family: 'Noto Sans Thai', sans-serif;
    display: flex;
    width:600px;
    height:520px;
    border:2px solid #aaa;
    margin-top: 50px;
    border-radius: 30px;
`;
const FormStyle = styled.form`
    display: block;
    align-items: center;
    padding: 15px;
    flex-wrap: wrap;
    flex: 1;
    background-color: white;
    border-radius: 30px;
`;
const Span = styled.span`
    font-size: 20px;
    margin-right: 20px;
    font-weight: bold;
`;
const WrapperInput = styled.div`
  
    display: flex;
    align-items: center;
    flex:1;
    justify-content: space-between;
    :hover {
     animation:  shake 0.8s  ;
    }
    @keyframes shake{
     0%{
       transform: translateX(0)
     }
     25%{
       transform: translateX(10px);
     }
       
     50%{
       transform: translateX(-10px);
     }
     100%{
       transform: translateX(0px);
     }
   }
`;
const WrapperButton = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
`;
const Input = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai');
    font-family: 'Noto Sans Thai', sans-serif;
    font-weight: bold;
    margin: 10px;
    padding: 15px;
    display: block;
    border: none;
    border-bottom: 1px solid grey;
    font-size: 20px;
    width: 60%;
    cursor: pointer;
    
    :focus{
        outline:none;
    }
`;
const Button = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai');
    font-family: 'Noto Sans Thai', sans-serif;
    margin-top:20px;
    letter-spacing: 15px;
    font-size: 20px;
    font-weight: bold;
    border:none;
    width: 60%;
    padding:15px;
    color: white;
    cursor: pointer;
    background: rgb(33,205,205);
    background: linear-gradient(90deg, rgba(33,205,205,1) 0%, rgba(63,164,255,1) 0%, rgba(99,255,169,1) 100%);
    transition: all .2s ease-in-out;
    :hover{
        transform: scale(1.1);
        letter-spacing: 10px;
        border-radius: 10px;
    }
    :active {
        color:grey;
        transform: scale(1.2);
        /* border-radius: 10px; */
    }
`;
const Title = styled.div`
    font-size: 30px;
    font-weight: 1000;

     
`;
const WrapperTitle = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
    letter-spacing: 5px;
    margin-bottom:20px;
`;
const Form = ({ generateAddress, resetAddress, currentAddress }) => {

    const [addressValues, setAddressValues] = useState([{amphoe:'ฟหกฟ',district:'',province:'',zipcode:''}])
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
                    <Button type="submit"> บันทึกข้อมูล </Button>
                </WrapperButton>
            </FormStyle>
        </WrapperForm>
    )
}

export default Form
