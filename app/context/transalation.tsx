'use client';

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface ContextProps {
	selectedLanguage: string;
	setSelectedLanguage: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps>({
    selectedLanguage: '',
    setSelectedLanguage: (): string => '',
})

/* @ts-ignore */
export const GlobalContextProvider = ({children}) => {
	const [selectedLanguage, setSelectedLanguage] = useState('Español');

	return (
		<GlobalContext.Provider value={{selectedLanguage, setSelectedLanguage}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext);