import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView} from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);
const GMScreen = () => (
  <SafeAreaView style={styles.container}>
   <ScrollView style={styles.scrollView}>
    <View>
      <Text style={styles.title}>
I have visited Niagara Falls last weekend.
      </Text>
      <Button
        title="WRONG"/>
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
      	I visited Niagara Falls last weekend.
      </Text>
      <Button
        title="RIGHT"
        color="#f194ff"
      />
    </View>
    <Separator />
    <View> <Text style={styles.title}> The woman which works here is from Japan.</Text>
      <Button title="WRONG"/> </View>
    <Separator />
    
  <View>
      <Text style={styles.title}>
      The woman who works here is from Japan.

      </Text>
      <Button
        title="RIGHT"
        color="#f194ff"
      />
    </View>
    <Separator />
    
    <View>
      <Text style={styles.title}>
       	She’s married with a dentist.
      </Text>
      <Button
        title="WRONG"/>
    </View>
    <Separator />
    
     <View>
      <Text style={styles.title}>
     	She’s married to a dentist.
      </Text>
      <Button
        title="RIGHT"
        color="#f194ff"
      />
    </View>
    <View>
      <Text style={styles.title}>
       
She was boring in the class.
      </Text>
      <Button
        title="WRONG"/>
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
      	She was bored in the class.
      </Text>
      <Button
        title="RIGHT"
        color="#f194ff"
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        I must to call him immediately.
      </Text>
      <Button
        title="WRONG"/>
    </View>
    <Separator />
  <View>
      <Text style={styles.title}>
     I must call him immediately.
      </Text>
      <Button
        title="RIGHT"
        color="#f194ff"
      />
    </View>
    <Separator />
    
    <View>
      <Text style={styles.title}>
       	Every students like the teacher.
      </Text>
      <Button
        title="WRONG"/>
    </View>
    <Separator />
    
     <View>
      <Text style={styles.title}>
      Every student likes the teacher.

      </Text>
      <Button
        title="RIGHT"
        color="#f194ff"
      />
    </View>
    <Separator />
    
    
    <View>
      <Text style={styles.title}>
        Although it was raining, but we had the picnic.
      </Text>
      <Button
        title="WRONG"/>
    </View>
    <Separator />
    
     <View>
      <Text style={styles.title}>
     	Although it was raining, we had the picnic.
      </Text>
      <Button
        title="RIGHT"
        color="#f194ff"
      />
    </View>
    <Separator />
     
    
    <View>
      <Text style={styles.title}>
        	I enjoyed from the movie.
      </Text>
      <Button
        title="WRONG"/>
    </View>
    <Separator />
    
     <View>
      <Text style={styles.title}>
     I enjoyed the movie.
      </Text>
      <Button
        title="RIGHT"
        color="#f194ff"
      />
    </View>
    <Separator />
    
    <View>
      <Text style={styles.title}>
        	I look forward to meet you.
      </Text>
      <Button
        title="WRONG"/>
    </View>
    <Separator />
    
     <View>
      <Text style={styles.title}>
     I look forward to meeting you.
      </Text>
      <Button
        title="RIGHT"
        color="#f194ff"
      />
    </View>
    <Separator />
    
    <View>
      <Text style={styles.title}>
       	I like very much ice cream.
      </Text>
      <Button
        title="WRONG"/>
    </View>
    <Separator />
    
     <View>
      <Text style={styles.title}>
      I like ice cream very much.
      </Text>
      <Button
        title="RIGHT"
        color="#f194ff"
      />
    </View>
    <Separator />
    </ScrollView>
    
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 20,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
    scrollView: {
    backgroundColor: '#4787',
  },
});

export default GMScreen;
