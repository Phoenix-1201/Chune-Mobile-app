import {applySnapshot, types} from 'mobx-state-tree';

const BottomSheetNavigation = types.model('BottomSheetNavigation', {
  routeLength: 0,
  backActionFlag: 0,
})
  .views(self => ({
    get canGoBack() {
      return self.routeLength > 1;
    }
  }))
  .actions(self => ({
    update: (length: number) => {
      self.routeLength = length;
    },
    goBack: () => {
      // Just increase it.
      self.backActionFlag += 1;
    },
    initialize: () => {
      self.routeLength = 0;
      self.backActionFlag = 0;
    }
  }));

export default BottomSheetNavigation;
