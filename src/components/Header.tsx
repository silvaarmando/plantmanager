import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../assets/profile-user.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
  return (
    <View
      style={styles.container}
    >
      <View>
        <Text
          style={styles.greeting}
        >
          Olá
        </Text>
        <Text
          style={styles.userName}
        >
          Armando
        </Text>
      </View>

      <Image
        source={userImg}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
    paddingVertical: 20,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 28,
  },

  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },

  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  }
});