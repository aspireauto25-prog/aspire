function getFormattedQuery(searchParams?: {
  [key: string]: string | string[] | undefined;
}) {
  if (!searchParams) return "";

  let query = "";

  Object.entries(searchParams).map((params) => {
    const [key, value] = params;

    if (value) query = `${query == "" ? "" : query + "&"}${key}=${value}`;
  });

  return query == "" ? "" : `?${query}`;
}

export { getFormattedQuery };
