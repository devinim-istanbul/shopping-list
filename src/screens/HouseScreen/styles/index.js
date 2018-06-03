const common = {
  imageHeight: 85,
  imagePadding: 20,
  inputHeight: 45,
  inputPadding: 10,
};

export default {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: common.imagePadding,
    height: 280,
  },
  image: {
    height: common.imageHeight,
    width: 300,
    bottom: 0,
  },
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    height: common.inputHeight + common.inputPadding,
    paddingTop: common.inputPadding,
    paddingLeft: common.inputPadding,
    paddingRight: common.inputPadding,
  },
  inputWrapper: {
    height: common.inputHeight,
    borderRadius: 30,
    justifyContent: 'center',
  },
  separator: {
    height: 20
  },
  textInputWrapper: {
    backgroundColor: '#e6f8d3',
    paddingLeft: 20,
  },
  loginInputWrapper: {
    backgroundColor: '#7ED321',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  googleLoginInputWrapper: {
    backgroundColor: '#D34836',
  }

};

