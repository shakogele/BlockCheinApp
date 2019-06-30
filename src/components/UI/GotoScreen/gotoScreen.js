import { Navigation } from 'react-native-navigation';

const gotoScreen = (componentId, screen, props) => {
  if(screen === 'back'){
    Navigation.pop(componentId);
    return true;
  };

  if(screen === 'sidebar'){
    Navigation.mergeOptions('leftSideMenu', {
        sideMenu: {
          left: {
            visible: true
          }
        }
    });
    return true;
  };

  Navigation.push(componentId, {
    component: {
      name: screen,
      passProps: {
        ...props
      }
    }
  });

  Navigation.mergeOptions('leftSideMenu', {
      sideMenu: {
        left: {
          visible: false
        }
      }
  });

}

export default gotoScreen;
