import React, { useState } from 'react'
import { Address } from './data/Address'
import Form from './components/Form';
const App = () => {
    //App
    const [address, setAddress] = useState([]);

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
            if(counter === 3){
                break
            }
        }
    }
    const resetAddress = () =>{
        setAddress([])
    }
    const sendAddress =  () =>{
        if(address!==null){
            console.log('this',address[0]);
        }else{
            console.log('no address');
        }
    }

    return (
        <div>
            <Form generateAddress={generateAddress} resetAddress={resetAddress} sendAddress={sendAddress}/>
            {address ?
                address.map((item,key)=>{
                    return(
                        <button key={item.district+item.zipcode} style={{width:'50%',margin:'20px',padding:'10px'}}>
                            <p style={{marginRight:'20px'}}>จังหวัด :{item.province}</p>
                            <p style={{marginRight:'20px'}}>อำเภอ/เขต :{item.amphoe}</p>
                            <p style={{marginRight:'20px'}}>ตำบล :{item.district}</p>
                            <p>รหัสไปรษนี :{item.zipcode}</p>
                        </button>
                    )
                })
                :
                'ไม่ทราบที่อยู่'
            }
        </div>
    )
}
export default App