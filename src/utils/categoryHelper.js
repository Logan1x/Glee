export const getCategorisedData = (data, categorisedBy) => {
  if (categorisedBy && categorisedBy !== "All") {
    return [...data].filter((item) =>
      item.categoryName.includes(categorisedBy)
    );
  } else {
    return data;
  }
};
