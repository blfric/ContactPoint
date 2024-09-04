import { getFunctions, httpsCallable } from "firebase/";
const functions = getFunctions();

export const sendResumeService = httpsCallable(functions, 'sendCv');

/*export const sendResumeService = ({ email, lang }: { email: string, lang: string}) => {
    return fetch('http://localhost:5001/personal-website-5537d/us-central1/sendCV', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, lang: lang }),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}*/