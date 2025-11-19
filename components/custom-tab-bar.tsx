import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabButton}
            >
              {index === 0 && <MenuIcon color={isFocused ? '#4F9B51' : '#828282'} />}
              {index === 1 && <HomeIcon color={isFocused ? '#4F9B51' : '#828282'} />}
              {index === 2 && <UserIcon color={isFocused ? '#4F9B51' : '#828282'} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

function MenuIcon({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3.5 7C3.5 6.17157 4.17157 5.5 5 5.5H8C8.82843 5.5 9.5 6.17157 9.5 7V10C9.5 10.8284 8.82843 11.5 8 11.5H5C4.17157 11.5 3.5 10.8284 3.5 10V7Z"
        fill={color}
      />
      <Path
        d="M3.5 17C3.5 16.1716 4.17157 15.5 5 15.5H8C8.82843 15.5 9.5 16.1716 9.5 17V20C9.5 20.8284 8.82843 21.5 8 21.5H5C4.17157 21.5 3.5 20.8284 3.5 20V17Z"
        fill={color}
      />
      <Path
        d="M14.5 7C14.5 6.17157 15.1716 5.5 16 5.5H19C19.8284 5.5 20.5 6.17157 20.5 7V10C20.5 10.8284 19.8284 11.5 19 11.5H16C15.1716 11.5 14.5 10.8284 14.5 10V7Z"
        fill={color}
      />
      <Path
        d="M14.5 17C14.5 16.1716 15.1716 15.5 16 15.5H19C19.8284 15.5 20.5 16.1716 20.5 17V20C20.5 20.8284 19.8284 21.5 19 21.5H16C15.1716 21.5 14.5 20.8284 14.5 20V17Z"
        fill={color}
      />
    </Svg>
  );
}

function HomeIcon({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.3356 2.25259C11.7145 1.9158 12.2855 1.9158 12.6644 2.25259L21.6644 10.2526C22.1116 10.6466 22.1116 11.3534 21.6644 11.7474C21.2173 12.1414 20.4427 12.1414 19.9956 11.7474L20 11.7526V19.5C20 20.6046 19.1046 21.5 18 21.5H15C13.8954 21.5 13 20.6046 13 19.5V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V19.5C11 20.6046 10.1046 21.5 9 21.5H6C4.89543 21.5 4 20.6046 4 19.5V11.7526L4.00443 11.7474C3.55732 12.1414 2.78274 12.1414 2.33562 11.7474C1.88841 11.3534 1.88841 10.6466 2.33562 10.2526L11.3356 2.25259Z"
        fill={color}
      />
    </Svg>
  );
}

function UserIcon({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2Z"
        fill={color}
      />
      <Path
        d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20Z"
        fill={color}
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#828282',
    paddingHorizontal: 40,
    paddingTop: 20,
    paddingBottom: 18,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
