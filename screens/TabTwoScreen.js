import { View, Text, Button, StyleSheet } from "react-native"

const TabTwoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VIMA</Text>
      <Button
        title="Filter"
        color="green"
        onPress={() => alert("Filter Options")}
      />
    </View>
  )
}
export default TabTwoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 80
  },
  text_button: {
    color: "#000",
    fontSize: 18
  },
  button: {
    alignItems: "center",
    marginTop: 500,
    backgroundColor: "#fff"
  }
})
// export default function TabTwoScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab Two</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
