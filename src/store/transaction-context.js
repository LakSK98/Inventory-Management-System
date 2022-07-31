import { createContext, useState } from "react";

const TransactionContext = createContext({
    data:[],
    addData:(transaction)=>{}
});

export const TransactionContextProvider = (props)=>{

    const [ transactionData, setTransactionData ] = useState([]);

    const addTransactionData = (transaction)=>{
        setTransactionData(transaction);
    }

    const context = {
        data:transactionData,
        addData:addTransactionData
    };

    return <TransactionContext.Provider value={context}>
        {props.children}
    </TransactionContext.Provider>
}

export default TransactionContext;