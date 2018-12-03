import globalStyles from 'mathApp/globalStyles';

export default styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: globalStyles.bubbleBlue,
        width: 40,
        height: 30,
        borderRadius: 15,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 0.2
    }
}