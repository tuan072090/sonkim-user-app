import React from "react";
import {Box} from "native-base";
import {QrCodeTypes} from "./QrCode.types";
import QRCode from "react-native-qrcode-svg";

const QrCode: React.FC<QrCodeTypes> = ({code, size=100,logoUri, ...props}) => {

    return (
        <Box {...props}>
            <QRCode
                logo={logoUri ? {uri: logoUri} : undefined}
                size={size}
                value={code}
                logoSize={40}
                logoBackgroundColor='white'
            />
        </Box>
    )
}

export default QrCode
