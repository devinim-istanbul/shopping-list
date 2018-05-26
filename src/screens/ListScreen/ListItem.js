import React from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment/min/moment-with-locales.min';
import 'moment/locale/tr';
import { Icon } from 'react-native-elements';

class ListItem extends React.PureComponent {
  render(){
    const { item, onAdd, onSubtract, onRemoveItem, onToggle } = this.props;
    return (
      <Container>
        <InnerContainer>
          <LeftContainer>
            <LeftTopContainer>
              <LeftTopCenterContainer item={item} />
            </LeftTopContainer>
            <LeftBottomContainer>
              <LeftBottomLeftContainer user={item.user} />
              <LeftBottomCenterContainer user={item.user} />
              <LeftBottomRightContainer item={item} />
            </LeftBottomContainer>
          </LeftContainer>
          <CenterContainer>
            <CenterTopContainer item={item} onAdd={onAdd}/>
            <CenterCenterContainer quantity={item.quantity} unit={item.unit}/>
            <CenterBottomContainer item={item} onSubtract={onSubtract}/>
          </CenterContainer>
          <RightContainer>
            <RightCenterContainer item={item} onRemoveItem={onRemoveItem}/>
            <RightBottomContainer item={item} onToggle={onToggle}/>
          </RightContainer>
        </InnerContainer>
      </Container>
    )
  }
}

function dateToFromNowDaily( myDate ) {
  moment.locale('tr');
  const date = moment( myDate );
  const fromNow = date.fromNow();

  return date.calendar( null, {
    lastWeek: '[Geçen] dddd',
    lastDay:  '[Dün]',
    sameDay:  `[${fromNow}]`,
    nextDay:  '[Yarın]',
    nextWeek: 'dddd',
  });
}

const Container = (props) => <View style={styles.container}>{props.children}</View>;
const InnerContainer = (props) => <View style={styles.innerContainer}>{props.children}</View>;
const LeftContainer = (props) => <View style={styles.leftContainer}>{props.children}</View>;
const CenterContainer = (props) => <View style={styles.centerContainer}>{props.children}</View>;
const RightContainer = (props) => <View style={styles.rightContainer}>{props.children}</View>;
const LeftTopContainer = (props) => <View style={styles.leftTopContainer}>{props.children}</View>;

const LeftTopCenterContainer = ({ item }) => {
  if(!item || !item.name) return null;
  return (
    <View style={styles.leftTopCenterContainer}>
      <Text style={styles.leftTopCenterText}>{item.name}</Text>
    </View>
  )
};

const LeftBottomContainer = (props) => <View style={styles.leftBottomContainer}>{props.children}</View>;

const LeftBottomLeftContainer = ({ user }) =>{
  const content = user && user.avatar ? <Image source={{ uri : user.avatar }} style={styles.leftBottomLeftImage} /> : null;
  return(
    <View style={styles.leftBottomLeftContainer}>
      { content }
    </View>
  )
};

const LeftBottomCenterContainer = ({ user }) => {
  const content = user && user.name ? <Text style={styles.leftBottomLeftText}>{user.name}</Text> : null;
  return(
    <View style={styles.leftBottomCenterContainer}>
      { content }
    </View>
  )
};

const LeftBottomRightContainer = ({ item }) => {
  if (!item || !item.timestamp) return null;
  return (
    <View style={styles.leftBottomRightContainer}>
      <Text style={styles.leftBottomRightText}>{dateToFromNowDaily(item.timestamp)}</Text>
    </View>
  )
};

const CenterTopContainer = ({ item, onAdd }) =>
  <View style={styles.centerTopContainer}>
    <Icon
      name="plus"
      type="font-awesome"
      color="#55ab2b"
      onPress={() => { onAdd(item); }}
      containerStyle={styles.miniButtonIcon}
      size={16}
    />
  </View>;
const CenterCenterContainer = ({ quantity, unit }) =>
  <View style={styles.centerCenterContainer}>
    <Text style={styles.quantityText}>{quantity}</Text>
    <Text style={styles.unitText}>{unit || 'ad.'}</Text>
  </View>;
const CenterBottomContainer = ({ item, onSubtract }) =>
  <View style={styles.centerBottomContainer}>
    <Icon
      name="minus"
      type="font-awesome"
      color="#55ab2b"
      onPress={() => { onSubtract(item); }}
      containerStyle={styles.miniButtonIcon}
      size={16}
    />
  </View>;
const RightCenterContainer = ({ item, onRemoveItem }) =>
  <View style={styles.rightCenterContainer}>
    <Icon
      reverse
      name="remove"
      type="font-awesome"
      color="red"
      onPress={() => { onRemoveItem(item); }}
      containerStyle={styles.miniButtonReverseIcon}
      size={16}
    />
  </View>;
const RightBottomContainer = (props) => <View style={styles.rightBottomContainer}>{props.children}</View>;

const debug = false;

const common= {
  containerMargin: 5,
  containerInnerPadding: 5,
  size: 90,
  miniButtonHeight: 25,
  fontSize: 20,
  quantityTextColor: '#ff8a42',
  borderColor: '#efefef',
  sideFontSize: 11,
};

const styles= {
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
    backgroundColor: debug ? 'orange' : '#fff',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    backgroundColor: debug ? 'red' : '#fff',
  },
  leftTopContainer: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: debug ? 'lime' : '#fff',
  },
  leftTopCenterContainer: {
    height: 33,
    justifyContent: 'center',
    backgroundColor: debug ? 'red' : '#fff',
  },
  leftTopCenterText: {
    fontSize: 26,
  },
  leftBottomContainer: {
    height: 20,
    flexDirection: 'row',
    backgroundColor: debug ? 'purple' : '#fff',
  },
  leftBottomLeftContainer: {
    width: 20,
  },
  leftBottomLeftImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  leftBottomCenterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 4,
    backgroundColor: debug ? 'orange' : '#fff',
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
    backgroundColor: debug ? 'aliceblue' : '#fff',
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
  },
  rightContainer: {
    width: 50,
    backgroundColor: debug ? 'green' : '#fff',
    borderLeftWidth: 1,
    borderColor: common.borderColor,
  },
  miniButtonIcon: {
    height: '100%',
    width: '100%'
  },
  miniButtonReverseIcon: {
    height: common.miniButtonHeight + 5,
    width: common.miniButtonHeight + 5
  },
  quantityText: {
    fontSize: common.fontSize + 4,
    fontWeight: 'bold',
    color: common.quantityTextColor,
    textAlign: 'center'
  },
  unitText: {
    fontSize: common.fontSize - 4,
    fontWeight: 'bold',
    color: common.quantityTextColor,
    textAlign: 'center'
  },
  rightCenterContainer: {
    backgroundColor: debug ? 'green' : '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  rightBottomContainer: {
    backgroundColor: debug ? 'lime' : '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
};

export default ListItem;
