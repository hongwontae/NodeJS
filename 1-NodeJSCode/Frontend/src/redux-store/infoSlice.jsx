import {createSlice} from '@reduxjs/toolkit'

export const infoSlice = createSlice({
    name : 'infoSlice',
    initialState : {email : '', password : ''},
    reducers : {
        dataInput(state, action){
            return {
                email : action.payload.email,
                password : action.payload.password
            }
        }
    }

});

export const infoDataSliceAction = infoSlice.actions;