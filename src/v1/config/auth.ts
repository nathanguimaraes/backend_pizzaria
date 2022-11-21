interface IAuth {
  jwt: {
    secret: string;
    expiresIn: number;
  };
}

export default {
  jwt: {
    secret: `${process.env.APP_SECRET}`,
    expiresIn: 500,
  },
} as IAuth;
