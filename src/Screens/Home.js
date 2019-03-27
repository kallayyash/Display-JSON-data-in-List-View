import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, ListView, ActivityIndicator, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            dataSource: null,
            data: ''
        };
    }

    componentDidMount() {
        return fetch('http://www.json-generator.com/api/json/get/bUuKERYmMi?indent=2')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                console.log("josn", responseJson);
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: .7,
                    width: "100%",
                    backgroundColor: "#000",
                    padding: 1,
                    justifyContent:"center",
                    alignItems:'center'
                }}
            />
        );
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.subView}><Text>User Name is: {this.props.comingFrom}</Text></View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderSeparator={this.ListViewItemSeparator}
                        renderRow={(rowData) =>

                            <View style={styles.dataView}>
                                <TouchableOpacity>
                                    <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
                                        {/* <Text style={styles.textViewContainer} >{rowData.id}</Text> */}
                                    <Text style={styles.textViewContainer} >{rowData.title}</Text>
                                    <Text style={styles.textViewContainer} >{rowData.detail}</Text>
                                    <View><Image source={{ uri: rowData.img_url }} style={{ width: 50, height: 50 }} /></View>
                                    </View>
                                   
                                </TouchableOpacity>
                            </View>
                        }
                    />
                  
                </View>
            )
        }


    }

}



export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subView:{
        backgroundColor:"gray",
        color:"green", 
        padding:10,
        alignItems:"flex-end"
    },
    dataView :{ 
        flex: 1,
         flexDirection: 'column' 
        }
})