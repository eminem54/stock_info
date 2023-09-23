type apiProps = {
  url: string;
  method?: string;
};

export const requestRestApi = async ({ url, method = 'get' }: apiProps) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`, { method: method });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  //,

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
