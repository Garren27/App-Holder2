const colours = {
    magenta: "#E380E4",
    purpleButton: '#BF3F7F',
}

export default globalStyles = {
    magenta: colours.magenta,
    purpleButton: colours.purpleButton,
    bubbleBlue: "#8AC8E4",
    thermometerGrey: "#E2DDDD",
    thermometerGreyBackground: "#D0CDCD",
    mercuryRed: "#EC0303",
    screenRoot: (orientation) => ({
        flex: 1,
        justifyContent: orientation,
        alignItems: 'center',
        backgroundColor: colours.magenta
    }),
    backButton: {
        root: {
            position: 'absolute',
            padding: 10,
            backgroundColor: colours.purpleButton,
            borderRadius: 18,
            top: 30,
            left: 20
        },
        text: {
            
        }
    },
    forwardButton: {
        root: {
            position: 'absolute',
            padding: 10,
            backgroundColor: colours.purpleButton,
            borderRadius: 18,
            bottom: 30,
            right: 20
        },
        text: {
            
        }
    },
    activitySelectorButton: {
        root: {
            position: 'absolute',
            padding: 10,
            backgroundColor: colours.purpleButton,
            borderRadius: 18,
            top: 30,
            right: 20
        },
        text: {

        }
    }
}