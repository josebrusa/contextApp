import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './presentation/navigator/BottomTabsNavigator';

export const Main = () => {
    return (
        <NavigationContainer>
            <BottomTabsNavigator />
        </NavigationContainer>
    );
}
