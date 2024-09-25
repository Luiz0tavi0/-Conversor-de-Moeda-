
import { useQuery } from "@tanstack/react-query";
import ICurrencyResponse from "../interfaces/currency-data";

const fetchData = async (currencyPair: string): Promise<ICurrencyResponse> => {
  // await new Promise((resolve) => setTimeout(resolve, Math.random() * 10000));
  const response = await fetch(
    `${process.env.URL_ECON_API}${currencyPair}`, { method: 'GET' }
  );
  const data = await response.json();

  if (response.status !== 200)
    throw new Error(data.messagem || 'Erro desconhecido');
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