import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';
import Category from './components/Explore/Catogery';

class Explore extends Component {

    componentWillMount() {
        this.startHeaderHeight = 80
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight;
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
                        <View style={{ flexDirection: 'row', 
                                        padding: 10, 
                                        backgroundColor: 'white', 
                                        marginHorizontal: 20,
                                        shadowOffset:{width: 0, height:0},
                                        shadowColor: 'black',
                                        shadowOpacity: 0.2,
                                        elevation: 1,
                                        marginTop: Platform.OS == 'android' ? 30 : null
                                }}>
                            <Icon name="ios-search" size={20} />
                            <TextInput 
                                underlineColorAndroid="transparent"
                                placeholder="Try 'Biryani'"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white', paddingLeft: 20}}
                                >
                            </TextInput>
                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20}}>
                                <Text style={{fontSize: 20, fontWeight: '700', paddingHorizontal: 20}}>
                                    What can we help you find, Kamal?
                                </Text>
                                <View style={{ height: 120, marginTop: 20}}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <Category imageUri={require('../assets/pic1.jpeg')} name="HOME" />
                                        <Category imageUri={require('../assets/pic1.jpeg')} name="HOME" />
                                        <Category imageUri={require('../assets/pic1.jpeg')} name="HOME" />
                                        <Category imageUri={require('../assets/pic1.jpeg')} name="HOME" />
                                    </ScrollView>
                                </View>
                                
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});