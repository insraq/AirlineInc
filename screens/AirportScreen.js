import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
} from 'react-native';
import { MonoText } from '../components/StyledText';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from 'Colors';

const airports = [
  { key: 'AMS', name: 'Amsterdam Airport Schiphol', city: 'Amsterdam', flag: '🇳🇱', passengerCount: 63625664 },
  { key: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', flag: '🇫🇷', passengerCount: 65933145 },
  { key: 'ARN', name: 'Stockholm Arlanda Airport', city: 'Stockholm', flag: '🇸🇪', passengerCount: 24682466 },
  { key: 'OSL', name: 'Oslo Airport, Gardermoen', city: 'Oslo', flag: '🇳🇴', passengerCount: 25787691 },
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _renderItem({ item }) {
    return (
      <View style={{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}>
        <Text style={{ fontSize: 20 }}>  {item.flag}
          <MonoText style={{ color: Colors.tintColor }}> {item.key} </MonoText>
        </Text>
        <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
          <Text numberOfLines={1} style={{ fontSize: 14, color: '#999' }}>{item.name}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flexGrow: 1, backgroundColor: '#fff' }}>
        <View style={{
          alignItems: 'center',
          marginHorizontal: 10,
          height: 80,
          flexDirection: 'row'
        }}>
          <View style={{ flex: 1, alignItems: 'flex-start' }}>
            <Text style={{ fontSize: 25 }}>$20m</Text>
            <Text style={{ fontSize: 11, color: '#999' }}>Cash</Text>
          </View>
          <View style={{
            flex: 1,
            alignItems: 'center',
            // borderLeftColor: '#eee',
            // borderRightColor: '#eee',
            // borderLeftWidth: StyleSheet.hairlineWidth,
            // borderRightWidth: StyleSheet.hairlineWidth,
          }}>
            <Text style={{ fontSize: 25 }}>-$8k</Text>
            <Text style={{ fontSize: 11, color: '#999' }}>Profit</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 25 }}>23</Text>
            <Text style={{ fontSize: 11, color: '#999' }}># Aircrafts</Text>
          </View>
        </View>
        <View style={{
          backgroundColor: '#f4f4f4',
          padding: 10,
          borderBottomColor: '#eee',
          borderTopColor: '#eee',
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderTopWidth: StyleSheet.hairlineWidth,
        }}>
          <Text style={{ color: '#aaa' }}>ROUTES</Text>
        </View>
        <FlatList
          style={{ backgroundColor: '#fff' }}
          ListHeaderComponent={(
            <View style={{
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#eee',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}>
              <MaterialIcons
                style={{ marginHorizontal: 10 }}
                color={Colors.tintColor}
                size={20}
                name="add-circle-outline" />
              <Text style={{ fontWeight: 'bold', color: Colors.tintColor }}>New Route</Text>
            </View>
          )}
          data={airports}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
