/**
 * @author DucPL
 */

import React, { Component } from 'react';
import { Item, Input } from 'native-base';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
  Platform,
  Dimensions,
  ImageBackground,
  Picker,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import LoginAction from '../redux/actions/LoginAction';
import StateUtil from '../utils/StateUtil';
import LoginStyle from '../assets/styles/LoginStyle';
import images from '../assets/image_source/Images';
import BackGroundImage from '../assets/background/BackGroundImage';

class Login extends Component {
  constructor(props) {
    super(props);
    // state is set because username & password will change a lot
    this.state = {
      username: '',
      password: ''
    };

    StateUtil.resetState(); // here when we get to Login component, all the states have to be reset.
  }

  // when user hit the login button
  handleLogin() {
    const { dispatch } = this.props;
    const { username, password } = this.state;
    if (username === 'ducphamle212' && password === '123456') { // fixed data
      // set time out here to wait for dispatch to finish (change isLoginSucess to true so we can move to other screens)
      setTimeout(() => {
        dispatch(LoginAction.isLoginSuccess(true));
      }, 200);
    }
    else {
      console.log("ERROR BITCH !!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 700
      }
    })
    const { username, password } = this.state;
    const { loginText, loginButton } = LoginStyle;
    return (
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <Image
              style={{
                width: '100%',
                height: '50%'
              }}
              source={images.loginBackGround}>
            </Image>

            <View style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
              <Text style={{
                color: '#3399CC',
                fontSize: 12.5,
                fontWeight: 'bold',
                marginLeft: 55,
                marginTop: 12
              }}>
                E-mail Address
                </Text>
              {/* border color is the color line under the Input component */}
              <Item style={{ marginLeft: 50, marginRight: 50, borderColor: '#3399CC'}}>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder={'username'}
                  inputFontSize={10}
                  inputHeightBase={10}
                  //lineHeight={10}
                  returnKeyType="next"
                  onChangeText={txt => this.setState({ username: txt })}
                  value={username}
                  maxLength={50}
                />
              </Item>

              <Text style={{
                color: '#3399CC',
                fontSize: 12.5,
                fontWeight: 'bold',
                marginLeft: 55,
                marginTop: 12
              }}>
                Password
                </Text>

              <Item style={{ marginBottom: 5, marginLeft: 50, marginRight: 50, borderColor: '#3399CC' }}>
                <Input
                  placeholder={'password'}
                  inputHeightBase={10}
                  inputFontSize={10}
                  secureTextEntry
                  underlineColorAndroid="transparent"
                  onChangeText={txt => this.setState({ password: txt })}
                  value={password}
                  maxLength={20}
                />
              </Item>

              <TouchableHighlight
                disabled={false}
                style={loginButton}
                onPress={this.handleLogin.bind(this)}
              >
                <Text style={loginText}>SIGN IN</Text>
              </TouchableHighlight>
              
              <Text style={{
                color: '#3399CC',
                fontSize: 12.5,
                fontWeight: 'bold',
                marginLeft: 150,
                marginTop: 5
              }}>
                Forgot password ?
                </Text>

              <Text style={{
                color: '#3399CC',
                fontSize: 12.5,
                fontWeight: 'bold',
                marginLeft: 109,
                marginTop: 15
              }}>
                Do not have an account ? <Text style = {{
                  color: '#DB1E4A',
                  fontSize: 12.5
                }}>SIGN UP</Text>
                </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default connect(state => ({
  isLoginSuccess: state.LoginReducer.isLoginSuccess,
  username: state.LoginReducer.username,
  password: state.LoginReducer.password
}))(Login);