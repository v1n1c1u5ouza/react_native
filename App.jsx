import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  } from 'react-native';

class App extends Component{
  
      constructor(props){
        super(props);
        this.state = {
          phraseText: '',
          img: require('./src/biscoito.png'),
        };
  
        this.breakBiscuit = this.breakBiscuit.bind(this);
  
        this.phrase = [
          'Siga os bons e aprenda com eles.', 
          'O bom-senso vale mais do que muito conhecimento.', 
          'O riso é a menor distância entre duas pessoas.', 
          'Deixe de lado as preocupações e seja feliz.',
          'Realize o óbvio, pense no improvável e conquiste o impossível.',
          'Acredite em milagres, mas não dependa deles.',
          'A maior barreira para o sucesso é o medo do fracasso.'
        ];
      }

      breakBiscuit(){
        let randNum = Math.floor(Math.random() * this.phrase.length);

        this.setState({
          phraseText: ' "' + this.phrase[randNum] + '" ',
          img: require('./src/biscoitoAberto.png')
        });
      }
    
      render(){
        return(
          <View style={styles.container} > 
          
          <Image
            source={this.state.img}
            style={styles.img}
          />
    
          <Text style={styles.phraseText}>{this.state.phraseText}</Text>
    
          <TouchableOpacity style={styles.button} onPress={this.breakBiscuit}>
            <View style={styles.btnArea}>
              <Text style={styles.btnPhrase}>Quebrar Biscoito</Text>
            </View>
          </TouchableOpacity> 
    
          </View>    
       );
   }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250,
  },
  phraseText:{
    fontSize: 20,
    color: '#fff',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button:{
    width: 230,
    height: 50, 
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 25 
  },
  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnPhrase:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default App;