
interface globalDataType {
   BTC: string;
   ETH: string;
   USDT: string;
}

interface globalDataresponseType {
   success: boolean;
   message: string;
   data: globalDataType
}

interface loginResponseType {
   success: boolean;
   message: string;
   access_token: string
}