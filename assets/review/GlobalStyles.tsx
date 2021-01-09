import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
});

export const images: any = {
    ratings: {
        '1': require('./images/rating-1.png'),
        '2': require('./images/rating-2.png'),
        '3': require('./images/rating-3.png'),
        '4': require('./images/rating-4.png'),
        '5': require('./images/rating-5.png'),
    }
}