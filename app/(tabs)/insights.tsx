import Text from "react-native-css/components/Text";
import View from "react-native-css/components/View";

export default function InsightsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background px-6">
      <View className="w-full max-w-sm rounded-[32px] border border-border bg-card p-6">
        <Text className="text-2xl font-sans-bold text-primary">Insights</Text>
        <Text className="mt-3 text-base leading-6 text-muted-foreground">
          Placeholder insights tab.
        </Text>
      </View>
    </View>
  );
}
