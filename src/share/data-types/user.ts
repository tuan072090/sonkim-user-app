
export type CoordinatesType = {
    lat: number;
    lng: number;
}
export type UserLocationType = {
    address: string,
    coordinates: CoordinatesType
};

export type GroupType = {
    "id": number,
    "name": string,
    "slug": string,
    "lat": number,
    "lng": number
}

export type ProfileType = {
    fullName: string,
    avatar: string
}

export type LocationSuggestionItemType = {
    title: string,
    address: {
        label: string,
        street: string
    },
    location: {
        latitude: number,
        longitude: number
    }
}

export type UserType = {
    phone:string
    avatar: string
    id: number
    name: string
};

export type AuthResponseType = {
    session:{
        access_token: string,
        refresh_token: string
    },
    data: UserType
}

