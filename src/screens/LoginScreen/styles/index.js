import { globalStyles } from '../../../globals';

const common = {
  inputHeight: 45,
  inputPadding: 10,
  backgroundColor: globalStyles.primaryColor
};

export default {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  formContainer: {
    flex: 1
  },
  inputContainer: {
    height: common.inputHeight + common.inputPadding,
    paddingTop: common.inputPadding,
    paddingLeft: common.inputPadding,
    paddingRight: common.inputPadding
  },
  inputWrapper: {
    height: common.inputHeight,
    borderRadius: 30,
    justifyContent: 'center'
  },
  separator: {
    height: 20
  },
  textInputWrapper: {
    padding: 10
  },
  loginButtonText: {
    fontSize: 18,
    color: '#fff'
  },
  googleLoginInputWrapper: {
    backgroundColor: globalStyles.googleColor
  }
};
