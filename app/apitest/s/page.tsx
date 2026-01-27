"use client";

import { RootState } from "@/store";
import { Box, Grid, Card, Typography, Button, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchUserPoints } from "@/features/userSlice";
import { addPoints } from "@/features/userSlice";


export default function Page() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();


  return (
    <>
      <Box
        sx={{
          display: "flex",
          /*justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',*/
        }}
        paddingY={4}
      >
        <h1>Aqui el estado del usuario</h1>
      </Box>
      <Grid container spacing={1} sx={{ flexGrow: 1 }}>
        <Card variant="outlined" sx={{ padding: "1rem", width: "300px" }}>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            User Name
          </Typography>
          <Typography variant="body2" fontSize={24}>
            {user.name}
          </Typography>

          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Estado
          </Typography>
          <Typography variant="body2" fontSize={16}>
            {user.isOnline ? "🟢 En línea" : "🔴 Desconectado"}{" "}
          </Typography>

          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Puntaje
          </Typography>
          <Typography variant="body2" fontSize={16}>
            {user.points}
          </Typography>

          <Button
            variant="contained"
            disabled={user.isLoading}
            onClick={ () => dispatch(fetchUserPoints(1)) } // Aqui se diseño como para traerle los puntos (como una especie de saldo, nadaquever si )
            sx={{

            }}
            
          >
            Agregar puntaje
          </Button>
        </Card>
      </Grid>
    </>
  );
}
