import ChatsCtrl from "./chat/chats.controller";
import ChatDetailCtrl from "./chat/chatDetail.controller";
import DashCtrl from "./dashboard/dashboard.controller";
import AccountCtrl from "./account/account.controller";

angular.module("router", ["ionic"])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state("chats", {
        url: "/chats",
        templateUrl: "templates/chats.html",
        controller: DashCtrl,
        controllerAs: "$ctrl",
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/chats");

  });
