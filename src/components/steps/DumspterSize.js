import {useContext} from 'react'
import { gql, useQuery } from "@apollo/client";
import { Store } from '../../App';

const DUMPTERS = gql`
  {
    dumpsterSizes {
      nodes {
        customFieldsdumpsterSize {
          name
          price
          unit
          categorie {
            name
          }
        }
      }
    }
  }
`;

export default function DumspterSize() {

  const { loading, data } = useQuery(DUMPTERS);
  const store = useContext(Store);

  const NumberStep = () => {
    store.setstepNumber(3);
    store.setbtnActive(true)
  }

  const {userData, setUserData} = useContext(Store);
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
          Dumpster Type
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
        <select 
              onChange={e => store.setDumspterSelect(e.target.value)}
              name="waste"
              value={store.DumspterSelect}
              placeholder="Select a Dumpster Size"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              >
                <option>Select a Dumspter Size</option>
                
                { 
                
                !loading
              ? data?.dumpsterSizes?.nodes?.map((x, y) => {
                if (store.WasteTypeSelect === "Trash" || store.WasteTypeSelect === "Roofing" || store.WasteTypeSelect === "Wood" || store.WasteTypeSelect === "Cardboard" || store.WasteTypeSelect === "Metal"){
                  console.log("entra en found")
                  console.log("entra en map")
                    console.log (x.customFieldsdumpsterSize.name)
                    if(x.customFieldsdumpsterSize.name === "10 Yard Trash" || x.customFieldsdumpsterSize.name === "20 Yard Trash" || x.customFieldsdumpsterSize.name === "40 Yard Trash"){
                      console.log("entra en primer if")
                      return (
                        <option key={y} value={x.customFieldsdumpsterSize.name}>
                          {x.customFieldsdumpsterSize.name}
        
                        </option>
                      );
                    }
                }
                if (store.WasteTypeSelect === "Contaminated Concrete" || store.WasteTypeSelect === "Contaminated Dirt" || store.WasteTypeSelect === "Clean Dirt" || store.WasteTypeSelect === "Clean Concrete"){
                  console.log("entra en found2")
                  console.log("entra en map")
                    console.log (x.customFieldsdumpsterSize.name)
                    if(x.customFieldsdumpsterSize.name === "10 Yard Rock"){
                      console.log("entra en primer if2")
                      return (
                        <option key={y} value={x.customFieldsdumpsterSize.name}>
                          {x.customFieldsdumpsterSize.name}
        
                        </option>
                      );
                    }
                }
                  
                })
              : null}
              </select>
        
        </div>
      </div>
      {btnDisable()}
    </div>
  )
}
