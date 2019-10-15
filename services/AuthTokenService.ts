import { AsyncStorage } from 'react-native';

const KEY = '@Automate:AUTH_TOKEN';

class AuthTokenService {
  saveToken = async (token: string) => {
    try {
      await AsyncStorage.setItem(KEY, token);
    } catch (error) {
      // Error saving data
    }
  }

  getToken = async () => {
    try {
      return await AsyncStorage.getItem(KEY);
    } catch (error) {
      // Error retrieving data
    }
  }

  isLoggedIn = async () => {
    return !!(await this.getToken());
  }
}

export default new AuthTokenService();
