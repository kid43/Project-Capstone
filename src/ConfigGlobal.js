import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const version = '0.0.5';

const { height } = Dimensions.get('window');

//color global
export const colors = {
    BACKGROUND_BLUEYONDER: '#576CA8',
    BACKGROUND_CULTURE: '#FFF',
    TEXT_DARK_JUNGLE_GREEN: '#171D1C',
    COLOR_HEART: '#A62C2b'
}

// rate
export const newAvgRatings = (numRatings, oldAvgRatings, rating) => {
    return ((numRatings - 1) * oldAvgRatings + rating) / numRatings;
}

export const getAvgRatings = (avgRatings) => {
    return avgRatings === 0 ? 0.0 : 0;
}

export const getNumRatings = (numRatings) => {
    return numRatings;
}

//convert number month to string
export const convertMonth = month => {
    let monthString = '';
    switch(month) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
            return monthString;
    }
}

//uppercase first charactor
export const uppercaseFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//component version
export const ComponentVersion = () => {
    return(
        <View style={styles.containerVersion}>
            <Text style={styles.textVersion}>
                {`version @${version}`}
            </Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    containerVersion: {
        marginBottom: height - (height - 30),
        alignItems: 'center'
    },
    textVersion: {
        color: colors.TEXT_DARK_JUNGLE_GREEN,
        fontSize: 15
    }
});

// config chatbot
export const dialogflowConfig = {
    "type": "service_account",
    "project_id": "faq-bot-lokp",
    "private_key_id": "48c1bb49ad63c05c8e838a8bfe6cb7fdfc290b34",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDj7fq9VwuIVaIZ\nzpAhJ31Sc80jjCck9D/tQVrFaP82uZFfaMTvvPl3rTeLVRrKyqr0S6KHRRCemLvI\n9LCDH+gFpsSELtSNFjifkRWGk8hylTBX6sM9B7PV15EwZLjmOL0qF8bFfgz8SUtJ\ne4m3OCEIg7/CoxqIEt4WabV4EbYyDMj9z3eAqsJ14ZeRWM7Ra2YxbUjECVAkTmhO\nM6StlsvXHG2K0DsY6MOR+8gkAmtonPIAd7DpwdW6oDBB30EMlvzp/iJonMKl+aD5\ns9U52prGT+O4u3EVskt1zpDwXytJ4Ml933vXsRzqC1crvxJ+S2wEjehLM2LE1i+C\n6T+0iNGLAgMBAAECggEAL7BLFfJwZ0YDdILThRxODEJOWXGpfwHbnjheVY9yVnDd\nCalSCxbu2ytSw8Q6ptNgkVyB1OuOXqB2KcWIaOb0FLqfw0hJEHvlvP0OE+o3tkGg\nq8RitRI3fjZsGkP4q7KTYYs3+3o0HVT4e5dtaPhFcRKfvImDs5S/AtF7NnP+Otos\n2r+bofAypYyrupHunhZ5hFQDBwOPOVit1sft9qKdsvC+mMgmjPR3p4bkIXSy1y+j\nM9tvf+jI30sfIMAwEOeSNLVlyZrFM2u1bgdcBs4uBTS/frQYULxKet68HuHC0hrq\nDhB779EeG102XrJDN+FuVoCkOBk8uVZVBySgpm/kAQKBgQD1wcdVwLQODdHcJsA0\nlmii/LynbXYyHW2dTj9kZFD+DaIo3H5xGz2QJ8L5oQXD4FiMnCuGtx0h+3nbFyIe\n+tBepzT6mYCzz7ZXaKZzf6Lq7WUCyi1bsH0u1h0zm3Y4mppxbJAGROSut8NrGa31\npLAu02QoSgGsPY8lchu+n739qwKBgQDtbfvD7IzfnPJvG8dUVJr3R44j+FskDxg4\nVxJVOSGUB/A7iqVxLUH3cpz1MGBYcwMU+Mj3NEfvo0tnKsBnWewyytvHV5zTuZGv\nP0OPdx1PTHgVcQbuxU7kCF7Jz2xZ9+e4+5slgwWGKM81VR3r+EmSxopVf5lHDyLs\n1qvnCSHboQKBgB2mgolLFa44ZqB8IGZ32yoG+i/tGfyT5ly7SxSuscLlHDJ3391/\nnt7cnT6G+e4XDDfyw6GeSCqIb7xKPzijpC43WEH/8TJAlkxXePWoaZyUhcJfaDeO\nxJu5A47ta8cKiCW1Jm9LMpgN3cr3LzDa7NLJeGUQAMGqL7Ih4U0Pctm/AoGBAK+Q\n7WNyLrVHa+mHA/0y1qhVjCDDDDn8w28dy5ujNFYvDJAqtK2cxrPAV5ni3MtquHOw\nh4JscWkdOaue7ElAMC1a3etouLnC9Zw9zqpubQjvRbitLHAxDGYIXnciXz+j1gBu\nZMn3OYV79cS9HPQZU+Yp067nPKNT6QJytwiPMy8hAoGBANSBsI8MY/krPXgyB/O+\ndqMw1MFJj4rp87KLCBlKsD0yaQJ5D697yW/lb5EAQDwQgy4+YrYp2siEivbLsGSE\nrcAVH8uNy3D9kuHaM1VRdTdD1wP1hhPbNbUrTG3kxOdX42ys3DO6fpMSTkUTRHNC\ntXtylOiqDlsnbrSYADzScmJQ\n-----END PRIVATE KEY-----\n",
    "client_email": "hphongug0210@faq-bot-lokp.iam.gserviceaccount.com",
    "client_id": "103757021657608887431",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/hphongug0210%40faq-bot-lokp.iam.gserviceaccount.com"
  }
  