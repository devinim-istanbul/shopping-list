import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import moment from 'moment/min/moment-with-locales.min';
import Swipeable from 'react-native-swipeable';
import { globalStyles } from '../../../globals';

class ListItem extends React.PureComponent {
  render() {
    const {
      item,
      onIncrement,
      onDecrement,
      onRemoveItem,
      onEditItem,
      firstItem,
      lastItem
    } = this.props;
    return (
      <Swipeable
        rightButtons={[
          <TouchableHighlight
            style={{
              height: '100%',
              justifyContent: 'center',
              backgroundColor: 'red'
            }}
            onPress={() => onRemoveItem(item)}
          >
            <Text style={{ color: '#fff', fontSize: 18, marginLeft: 20 }}>
              Sil
            </Text>
          </TouchableHighlight>
        ]}
      >
        <Container firstItem={firstItem} lastItem={lastItem}>
          <InnerContainer>
            <LeftContainer>
              <LeftTopContainer>
                <LeftTopCenterContainer item={item} onEditItem={onEditItem} />
              </LeftTopContainer>
              <LeftBottomContainer>
                <LeftBottomLeftContainer user={item.user} />
                <LeftBottomCenterContainer user={item.user} />
                <LeftBottomRightContainer item={item} />
              </LeftBottomContainer>
            </LeftContainer>
            <CenterContainer>
              <CenterTopContainer item={item} onIncrement={onIncrement} />
              <CenterCenterContainer
                quantity={item.quantity}
                unit={item.unit}
              />
              <CenterBottomContainer item={item} onDecrement={onDecrement} />
            </CenterContainer>
          </InnerContainer>
        </Container>
      </Swipeable>
    );
  }
}

function dateToFromNowDaily(myDate) {
  moment.locale('tr');
  const date = moment(myDate);
  const fromNow = date.fromNow();

  return date.calendar(null, {
    lastWeek: '[Geçen] dddd',
    lastDay: '[Dün]',
    sameDay: `[${fromNow}]`,
    nextDay: '[Yarın]',
    nextWeek: 'dddd'
  });
}

const Container = ({ firstItem, lastItem, children }) => (
  <View
    style={[
      styles.container,
      firstItem ? styles.firstItem : null,
      lastItem ? styles.lastItem : null
    ]}
  >
    {children}
  </View>
);
const InnerContainer = props => (
  <View style={styles.innerContainer}>{props.children}</View>
);
const LeftContainer = props => (
  <View style={styles.leftContainer}>{props.children}</View>
);
const CenterContainer = props => (
  <View style={styles.centerContainer}>{props.children}</View>
);
const LeftTopContainer = props => (
  <View style={styles.leftTopContainer}>{props.children}</View>
);

