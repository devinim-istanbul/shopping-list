const common = {
  margin: 20
};

export default {
  container: {
    height: common.miniButtonSize * 3,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: common.borderRadius,
    marginBottom: 6,
    elevation: 1,
  },
  selectContainer: {
    width: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    height: common.size - common.padding,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedImage: {
    height: common.selectedImageSize,
    width: common.selectedImageSize
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  },
  quantityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: common.padding,
    flexDirection: 'column'
  },
  nameText: {
    fontSize: common.fontSize - 2,
    color: common.textColor,
    width: '100%'
  },
  quantity: {
    width: common.miniButtonSize + 25,
    flexDirection: 'row'
  },
  quantityText: {
    fontSize: common.fontSize + 4,
    fontWeight: 'bold',
    color: common.quantityTextColor,
    textAlign: 'center'
  },
  unitText: {
    fontSize: common.fontSize - 5,
    color: common.quantityTextColor,
    textAlign: 'center',
    bottom: 0
  },
  miniButton: {
    height: common.miniButtonSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniButtonIcon: {
    height: '100%',
    width: '100%'
  },
  addButton: {
    width: common.miniButtonSize
  },
  subtractButton: {
    width: common.miniButtonSize
  }
};
