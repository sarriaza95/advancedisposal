import {useContext} from 'react'
import { StepperContext } from '../../context/StepperContext';
import { gql, useQuery } from "@apollo/client";

const WASTETYPE = gql`
  {
    wasteTypes {
      nodes {
        customFieldsWasteType {
          iconFontawesome
          name
        }
      }
    }
  }
`;

export default function WasteType() {

  const { loading, data } = useQuery(WASTETYPE);
  const store = useContext(StepperContext);

  const NumberStep = () => {
    store.setstepNumber(2);
    store.setbtnActive(true)
  }

  const {userData, setUserData} = useContext(StepperContext);
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUserData({...userData,[name]: value});
  }
  const btnDisable = () =>{
    if(store.WasteTypeSelect && store.stepNumber=== 2){
      console.log("entra")
      store.setbtnActive(false)
    }
    else{
      store.setbtnActive(true)
    }
  }
  console.log(data)
  return (
    <div className='flex flex-col'>
      {NumberStep ()}
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Waste Type
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <select 
          onChange={e => store.setWasteTypeSelect(e.target.value)}
          name="waste"
          placeholder="Select a Waste Type"
          className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          >
            <option value="">Select a WasteType</option>
            {!loading
          ? data?.wasteTypes?.nodes?.map((x, y) => {
              return (
                <option key={y} value={x.customFieldsWasteType.name}>
                  {x.customFieldsWasteType.name}

                </option>
              );
            })
          : null}
          </select>
        </div>
      </div>
      {btnDisable()}
    </div>
  )
}
