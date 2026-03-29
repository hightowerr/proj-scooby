import { Stack } from "expo-router";
import Text from "react-native-css/components/Text";
import View from "react-native-css/components/View";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff9e3" }}>
      <View className="flex-1 items-center justify-center bg-background px-6">
      <Stack.Screen options={{ title: "Sign up" }} />
      <View className="w-full max-w-sm rounded-[32px] border border-border bg-card p-6">
        <Text className="text-2xl font-sans-bold text-primary">Sign up</Text>
        <Text className="mt-3 text-base font-sans leading-6 text-muted-foreground">
          Placeholder sign-up screen.
        </Text>
      </View>
      </View>
    </SafeAreaView>
  );
}
