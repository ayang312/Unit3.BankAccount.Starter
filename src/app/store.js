import { configureStore } from "@reduxjs/toolkit";
import TransactionsReducer from '../features/transactions/transactionsSlice';

// TODO: Configure the store to use the reducer from the transactions slice.
const store = configureStore({
    reducer: {
        transactions: TransactionsReducer
    },
});

export default store;