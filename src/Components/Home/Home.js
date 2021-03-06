import React, { Component } from 'react';
import { Text, View, TouchableOpacity, 
    StatusBar, FlatList, Image, ActivityIndicator, Dimensions, Platform,
} from 'react-native';

//file component
import HeaderComponent from '../Header/Header';

//file css
import styles from './Styles';

//library ngoai
import * as Animatable from 'react-native-animatable';

// file const
const { height } = Dimensions.get('screen');

//file db
import { auth, firestore } from '../../Database/Firebase/ConfigGlobalFirebase';

//custom item city top
const ItemCitiesTop = ({ name, description, image, navigation, id }) => {
    return (
        <TouchableOpacity 
            onPress={() => {
                navigation.navigate('Tours Screen', {
                    idCity: id
                });
            }}
            activeOpacity={.7}
        >
            <Animatable.View 
                style={styles.containerItemCity}
                animation="fadeInUpBig"
            >
                <Image 
                    style={styles.imageItemCity}
                    source={{uri: image}}
                />
                <View style={styles.containerLayoutItemCity}>
                    <View style={styles.containerItemInfo}>
                        <Text style={styles.textItemNameCity}>{name}</Text>
                        <View style={styles.containerDescription}>
                            <Text style={styles.textDescription}>{description}</Text>
                        </View>
                    </View>
                </View>
            </Animatable.View>
        </TouchableOpacity>
    );
}

//list all item city
const ItemCitiesAll = ({ name, image, navigation, id }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Tours Screen', {
                    idCity: id
                });
            }}
        >
            <Animatable.View 
                style={styles.containerViewAll}
                animation="fadeIn"
            >
                <View style={styles.containerImageViewAll}>
                    <Image 
                        style={styles.imageCitiesAll}
                        source={{uri: image}}
                    />
                </View>
                <View style={styles.containerInfoViewAll}>
                    <Text style={styles.textViewAll}>{name}</Text>
                </View>
            </Animatable.View>
        </TouchableOpacity>
    );
}

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            viewAll: false,
        }
    }

    componentDidMount() {
        this.props._onGetCities('countries/vietnam/cities');
    }

    render() {
        const { viewAll } = this.state;

        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content"/>
                {/* phan header */}
                <HeaderComponent {...this.props} isHome={true}/>
                {/* phan get du lieu */}
                <View style={styles.containerTop}>
                    <View style={styles.containerTopDestinations}>
                        <Text style={styles.textTitle}>
                            {
                                !viewAll ? 'Những thành phố hấp dẫn nhất'
                                : 'Tất cả những thành phố'
                            }
                        </Text>
                        <TouchableOpacity
                            onPress={() => this.setState({ viewAll: !viewAll })}
                        >
                            <Text style={styles.textSeeAll}>
                                {
                                    !viewAll ? 'Tất cả'
                                    : 'Thu gọn'
                                }
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* view top city */}
                    {
                        this.props.cities.length === 0 ? <ActivityIndicator size={300}/>
                        : 
                        <FlatList
                            data={this.props.cities.sort((a, b) => b.visits - a.visits)}
                            keyExtractor={item => item.id}
                            renderItem={({item, index}) => {
                                if(!viewAll && index <= 3) {
                                    return (
                                        <ItemCitiesTop 
                                            name={item.name} 
                                            image={item.image} 
                                            description={item.description}
                                            navigation={this.props.navigation}
                                            id={item.id}
                                        />
                                    );
                                } else if(viewAll) {
                                    return (
                                        <ItemCitiesAll 
                                            name={item.name} 
                                            image={item.image} 
                                            navigation={this.props.navigation}
                                            visitors={item.visitors}
                                            id={item.id}
                                        />
                                    );
                                }
                            }}
                            horizontal={viewAll ? false : true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            style={ viewAll ? 
                                { height: Platform.OS === 'android' ? height * 0.64 : height * 0.72, marginBottom: 200 } 
                                : {}
                            }
                        />
                    }
                </View>
            </View>
        )
    }
}