import { NavigationActions, StackActions } from "react-navigation";

class NavigationService {
  initialize(navigator) {
    this.navigator = navigator;
  }

  reset(routeName, params) {
    this.navigator.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName,
            params
          })
        ]
      })
    );
  }

  navigate(routeName, params) {
    this.navigator.dispatch(
      NavigationActions.navigate({
        type: "Navigation/NAVIGATE",
        routeName,
        params
      })
    );
  }
}

export default new NavigationService();
