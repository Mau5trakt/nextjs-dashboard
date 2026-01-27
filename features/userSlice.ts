import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface UserProfile {
  name: string;
  isOnline: boolean;
  points: number;
  isLoading: boolean; // Para mostrar un spinner al pedirle datos a una api para incrementar el puntaje
}

const initialState: UserProfile = {
  name: "Alex",
  isOnline: false,
  points: 0,
  isLoading: false,
};

//1.  Creando la acción asíncrona
// Primer argumento: nombre de la acción ('user/fetchPoints')
// Segundo argumento: función async que trae todos los datos

export const fetchUserPoints = createAsyncThunk(
  "user/fetchPoints",
  async (ammount: number) => {
    // Simular petición a una api
    await new Promise((resolve) => setTimeout(resolve, 300));

    // retornar el valor obtenido (action.payload)
    return ammount;
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleOnlineStatus: (state) => {
      state.isOnline = !state.isOnline;
    },

    addPoints: (state, action: PayloadAction<number>) => {
      state.points += action.payload;
    },

  },

    // Escuchar a la acción asíncrona con extra reducers
    extraReducers: (builder) =>{
        builder
            //caso A, cuando empieza la petición, PENDING.
            .addCase(fetchUserPoints.pending, (state) =>{
                state.isLoading = true; // se activa el spinner
            })

            //caso B, cuando  termina con éxito, FULFILLED.
            .addCase(fetchUserPoints.fulfilled, (state, action) => {
                state.isLoading = false;
                state.points += action.payload;
            })

            //caso C si falla (REJECTED)

            .addCase(fetchUserPoints.rejected, (state) =>{
                console.error("Hubo un error trayendo los puntos")
            })
        
    }

});

export const { toggleOnlineStatus, addPoints } = userSlice.actions;
export default userSlice.reducer;
