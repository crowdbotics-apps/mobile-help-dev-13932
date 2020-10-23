import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_6: "",
    TextInput_8: "",
    DateTimePicker_10: new Date(""),
    Switch_12: true,
    CheckBox_14: true,
    CheckBox_16: true
  }

  render = () => (
    <View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_6}
        onChangeText={nextValue => this.setState({ TextInput_6: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        value={this.state.TextInput_8}
        onChangeText={nextValue => this.setState({ TextInput_8: nextValue })}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_10}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_10: selectedDate })
        }
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        value={this.state.Switch_12}
        onValueChange={nextChecked => this.setState({ Switch_12: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_14}
        onPress={nextChecked => this.setState({ CheckBox_14: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_16}
        onPress={nextChecked => this.setState({ CheckBox_16: nextChecked })}
      />
      <Slider value={50} minimumValue={0} maximumValue={100} />
      <Icon name="star" />
      <Image
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/photo-1503023345310-bd7c1de61c7d_ugjymYf.jpg"
        }}
        style={styles.Image_24}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Button_2: {},
  Text_4: {},
  TextInput_6: {},
  TextInput_8: {},
  DateTimePicker_10: {},
  Switch_12: {},
  CheckBox_14: {},
  CheckBox_16: {},
  Slider_19: {},
  Icon_22: {},
  Image_24: { width: 750 }
})
