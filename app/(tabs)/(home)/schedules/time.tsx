import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { router } from "expo-router";
import { ChevronLeft, Clock, Gem, Plus } from "lucide-react-native";
import TimePickerModal from "@/components/TimeSlider";

const TimeCondition = () => {
  // Get current day (0 = Sunday, 1 = Monday, etc.)
  const getCurrentDayIndex = () => {
    const dayIndex = new Date().getDay();
    // Map day index to our day values
    const dayMap: { [key: number]: string } = {
      0: "S1", // Sunday
      1: "M", // Monday
      2: "T1", // Tuesday
      3: "W", // Wednesday
      4: "T", // Thursday
      5: "F", // Friday
      6: "S2", // Saturday
    };
    return dayMap[dayIndex];
  };

  const [selectedDay, setSelectedDay] = useState(getCurrentDayIndex());
  const [allDayLong, setAllDayLong] = useState(false);
  const [startTime, setStartTime] = useState("8:00 AM");
  const [endTime, setEndTime] = useState("2:00 AM");
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [currentTimeEditing, setCurrentTimeEditing] = useState("start"); // 'start' or 'end'

  const days = [
    { label: "S", value: "S1" }, // Sunday
    { label: "M", value: "M" }, // Monday
    { label: "T", value: "T1" }, // Tuesday
    { label: "W", value: "W" }, // Wednesday
    { label: "T", value: "T" }, // Thursday
    { label: "F", value: "F" }, // Friday
    { label: "S", value: "S2" }, // Saturday
  ];

  const handleDaySelect = (dayValue: string) => {
    setSelectedDay(dayValue);
  };

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    // Save all information and log to console
    const conditionData = {
      day: selectedDay,
      dayLabel: days.find((d) => d.value === selectedDay)?.label,
      allDayLong,
      startTime: allDayLong ? null : startTime,
      endTime: allDayLong ? null : endTime,
      timestamp: new Date().toISOString(),
    };

    console.log("Condition Data:", conditionData);
  };

  const openTimePicker = (type: "start" | "end") => {
    setCurrentTimeEditing(type);
    setShowTimePicker(true);
  };

  const handleTimeSelected = (time: string) => {
    if (currentTimeEditing === "start") {
      setStartTime(time);
    } else {
      setEndTime(time);
    }
    setShowTimePicker(false);
  };

  // Parse time string like "8:00 AM" to get hour, minute and period
  interface ParsedTime {
    hour: number;
    minute: number;
    period: string;
  }

  const parseTimeString = (timeString: string): ParsedTime => {
    const [time, period] = timeString.split(" ");
    const [hour, minute] = time.split(":");
    return {
      hour: parseInt(hour),
      minute: parseInt(minute),
      period,
    };
  };

  // Get initial time values for the time picker
  const getInitialTimeValues = () => {
    const timeString = currentTimeEditing === "start" ? startTime : endTime;
    return parseTimeString(timeString);
  };

  // Get the day name for the display
  const getDayName = () => {
    const dayMap: { [key in typeof selectedDay]: string } = {
      S1: "Sunday",
      M: "Monday",
      T1: "Tuesday",
      W: "Wednesday",
      T: "Thursday",
      F: "Friday",
      S2: "Saturday",
    };
    return `Every ${dayMap[selectedDay]}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <ChevronLeft size={24} color="#007AFF" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Condition</Text>

        <TouchableOpacity onPress={handleContinue}>
          <Text style={styles.continueButton}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Days Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Days</Text>
          <Text style={styles.sectionSubtitle}>{getDayName()}</Text>
        </View>

        <View style={styles.daysContainer}>
          <View style={styles.daysRow}>
            {days.map((day) => (
              <TouchableOpacity
                key={day.value}
                style={[
                  styles.dayButton,
                  selectedDay === day.value && styles.selectedDayButton,
                ]}
                onPress={() => handleDaySelect(day.value)}
              >
                <Text
                  style={[
                    styles.dayButtonText,
                    selectedDay === day.value && styles.selectedDayButtonText,
                  ]}
                >
                  {day.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.premiumButton}>
            <Text style={styles.premiumButtonText}>Multiple days</Text>
            <View style={styles.premiumIcon}>
              <Gem size={18} color="#FF9500" />
              <Text style={styles.premiumText}>Premium</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Time Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Time</Text>
        </View>

        <View style={styles.timeContainer}>
          <View style={styles.allDayRow}>
            <View style={styles.allDayLeft}>
              <Clock size={24} color="#999" />
              <Text style={styles.allDayText}>All day long</Text>
            </View>
            <Switch
              value={allDayLong}
              onValueChange={setAllDayLong}
              trackColor={{ false: "#E5E5EA", true: "#E5E5EA" }}
              thumbColor={allDayLong ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#E5E5EA"
            />
          </View>

          <View style={styles.separator} />

          {!allDayLong && (
            <View style={styles.timePickerContainer}>
              <View style={styles.clockIconContainer}>
                <Clock size={24} color="#000" />
              </View>
              <View style={styles.timePicker}>
                <TouchableOpacity
                  style={styles.timeBox}
                  onPress={() => openTimePicker("start")}
                >
                  <Text style={styles.timeText}>{startTime}</Text>
                </TouchableOpacity>
                <Text style={styles.timeSeperator}>—</Text>
                <TouchableOpacity
                  style={styles.timeBox}
                  onPress={() => openTimePicker("end")}
                >
                  <Text style={styles.timeText}>{endTime}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Plus size={20} color="#007AFF" />
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>

      {/* Time Picker Modal */}
      {showTimePicker && (
        <TimePickerModal
          visible={showTimePicker}
          onClose={() => setShowTimePicker(false)}
          onTimeSelected={handleTimeSelected}
          initialHour={getInitialTimeValues().hour}
          initialMinute={getInitialTimeValues().minute}
          title={`Select ${
            currentTimeEditing === "start" ? "Start" : "End"
          } Time`}
        />
      )}
    </SafeAreaView>
  );
};

export default TimeCondition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 17,
    color: "#007AFF",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "600",
  },
  continueButton: {
    fontSize: 17,
    color: "#007AFF",
  },
  section: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#8E8E93",
  },
  daysContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
  },
  daysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  dayButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F2F2F7",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedDayButton: {
    backgroundColor: "#007AFF",
  },
  dayButtonText: {
    fontSize: 16,
    color: "#8E8E93",
  },
  selectedDayButtonText: {
    color: "white",
  },
  premiumButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5EA",
    borderRadius: 20,
    borderStyle: "dashed",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  premiumButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  premiumIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  premiumIconText: {
    fontSize: 16,
    color: "#FF9500",
    marginRight: 4,
  },
  premiumText: {
    fontSize: 16,
    color: "#FF9500",
  },
  timeContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
  },
  allDayRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  allDayLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  allDayText: {
    fontSize: 17,
    color: "#8E8E93",
    marginLeft: 12,
  },
  separator: {
    height: 1,
    backgroundColor: "#E5E5EA",
    marginVertical: 16,
  },
  timePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  clockIconContainer: {
    marginRight: 12,
  },
  timePicker: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  timeBox: {
    backgroundColor: "#F2F2F7",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  timeText: {
    fontSize: 17,
    color: "#007AFF",
  },
  timeSeperator: {
    marginHorizontal: 12,
    fontSize: 17,
    color: "#8E8E93",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginLeft: 16,
    marginTop: 20,
  },
  addButtonText: {
    fontSize: 17,
    color: "#007AFF",
    marginLeft: 8,
  },
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
    maxHeight: "70%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: "600",
  },
  modalCloseButton: {
    fontSize: 17,
    color: "#007AFF",
  },
  timeListContainer: {
    maxHeight: 300,
  },
  timeOption: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
  },
  timeOptionText: {
    fontSize: 17,
  },
  selectedTimeText: {
    color: "#007AFF",
    fontWeight: "500",
  },
});
