import { clsx } from "clsx";
import { Image } from "expo-image";
import { Tabs } from "expo-router";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Pressable from "react-native-css/components/Pressable";
import View from "react-native-css/components/View";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { tabs } from "@/constants/data";

function TabIcon({ focused, icon }: TabIconProps) {
  return (
    <View className={clsx("tabs-pill", focused && "tabs-active")}>
      <Image
        contentFit="contain"
        source={icon}
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? "#081126" : "rgba(8, 17, 38, 0.55)",
        }}
      />
    </View>
  );
}

function FloatingTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="absolute bottom-0 left-0 right-0 mx-4"
      style={{ bottom: Math.max(insets.bottom, 12) }}
    >
      <View className="flex-row items-center justify-between rounded-[32px] border border-border bg-background px-3 py-3 shadow-lg">
        {tabs.map((tab) => {
          const index = state.routes.findIndex((route) => route.name === tab.name);

          if (index === -1) {
            return null;
          }

          const route = state.routes[index];
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];

          return (
            <Pressable
              key={route.key}
              accessibilityHint={options.tabBarAccessibilityLabel}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              className="flex-1 items-center justify-center rounded-[22px] px-2 py-3"
              onPress={() => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name, route.params);
                }
              }}
              onLongPress={() =>
                navigation.emit({
                  type: "tabLongPress",
                  target: route.key,
                })
              }
            >
              <TabIcon focused={isFocused} icon={tab.icon} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        sceneStyle: {
          paddingBottom: 112,
        },
      }}
      tabBar={(props) => <FloatingTabBar {...props} />}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
          }}
        />
      ))}
    </Tabs>
  );
}
