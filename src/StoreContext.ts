import React, {ReactNode} from "react";
import {ReduxStoreType} from "./redux/redux-store";

export const StoreContext = React.createContext({} as ReduxStoreType)

export type ProviderType = {
    store:ReduxStoreType,
    children:ReactNode
}