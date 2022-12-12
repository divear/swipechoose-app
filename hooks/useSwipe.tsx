import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export function useSwipe(onSwipeDown?: any, onSwipeUp?: any, rangeOffset = 4) {
	let firstTouch = 0;

	// set user touch start position
	function onTouchStart(e: any) {
		firstTouch = e.nativeEvent.pageX;
	}

	// when touch ends check for swipe directions
	function onTouchEnd(e: any) {
		// get touch position and screen size
		const positionX = e.nativeEvent.pageX;
		const positionY = e.nativeEvent.pageY;
		const range = windowWidth / rangeOffset;

		// check if position is growing positively and has reached specified range
		if (positionY - firstTouch > range) {
			onSwipeDown && onSwipeDown();
		} else if (firstTouch - positionY > range) {
			onSwipeUp && onSwipeUp();
		}
	}

	return { onTouchStart, onTouchEnd };
}
