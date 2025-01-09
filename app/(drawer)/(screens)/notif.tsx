import { FlatList, SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

// THIS IS THE NOTIFICATION PAGE

const notif = () => {
  const renderSeparator = () => { // Bold specific text/phrase in a sentence or text.
    return <View style={style.separator} />;
  };

  const renderDetails = (details: string) => {
    // Define the key details that should be bold
    const boldWords = ["Check the drainage", "Wash the Dishes", "Talk to Landlord", "Pay the Wifi", "Pay the Water"];
  
    // Split the details into parts based on the key phrases
    const parts = boldWords.reduce((acc, word) => {
      const regex = new RegExp(`(${word})`, "gi");
      return acc.flatMap((part) =>
        typeof part === "string" ? part.split(regex).filter(Boolean) : [part]
      );
    }, [details]);
  
    return (
      <Text style={{fontFamily: 'Medium', color: '#404040', fontSize: 14}} // Black
      >
        {parts.map((part, index) =>
          boldWords.includes(part) ? (
            <Text key={index} style={{ fontFamily: 'Bold' }}>
              {part}
            </Text >
          ) : (
            part
          )
        )}
      </Text>
    );
  };
  const data = [
    { id: '1', 
      notif_Image: require('../../../assets/images/task_2.png'),
      details: 'Your assigned task Check the drainage is due by 08:00 PM.',
      time: '1h'
    },
    { id: '2', 
      notif_Image: require('../../../assets/images/house.png'),
      details: 'Your assigned chore Wash the Dishes is due by 12:00 PM.',
      time: '1h'
    },
    { id: '3', 
      notif_Image: require('../../../assets/images/task_2.png'),
      details: 'Your assigned task Talk to Landlord is due by 01:00 PM.',
      time: '1h'
    },
    { id: '4', 
      notif_Image: require('../../../assets/images/bill.png'),
      details: 'Your assigned bill Pay the Wifi is due by October 15, 2024',
      time: '1h'
    },
    { id: '5', 
      notif_Image: require('../../../assets/images/bill.png'),
      details: 'Your assigned bill Pay the Water is due by 12:00 PM.',
      time: '1h'
    },
    { id: '6', 
      notif_Image: require('../../../assets/images/task_2.png'),
      details: 'Your assigned task Check the drainage is due by 08:00 PM.',
      time: '1h'
    },
    { id: '7', 
      notif_Image: require('../../../assets/images/house.png'),
      details: 'Your assigned chore Wash the Dishes is due by 12:00 PM.',
      time: '1h'
    },
    { id: '8', 
      notif_Image: require('../../../assets/images/task_2.png'),
      details: 'Your assigned task Talk to Landlord is due by 01:00 PM.',
      time: '1h'
    },
    { id: '9', 
      notif_Image: require('../../../assets/images/bill.png'),
      details: 'Your assigned bill Pay the Wifi is due by October 15, 2024',
      time: '1h'
    },
    { id: '10', 
      notif_Image: require('../../../assets/images/bill.png'),
      details: 'Your assigned bill Pay the Water is due by 12:00 PM.',
      time: '1h'
    },

  ];

  return (
    <SafeAreaView style={ style.container }>
      <FlatList
        data={data} // List data
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => {
          return (
            <SafeAreaView style={ style.container } //This is the flatlist container where it styles and stores the notifications.
            > 

              <SafeAreaView style={ style.HeaderLeftImageView }>
                <Image 
                  style={ style.HeaderLeftImage }
                  source={item.notif_Image}/>
              </SafeAreaView>

              <SafeAreaView style={ {flexDirection: 'column', marginLeft: 13, marginRight: 50} }> 
                  {renderDetails(item.details)}             
                  <Text style={{color: '#A0A0A0', fontSize: 14, fontFamily: 'Medium'}}>{item.time}</Text>              
              </SafeAreaView>    

              <SafeAreaView style={ {flexDirection: 'row', marginLeft: 10} }>
                <Image 
                  style={ style.HeaderLeftImage }
                  source={item.notif_Image}/>
              </SafeAreaView>     

            </SafeAreaView>
          )
        }} 
        ItemSeparatorComponent={renderSeparator} //Line or separator for the notifications.
      />
    </SafeAreaView>
  );
}
export default notif

const style = StyleSheet.create ({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingVertical: 15,
    paddingHorizontal: 7,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFCF0',
  },
  HeaderLeftImage: {
    width: '100%',
    height: '100%',
  },
  HeaderLeftImageView: {
    width: 45,
    height: 45,
    borderRadius: 40/2,
  },
  separator: {
    height: 1,
    backgroundColor: '#AFB1B6',
    marginHorizontal: 10, // Optional for padding around the separator  
    marginLeft: 65, 
  }
})
