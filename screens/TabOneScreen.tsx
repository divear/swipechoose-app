import { Button, StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { useSwipe } from "../hooks/useSwipe";
import { useState } from "react";

export default function TabOneScreen({
	navigation,
}: RootTabScreenProps<"TabOne">) {
	const [mes, setMes] = useState("");
	const { onTouchStart, onTouchEnd } = useSwipe(onSwipeDown, onSwipeUp, 6);
	const [top, setTop] = useState(0);
	const [bottom, setBottom] = useState(0);

	function onSwipeUp() {
		setBottom(0);
		setTop(top - 50);
		start(false);
	}
	function onSwipeDown() {
		setTop(50);
		setBottom(bottom - 50);
		start(true);
	}

	const start = (direction: boolean) => {
		setMes(`Chose ${direction ? "up" : "down"}`);
	};

	return (
		<View
			onTouchStart={onTouchStart}
			onTouchEnd={onTouchEnd}
			style={styles.container}
		>
			<Image
				style={{ top: top, height: 500, width: 500 }}
				source={require("../assets/images/tests/4k_phozo.jpg")}
			/>
			<Text style={styles.basicText}>
				Swipe to choose which picture you like the better
			</Text>
			<Text>{mes}</Text>
			<Image
				style={{ top: top, height: 500, width: 500 }}
				source={require("../assets/images/tests/big_snail.jpg")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	first: {
		opacity: 1,
	},
	second: {
		opacity: 1,
	},
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
