import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import {checkVerification} from "../../api/verify"
import OTPInputView from '@twotalltotems/react-native-otp-input'



const Otp = ({route, navigation}) => {
    const { phoneNumber } = route.params;
    const [invalidCode, setInvalidCode] = useState(false);
  return (
    <SafeAreaView style={styles.wrapper}>
    <Text style={styles.prompt}>Enter the code we sent you</Text>
    <Text style={styles.message}>
      {`Your phone (${phoneNumber}) will be used to protect your account each time you log in.`}
    </Text>
    <Button
      title="Edit Phone Number"
      onPress={() => navigation.replace("Home")}
    />
    <OTPInputView
      style={{ width: "80%", height: 200 }}
      pinCount={6}
      autoFocusOnLoad
      codeInputFieldStyle={styles.underlineStyleBase}
      codeInputHighlightStyle={styles.underlineStyleHighLighted}
      onCodeFilled={(code) => {
        checkVerification(phoneNumber, code).then((success) => {
          if (!success) setInvalidCode(true);

          //check db
          success && navigation.replace("Question");
        });
      }}
    />
    {invalidCode && <Text style={styles.error}>Incorrect code.</Text>}
  </SafeAreaView>
  )
}

export default Otp

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
     
      borderStyleBase: {
        width: 30,
        height: 45,
      },
     
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
     
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: "black",
        fontSize: 20,
      },
     
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
     
      prompt: {
        fontSize: 24,
        paddingHorizontal: 30,
        paddingBottom: 20,
      },
     
      message: {
        fontSize: 16,
        paddingHorizontal: 30,
      },
     
      error: {
        color: "red",
      },
})