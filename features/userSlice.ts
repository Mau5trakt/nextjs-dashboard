import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProfile {
    name: string;
    isOnline: boolean;
    points: number;
}

const initialState : UserProfile = {
    name: "Alex",
    isOnline: false,
    points : 0
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleOnlineStatus: (state) =>{
            state.isOnline = !state.isOnline;
        },

        addPoints: (state, action: PayloadAction<number>) =>{
            state.points += action.payload

        },
    }
})

export const {toggleOnlineStatus, addPoints } = userSlice.actions;
export default userSlice.reducer;