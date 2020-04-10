import { useState, useEffect } from 'react';

export function useFetchData(arg) {
  const [fetchData, setData] = useState(null);

  useEffect(() => {
    fetch(arg)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        setData(data)
      )
      // Catch any errors we hit and update the app
      .catch(err => setData(err));
  }, [arg])

  return fetchData
}