import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import ProductCard from '../component/ProductCard';
import ScreenWrapper from '../containers/ScreenWrapper';
import {featureProducts, categories} from '../assets/constants';
import {stylesConstant} from '../styles/abstracts/abstracts';
import CategoryCard from '../component/CategoryCard';
import Button from '../component/common/Button';

const Home = () => {
  return (
    <ScreenWrapper>
      <View style={styles.heroSection}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Homemade-Fried-Dumplings-with-Soy-Sauce.png',
          }}
        />
      </View>
      <View style={styles.features}>
        <View style={styles.heading}>
          <Text style={styles.header}>Exclusively at Dumpling</Text>
          <View style={styles.btn}>
            <Button name="See More" />
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.featureProducts}>
            {featureProducts.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  onPress={() => {
                    console.log('a');
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View style={styles.features}>
        <View style={styles.heading}>
          <Text style={styles.header}>Categories</Text>
          <View style={styles.btn}>
            <Button name="See More" />
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.featureProducts}>
            {categories.map((category, index) => {
              return (
                <CategoryCard
                  key={index}
                  name={category.name}
                  image={category.image}
                  onPress={() => {
                    console.log('a');
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  heroSection: {
    height: Dimensions.get('window').height / 3,
    width: '100%',
  },

  image: {resizeMode: 'cover', height: '100%', width: '100%'},

  features: {
    marginTop: 8,
    backgroundColor: stylesConstant.color.cardBackgroundColor,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    // shadowRadius: 2,
    // elevation: 8,
    paddingBottom: 10,
  },

  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  header: {
    fontSize: stylesConstant.textSize.headers,
    fontWeight: '600',
    color: stylesConstant.color.primaryColor,
    padding: 10,
    paddingLeft: 0,
    letterSpacing: 0.8,
  },

  btn: {
    marginRight: 5,
  },

  featureProducts: {flexDirection: 'row'},
});
