"use client";
import {useState } from "react";


interface UserProfile{
  name: string;
  isOnline: boolean;
  points: number;
}


export default function Page(){
    // se crea la variable, el setter y el estado inicial useState<type>("algo del tipo declarado")
    const [message, setMessage] = useState<string>("Hola, invitado")

    /* función para hacer toggle del texto
    *  setMessage((prev)) // se lee el estado previo, como solo puede ser:
    *   Hola, invitado | ¡Bienvenido a Next.js!
    *
    *   si prev === "Hola, invitado" prev pasa a ser "¡Bienvenido a Next.js!" sino,
    *   prev pasa a ser "Hola invitado"
    * */

    const [buttonText, setButtonText] = useState<string>("Presiona el botón")

    // crear una función que modifique el setter

    /*const changeText = () => {
      setButtonText("Botón presionado")
    }*/



    const [user, setUser] = useState<UserProfile>({
      name:"Alex",
      isOnline: false,
      points: 0,
    })

  const toggleStatus = () => {

      setUser(prev => ({

        ...prev,
        isOnline: !prev.isOnline
      }));

  }

    const toggleText = () => {
      setMessage((prev) =>
        prev === "Hola, invitado" ? "¡Bienvenido a Next.js!" : "Hola, invitado"
      );
    }



    return(
        <>
            <h1>  Pagina de testing </h1>
            <div className="p-5 text-center">
                <h1 className="text-2xl font-bold mb-4">{message}</h1>
                <button
                    onClick={toggleText} // llama a la función que modifica el setter
                    className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 active:scale-95 transition-all cursor-pointer"
                >
                    Presiona para cambiar el texto

                </button>
            </div>
          <div className="p-5 text-center">
            <h1 className="text-2xl font-bold mb-4">Use state de un solo uso</h1>
            <button
              onClick={() => { setButtonText("Texto modificado") }} // llama a la función que modifica el setter
              className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 active:scale-95 transition-all cursor-pointer"
            >
              {buttonText}

            </button>
          </div>

          <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
            <h3>Usuario: {user.name}</h3>

            <p>Estado: {user.isOnline ? "🟢 En línea" : "🔴 Desconectado"}</p>
            <button
              className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 active:scale-95 transition-all cursor-pointer"
              onClick={toggleStatus}>Cambiar Estado</button>
          </div>

        </>



    )
}