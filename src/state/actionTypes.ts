export type Action = {
  type: string;
  payload?: any;
};

export type UpdateFiltersAction = {
  type: string;
  payload: {
    filterType: string;
    values: { [key: string]: string[] };
  };
};
