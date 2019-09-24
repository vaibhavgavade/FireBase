import * as firebase from 'firebase'
const configFirebase={
    apiKey: 'AIzaSyAkYbvN60Ra8H7GQXlaGxzZBWZxY97TP0s',
    authDomain: 'authentication-d282e.firebaseapp.com',
    databaseURL: 'https://authentication-d282e.firebaseio.com',
    projectId: 'authentication-d282e',
    storageBucket: '',
    messagingSenderId: '671323209772',
    appId: '1:671323209772:web:1fef7077e778ada04fd189'
}
const Firebase=firebase.initializeApp(configFirebase)
export default Firebase;