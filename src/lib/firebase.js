import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from '../secrets/firebaseConfig';
//import { seedDatabase } from '../seed';

const firebase = Firebase.initializeApp(firebaseConfig);

//seedDatabase(firebase);

export { firebase };