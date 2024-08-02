import { Text, View } from "react-native";
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button size="md" variant="solid" action="primary">
        <ButtonText>Hello World!</ButtonText>
      </Button>
      <Text
        onPress={() => {
          console.log("Thising the on press");
        }}
        className="bg-blue-600 px-4 py-2 color-white rounded-md"
      >
        CLICK
      </Text>
      <Box className="bg-red-500 w-56 h-56 rounded-lg"></Box>
    </View>
  );
}
