import React from "react";
import {BarcodeTypes} from "./Barcode.types";
import {Box} from "native-base";
import Barcode from 'react-native-barcode-svg';

const BarcodeCpn: React.FC<BarcodeTypes> = ({code, width = 100, height= 100,format="CODE128", ...props}) => {

    const _onError = (error) => {
        console.log("barcode error...", error)
    }

    return (
        <Box {...props}>
            <Barcode
                format={format}
                maxWidth={width}
                height={height}
                value={code}
                onError={_onError}
            />
        </Box>
    )
}

export default BarcodeCpn
