(function() {

    var config = {
    apiKey: "AIzaSyCfbxxLE1bHUWF4j4K0Vcu004-xgrps71g",
    authDomain: "angular-firebase-33bce.firebaseapp.com",
    databaseURL: "https://angular-firebase-33bce.firebaseio.com",
    projectId: "angular-firebase-33bce",
    storageBucket: "angular-firebase-33bce.appspot.com",
    messagingSenderId: "593487069572"
  };
  firebase.initializeApp(config);

    angular.module('app',['firebase'])
        .controller('FirebaseCtrl', function($firebaseObject) {
        
            const reference = firebase.database().ref().child('angular');
            this.object = $firebaseObject(reference);
        });
}());