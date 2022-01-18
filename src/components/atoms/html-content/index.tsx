import React from "react";
import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';

interface HtmlContentProps extends React.PropsWithChildren<any> {
    html: string,
    width?: number
}

const renderersProps = {
    img: {
        enableExperimentalPercentWidth: true
    }
};
const HTMLContent: React.FC<HtmlContentProps> = ({html = "", width}) => {
    const {width: screenWidth} = useWindowDimensions();
    const contentWidth = width || screenWidth

    return (
        <RenderHtml
            renderersProps={renderersProps}
            contentWidth={contentWidth}
            enableExperimentalBRCollapsing={true}
            source={{
                html: html
            }}
        />
    )
}

export default HTMLContent
