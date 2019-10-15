import React from "react";
import { ScrollView } from "react-native";
import { ListItemModal } from "../../common/ListItem";

export function SelectYear(props) {
  return (
    <>
      <ScrollView>
        <ListItemModal name="2020" onPress={() => props.click("2020")} />
        <ListItemModal name="2019" onPress={() => props.click("2019")} />
        <ListItemModal name="2018" onPress={() => props.click("2018")} />
        <ListItemModal name="2017" onPress={() => props.click("2017")} />
        <ListItemModal name="2016" onPress={() => props.click("2016")} />
        <ListItemModal name="2015" onPress={() => props.click("2015")} />
        <ListItemModal name="2014" onPress={() => props.click("2014")} />
        <ListItemModal name="2013" onPress={() => props.click("2013")} />
        <ListItemModal name="2012" onPress={() => props.click("2012")} />
        <ListItemModal name="2011" onPress={() => props.click("2011")} />
        <ListItemModal name="2010" onPress={() => props.click("2010")} />
        <ListItemModal name="2009" onPress={() => props.click("2009")} />
        <ListItemModal name="2008" onPress={() => props.click("2008")} />
        <ListItemModal name="2007" onPress={() => props.click("2007")} />
        <ListItemModal name="2006" onPress={() => props.click("2006")} />
        <ListItemModal name="2005" onPress={() => props.click("2005")} />
        <ListItemModal name="2004" onPress={() => props.click("2004")} />
        <ListItemModal name="2003" onPress={() => props.click("2003")} />
        <ListItemModal name="2002" onPress={() => props.click("2002")} />
        <ListItemModal name="2001" onPress={() => props.click("2001")} />
        <ListItemModal name="2000" onPress={() => props.click("2000")} />
        <ListItemModal name="1999" onPress={() => props.click("1999")} />
        <ListItemModal name="1998" onPress={() => props.click("1998")} />
        <ListItemModal name="1997" onPress={() => props.click("1997")} />
        <ListItemModal name="1996" onPress={() => props.click("1996")} />
        <ListItemModal name="1995" onPress={() => props.click("1995")} />
        <ListItemModal name="1994" onPress={() => props.click("1994")} />
        <ListItemModal name="1993" onPress={() => props.click("1993")} />
        <ListItemModal name="1992" onPress={() => props.click("1992")} />
      </ScrollView>
    </>
  );
}
