import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import 'react-native-reanimated';
// 
import { useColorScheme } from '@/hooks/useColorScheme';
import { Drawer } from '@/components/Drawer';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer />
    </ThemeProvider>
  );
}
