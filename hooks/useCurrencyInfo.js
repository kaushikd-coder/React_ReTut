import { useCallback, useEffect, useState } from "react"

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});

    const fetchData = useCallback(async() => {
        const res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        const data = await res.json();
        setData(data[currency]);
    },[currency])

    useEffect(() => {
        fetchData();
    },[fetchData]);

    console.log("Currency Data", data);
    return data;
}

export default useCurrencyInfo