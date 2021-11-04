import {useEffect, useState} from "react";
import LocalStorageService from "../services/local-storage";

export function useLocalStorage(key:string, initialValue:any) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState<any>(null);

    useEffect(() => {
        _syncData()
    },[])

    const _syncData = async () => {
        try {
            const localData = await LocalStorageService.GetData(key)
            setStoredValue(localData)
        } catch (error) {
            setStoredValue(initialValue)
            console.log("syn local data error...", error)
        }
    }

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = async (value:any) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);

            // Save to local storage
            if(typeof valueToStore === "string"){
                await LocalStorageService.StoreData(key, valueToStore);
            } else if(typeof valueToStore === "number"){
                await LocalStorageService.StoreData(key, valueToStore.toString());
            }else {
                await LocalStorageService.StoreData(key, JSON.stringify(valueToStore));
            }

            return valueToStore
        } catch (error) {
            console.log("hook store data error", error)
            // A more advanced implementation would handle the error case
        }
    };

    return [storedValue, setValue];
}
