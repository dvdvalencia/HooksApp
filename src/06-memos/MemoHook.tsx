import { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubTitle } from "./ui/MySubTitle";


// const handleMyAPYCall = (myValue: string) => {
//   console.log('llamar a mi APY - ', + myValue );
  
// }


export const MemoHook = () => {

  const [title, setTitle] = useState('Hola')
  const [subTitle, setSubTitle] = useState('Mundo')

  const handleMyAPYCall = useCallback (() => {
    console.log('llamar a mi APY - ', subTitle);
    
  },[subTitle])
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className=" text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />
      <MySubTitle subtitle={subTitle} 
      callMyAPY={handleMyAPYCall } 
      />

      

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={ () => setTitle(  'Hola David,' + new Date().getTime())}>
        Cambiar título
      </button>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => setSubTitle('Espero cada instante estes MEJORANDO')} >
        Cambiar subtítulo
      </button>
    </div>
  );
};
 