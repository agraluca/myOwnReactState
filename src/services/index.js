const baseUrl = "https://www.mockachino.com/dea3b6fd-31b3-4e/";

export const fetcher = async ({ url, body, token }) => {
  console.log(`${baseUrl}${url}`);
  const response = await fetch(`${baseUrl}${url}`, {
    method: "POST",
    headers: {
      Authorization: token && `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body,
  });
  return await response.json();
};
