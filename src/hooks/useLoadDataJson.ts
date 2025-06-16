import { useState, useEffect } from "react";
import axios from "axios";

/**
 * Generic hook to load data from a JSON file.
 * This hook allows updating the json files under public so that no rebuild is needed after changes.
 * @param url Path to the JSON file to load
 * @param dataKey Optional key to extract from the response data
 * @returns An object containing the loaded data, loading state, and any error
 */
export function useLoadDataJson<T>(url: string, dataKey?: string) {
  const [data, setData] = useState<T>([] as unknown as T);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // If a dataKey is provided, extract that property from response.data
        // Otherwise use the entire response.data
        const extractedData = dataKey
          ? response.data[dataKey] || []
          : response.data;
        setData(extractedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(`Error loading data from ${url}:`, error);
        setError(error);
        setIsLoading(false);
      });
  }, [url, dataKey]);

  return {
    data,
    isLoading,
    error,
  };
}
