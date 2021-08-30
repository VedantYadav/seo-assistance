export const apiCall = async (url: string, text: string): Promise<any> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: text,
      id: 1,
    }),
  });
  const { data } = await response.json();
  return data;
};
