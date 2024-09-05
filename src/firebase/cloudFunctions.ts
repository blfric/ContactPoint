import { getFunctions, httpsCallable } from "firebase/";
const functions = getFunctions();

export const sendResumeService = httpsCallable(functions, 'sendCv');