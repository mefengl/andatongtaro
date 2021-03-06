import { Popup } from '@taroify/core';
import { View } from '@tarojs/components';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import styles from './index.module.scss';
import LoginForm from './LoginForm';

export default function Index() {
  const needlogin = useSelector((state: RootState) => state.cookies.needlogin)

  return (
    <View>
      <Popup
        rounded
        open={needlogin}
        className='h-auto'
        placement='top'
      >
        <LoginForm />
      </Popup>
      <View className={styles.title}>你好，安大</View>
    </View>
  );
}
