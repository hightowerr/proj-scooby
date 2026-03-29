import { Link, Stack } from "expo-router";
import Pressable from "react-native-css/components/Pressable";
import Text from "react-native-css/components/Text";
import View from "react-native-css/components/View";
import { SafeAreaView } from "react-native-safe-area-context";

const steps = [
  {
    eyebrow: "1. Connect",
    title: "See every recurring payment in one place.",
    description:
      "Bring cards and bank accounts together so forgotten trials stop slipping through.",
  },
  {
    eyebrow: "2. Review",
    title: "Spot subscriptions that no longer match your habits.",
    description:
      "A clean summary makes it obvious what is useful, duplicated, or overdue for a cut.",
  },
  {
    eyebrow: "3. Act",
    title: "Build a lighter monthly stack.",
    description:
      "Keep what matters, cancel what doesn't, and stay ahead of the next billing date.",
  },
];

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff9e3" }}>
      <View className="flex-1 bg-background">
      <Stack.Screen options={{ title: "Onboarding" }} />
      <View className="flex-1 px-6 pb-8 pt-6">
        <View className="rounded-[36px] bg-primary px-6 py-8">
          <Text className="text-sm font-sans-semibold uppercase tracking-[2px] text-white/70">
            Welcome to Scooby
          </Text>
          <Text className="mt-4 text-4xl font-sans-extrabold leading-tight text-background">
            Clean up your subscriptions before they clean out your budget.
          </Text>
          <Text className="mt-4 text-base leading-7 text-white/75">
            Start with a quick walkthrough, then head back to the home screen
            when you want to continue building the app.
          </Text>
        </View>

        <View className="mt-6 gap-4">
          {steps.map((step) => (
            <View
              key={step.eyebrow}
              className="rounded-[28px] border border-border bg-card p-5"
            >
              <Text className="text-xs font-sans-bold uppercase tracking-[2px] text-accent">
                {step.eyebrow}
              </Text>
              <Text className="mt-3 text-xl font-sans-bold leading-7 text-primary">
                {step.title}
              </Text>
              <Text className="mt-2 text-sm leading-6 text-muted-foreground">
                {step.description}
              </Text>
            </View>
          ))}
        </View>

        <View className="mt-auto gap-3 pt-6">
          <Link href="/" asChild>
            <Pressable className="rounded-full bg-accent px-5 py-4 active:opacity-90">
              <Text className="text-center text-base font-sans-bold text-white">
                Back to home
              </Text>
            </Pressable>
          </Link>
          <Text className="text-center text-sm text-muted-foreground">
            This screen is a standalone route inside `app/` and can be expanded
            into a full first-run flow later.
          </Text>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
}