const LeftTopCenterContainer = ({ item, onEditItem }) => {
  if (!item || !item.name) return null;
  return (
    <TouchableOpacity onPress={() => onEditItem(item)}>
      <View style={styles.leftTopCenterContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const LeftBottomContainer = props => (
  <View style={styles.leftBottomContainer}>{props.children}</View>
);

const LeftBottomLeftContainer = ({ user }) => {
  const content =
    user && user.photoURL ? (
      <Image source={{ uri: user.photoURL }} style={styles.leftBottomLeftImage} />
    ) : null;
  return <View style={styles.leftBottomLeftContainer}>{content}</View>;
};

const LeftBottomCenterContainer = ({ user }) => {
  const content =
    user && user.displayName ? (
      <Text style={styles.leftBottomLeftText}>{user.displayName}</Text>
    ) : null;
  return <View style={styles.leftBottomCenterContainer}>{content}</View>;
};

const LeftBottomRightContainer = ({ item }) => {
  if (!item || !item.timestamp) return null;
  return (
    <View style={styles.leftBottomRightContainer}>
      <Text style={styles.leftBottomRightText}>
        {dateToFromNowDaily(item.timestamp)}
      </Text>
    </View>
  );
};

const CenterTopContainer = ({ item, onIncrement }) => (
  <TouchableOpacity onPress={() => onIncrement(item)}>
    <View style={styles.centerTopContainer}>
      <Text style={styles.miniIconIncDecText}>+</Text>
    </View>
  </TouchableOpacity>
);

const CenterCenterContainer = ({ quantity, unit }) => (
  <View style={styles.centerCenterContainer}>
    <Text style={styles.quantityText}>{quantity}</Text>
    <Text style={styles.unitText}> {unit || 'ad.'}</Text>
  </View>
);

const CenterBottomContainer = ({ item, onDecrement }) => (
  <TouchableOpacity onPress={() => onDecrement(item)}>
    <View style={styles.centerBottomContainer}>
      <Text style={styles.miniIconIncDecText}>-</Text>
    </View>
  </TouchableOpacity>
);

const debug = false;

const common = {
  containerMargin: 5,
  containerInnerPadding: 5,
  size: 90,
  miniButtonHeight: 25,
  fontSize: 20,
  borderColor: '#efefef',
  sideFontSize: 11
};

const styles = {
  container: {
    height: common.size,
    padding: common.containerInnerPadding,
    backgroundColor: debug ? 'yellow' : '#fff',
    borderBottomWidth: 1,
    borderColor: common.borderColor,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: debug ? 'orange' : '#fff'
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    backgroundColor: debug ? 'red' : '#fff'
  },
  leftTopContainer: {
    flex: 1,
    backgroundColor: debug ? 'lime' : '#fff'
  },
  leftTopCenterContainer: {
    height: 30,
    justifyContent: 'center',
    backgroundColor: debug ? 'blue' : '#fff'
  },
  nameText: {
    fontSize: 20
  },
  leftBottomContainer: {
    height: 20,
    flexDirection: 'row',
    backgroundColor: debug ? 'purple' : '#fff'
  },
  leftBottomLeftContainer: {
    width: 20
  },
  leftBottomLeftImage: {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  leftBottomCenterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 4,
    backgroundColor: debug ? 'orange' : '#fff'
  },
  leftBottomLeftText: {
    fontSize: common.sideFontSize,
    color: '#a1a1a1'
  },
  leftBottomRightContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 4,
    backgroundColor: debug ? 'aliceblue' : '#fff'
  },
  leftBottomRightText: {
    fontSize: common.sideFontSize,
    color: '#a1a1a1'
  },
  centerContainer: {
    flexDirection: 'column',
    width: 60,
    backgroundColor: debug ? 'blue' : '#fff',
    borderLeftWidth: 1,
    borderColor: common.borderColor
  },
  centerTopContainer: {
    backgroundColor: debug ? 'orange' : '#fff',
    height: common.miniButtonHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerCenterContainer: {
    backgroundColor: debug ? 'lime' : '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  centerBottomContainer: {
    backgroundColor: debug ? 'orange' : '#fff',
    height: common.miniButtonHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightContainer: {
    width: 50,
    backgroundColor: debug ? 'navy' : '#fff',
    borderLeftWidth: 1,
    borderColor: common.borderColor
  },
  miniButtonIcon: {
    height: '100%',
    width: '100%',
    backgroundColor: debug ? 'blue' : '#fff'
  },
  miniButtonReverseIcon: {
    backgroundColor: debug ? 'blue' : '#fff'
  },
  quantityText: {
    fontSize: common.fontSize + 4,
    fontWeight: 'bold',
    color: globalStyles.secondaryColor,
    textAlign: 'center'
  },
  miniIconIncDecText: {
    fontSize: common.fontSize + 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: globalStyles.primaryColor,
    backgroundColor: debug ? 'blue' : '#fff'
  },
  unitText: {
    fontSize: common.fontSize - 4,
    fontWeight: 'bold',
    color: globalStyles.secondaryColor,
    textAlign: 'center'
  },
  rightCenterContainer: {
    backgroundColor: debug ? 'green' : '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  miniIconRemoveText: {
    fontSize: common.fontSize + 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red'
  },
  firstItem: {
  },
  lastItem: {
  }
};

export default ListItem;
