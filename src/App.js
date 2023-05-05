import { createContext, useState } from 'react';
import { StepperContext } from './context/StepperContext';
import './App.css'
import Stepper from './components/Stepper';
import StepperControl from './components/StepperControl';

import Address from './components/steps/Address';
import Confirm from './components/steps/Confirm';
import DumspterSize from './components/steps/DumspterSize';
import WasteType from './components/steps/WasteType';

export const Store = createContext(null);

function App () {

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [AddressSelect, setAddressSelect] = useState("");
  const [ZipCode, setZipcode] = useState("");
  const [FullName, setFullName] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [finalData, serFinalData] =useState([]);
  const [WasteTypeDatas, setWasteTypeDatas] = useState("");
  const [WasteTypeSelect, setWasteTypeSelect] = useState("");
  const [DumspterSelect, setDumspterSelect] = useState("");
  const [btnActive, setbtnActive] = useState(true);
  const [stepNumber, setstepNumber] = useState(1);
  const steps =[
    "Address",
    "Waste Type",
    "Dumpster Size",
    "Confirm"
  ];


  const displayStep = (step)=>{
    switch(step){
      case 1:
        return <Address/>
      case 2:
        return <WasteType/>
      case 3:
        return <DumspterSize/>
      case 4:
        return <Confirm/>
      default:
    }
  }
  const handleClick = (direction)=>{

    let newStep = currentStep;
    direction === "next" ? newStep ++ : newStep --;
    //
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }
  console.log(ZipCode)
  console.log("antes del disable")
  console.log (WasteTypeSelect)
  /*const btnDisable = () =>{
    if(AddressSelect && FullName && EmailAddress && PhoneNumber){
      console.log("entra")
      return false;
    }
    else{
      return true;
    }
  }*/
  return (
    <div className='App shadow-xl rounded-2xl pb-2 bg-white'>
      {/*Stepper */}
      <div className='container horizontal mt-5'>
      <Stepper
      steps ={steps}
      currentStep={currentStep}
      />
      </div>
      {/*Display Components */}
      <div className='my-10 p-10'>
        <StepperContext.Provider value={{
          userData,
          setUserData,
          AddressSelect,
          setAddressSelect,
          setFullName,
          FullName,
          setEmailAddress,
          EmailAddress,
          setPhoneNumber,
          PhoneNumber,
          ZipCode,
          setZipcode,
          finalData,
          serFinalData,
          WasteTypeDatas,
          setWasteTypeDatas,
          WasteTypeSelect,
          setWasteTypeSelect,
          DumspterSelect,
          setDumspterSelect,
          btnActive,
          setbtnActive,
          stepNumber,
          setstepNumber
        }}>
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>
      {/*Navigation Controls */}
      {currentStep != steps.length && 
        <StepperControl
        handleClick = {handleClick}
        currentStep = {currentStep}
        disable = {btnActive}
        steps = {steps}
        />
      }
    </div>
    
    
  )
}

export default App
