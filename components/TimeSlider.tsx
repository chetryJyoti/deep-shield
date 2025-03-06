import React, { useState } from "react";
import { StyleSheet, View, Modal, TouchableOpacity, Text } from "react-native";
import { TimerPicker } from "react-native-timer-picker";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";

interface TimePickerModalProps {
  visible: boolean;
  onClose: () => void;
  onTimeSelected: (time: string) => void;
  initialHour?: number;
  initialMinute?: number;
  initialPeriod?: "AM" | "PM";
  title?: string;
}

const TimePickerModal: React.FC<TimePickerModalProps> = ({
  visible,
  onClose,
  onTimeSelected,
  initialHour = 8,
  initialMinute = 0,
  initialPeriod = "AM",
  title = "Select Time",
}) => {
  const handleConfirm = (pickedTime: {
    hours: number;
    minutes: number;
  }): void => {
    // Format time as "8:00 AM" style ßstring
    const hour =
      pickedTime.hours === 0
        ? 12
        : pickedTime.hours > 12
        ? pickedTime.hours - 12
        : pickedTime.hours;
    const minute =
      pickedTime.minutes < 10 ? `0${pickedTime.minutes}` : pickedTime.minutes;
    const period = pickedTime.hours >= 12 ? "PM" : "AM";

    const formattedTime = `${hour}:${minute} ${period}`;
    onTimeSelected(formattedTime);
  };

  // Convert hh:mm AM/PM to hours and minutes for the picker
  const parseInitialTime = () => {
    let hours = initialHour;
    if (initialPeriod === "PM" && hours < 12) {
      hours += 12;
    } else if (initialPeriod === "AM" && hours === 12) {
      hours = 0;
    }
    return {
      hours,
      minutes: initialMinute,
    };
  };

  const [selectedTime, setSelectedTime] = useState(parseInitialTime());

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.cancelButton}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  handleConfirm(selectedTime);
                  onClose();
                }}
              >
                <Text style={styles.confirmButton}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.pickerContainer}>
            <TimerPicker
              padWithNItems={3}
              use12HourPicker
              hideSeconds
              minuteLabel="min"
              LinearGradient={LinearGradient}
              Haptics={Haptics}
              styles={{
                theme: "light",
                pickerItem: {
                  fontSize: 34,
                },
                pickerLabel: {
                  fontSize: 26,
                  right: -20,
                },
                pickerLabelContainer: {
                  width: 60,
                },
                pickerItemContainer: {
                  width: 150,
                },
              }}
              initialValue={parseInitialTime()}
              onDurationChange={(time) => setSelectedTime(time)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingBottom: 30,
  },
  modalHeader: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    fontSize: 17,
    color: "#007AFF",
  },
  confirmButton: {
    fontSize: 17,
    color: "#007AFF",
    fontWeight: "600",
  },
  pickerContainer: {
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default TimePickerModal;
