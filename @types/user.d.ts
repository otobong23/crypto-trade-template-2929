
declare interface signResponse {
   success: boolean;
   token: string;
   message: string,
   user?: {
      firstName: string;
      lastName: string;
      username: string;
      createdAt: string
   }
}

declare interface walletType {
   balance: number;
   assetValue: number;
   watchList: string[]
}

declare interface userType {
   firstName: string;
   lastName: string;
   username: string;
   createdAt: string;
   updatedAt: string;
   verified: boolean;
   wallet: walletType
}

declare interface profileResponse {
   success: boolean;
   user: userType;y
}