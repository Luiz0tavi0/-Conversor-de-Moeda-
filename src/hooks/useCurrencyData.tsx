
import { useQuery } from "@tanstack/react-query";
import ICurrencyResponse from "../interfaces/currency-data";
const API_URL = 'https://economia.awesomeapi.com.br/last'

const fetchData = async (currencyPair: string): Promise<ICurrencyResponse> => {
  // await new Promise((resolve) => setTimeout(resolve, Math.random() * 10000));
  const response = await fetch(`${API_URL}/${currencyPair}`, { method: 'GET' });
  const data = await response.json();
  return data as ICurrencyResponse;
};

export function useCurrencyData(currencyPair: string) {
  const query = useQuery<ICurrencyResponse>({
    queryKey: [`currency-data-pair_${currencyPair}`],
    queryFn: () => fetchData(currencyPair),
    staleTime: 3 * 60 * 1000, // 3 minutos,
    refetchInterval: 3 * 60 * 1000,
  })
  return query;
}