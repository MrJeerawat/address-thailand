import React, { useState } from 'react'
import { Address } from './data/Address'
import Form from './components/Form';
import {WrapperIems,Container,Item,WrapperCard} from './styles'

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
    const getAddressItem =(item)=>{
        // console.log(e);
        setCurrentAddress(item)
        resetAddress()
    }
    return (
        <Container>
            <Form generateAddress={generateAddress} resetAddress={resetAddress}  currentAddress={currentAddress}/>
            <WrapperCard >
            {address &&
                address.map((item,key)=>{
                    return(
                        <WrapperIems onClick={() => getAddressItem(item)} key={item.district+item.zipcode}>
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