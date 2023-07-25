import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import Icon from "@/components/controls/Icon";
import {TouchableOpacity, View} from 'react-native';
import {
  Screen,
  Header,
  Title,
  CancelBtn,
  CancelText,
  SearchView,
  SearchIcon,
  Input,
  ListView,
  IconView,
  DescView,
  Desc,
  Border,
  DescTitle,
  PinView,
  PinTitle,
  Scroll,
  Time,
  BottomPadding
} from "@/screens/Search/components";
import Colors from "@/styles/Colors";

const Search = (props: any) => {
  return (
    <Screen>
      <Header>
        <CancelBtn onPress={() => props.cancel()}>
          <CancelText>Cancel</CancelText>
        </CancelBtn>
        <Title>Search</Title>
      </Header>
      <SearchView>
        <SearchIcon name='search' color="#979797" size={20}/>
        <Input
          placeholder="Search by artist, genre, song or keyword"
          placeholderTextColor="#d0d0d0"
        />
      </SearchView>
      <Scroll>
        <ListView>
          <IconView>
            <SLIcon name="equalizer" size={15} color={Colors.white}/>
          </IconView>
          <DescView>
            <Desc>Family (Official Video) - Popcaan</Desc>
            <Border/>
          </DescView>
        </ListView>
        <ListView>
          <IconView>
            <SLIcon name="playlist" size={15} color={Colors.white}/>
          </IconView>
          <DescView>
            <DescTitle>Artists Related to Popcaan</DescTitle>
            <PinView>
              <PinTitle>Busy Singal</PinTitle>
              <TouchableOpacity>
                <SLIcon name="pin" size={18} color="rgba(255, 255,255, 0.34)"/>
              </TouchableOpacity>
            </PinView>
            <PinView>
              <PinTitle>Alkaline</PinTitle>
              <TouchableOpacity>
                <SLIcon name="pin" size={18} color="rgba(255, 255,255, 0.34)"/>
              </TouchableOpacity>
            </PinView>
            <PinView>
              <PinTitle>Vybz Kartel</PinTitle>
              <TouchableOpacity>
                <SLIcon name="pin" size={18} color="rgba(255, 255,255, 0.34)"/>
              </TouchableOpacity>
            </PinView>
            <PinView>
              <PinTitle>Shenseea</PinTitle>
              <TouchableOpacity>
                <SLIcon name="pin" size={18} color="rgba(255, 255,255, 0.34)"/>
              </TouchableOpacity>
            </PinView>
            <Border/>
          </DescView>
        </ListView>
        <ListView>
          <IconView>
            <SLIcon name="clock" size={15} color={Colors.white}/>
          </IconView>
          <DescView>
            <DescTitle>Recent Searches</DescTitle>
            <PinView>
              <PinTitle>Alkaline</PinTitle>
              <Time>23 secs ago</Time>
            </PinView>
            <PinView>
              <PinTitle>Busy Signal</PinTitle>
              <Time>3 min ago</Time>
            </PinView>
            <PinView>
              <PinTitle>Vybz Kartel</PinTitle>
              <Time>43 days ago</Time>
            </PinView>
            <PinView>
              <PinTitle>Shenseea</PinTitle>
              <Time>1 year ago</Time>
            </PinView>
            <Border/>
          </DescView>
        </ListView>
        <ListView>
          <IconView>
            <SLIcon name="graph" size={15} color={Colors.white}/>
          </IconView>
          <DescView>
            <DescTitle>Trending</DescTitle>
            <PinView>
              <PinTitle>Lover's Rock</PinTitle>
              <TouchableOpacity>
                <SLIcon name="pin" size={18} color="rgba(255, 255,255, 0.34)"/>
              </TouchableOpacity>
            </PinView>
            <PinView>
              <PinTitle>Dancehall</PinTitle>
              <TouchableOpacity>
                <SLIcon name="pin" size={18} color="rgba(255, 255,255, 0.34)"/>
              </TouchableOpacity>
            </PinView>
            <PinView>
              <PinTitle>Afrobeat</PinTitle>
              <TouchableOpacity>
                <SLIcon name="pin" size={18} color="rgba(255, 255,255, 0.34)"/>
              </TouchableOpacity>
            </PinView>
            <PinView>
              <PinTitle>90's Dancehall</PinTitle>
              <TouchableOpacity>
                <SLIcon name="pin" size={18} color="rgba(255, 255,255, 0.34)"/>
              </TouchableOpacity>
            </PinView>
            <PinView>
              <PinTitle>Roots Reggae</PinTitle>
              <TouchableOpacity>
                <SLIcon name="pin" size={18} color="rgba(255, 255,255, 0.34)"/>
              </TouchableOpacity>
            </PinView>
            <Border/>
          </DescView>
        </ListView>
        <BottomPadding/>
      </Scroll>
    </Screen>
  )
};

export default Search;
