import { getCategorisedData } from "../utils/categoryHelper";

import { useDataContext } from "../context/dataContext";

export const useCategoryHook = () => {
  const { state } = useDataContext();

  const categorisedData = getCategorisedData(state.data, state.categoriseBy);

  return { categorisedData };
};
