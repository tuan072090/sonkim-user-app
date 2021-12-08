import React from "react";
import {Typo} from "../../atoms/typo";
import {Formatter} from "../../../share";
import {Box} from "native-base";

type PriceDisplayProps = {
    price?: number,
    sale_price?: number,
    point_prices?: any[]
}
const PriceDisplay: React.FC<PriceDisplayProps> = ({price, sale_price, point_prices = []}) => {

    if (!price && !sale_price && (!point_prices || point_prices.length === 0)) {
        return <Typo type="subtitle16" color="primary.500">Miễn phí</Typo>
    } else {
        if (!sale_price && price) {
            return <Typo type="title" color="primary.500">{Formatter.FormatVND(price || 0)}đ</Typo>
        } else if (sale_price && price) {
            return (
                <Box>
                    <Typo type="title" color="primary.500">{Formatter.FormatVND(sale_price || 0)}đ</Typo>
                    <Typo style={{textDecorationLine: "line-through"}} type="caption"
                          color="gray.500">{Formatter.FormatVND(price || 0)}đ</Typo>
                </Box>
            )
        } else if (point_prices) {
            const pointPrice = point_prices[0]
            return <Typo type="title" color="primary.500">{pointPrice.price + " " + pointPrice.unit}</Typo>
        }
    }
    return <Typo type="subtitle16" color="primary.500">Miễn phí</Typo>
}

export default PriceDisplay
