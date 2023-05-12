import {cast, IAnyType, types} from 'mobx-state-tree';
import {defString} from './MSTTypes';
import {string} from "mobx-state-tree/dist/types/primitives";
import {ISimpleType, IType} from "mobx-state-tree/dist/core/type/type";
import {IMSTArray} from "mobx-state-tree/dist/types/complex-types/array";
import {PlayerMediaInfo} from "@/types";

const Song = types.model('Song', {
  id: types.identifier,
  title: defString,
  artist: defString,
  isLive: false,
  isMovie: false,
  url: defString,
});


const Player = types.model('Player', {
  isPlaying: false,
  playList: types.array(types.frozen<PlayerMediaInfo>()),
  currIndex: -1
}).actions(self => ({
  togglePlaying: () => {
    self.isPlaying = !self.isPlaying;
  },
  setPlaying: (isPlaying: boolean) => {
    self.isPlaying = isPlaying;
  },
  setPlayList: (playlist: PlayerMediaInfo[]) => {
    self.playList = cast(playlist)
  },
  getCurrMediaInfo: () => {
    if (self.currIndex === -1) {
      return null;
    }
    return self.playList[self.currIndex];
  },
  setCurrIndex: (currIndex: number) => {
    if (!self.playList || self.playList.length <= currIndex || currIndex < 0) { // invalid currIndex
      self.currIndex = -1
      self.isPlaying = false;
    } else {
      self.currIndex = currIndex;
    }
  },
  isLast: () => {
    return (self.playList && self.playList.length > 0 && self.playList.length === self.currIndex + 1);
  },
  isFirst: () => {
    return (self.playList && self.playList.length > 0 && 0 === self.currIndex);
  }
})).actions( self => ({
  goNext: () => {
    self.setCurrIndex(self.currIndex + 1);
  },
  goPrevious: () => {
    self.setCurrIndex(self.currIndex - 1);
  },
}));


export default Player;
