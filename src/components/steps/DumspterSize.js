import {useContext} from 'react'
import { StepperContext } from '../../context/StepperContext';
import { gql, useQuery } from "@apollo/client";

const DUMPTERS = gql`
  {
    dumpsterSizes {
      nodes {
        customFieldsdumpsterSize {
          name
          price
          unit
        }
      }
    }
  }
`;

export default function DumspterSize() {

  const { loading, data } = useQuery(DUMPTERS);
  const store = useContext(StepperContext);

  const NumberStep = () => {
    store.setstepNumber(3);
    store.setbtnActive(true)
  }

  const {userData, setUserData} = useContext(StepperContext);
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUserData({...userData,[name]: value});
  }

  const btnDisable = () =>{
    if(store.DumspterSelect && store.stepNumber=== 3){
      console.log("entra")
      store.setbtnActive(false)
    }
    else{
      store.setbtnActive(true)
    }
  }

  return (
    <div className='flex flex-col'>
      {NumberStep ()}
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Waste Type
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          
        <select 
          onChange={e => store.setDumspterSelect(e.target.value)}
          name="waste"
          placeholder="Select a Dumpster Size"
          className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          >
            <option>Select a Dumspter Size</option>
            {!loading
          ? data?.dumpsterSizes?.nodes?.map((x, y) => {
              return (
                <option key={y} value={x.customFieldsdumpsterSize.name}>
                  {x.customFieldsdumpsterSize.name}

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
