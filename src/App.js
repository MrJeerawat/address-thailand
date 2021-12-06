import React, { useState } from 'react'
import { Address } from './data/Address'
import Form from './components/Form';
import styled from 'styled-components';

const WrapperIems = styled.div`
    flex:1;
    margin:20px;
    margin-left:35%;
    padding:10px;
    border: 1px solid;
    background-color: white;
    display: flex;
    border-radius: 10px;
    justify-content:space-around;
    transition: all .2s ease-in-out;
    :hover{
        transform: scale(1.03);
    }
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
    flex:1;
    background-color:#F9F9F9;
    height: 100vh;
`;
const Item = styled.span`
    width:300px;
    flex-wrap: wrap;
    display: flex;
    margin-right:20px;

`;
const WrapperCard = styled.div`
    position: absolute;
    margin-top:200px;
    min-width:900px;
    cursor: pointer;

`;
const App = () => {
    const [address, setAddress] = useState([]);
    const [currentAddress, setCurrentAddress] = useState([]);
    const generateAddress = (amphoe) => {
        resetAddress()
        if(amphoe === ''){
            resetAddress()
        }
        let counter = 0
        for(let i=0; i<Address.length-1; i++) {
            if(Address[i].district.includes(amphoe) ){
                setAddress((address)=>{return[...address,Address[i]]})
                counter+=1
            }
            if(counter === 5){
                break
            }
        }
    }
    const resetAddress = () =>{
        setAddress([])
    }
    const getAddressItem =()=>{
        setCurrentAddress(address[0])
        resetAddress()
    }
    return (
        <Container>
            <Form generateAddress={generateAddress} resetAddress={resetAddress}  currentAddress={currentAddress}/>
            <WrapperCard onClick={getAddressItem}>
            {address &&
                address.map((item,key)=>{
                    return(
                        <WrapperIems key={item.district+item.zipcode}>
                            <Item>จังหวัด: {item.province}</Item>
                            <Item>อำเภอ/เขต: {item.amphoe}</Item>
                            <Item>ตำบล: {item.district}</Item>
                            <Item>รหัสไปรษณีย์: {item.zipcode}</Item>
                        </WrapperIems>
                    )
                })
            }
            </WrapperCard>
        </Container>
    )
}
export default App