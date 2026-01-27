"use client";

import { RootState } from "@/store";
import {Box, Grid} from "@mui/material";
import { useSelector, UseSelector } from "react-redux";

export default function Page(){
    const user = useSelector((state: RootState) => state.user);



    return(
        <>
        
        <Box>
            <h1>Aqui el estado del usuario</h1>
        </Box>
        <Grid container spacing={1} sx={{flexGrow: 1}}>
            <h5> Nombre: {user.name} </h5>
            <p> Estado: {user.isOnline ? "🟢 En línea" : "🔴 Desconectado"} </p>
            <p> Puntos: {user.points} </p>

        </Grid>
        </>
    )
}