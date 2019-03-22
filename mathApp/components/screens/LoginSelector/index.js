import React, {Component} from 'react';
import {View, Text, AlertIOS, TextInput, TouchableHighlight} from 'react-native';
import _ from 'lodash';
import importedStyles from './styles';
import {db, dbAuth} from '../../../App/App.js';




const styles = _.cloneDeep(importedStyles);

let addUser = (name, pass, grade, id) => {
	db.ref('/Teacher-2/Class-1/Student-3/').set({
	"Profile" : {	
		"Grade": grade,
		"ID": id,
		"Name": name,
		"Password": pass
	},
	"Records" : {
		"Act-1" : {
			"Easy" : 0,
			"Hard" : 0,
			"Normal" : 0,
			"Very-Easy" : 0,
			"Very-Hard" : 0
		},
		"Act-2" : {
			"Easy" : 0,
			"Hard" : 0,
			"Normal" : 0,
			"Very-Easy" : 0,
			"Very-Hard" : 0
		},
		"Act-3" : {
			"Easy" : 0,
			"Hard" : 0,
			"Normal" : 0,
			"Very-Easy" : 0,
			"Very-Hard" : 0
		},
		"Act-4" : {
			"Easy" : 0,
			"Hard" : 0,
			"Normal" : 0,
			"Very-Easy" : 0,
			"Very-Hard" : 0
		},
		"Act-5" : {
			"Easy" : 0,
			"Hard" : 0,
			"Normal" : 0,
			"Very-Easy" : 0,
			"Very-Hard" : 0
		},
		"Act-6" : {
			"Easy" : 0,
			"Hard" : 0,
			"Normal" : 0,
			"Very-Easy" : 0,
			"Very-Hard" : 0
		},
		"Act-7" : {
			"Easy" : 0,
			"Hard" : 0,
			"Normal" : 0,
			"Very-Easy" : 0,
			"Very-Hard" : 0
		},
		"Act-8" : {
			"Easy" : 0,
			"Hard" : 0,
			"Normal" : 0,
			"Very-Easy" : 0,
			"Very-Hard" : 0
		}
	}
	});
};
let test = (email, pass) => {
	{/*dbAuth.createUserWithEmailAndPassword("test@uwo.ca", "tester").catch(function(error) {
		var errorCode = error.code;
		console.log("Hey I'm printing");
		console.log(errorCode);
		var errorMessage = error.message;
		console.log("Hey I'm printing2");
		console.log(errorMessage);
	});*/}
	console.log(email);
	console.log(this.email);
};


//In progresss
let pullUser = () => {
	db.ref('teachers/').pull({

	});
};

export default class LoginSelector extends Component {

	state = {
		name: '',
		pass: '',
		grade: '',
		id: '',
		email: '',

		pullName: '',
		pullPass: '',
		pullGrade: '',
		
	};

	handleNameChange = e => {
		this.setState({
			name: e.nativeEvent.text,
		});
	};

	handlePassChange = e => {
		this.setState({
			pass: e.nativeEvent.text,
		});
	};

	handleGradeChange = e => {
		this.setState({
			grade: e.nativeEvent.text,
		});
	};

	handleIDChange = e => {
		this.setState({
			id: e.nativeEvent.text,
		});
	};

	handleEmailChange = e => {
		this.setState({
			email: e.nativeEvent.text,

		});
	};

	handleSubmit = () => {
		{/*addUser(this.state.name, this.state.pass, this.state.grade, this.state.id);*/}
		
		console.log(this.email);
		test(this.email, this.password);
	
	};

	handlePullSubmit = (e) => {
		pullUser();
	};

    render() {

        return(
            <View
                style={styles.root}
            >
            <Text> Enter email</Text>
            <TextInput onChange={this.handleEmailChange} />

            <Text> Enter Password </Text>
            <TextInput secureTextEntry={true} onChange={this.handlePassChange} />
            
            <Text> Grade </Text>
            <TextInput onChange={this.handleGradeChange} />

            <Text> Student ID </Text>
            <TextInput onChange={this.handleIDChange} />


            <TouchableHighlight
            	onPress={this.handleSubmit}
            >
            <Text>Add</Text>
            </TouchableHighlight> 

            <Text> </Text>




            </View>
        );
    }
}