import { Link, Stack, useLocalSearchParams } from "expo-router";
import Pressable from "react-native-css/components/Pressable";
import Text from "react-native-css/components/Text";
import View from "react-native-css/components/View";

export default function SubscriptionDetailsScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();

  return (
    <View className="flex-1 items-center justify-center bg-background px-6">
      <Stack.Screen options={{ headerShown: true, title: "Subscription" }} />
      <View className="w-full max-w-sm rounded-[32px] border border-border bg-card p-6">
        <Text className="text-2xl font-sans-bold text-primary">
          Subscription details
        </Text>
        <Text className="mt-3 text-base leading-6 text-muted-foreground">
          Dynamic route placeholder for subscription id: {id ?? "unknown"}
        </Text>
        <Link href="/(tabs)" asChild>
          <Pressable className="mt-5 rounded-full border border-border px-5 py-3 active:opacity-90">
            <Text className="text-center text-base font-sans-semibold text-primary">
              Go to home
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
