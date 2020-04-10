export interface RegisterGqlError {
  message: [
    {
      constraints: {
        length: string;
        isEmail: string;
      };
    }
  ];
}

export interface ConstraintsError {
  length: string;
  isEmail: string;
}
