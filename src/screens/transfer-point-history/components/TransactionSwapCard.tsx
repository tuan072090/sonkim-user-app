import React from "react";
import {Box, HStack} from "native-base";
import {HistoryIcon, PressBox, Typo} from "../../../components";
import {Formatter, PointSwapHistoryType, PointSystemType} from "../../../share";
import {ArrowIcon} from "../../../components/atoms/icons/CommonIcons";
import CardBUPoint from "../../../components/templates/list-loyalty-select/CardBUPoint";

interface TransactionSwapHistoryProps extends React.PropsWithChildren<any> {
    history: PointSwapHistoryType,
    pointSystems: PointSystemType[]
}

const TransactionSwapCard: React.FC<TransactionSwapHistoryProps> = ({history, pointSystems}) => {

    const {id, from, to, point_history_from, point_history_to, created_at} = history
    const pointSystemFrom = pointSystems.find((item: any) => item.symbol === from)
    const pointSystemTo = pointSystems.find((item: any) => item.symbol === to)

    return (
        <PressBox p={3} bgColor="white" borderRadius={12} shadow={1}>
            <HStack w="100%" alignItems="flex-start">
                <Box flex={1} pt={1}>
                    <HistoryIcon size={4} fill={"muted.500"}/>
                    <Typo numberOfLines={2} pt={1} pr={1} type="body14" color="muted.500">
                        {Formatter.FormatDateFromDate(new Date(created_at), "dd/MM/YYY HH:mm")}
                    </Typo>
                </Box>
                <HStack flex={2} alignItems="center">
                    {
                        pointSystemFrom && <CardBUPoint
                            point={point_history_from.point}
                            uri={pointSystemFrom.icon.url}
                        />
                    }
                    <Box px={1}>
                        <ArrowIcon size={6}/>
                    </Box>
                    {
                        pointSystemTo && <CardBUPoint
                            point={point_history_to.point}
                            uri={pointSystemTo.icon.url}
                        />
                    }

                </HStack>
            </HStack>
        </PressBox>
    );
};


export default TransactionSwapCard;
