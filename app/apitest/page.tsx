"use client";
import { useState } from "react";
import { Grid, Box, Modal, Button, Typography, Stack } from "@mui/material";
// import { useDispatch, useSelector
// } from "react-redux";  changed for:
// import { RootState } from "@/store"; isn't neccesary
import { useAppDispatch, useAppSelector } from "@/hooks";

import { toggleOnlineStatus } from "@/features/userSlice";

interface UserProfile {
  name: string;
  isOnline: boolean;
  points: number;
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Page() {
  /* Redux */

  // 1: Leer de redux, obtener el usuario global

  // const ReduxUser = useSelector((state: RootState) => state.user)
  // cambiado para user el hook tipado useAppselector
  const ReduxUser = useAppSelector((state) => state.user);

  // Preparar para enviar a redux
  // const dispatch = useDispatch();
  // cambiado para usar el dispatch tipado
  const dispatch = useAppDispatch();

  //Estado local, lo que no necesitamos globalmente se queda en un use state local

  // aquí iría algún use state que modifique aspectos de la ui

  /* Redux */

  // se crea la variable, el setter y el estado inicial useState<type>("algo del tipo declarado")
  const [message, setMessage] = useState<string>("Hola, invitado");

  /* función para hacer toggle del texto
   *  setMessage((prev)) // se lee el estado previo, como solo puede ser:
   *   Hola, invitado | ¡Bienvenido a Next.js!
   *
   *   si prev === "Hola, invitado" prev pasa a ser "¡Bienvenido a Next.js!" sino,
   *   prev pasa a ser "Hola invitado"
   * */

  const [buttonText, setButtonText] = useState<string>("Presiona el botón");

  // crear una función que modifique el setter

  /*const changeText = () => {
      setButtonText("Botón presionado")
    }*/

  const [user, setUser] = useState<UserProfile>({
    name: "Alex",
    isOnline: false,
    points: 0,
  });

  const toggleStatus = () => {
    setUser((prev) => ({
      ...prev,
      isOnline: !prev.isOnline,
    }));
  };

  const toggleText = () => {
    setMessage((prev) =>
      prev === "Hola, invitado" ? "¡Bienvenido a Next.js!" : "Hola, invitado",
    );
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <h1>Grid de materialUi</h1>
        <Button onClick={handleOpen}> Abrir modal </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </Grid>

      <Stack>
        <Grid container spacing={1} sx={{ flexGrow: 1 }}>
          <h3> Usuario globall </h3>
          <h5> Nombre: {ReduxUser.name} </h5>
          <p>
            {" "}
            Estado:{" "}
            {ReduxUser.isOnline ? "🟢 En línea" : "🔴 Desconectado"}{" "}
          </p>
          <p> Puntos: {ReduxUser.points} </p>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            onClick={() => dispatch(toggleOnlineStatus())}
          >
            Cambiar estado con redux
          </Button>
        </Grid>
      </Stack>
      <h1> Pagina de testing </h1>
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
          onClick={() => {
            setButtonText("Texto modificado");
          }} // llama a la función que modifica el setter
          className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 active:scale-95 transition-all cursor-pointer"
        >
          {buttonText}
        </button>
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h3>Usuario: {user.name}</h3>

        <p>Estado: {user.isOnline ? "🟢 En línea" : "🔴 Desconectado"}</p>
        <button
          className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 active:scale-95 transition-all cursor-pointer"
          onClick={toggleStatus}
        >
          Cambiar Estado
        </button>
      </div>
    </>
  );
}
