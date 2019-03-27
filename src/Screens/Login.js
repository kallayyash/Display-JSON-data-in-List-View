import React, { Component } from 'react';
import {Text,View, TouchableOpacity, TextInput, StatusBar,Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            Username: '',
            password: '',
            error: null,
        };
    }
   
    onUsernameChange = (Username) => {
        this.setState({ 
            Username: Username
        });
      }

    render() {
        return (
            <View style={styles.container}>
          <StatusBar
            backgroundColor="#222"
            barStyle="light-content"
          />
         <View style={{ flex: 1 }}>
                  <Text>Logo.</Text>
          </View>

        <View stryle={{flex:1,alignItems:"center",textAlign:"center"}}>
          <TextInput placeholder="Username" style={styles.textDesign}
            keyboardType='email-address' placeholderTextColor='gray' 
            onChangeText={(Username) => this.setState({Username})}
            autoCapitalize="none"
            autoCorrect={false}
            />
          <TextInput placeholder="Password" style={styles.textDesign}
            placeholderTextColor='gray' 
            onChangeText={(password) => this.setState({password})}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
             />
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={() => {
                  Actions.home({comingFrom:this.state.Username});
              }}>Log In</Text>
          </TouchableOpacity>
        </View>

      </View>
        )
    }
}

export default Login

const styles = {
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDesign: {
        width: 300,
        borderColor: 'gray',
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        color: 'black',
        paddingHorizontal: 16,  //textinput inside leave space 
        fontSize: 16,
    },
    button: {
        width: 300,
        backgroundColor: '#f26522',
        borderRadius: 25,
        marginVertical: 10, //for spacing b/n pass and button 
        paddingVertical: 13  //button size
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    logoText : {
        marginVertical: 15,
        fontSize:10,
        color:'rgba(255, 255, 255, 0.7)',
        
    },
   
}