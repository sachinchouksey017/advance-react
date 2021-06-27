import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { EXCHANGE_RATES } from "./Queries";

const ExchageRate = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    useEffect(() => {
        console.log(data);
    }, [data])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>
    ));
}
export default ExchageRate;