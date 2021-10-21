import React from "react";
import {AvatarTypes} from "./avatar.types";
import {Avatar as NativeAvatar} from 'native-base'

const Avatar: React.FC<AvatarTypes> = ({size = "md", uri}) => {

    return (
        <NativeAvatar
            bg="primary.500"
            size={size}
            source={{
              uri: uri,
            }}>SK</NativeAvatar>
    )
}

export default Avatar
