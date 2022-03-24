export const userSchema = {
  name: "users",
  type: "document",
  title: "Users",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "walletAddress",
      type: "string",
      title: "Wallet address",
    },
    {
      name: "profileImage",
      type: "image",
      title: "Profile image",
    },
  ],
};
