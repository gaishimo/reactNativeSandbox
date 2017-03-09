import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
  TextInput,
  TouchableOpacity,
  Button,
  Modal,
} from 'react-native';
import moment from 'moment'

const styles = StyleSheet.create({
  date: {
    borderWidth: 1,
    borderColor: 'rgb(200, 200, 200)',
  },
  dateText: {
    textAlign: 'center',
    fontSize: 20,
  },
  datepicker: {
    flex: 1,
    marginTop: 100,
  },
  dateActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
  },
})


export default class Datepicker extends Component {
  static defaultProps = {
    date: moment('1980-01-01').toDate(),
  }

  state = {
    date: this.props.date,
    tmpDate: this.props.date,
    selecting: false,
  }

  onDateChange = (date) => {
    this.setState({ tmpDate: date })
  }

  onStartSelecting = () => {
    this.setState({ selecting: true })
  }
  
  onSelectDate = () => {
    this.setState({ date: this.state.tmpDate, selecting: false })
  }
  
  onCancel = () => {
    this.setState({ tmpDate: this.state.date, selecting: false })
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => { this.onStartSelecting() }}>
          <View style={styles.date}>
            <Text style={styles.dateText}>
              {moment(this.state.date).format('YYYY/MM/DD')}
            </Text>
          </View>
        </TouchableOpacity>
          <Modal
            transparent={false}
            visible={this.state.selecting}
            style={styles.modal}
          >
            <View style={styles.datepicker}>
              <DatePickerIOS
                date={this.state.tmpDate}
                mode="date"
                minimumDate={moment('1900-01-01').toDate()}
                maximumDate={new Date()}
                onDateChange={this.onDateChange}
              />
            </View>
            <View style={styles.dateActions}>
              <Button title="OK" onPress={() => { this.onSelectDate() }} />
              <Button title="Cancel" onPress={() => { this.onCancel() }} />
            </View>
          </Modal>
      </View>
    )
  }
}