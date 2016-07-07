export default class DashboardController {

  public chats: AngularFireArray;
  constructor(
    $scope,
    $firebaseArray: AngularFireArrayService,
    $window) {
    "ngInject";
    const ref = $window.firebase.database().ref();
    this.chats = $firebaseArray(ref);
  }

  public add(name: string, body: string) {
    this.chats.$add({ name: name, text: body });
  }
}
