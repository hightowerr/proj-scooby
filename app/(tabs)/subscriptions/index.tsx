import { Link } from "expo-router";
import Pressable from "react-native-css/components/Pressable";
import Text from "react-native-css/components/Text";
import View from "react-native-css/components/View";
import { SafeAreaView } from "react-native-safe-area-context";

const sampleSubscriptions = ["spotify", "netflix", "adobe"];

export default function SubscriptionsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff9e3" }}>
      <View className="flex-1 items-center justify-center bg-background px-6">
      <View className="w-full max-w-sm rounded-[32px] border border-border bg-card p-6">
        <Text className="text-2xl font-sans-bold text-primary">
          Subscriptions
        </Text>
        <Text className="mt-3 text-base font-sans leading-6 text-muted-foreground">
          Placeholder subscriptions tab with sample links into the dynamic
          detail route.
        </Text>
        <View className="mt-5 gap-3">
          {sampleSubscriptions.map((id) => (
            <Link key={id} href={`/subscriptions/${id}`} asChild>
              <Pressable className="rounded-full border border-border px-5 py-3 active:opacity-90">
                <Text className="text-center text-base font-sans-semibold text-primary">
                  Open {id}
                </Text>
              </Pressable>
            </Link>
          ))}
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
}
