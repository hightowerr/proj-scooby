import { Link } from "expo-router";
import Pressable from "react-native-css/components/Pressable";
import Text from "react-native-css/components/Text";
import View from "react-native-css/components/View";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabsHomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff9e3" }}>
      <View className="flex-1 items-center justify-center bg-background px-6">
        <View className="w-full max-w-sm rounded-[32px] border border-border bg-card p-6 shadow-sm">
          <Text className="text-center text-5xl font-sans-bold text-primary">
            Scooby
          </Text>
          <Text className="mt-3 text-center text-base font-sans leading-6 text-muted-foreground">
            Track recurring spending and keep the subscriptions that still earn
            their place.
          </Text>
          <Link href="/onboarding" asChild>
            <Pressable className="mt-6 rounded-full bg-accent px-5 py-4 active:opacity-90">
              <Text className="text-center text-base font-sans-bold text-white">
                Open onboarding
              </Text>
            </Pressable>
          </Link>
          <View className="mt-3 flex-row gap-3">
            <Link href="/sign-in" asChild>
              <Pressable className="flex-1 rounded-full border border-border px-5 py-4 active:opacity-90">
                <Text className="text-center text-base font-sans-bold text-primary">
                  Sign in
                </Text>
              </Pressable>
            </Link>
            <Link href="/sign-up" asChild>
              <Pressable className="flex-1 rounded-full border border-border px-5 py-4 active:opacity-90">
                <Text className="text-center text-base font-sans-bold text-primary">
                  Sign up
                </Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
