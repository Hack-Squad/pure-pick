import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ScoreCalculationDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Understanding Your Product's Health Score and Processing Level</Text>

      {/* Section: Health Score Explained */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Health Score Explained</Text>
        <Text style={styles.text}>
          Our health score provides a quick assessment of a product's nutritional value, ranging from 0 to 100. Higher
          scores indicate healthier choices based on WHO guidelines.
        </Text>

        <Text style={styles.subsectionTitle}>What We Consider:</Text>
        <Text style={styles.bulletPoint}>• Balanced Nutrition (35%): The balance of proteins, carbs, and fats</Text>
        <Text style={styles.bulletPoint}>• Vitamin and Mineral Content (20%): Variety of essential nutrients</Text>
        <Text style={styles.bulletPoint}>• Fiber Content (10%): Foods rich in fiber score higher</Text>
        <Text style={styles.bulletPoint}>• Sugar Content (10%): Lower sugar levels are better</Text>
        <Text style={styles.bulletPoint}>• Sodium Levels (15%): Less sodium is preferred</Text>
        <Text style={styles.bulletPoint}>• Additives (10%): Fewer artificial additives result in a higher score</Text>

        <Text style={styles.subsectionTitle}>How to Interpret the Score:</Text>
        <Text style={styles.bulletPoint}>• 75-100: Good choice</Text>
        <Text style={styles.bulletPoint}>• 40-74: Not ideal</Text>
        <Text style={styles.bulletPoint}>• 0-39: Poor choice</Text>

        <Text style={styles.note}>
          Note: This score is a general guide based on World Health Organization recommendations. It's designed to help you make quick comparisons between similar products.
        </Text>
      </View>

      {/* Section: NOVA Food Classification */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>NOVA Food Classification</Text>
        <Text style={styles.text}>
          In addition to the health score, we classify products based on their level of processing using the NOVA system:
        </Text>

        <View style={styles.novaSection}>
          <View style={[styles.novaHeader, { backgroundColor: '#A0D6B4' }]}>
            <Text style={styles.novaTitle}>1. Minimally Processed</Text>
          </View>
          <View style={styles.novaContent}>
            <Text style={styles.text}>Whole foods with little or no processing. Natural and nutrient-rich.</Text>
            <Text style={styles.bulletPoint}>• Very few ingredients, mostly whole foods</Text>
            <Text style={styles.bulletPoint}>• No or very few additives (0-1)</Text>
            <Text style={styles.bulletPoint}>• Example: Fresh fruits, vegetables, nuts, meats</Text>
          </View>
        </View>

        <View style={styles.novaSection}>
          <View style={[styles.novaHeader, { backgroundColor: '#F7C59F' }]}>
            <Text style={styles.novaTitle}>2. Processed Culinary Ingredients</Text>
          </View>
          <View style={styles.novaContent}>
            <Text style={styles.text}>Ingredients derived from whole foods, used in cooking and food preparation.</Text>
            <Text style={styles.bulletPoint}>• Few ingredients, often used in cooking</Text>
            <Text style={styles.bulletPoint}>• May contain 1-2 additives, typically for preservation</Text>
            <Text style={styles.bulletPoint}>• Example: Oils, vinegar, sugars, salts</Text>
          </View>
        </View>

        <View style={styles.novaSection}>
          <View style={[styles.novaHeader, { backgroundColor: '#FFB3B3' }]}>
            <Text style={styles.novaTitle}>3. Processed Foods</Text>
          </View>
          <View style={styles.novaContent}>
            <Text style={styles.text}>
              Foods with added ingredients like sugar, oil, or salt for flavor and preservation.
            </Text>
            <Text style={styles.bulletPoint}>• Multiple ingredients, including some additives</Text>
            <Text style={styles.bulletPoint}>• Usually contains 2-5 additives</Text>
            <Text style={styles.bulletPoint}>• Example: Canned vegetables with added salt, fruits in syrup, cheeses</Text>
          </View>
        </View>

        <View style={styles.novaSection}>
          <View style={[styles.novaHeader, { backgroundColor: '#FA8072' }]}>
            <Text style={styles.novaTitle}>4. Ultra-Processed Foods</Text>
          </View>
          <View style={styles.novaContent}>
            <Text style={styles.text}>
              Formulations of ingredients, mostly of exclusive industrial use, that result from a series of industrial
              processes.
            </Text>
            <Text style={styles.bulletPoint}>• Many ingredients, including several additives</Text>
            <Text style={styles.bulletPoint}>
              • Contains more than 5 additives or specific additives like artificial sweeteners, color additives, or
              flavor enhancers
            </Text>
            <Text style={styles.bulletPoint}>• Example: Soft drinks, packaged snacks, many ready-to-eat meals</Text>
          </View>
        </View>

        <Text style={styles.remember}>
          Remember: While the health score gives you a nutritional overview, the NOVA classification helps you
          understand the level of processing. Generally, less processed foods (lower NOVA categories) are considered
          healthier choices.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  text: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#333333',
    marginLeft: 16,
    marginBottom: 4,
  },
  note: {
    fontSize: 12,
    color: '#777777',
    fontStyle: 'italic',
  },
  novaSection: {
    marginBottom: 16,
  },
  novaHeader: {
    padding: 8,
  },
  novaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  novaContent: {
    padding: 8,
    backgroundColor: '#F5F5F5',
  },
  remember: {
    fontSize: 12,
    color: '#333333',
    fontStyle: 'italic',
    marginTop: 16,
  },
});

export default ScoreCalculationDetailsScreen;
