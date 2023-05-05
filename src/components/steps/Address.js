import {useState, useContext} from 'react'
import { StepperContext } from '../../context/StepperContext'
import { Store } from '../../App';
import MapboxAutocomplete from "react-mapbox-autocomplete";


const zips = [
  "95811",
  "95814",
  "95815",
  "95816",
  "95817",
  "95818",
  "95819",
  "95820",
  "95821",
  "95822",
  "95823",
  "95824",
  "95825",
  "95826",
  "95827",
  "95828",
  "95829",
  "95830",
  "95831",
  "95832",
  "95833",
  "95834",
  "95835",
  "95836",
  "95837",
  "95838",
  "95841",
  "95842",
  "95843",
  "95864",
  "95608",
  "95605",
  "95610",
  "95615",
  "95621",
  "95624",
  "95626",
  "95628",
  "95630",
  "95632",
  "95638",
  "95639",
  "95641",
  "95648",
  "95652",
  "95655",
  "95660",
  "95661",
  "95662",
  "95670",
  "95673",
  "95677",
  "95678",
  "95683",
  "95690",
  "95691",
  "95693",
  "95742",
  "95747",
  "95746",
  "95757",
  "95758",
  "95762",
  "95765",
];

export default function Address() {
  const store = useContext(StepperContext);
  const [isValidAddress, setIsValidAddress] = useState(true);
  const [isValidZip, setIsValidZip] = useState(true);
  const [success, setSuccess] = useState(false);

  const NumberStep = () => {
    store.setstepNumber(1);
  }

  const isAddress = (value) => {
    const isAddress = value;
    if (isAddress) {
      setIsValidAddress(true);
      return true;
    } else {
      setIsValidAddress(false);
      return false;
    }
  };

  const isValidArea = (value) => {
    const validZip = zips.find((x) => x === value);
    if (validZip) {
      setIsValidZip(true);
      return true;
    } else {
      setIsValidZip(false);
      return false;
    }
  };

  const setAddres = (result, postcode) => {
    if (isAddress(result)) {
      if (isValidArea(postcode)) {
        setSuccess(true);
        store.setAddressSelect(result);
        store.setZipcode(postcode)
        return null;
      } else {
        setSuccess(false);
        store.setAddressSelect("");
        store.setZipcode("")
        return null;
      }
    } else {
      setSuccess(false);
      store.setAddressSelect("");
        store.setZipcode("")
      return null;
    }
  };
  
  const btnDisable = () =>{
    if(store.AddressSelect && store.FullName && store.EmailAddress && store.PhoneNumber && store.stepNumber === 1){
      console.log("entra")
      store.setbtnActive(false)
    }
    else{
      store.setbtnActive(true)
    }
  }

  const {userData, setUserData} = useContext(StepperContext);
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUserData({...userData,[name]: value});
  }
  return (
    <div className='flex flex-col'>
      {NumberStep ()}
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500 w-full">
          Address
        </div>
        <div className="my-2 rounded border border-gray-200 bg-white p-1">
        <MapboxAutocomplete
            publicKey="pk.eyJ1IjoidGZtbWFwIiwiYSI6ImNrczgyam9tMzI4angybm80ajl4Mjlpdm0ifQ.Dii91WO-ju0Ed3HjCI6c7Q"
            onSuggestionSelect={(result, lat, lng, text, postcode) =>
              
              setAddres(result, postcode)
            }
            country="US"
            placeholder="Please Enter your address..."
            defaultValue = "7140 Tokay Avenue, Sacramento, California 95828, United States"
            className="my-2 flex rounded border border-gray-200 bg-white p-1"
          />
          {!isValidAddress ? (
            <div role="alert">
              <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Error
              </div>
              <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>Please enter a valid address.</p>
              </div>
            </div>
          ) : null}
          {!isValidZip ? (
            <div role="alert">
              <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              Error
              </div>
              <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>Unfortunately, your address is not within our service area.</p>
              </div>
            </div>
          ) : null}
          {success ? (
            <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
            <p className="font-bold">Great news!</p>
            <p className="text-sm">Thank you for the information! your address is within our service area!</p>
          </div>
            
          ) : null}
          
          
        </div>
      </div>
        <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Full Name
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            required 
            defaultValue={store.FullName}
            onChange={(e) => store.setFullName(e.target.value)}
            name="name"
            placeholder="Full Name"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Email Address
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            required 
            onChange={(e) => store.setEmailAddress(e.target.value)}
            name="email"
            placeholder="Email Address"
            type="email"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        </div>
        <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Phone Number
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            required 
            onChange={(e) => store.setPhoneNumber(e.target.value)}
            name="phone"
            placeholder="Phone Number"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        </div>
        {btnDisable()}
    </div>
    
  )
}
