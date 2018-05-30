import React from 'react';
import { View, Picker, Text, Button } from 'react-native';
import 'moment/locale/tr';
import { Input } from 'react-native-elements';
import shoppingListStyles from './styles';
import { globalStyles } from '../../../globals';

class EditListItem extends React.PureComponent {
  render() {
    const { item, setProp, onFinishSave, setNameInput } = this.props;
    return (
      <Container>
        <View style={styles.upperContainer}>
          <Text style={{ flex: 1 }}>Ürün</Text>
          <Text style={{ width: common.unitWidth }}>Birim</Text>
          <View style={{ width: common.addButtonWidth }} />
        </View>
        <InnerContainer>
          <NameContainer
            item={item}
            setProp={setProp}
            setNameInput={setNameInput}
          />
          <UnitContainer item={item} setProp={setProp} />
          <AddContainer item={item} onFinishSave={onFinishSave} />
        </InnerContainer>
      </Container>
    );
  }
}

const Container = props => (
  <View style={styles.container}>{props.children}</View>
);
const InnerContainer = props => (
  <View style={styles.innerContainer}>{props.children}</View>
);

const NameContainer = ({ item, setProp, setNameInput }) => (
  <View style={styles.nameContainer}>
    <Input
      selectTextOnFocus
      ref={input => setNameInput(input)}
      containerStyle={styles.text}
      style={styles.text}
      value={item.name}
      onChangeText={name => setProp('name', name)}
    />
  </View>
);

const UnitContainer = ({ item, setProp }) => (
  <View style={styles.unitContainer}>
    <Picker
      style={styles.picker}
      itemStyle={[styles.picker, { fontSize: 19 }]}
      mode="dropdown"
      label="Birim"
      selectedValue={item.unit}
      onValueChange={unit => setProp('unit', unit)}
    >
      <Picker.Item label="kg." value="kg." />
      <Picker.Item label="gr." value="gr." />
      <Picker.Item label="adet" value="ad." />
      <Picker.Item label="lt." value="lt." />
      <Picker.Item label="ml." value="ml." />
    </Picker>
  </View>
);

const AddContainer = ({ onFinishSave, item }) => (
  <View style={styles.addContainer}>
    <Button
      title="OK"
      onPress={() => {
        onFinishSave(item);
      }}
      color={globalStyles.primaryColor}
    />
  </View>
);

const debug = false;

const common = {
  unitWidth: 50,
  addButtonWidth: 50
};

const styles = {
  container: {
    height: shoppingListStyles.editListItem.height,
    padding: shoppingListStyles.editListItem.padding,
    backgroundColor: '#fff',
    margin: shoppingListStyles.editListItem.margin,
    borderRadius: 5
  },
  upperContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: debug ? 'purple' : '#fff'
  },
  innerContainer: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: debug ? 'purple' : '#fff'
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: debug ? 'yellow' : '#fff'
  },
  unitContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: common.unitWidth,
    backgroundColor: debug ? 'green' : '#fff'
  },
  addContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: common.addButtonWidth,
    backgroundColor: debug ? 'blue' : '#fff'
  },
  text: {
    width: '100%',
    padding: 5,
    backgroundColor: debug ? 'red' : '#fff'
  },
  picker: {
    height: 50,
    width: 50,
    backgroundColor: debug ? 'orange' : '#fff'
  }
};

export default EditListItem;
