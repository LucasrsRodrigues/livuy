import { useEffect, useState } from "react";
import { Box, HStack, ScrollView, Text, VStack } from "native-base";
import PagerView from "react-native-pager-view";
import { GLOBAL, VARIABLES } from "@themes/variables";

import {
  addDays,
  eachDayOfInterval,
  eachWeekOfInterval,
  format,
  getDay,
  getMonth,
  isEqual,
  startOfWeek,
  subDays,
} from "date-fns";

import CalendarIcon from "@assets/icons/calendar.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getArrayDate } from "@utils/getArrayDate";

export function WeekSlider() {
  const [daysOfWeek, setDaysOfWeek] = useState<Array<Date>>([]);

  useEffect(() => {
    const arrayData = getArrayDate();

    setDaysOfWeek(arrayData);
  }, []);

  return (
    <VStack space={2} mt={2}>
      <HStack paddingX={VARIABLES.paddingHorizontal}>
        <CalendarIcon fill={GLOBAL.grayscale_100} />
        <Text
          fontSize={12}
          fontWeight={500}
          color={GLOBAL.grayscale_100}
          ml={2}
        >
          {format(new Date(), "MMM dd, yyyy")}
        </Text>
      </HStack>

      <ScrollView
        horizontal
        _contentContainerStyle={{
          justifyContent: "space-between",
          flex: 1,
          px: VARIABLES.paddingHorizontal,
        }}
      >
        {daysOfWeek.map((item, index) => {
          const txt = format(item, "EE");

          return (
            <Box alignItems="center" key={index} p={2}>
              <Text fontSize={12} fontWeight={400} color={GLOBAL.grayscale_40}>
                {txt}
              </Text>
              <Text
                fontSize={12}
                fontWeight={500}
                mt={1}
                color={GLOBAL.grayscale_100}
              >
                {format(item, "d")}
              </Text>
            </Box>
          );
        })}
      </ScrollView>
    </VStack>
  );
}
