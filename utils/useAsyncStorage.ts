import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

// export function addToStorage(someObject: any) {
//   AsyncStorage;

//   if (bool) {
//     storage
//       .save({ key: "AuthState", data: someObject, expires: 1000 * 3600 })
//       .catch((error) => console.log("error coming"));
//     alert("Changes to AuthState");
//     return;
//   }

//   storage
//     .load({
//       key: "AuthState",
//       autoSync: true,
//       syncInBackground: true,
//       syncParams: {
//         extraFetchOptions: {},
//         someFlag: true,
//       },
//     })
//     .then((ret) => {
//       console.log(ret);
//     })
//     .catch((error) => {
//       alert(error);
//     });
//   alert("Changes to AuthState");
//   return;
// }
function useAsyncStorage(key) {
  const [storageValue, setStorageValue] = useState(null);

  const setItem = async (valueToSet) => {
    try {
      AsyncStorage.getItem(key, (valueToSet) => valueToSet);
      
    } catch (error) {
      console.error("Error setting data:", error);
    }
  };

  // Function to get a value from AsyncStorage
  const getItem = async () => {
    try {
      const storedValue = await AsyncStorage.getItem(key);
      setStorageValue(storedValue);
      return storedValue;
    } catch (error) {
      console.error("Error getting data:", error);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return { storageValue, setItem, getItem };
}

export default useAsyncStorage;
