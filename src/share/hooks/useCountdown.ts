import {useState, useEffect} from "react";

export function useCountDown(numberInput: number) {
    const [counter, setCounter] = useState<number>(() => {
        if (numberInput <= 0) return 0;

        return numberInput
    });

    useEffect(() => {

        const interval = setInterval(() => {
            setCounter(prevCounter => {
                return Math.max(prevCounter - 1, 0)
            })
        }, 1000)

        return () => clearInterval(interval);
    }, []);

    return [counter, setCounter];
}
