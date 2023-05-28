import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    orderBy,
    query,
    setDoc,
    where,
} from "firebase/firestore";

import { firestore } from "../../firebase.config";


const initialState = {
    products: [],
    status: 'idle',
    error: null
}

export const fetchFoodItems = createAsyncThunk('products/fetchFoodItems', async () => {
    const items = await getDocs(
        query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );
    if (!items) {
        throw new Error('Something went wrong')
    } else {
      return items.docs.map((doc) => doc.data());
    }
})

export const saveItem = createAsyncThunk('products/saveItem', async (data) => {
    await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
        merge: true,
    });
    return data
})


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFoodItems.pending]: (state) => ({
            ...state,
            status: 'loading'
        }),
        [fetchFoodItems.fulfilled]: (state, action) => {
            const items = action.payload
            return {...state, status: 'succeeded', products: items}
        },
        [fetchFoodItems.rejected]: (state, action) => ({
            ...state,
            status: 'failed',
        }),
        [saveItem.pending]: (state) => ({
            ...state,
            status: 'loading'
        }),
        [saveItem.fulfilled]: (state, action) => {
            const item = action.payload
            return {...state, status: 'succeeded', products: [...state.products, item]}
        }
    }
})

export default productSlice.reducer