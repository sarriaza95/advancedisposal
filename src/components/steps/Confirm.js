import React from 'react'
import {useContext} from 'react'
import { StepperContext } from '../../context/StepperContext';
import { gql, useQuery } from '@apollo/client';

const zips = [
  {"zipcode": "95811", "zone": "1"},
  {"zipcode": "95814", "zone": "1"},
  {"zipcode": "95815", "zone": "1"},
  {"zipcode": "95816", "zone": "1"},
  {"zipcode": "95817", "zone": "1"},
  {"zipcode": "95818", "zone": "1"},
  {"zipcode": "95819", "zone": "1"},
  {"zipcode": "95820", "zone": "1"},
  {"zipcode": "95821", "zone": "1"},
  {"zipcode": "95822", "zone": "1"},
  {"zipcode": "95823", "zone": "1"},
  {"zipcode": "95824", "zone": "1"},
  {"zipcode": "95825", "zone": "1"},
  {"zipcode": "95826", "zone": "1"},
  {"zipcode": "95827", "zone": "1-RC"},
  {"zipcode": "95828", "zone": "1"},
  {"zipcode": "95829", "zone": "1-EG"},
  {"zipcode": "95830", "zone": "1-EG"},
  {"zipcode": "95831", "zone": "1"},
  {"zipcode": "95832", "zone": "1"},
  {"zipcode": "95833", "zone": "1"},
  {"zipcode": "95834", "zone": "3"},
  {"zipcode": "95835", "zone": "3"},
  {"zipcode": "95836", "zone": "3"},
  {"zipcode": "95837", "zone": "4"},
  {"zipcode": "95838", "zone": "1"},
  {"zipcode": "95841", "zone": "1"},
  {"zipcode": "95842", "zone": "1"},
  {"zipcode": "95843", "zone": "1"},
  {"zipcode": "95864", "zone": "1"},
  {"zipcode": "95608", "zone": "1"},
  {"zipcode": "95605", "zone": "1"},
  {"zipcode": "95610", "zone": "CH"},
  {"zipcode": "95615", "zone": "NS"},
  {"zipcode": "95621", "zone": "CH"},
  {"zipcode": "95624", "zone": "1-EG"},
  {"zipcode": "95626", "zone": "1"},
  {"zipcode": "95628", "zone": "1"},
  {"zipcode": "95630", "zone": "NS"},
  {"zipcode": "95632", "zone": "4"},
  {"zipcode": "95638", "zone": "4"},
  {"zipcode": "95639", "zone": "1"},
  {"zipcode": "95641", "zone": "4"},
  {"zipcode": "95648", "zone": "L"},
  {"zipcode": "95652", "zone": "1"},
  {"zipcode": "95655", "zone": "1-RC"},
  {"zipcode": "95660", "zone": "1"},
  {"zipcode": "95661", "zone": "R"},
  {"zipcode": "95662", "zone": "1"},
  {"zipcode": "95670", "zone": "1-RC"},
  {"zipcode": "95673", "zone": "1"},
  {"zipcode": "95677", "zone": "NS"},
  {"zipcode": "95678", "zone": "R"},
  {"zipcode": "95683", "zone": "3"},
  {"zipcode": "95690", "zone": "4"},
  {"zipcode": "95691", "zone": "1"},
  {"zipcode": "95693", "zone": "1"},
  {"zipcode": "95741", "zone": "RC"},
  {"zipcode": "95742", "zone": "RC"},
  {"zipcode": "95747", "zone": "R"},
  {"zipcode": "95746", "zone": "NS"},
  {"zipcode": "95757", "zone": "1-EG"},
  {"zipcode": "95758", "zone": "1-EG"},
  {"zipcode": "95759", "zone": "1-EG"},
  {"zipcode": "95762", "zone": "NS"},
  {"zipcode": "95765", "zone": "NS"},
  {"zipcode": "95799", "zone": "1"},
];
const ZONEPRICES = gql `
{
  zonesPrices {
    nodes {
      zonePrice (filters:{zone:{eq:$zone}}){
        idZone
        dumpsterSize {
          price10Yards {
            description
            fieldGroupName
            size
            types {
              fieldGroupName
              priceCardboard
              priceMetal
              priceRoofing
              priceTrash
              priceWood
            }
          }
          price10Rock {
            types {
              fieldGroupName
              priceCleanConcrete
              priceCleanDirt
              priceContaminatedConcrete
              priceContaminatedDirt
            }
          }
          price20Yards {
            types {
              fieldGroupName
              priceCardboard
              priceMetal
              priceRoofing
              priceTrash
              priceWood
            }
          }
          price40Yards {
            types {
              fieldGroupName
              priceCardboard
              priceMetal
              priceRoofing
              priceTrash
              priceWood
            }
          }
        }
        
      }
    }
  }
}

`

export default function Confirm() {
  const store = useContext(StepperContext);
  const {loading, data, error} = useQuery(ZONEPRICES,{
    variables: {zone: store.zoneSelect}});
  const send_info = (zipcode) => {
    console.log(data)
    console.log(zips)
    const found = zips.find(obj => {
      return obj.zipcode === zipcode;
      
    });
    store.setzoneSelect(found.zone)
    
  }
  
  
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Congratulations!
        </div>
        <div className="text-lg font-semibold text-gray-500">
          Your Request has been created.
        </div>
        <div className='flex flex-col'>
        <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Address Selected
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1"> 
        <input
          required 
          defaultValue={store.AddressSelect}
          disabled ="true"
          className="w-full appearance-none p-1 px-2 text-gray-800 outline-none opacity-50"
        />
        </div>
        <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Full Name
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1"> 
        <input
          required 
          defaultValue={store.FullName}
          disabled ="true"
          className="w-full appearance-none p-1 px-2 text-gray-800 outline-none opacity-50"
        />
        </div>
      </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Email Address
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1"> 
        <input
          required 
          defaultValue={store.EmailAddress}
          disabled ="true"
          className="w-full appearance-none p-1 px-2 text-gray-800 outline-none opacity-50"
        />
          
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Dumspter Size
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1"> 
        <input
          required 
          defaultValue={store.DumspterSelect}
          disabled ="true"
          className="w-full appearance-none p-1 px-2 text-gray-800 outline-none opacity-50"
        />
          
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Waste Type
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1"> 
        <input
          required 
          defaultValue={store.WasteTypeSelect}
          disabled ="true"
          className="w-full appearance-none p-1 px-2 text-gray-800 outline-none opacity-50"
        />
          
        </div>
      </div>
    </div>
        <a className="mt-10">
          <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100"
          onClick={()=>send_info(store.ZipCode)}
          >
            Confirm
          </button>
        </a>
      </div>
    </div>
  )
}
