import ChatsCtrl from "./chat/chats.controller";
import ChatDetailCtrl from "./chat/chatDetail.controller";
import DashCtrl from "./dashboard/dashboard.controller";
import AccountCtrl from "./account/account.controller";

angular.module("router", ["ionic"])

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state("chats", {
        url: "/chats",
        templateUrl: "templates/chats.html",
        controller: DashCtrl,
        controllerAs: "$ctrl",
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/chats");

  });
