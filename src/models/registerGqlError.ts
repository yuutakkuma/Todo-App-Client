export interface RegisterGqlError {
  message: [
    {
      constraints: {
        length: string;
      };
    },
    {
      constraints: {
        isEmail: string;
      };
    },
    {
      constraints: {
        length: string;
      };
    }
  ];
}
