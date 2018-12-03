import globalStyles from 'mathApp/globalStyles';

const width=60;
const height=250;
const thickness=3;

export default styles = {
    container: {
        margin: 5,
        alignItems: 'center',
        width,
        height,
    },
    top: {
        root: {
            width: width/2,
            height: width/2,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: width/4,
            backgroundColor: globalStyles.thermometerGrey,
        },
        background: {
            backgroundColor: globalStyles.thermometerGreyBackground,
            width: width/2-2*thickness,
            height: width/2-2*thickness,
            borderRadius: width/4
        }
    },
    middle: {
        root: {
            position: 'absolute',
            top: width/4,
            width: width/2,
            height: height - 3*width/4,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: globalStyles.thermometerGrey,
        },
        background: {
            position: 'absolute',
            backgroundColor: globalStyles.thermometerGreyBackground,
            height: '100%',
            width: width/2-2*thickness
        },
        mercury: {
            backgroundColor: globalStyles.mercuryRed,
            height: 0,
            width: width/2-2*thickness
        }
    },
    bottom: {
        root: {
            position: 'absolute',
            bottom: 0,
            width,
            height: width,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: width/2,
            backgroundColor: globalStyles.thermometerGrey,
        },
        mercury: {
            backgroundColor: globalStyles.mercuryRed,
            width: width-2*thickness,
            height: width-2*thickness,
            borderRadius: width,
            zIndex: 1
        }
    },
    mercuryOverlay: {
        position: 'absolute',
        bottom: width/2,
        width: width/2-2*thickness,
        height: width/2,
        backgroundColor: globalStyles.mercuryRed
    }
}