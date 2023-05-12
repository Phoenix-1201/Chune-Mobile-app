import React, { Fragment } from 'react'

import { Text, TextStyle, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components'

interface ILink {
    link?: {
        view: string;
        id: string;
        text: string;
    }
    text: string;
}
interface IProps {
    title: Array<ILink>;
    disabled?: boolean;
    Link: React.ElementType;
    Text: React.ElementType;
    style?: TextStyle;
    daysAgo?: string;
}

const AlertTitle = (props: IProps) => {
    const navigation = useNavigation()

    const link = (item: ILink) => {
        Alert.alert("Not linked yet! ^_^")
        // switch (item.view) {
        //     case "sendGift":
        //         navigation.navigate("SendGift", { id: item.id })
        //         break;
        //     case "createEvent":
        //         navigation.navigate("CreateEvent", { id: item.id })
        //         break;
        //     case "kitchenList":
        //         navigation.navigate("Kitchens", { event: item })
        //         break;
        //     case "kitchenDetail":
        //         navigation.navigate("KitchenDetail", { data: { id: item.id } })
        //         break;
        //     case "productDetail":
        //         goProductDetail(item.id);
        //         break;
        // }
    }

    return (
        <Text style={props.style}>
            {props.title != null && props.title.map((item: ILink, index) => (
                <Fragment key={index}>
                    {item.text && <props.Text key={index}>{item.text} </props.Text>}
                    {item.link && <props.Link
                        onPress={props.disabled ? undefined : () => link(item)}
                        key={index}>
                        {item.link.text}
                    </props.Link>}
                </Fragment>
            ))}
            <DaysAgo>{" " + props.daysAgo}</DaysAgo>
        </Text>
    )
}

export default AlertTitle;

const DaysAgo = styled(Text)`
    font-size: 12px;
    color: #6D6D6D;
    font-weight: 600;
`