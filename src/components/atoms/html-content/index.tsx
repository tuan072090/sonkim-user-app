import React from "react";
import Markdown from "react-native-markdown-display";
import {Colors} from "../../../share";

const HTMLContent: React.FC<any> = (props) => {

    return (
        <Markdown style={{body: {color: 'black', fontSize: 14, lineHeight: 20}, heading1: {color: Colors.primary["500"]}}}>
            {props.children}
        </Markdown>
    )
}

export default HTMLContent
