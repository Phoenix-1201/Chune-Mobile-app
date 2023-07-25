import React, {useState} from "react";
import Modal from "react-native-modal";
import {ModalView, Header, Title, Logo, LogoView, AddInput, AddBtn, BtnText} from "@/screens/Menu/components";
import Images from "@/styles/Images";

const AddPlayListModal: React.FC<{open: boolean, onCreate: () => void}> = (props) => {
  return (
    <Modal isVisible={props.open}>
      <ModalView>
        <Header>
          <Title>Create</Title>
          <LogoView>
            <Logo source={Images.icons.ic_menu_logo} />
          </LogoView>
          <Title>Playlist</Title>
        </Header>
        <AddInput
          placeholder="Enter Playlist Name"
          placeholderTextColor='#848484'
        />
        <AddInput
          placeholder="Describe your playlist"
          placeholderTextColor='#848484'
        />
        <AddBtn onPress={props.onCreate}>
          <BtnText>Create Now</BtnText>
        </AddBtn>
      </ModalView>
    </Modal>
  )
};

export default AddPlayListModal;
