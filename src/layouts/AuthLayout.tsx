import React from 'react'
import tw from 'twrnc'
import { fonts } from '../styles/global'
import { ScrollView, SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useNavigate } from '../utils/RootNavigation'

interface TypedProps {
  children: any
}

const AuthLayout: React.FC<TypedProps> = ({ children }) => {

  const route = useRoute()

  return (
    <SafeAreaView style={tw`flex-1 flex-row items-center justify-center w-full bg-white dark:bg-[#262626]`}>
      <ScrollView style={tw`flex-1 w-full`} keyboardShouldPersistTaps="handled">
        <View style={tw`flex-col w-full p-5`}>
          <View style={tw`flex-col items-center w-full`}>
            <View style={tw`flex-row justify-center w-full overflow-hidden rounded-xl`}>
              <Image
                style={tw`w-[15rem] h-[3rem]`}
                resizeMode="contain"
                source={require('../assets/images/recipe-official.png')}
              />
            </View>
            <Text style={[tw`text-base text-[#33333] dark:text-neutral-400 mt-1 mr-1`, fonts.fontPoppinsLight]}>Your daily recipe at a glance</Text>
          </View>
          <View style={tw`flex-col items-center w-full py-5`}>
            {children}
          </View>
          {route.name !== 'ForgotPasswordScreen' && (
            <View style={tw`flex-col items-center w-full my-1`}>
              {route.name === 'SignUpScreen' && (
                <Text style={[tw`text-sm text-neutral-500 dark:text-neutral-400 mb-2`, fonts.fontPoppins]}>Have already an account?</Text>
              )}
              <TouchableOpacity
                style={tw`flex-col items-center w-full px-3 py-3 rounded-xl border border-neutral-200 dark:border-[#383838] bg-white dark:bg-[#383838]`}
                activeOpacity={0.7}
                onPress={() => {
                  if (route.name === 'SignInScreen') {
                    useNavigate('SignUpScreen')
                  } else {
                    useNavigate('SignInScreen')
                  }
                }}
              >
                <Text style={[tw`text-sm text-neutral-500 dark:text-neutral-400`, fonts.fontPoppinsSemiBold]}>
                  {`${ route.name === 'SignInScreen' ? 'Create Account' : 'Sign In' }`}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AuthLayout