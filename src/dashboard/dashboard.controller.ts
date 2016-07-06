/// <reference path="../../typings/modules/firebase/index.d.ts" />

export default class DashboardController {

  public chats: any[];
  constructor(
    $scope,
    $firebaseArray: AngularFireArrayService,
    $window) {
    "ngInject";
    const ref = $window.firebase.database().ref();
    this.chats = $firebaseArray(ref);
  }
}
