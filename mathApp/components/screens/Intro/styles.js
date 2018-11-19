import globalStyles from 'mathApp/globalStyles';

export default styles = {
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: globalStyles.magenta
    },
    centerBox: {
        welcomeMessage: {
            margin: 10,
            textAlign: 'center'
        },
        button: {
            root: {
                backgroundColor: globalStyles.purpleButton,
                padding: 10,
                borderRadius: 18
            },
            text: {
                textAlign: 'center'
            }
        }
    }
}