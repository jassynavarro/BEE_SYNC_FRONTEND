import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import axios from "axios";

// THIS IS THE NOTIFICATION PAGE
const Notif = () => {
  const [notifications, setNotifications] = useState([]); // Store notifications

  // Fetch notifications from API
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("https://your-api.com/notifications"); // Replace with your API
        setNotifications(response.data); // Update state with API data
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []); // Runs only once when the component loads

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const renderDetails = (details: string) => {
    const boldWords = ["Check the drainage", "Wash the Dishes", "Talk to Landlord", "Pay the Wifi", "Pay the Water"];

    const parts = boldWords.reduce((acc, word) => {
      const regex = new RegExp(`(${word})`, "gi");
      return acc.flatMap((part) => (typeof part === "string" ? part.split(regex).filter(Boolean) : [part]));
    }, [details]);

    return (
      <Text style={{ fontFamily: "Medium", color: "#404040", fontSize: 14 }}>
        {parts.map((part, index) =>
          boldWords.includes(part) ? (
            <Text key={index} style={{ fontFamily: "Bold" }}>
              {part}
            </Text>
          ) : (
            part
          )
        )}
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notifications} // Uses API data
        keyExtractor={(item, index) => item.id.toString()} // Convert ID to string
        renderItem={({ item }) => (
          <SafeAreaView style={styles.notificationContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <SafeAreaView style={{ flexDirection: "column", marginLeft: 13, marginRight: 50 }}>
              {renderDetails(item.details)}
              <Text style={{ color: "#A0A0A0", fontSize: 14, fontFamily: "Medium" }}>{item.time}</Text>
            </SafeAreaView>
          </SafeAreaView>
        )}
        ItemSeparatorComponent={renderSeparator} // Adds separator between notifications
      />
    </SafeAreaView>
  );
};

export default Notif;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFCF0",
    paddingVertical: 15,
    paddingHorizontal: 7,
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#AFB1B6",
    marginHorizontal: 10,
    marginLeft: 65,
  },
});
