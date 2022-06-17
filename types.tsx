/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

 
 import { NativeStackScreenProps } from '@react-navigation/native-stack';
 
 declare global {
     namespace ReactNavigation {
         interface RootParamList extends RootStackParamList {}
     }
 }
 
 export type RootStackParamList = {
   Intro: undefined;
   RequestModal: undefined;
   Modal: undefined;
   NotFound: undefined;
   OrderDetails: { order: object };
   Main: undefined;
   OTP: { phone_number: string };
   Login: undefined;
   Cards: { order: string };
   OrderRequest: { order: string };
 };
 
 export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
     NativeStackScreenProps<RootStackParamList, Screen>;
 
 