import React, { useState } from 'react'
import { Modal, View } from 'react-native'
import { state } from '@/store/state';

import styled from 'styled-components'
import AnswerClash from '@/screens/modals/AnswerClash';
import { useNavigation } from '@react-navigation/native';

const SubscriptionModal = () => {

    const navigation = useNavigation()

    // @ts-ignore
    const [visible, setVisible] = useState((state.user?.unReadNotifications || 0) > 0)
    // @ts-check

    if (!visible) return null;

    return (
        <Modal
            visible={visible}
        >
            <Container>
                <AnswerClash />
            </Container>
        </Modal>
    )
}

export default SubscriptionModal;

const Container = styled(View)`
    flex: 1;
`