import React, {Component} from 'react';
import {
  Icon,
  CheckBox,
  Container,
  Header,
  Button,
  Footer,
  Body,
  Title,
  FooterTab,
} from 'native-base';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export default class todolist extends Component {
  constructor() {
    super();
    this.state = {
      inputList: '',
      updateId: 0,
      btnValue: true,
      data: [{id: 1, title: 'work', checked: false}],
    };
  }

  Item = ({id, title, onDelete, checked, onUpdate, onChecked}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => onUpdate(id)}>
          <Icon type="FontAwesome" name="edit" style={styles.iconEdit} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onDelete(id)}>
          <Icon type="FontAwesome" name="trash" style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  };
  handleBtn = () => {
    if (!this.state.inputList) {
      return;
    }
    const data = this.state.data;
    if (this.state.btnValue === true) {
      const dataId = data.length + 1;
      const inputList = {
        id: dataId,
        title: this.state.inputList,
      };
      data.push(inputList);
      this.setState({data, inputList: ''});
      this.empty.clear();
    } else {
      data.map(item => {
        if (this.state.updateId === item.id) {
          item.title = this.state.inputList;
        }
        return item;
      });
      this.setState({
        data,
        btnValue: true,
      });
    }
    this.empty.clear();
  };

  handdleRemove = id => {
    const data = this.state.data;
    const newData = data.filter(dataref => dataref.id !== id);
    this.setState({
      data: newData,
    });
  };

  handleUpdate = id => {
    const data = this.state.data;
    data.map(item => {
      if (id === item.id) {
        this.setState({btnValue: false, inputList: item.title, updateId: id});
      }
      return item;
    });
  };

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#111212'}}>
          <Body style={{alignItems: 'center'}}>
            <Title style={{color: 'white', letterSpacing: 5.0}}>Todolist</Title>
          </Body>
        </Header>
        <View style={styles.container}>
          <View style={styles.addList}>
            <TextInput
              placeholder="Input List"
              onChangeText={inputList => this.setState({inputList})}
              style={styles.textInput}
              ref={ref => (this.empty = ref)}
              value={this.state.inputList}
            />

            <TouchableHighlight onPress={this.handleBtn} style={styles.button}>
              <Text style={styles.btnText}>
                {this.state.btnValue ? 'Add' : 'Edit'}
              </Text>
            </TouchableHighlight>
          </View>

          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <this.Item
                title={item.title}
                id={item.id}
                edit={item.btnValue}
                checked={item.checked}
                onUpdate={this.handleUpdate}
                onDelete={this.handdleRemove}
              />
            )}
            keyExtractor={item => item.id}>
            {' '}
            >
          </FlatList>
        </View>
        <Footer>
          <FooterTab style={{backgroundColor: '#111212'}}>
            <Button vertical>
              <Icon style={{color: 'white'}} name="camera" />
              <Text style={{color: 'white'}}>Camera</Text>
            </Button>
            <Button vertical>
              <Icon style={{color: 'white'}} name="apps" />
              <Text style={{color: 'white'}}>TodoList</Text>
            </Button>
            <Button vertical>
              <Icon style={{color: 'white'}} name="person" />
              <Text style={{color: 'white'}}>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  addList: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginVertical: 15,
    marginRight: 10,
    flex: 20,
    height: 45,
    alignItems: 'center',
    padding: 10,
  },
  btnText: {
    fontSize: 18,
    color: 'white',
  },
  item: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#c1cbdb',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  icon: {
    flex: 10,
    color: 'red',
  },
  iconEdit: {
    marginRight: 10,
    color: 'green',
  },
  title: {
    marginLeft: 20,
    flex: 90,
    fontSize: 14,
  },
  textInput: {
    maxHeight: 45,
    flex: 80,
    borderRadius: 10,
    backgroundColor: '#e1e7f0',
    padding: 10,
    marginVertical: 15,
    marginHorizontal: 10,
  },
});
