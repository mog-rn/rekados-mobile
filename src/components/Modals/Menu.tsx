import React from 'react'
import tw from 'twrnc'
import { fonts } from '../../styles/global'
import { MaterialIcon } from '../../utils/Icons'
import { View, Text, Modal, Pressable, TouchableOpacity, Linking } from 'react-native'
import { useLogoutMutation } from '../../lib/ReactQuery'
import { useNavigate } from '../../utils/RootNavigation'

interface MenuTypes {
  user: any
  modalVisible: any
  setModalVisible: any
}

const Menu: React.FC<MenuTypes> = ({ user, modalVisible, setModalVisible }) => {

  const logoutMutation = useLogoutMutation()

  const onLogout = async () => {
    await logoutMutation.mutateAsync()
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false)
      }}      
    >
      <Pressable
        style={tw`absolute inset-0 w-full h-full`}
        onPress={() => {
          setModalVisible(false)
        }}
      />
      <View style={tw`absolute bottom-0 rounded-t-3xl overflow-hidden w-full bg-[#F3B900]`}>
        <View style={tw`flex flex-col w-full mt-1 rounded-t-3xl bg-white dark:bg-[#262626]`}>
          <View style={tw`flex flex-row items-center px-5 py-3`}>
            <Text style={[tw`text-xl text-neutral-600 dark:text-neutral-200`, fonts.fontPoppinsBold]}>Menu</Text>
          </View>
          <View>
            <TouchableOpacity
              style={tw`flex flex-row items-center w-full px-5 py-3 border-t border-neutral-300 dark:border-neutral-700`}
              activeOpacity={0.6}
              onPress={() => {
                useNavigate('UserScreen', { id: user.id })
                setModalVisible(false)
              }}
            >
              <MaterialIcon
                name="person"
                size="small"
                color="#7c7c7c"
              />
              <Text style={[tw`ml-3 text-base text-neutral-500 dark:text-neutral-400`, fonts.fontPoppins]}>{ user.name }</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`flex flex-row items-center w-full px-5 py-3 border-t border-neutral-300 dark:border-neutral-700`}
              activeOpacity={0.6}
              onPress={() => {
                useNavigate('UserSettingScreen', { id: user.id })
              }}
            >
              <MaterialIcon
                name="gear"
                size="small"
                color="#7c7c7c"
              />
              <Text style={[tw`ml-3 text-base text-neutral-500 dark:text-neutral-400`, fonts.fontPoppins]}>Settings</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={tw`flex flex-row items-center w-full px-5 py-3 border-t border-neutral-300 dark:border-neutral-700`}
              activeOpacity={0.6}
              onPress={() => {
                console.log('Terms of Service')
              }}
            >
              <MaterialIcon
                name="log"
                size="small"
                color="#7c7c7c"
              />
              <Text style={[tw`ml-3 text-base text-neutral-500 dark:text-neutral-400`, fonts.fontPoppins]}>Terms of Use</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={tw`flex flex-row items-center w-full px-5 py-3 border-t border-neutral-300 dark:border-neutral-700`}
              activeOpacity={0.6}
              onPress={onLogout}
            >
              <MaterialIcon
                name="reply"
                size="small"
                color="#F3B900"
              />
              <Text style={[tw`ml-3 text-base text-[#F3B900]`, fonts.fontPoppins]}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default Menu