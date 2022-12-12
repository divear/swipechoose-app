import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { ScrollView } from "react-native";
import { useSwipe } from "../hooks/useSwipe";
import { useState } from "react";

export default function TabOneScreen({
	navigation,
}: RootTabScreenProps<"TabOne">) {
	const [mes, setMes] = useState("");
	const { onTouchStart, onTouchEnd } = useSwipe(onSwipeDown, onSwipeUp, 6);

	function onSwipeDown() {
		setMes("down");
	}
	function onSwipeUp() {
		setMes("up");
	}

	return (
		<View
			onTouchStart={onTouchStart}
			onTouchEnd={onTouchEnd}
			style={styles.container}
		>
			<Text style={styles.title}>Swipechoose</Text>
			<Text style={styles.basicText}>
				Swipe to choose which picture you like the better
			</Text>
			<Button
				color={"red"}
				title="say hey"
				onPress={() => setMes(mes + "hey\n")}
			></Button>
			<Text>{mes}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// position: "absolute",
		// top: 0,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	basicText: {
		fontSize: 0,
	},
	title: {
		fontSize: 50,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
